import React, { useState, useEffect } from 'react';
import {
    Badge, Box, Button, Grid, Rating, Typography, CircularProgress
} from '@mui/material';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, increaseQuantity, decreaseQuantity, cartProduct } from '../../redux/cart/cartSlice';

const buttonStyle = {
    p: 0.1,
    boxShadow: '0 0 10px #eee',
    cursor: 'pointer',
};

const ProductDetails = ({ onClose, product, cartDrawer }) => {
    const productData = product?.product
    const [expanded, setExpanded] = useState(false);
    const [selectedVariation, setSelectedVariation] = useState(0);
    const [variation, setVariation] = useState(productData?.variations[0])
    const [loading, setLoading] = useState(false); productData
    const [basePrice, setBasePrice] = useState(productData?.variations[0]?.price);
    const [price, setPrice] = useState(basePrice);
    const [localQuantity, setLocalQuantity] = useState(1);
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const productInCart = cartItems.find(item => item.id === productData?._id);
        if (productInCart) {
            setLocalQuantity(productInCart.quantity);
            setPrice(basePrice * productInCart.quantity);
        } else {
            setLocalQuantity(1);
            setPrice(basePrice);
        }
    }, [cartItems, productData, basePrice]);

    const isInCart = () => {
        const productInCart = cartItems.find(item => item.id === productData._id);
        return productInCart ? productInCart.quantity : 0;
    };

    if (!productData) {
        return null;
    }

    const toggleExpanded = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

    const addToCartHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            dispatch(addItem({
                product: productData,
                id: productData._id,
                name: productData.name,
                price: basePrice,
                rating: 5,
                image: productData.image,
                quantity: localQuantity,
                variation: variation
            }));
            toast.success("Product Added To Cart", {
                position: "bottom-left"
            });
        }, 500);
    };

    const increaseLocalQuantity = () => {
        setLocalQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            setPrice(basePrice * newQuantity);
            return newQuantity;
        });
    };

    const decreaseLocalQuantity = () => {
        setLocalQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                const newQuantity = prevQuantity - 1;
                setPrice(basePrice * newQuantity);
                return newQuantity;
            }
            return prevQuantity;
        });
    };

    const increaseCartItem = (id) => {
        dispatch(increaseQuantity({ id }));
        const newQuantity = isInCart() + 1;
        setPrice(basePrice * newQuantity);
    };

    const decreaseCartItem = (id) => {
        const productInCart = cartItems.find(item => item.id === productData._id);
        if (productInCart && productInCart.quantity > 1) {
            dispatch(decreaseQuantity({ id }));
            const newQuantity = isInCart() - 1;
            setPrice(basePrice * newQuantity);
        } else {
            dispatch(decreaseQuantity({ id }));
            toast.success("Product Removed From Cart", {
                position: "bottom-left"
            });
        }
    };

    const handleVariationClick = (index, id) => {
        const variation = productData.variations.find(item => id === item._id)
        setSelectedVariation(index);
        setVariation(variation)
        const selectedProduct = productData.variations.find((item, idx) => idx === index);
        setBasePrice(selectedProduct.price);
        setPrice(selectedProduct.price * localQuantity);
    }

    return (
        <Box sx={{ width: { xs: 250, md: 350 }, p: 2 }}>
            <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                <NavigateBeforeRoundedIcon
                    fontSize="large"
                    sx={{ cursor: 'pointer' }}
                    onClick={onClose}
                />
                <Typography fontWeight={600}>Product Detail</Typography>
                {cartDrawer}
            </Grid>

            <Box>
                <Badge badgeContent="NEW" color="primary" sx={{ ml: 2 }} />
                <Grid container alignItems="flex-end" spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={{ my: 1, fontWeight: 'bold' }}>
                            {productData.name}
                        </Typography>
                        <Grid container justifyContent="space-between">
                            <Rating readOnly value={5} />
                            <Typography>99+ Reviews</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4} justifyContent="end">
                        <Typography color='khaki' my={1}>price</Typography>
                        <Typography fontWeight='bold'>
                            ₹{productData.variations.reduce((min, variation) => Math.min(min, variation.price), Infinity)} -
                            ₹{productData.variations.reduce((max, variation) => Math.max(max, variation.price), -Infinity)}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid container my={5}>
                <Grid item xs={12} sx={{ borderRadius: 2, backgroundColor: '#eee', textAlign: 'center', p: 1 }}>
                    <img width="80%" src={productData.image} alt="Product" />
                </Grid>
            </Grid>

            <Box sx={{ my: 5 }}>
                <Typography fontWeight="bold">Descriptions</Typography>
                <Typography noWrap={!expanded}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos dolores numquam maiores mollitia quo debitis nam cupiditate magnam eos dolor assumenda molestias, quas quos sed nostrum veritatis corrupti consequatur. Autem, magni.
                </Typography>
                <Typography
                    onClick={toggleExpanded}
                    sx={{ cursor: 'pointer', color: '#1783FE', textDecoration: 'underline' }}
                >
                    {expanded ? 'Read less' : 'Read more'}
                </Typography>
            </Box>

            <Grid container spacing={2}>
                {productData.variations.map((item, index) => (
                    <Grid item xs={4} key={index}>
                        <Box
                            textAlign='center'
                            borderRadius={5}
                            p={1}
                            border={`2px solid ${selectedVariation === index ? 'blue' : 'gray'}`}
                            onClick={() => handleVariationClick(index, item._id)}
                            sx={{ cursor: 'pointer' }}
                        >
                            <Typography>{item.title}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Grid container my={2}>
                <Grid item xs={6}>
                    <Typography fontWeight={600}>₹{price}</Typography>
                </Grid>
                <Grid item xs={6} container alignItems="center" justifyContent="space-evenly">
                    <RemoveOutlinedIcon sx={buttonStyle} onClick={() => isInCart() > 0 ? decreaseCartItem(productData._id) : decreaseLocalQuantity()} />
                    <Typography>{isInCart() > 0 ? isInCart() : localQuantity}</Typography>
                    <AddOutlinedIcon sx={buttonStyle} onClick={() => isInCart() > 0 ? increaseCartItem(productData._id) : increaseLocalQuantity()} />
                </Grid>
            </Grid>

            <Button
                variant="contained"
                color="black"
                sx={{ color: '#fff', borderRadius: 2, p: 2 }}
                fullWidth
                disabled={isInCart() > 0}
                onClick={addToCartHandler}
            >
                {loading ? <CircularProgress size={24} color='inherit' /> : "Add to Cart"}
            </Button>

            <ToastContainer />
        </Box>
    );
};

export default ProductDetails;
