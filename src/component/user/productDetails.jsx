import React, { useState, useEffect } from 'react';
import {
    Badge, Box, Button, Grid, Rating, Typography, CircularProgress
} from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, increaseQuantity, decreaseQuantity } from '../../redux/cart/cartSlice';

const buttonStyle = {
    p: 0.1,
    boxShadow: '0 0 10px #eee',
    cursor: 'pointer',
};

const ProductDetails = ({ onClose, product, color, cartDrawer }) => {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [basePrice] = useState(product && product.store[product.store.length - 3].price);
    const [price, setPrice] = useState(basePrice);
    const [localQuantity, setLocalQuantity] = useState(1);
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const productInCart = cartItems.find(item => item.id === product?._id);
        if (productInCart) {
            setLocalQuantity(productInCart.quantity);
            setPrice(basePrice * productInCart.quantity);
        } else {
            setLocalQuantity(1);
            setPrice(basePrice);
        }
    }, [cartItems, product, basePrice]);

    const isInCart = () => {
        const productInCart = cartItems.find(item => item.id === product._id);
        return productInCart ? productInCart.quantity : 0;
    };

    if (!product) {
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
                id: product._id,
                name: product.name,
                price: basePrice,
                rating: 5,
                image: product.image,
                quantity: localQuantity
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
        const productInCart = cartItems.find(item => item.id === product._id);
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

    return (
        <Box sx={{ width: { xs: 250, md: 350 }, p: 2 }}>
            <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                <KeyboardBackspaceRoundedIcon
                    fontSize="large"
                    cursor="pointer"
                    onClick={onClose}
                />
                <Typography fontWeight={600}>Product Detail</Typography>
                {cartDrawer}
            </Grid>

            <Box>
                <Badge badgeContent="NEW" color="primary" sx={{ ml: 2 }} />
                <Grid container alignItems="flex-end">
                    <Grid item xs={8}>
                        <Typography sx={{ my: '10px', fontWeight: 'bold' }}>
                            {product.name}
                        </Typography>
                        <Grid container justifyContent="space-between">
                            <Rating readOnly value={5} />
                            <Typography>99+ Reviews</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            {/* <Grid
                container
                sx={{ borderRadius: '15px' }}
                p={2}
                my={5}
                boxShadow="0 0 10px #eee"
                justifyContent="space-between"
            >
                <Grid item xs={12} md={4} sx={{ borderRadius: '15px', backgroundColor: color, textAlign: 'center' }}>
                    <img width={100} height={100} src={product.image} alt="Product" />
                </Grid>
                <Grid item xs={12} md={7} container direction="column" justifyContent="space-between">
                    <Typography>{product.name}</Typography>
                    <Grid container alignItems="center">
                        <Grid item xs={6}>
                            <Typography sx={{ color: '#818181de' }}>Price</Typography>
                            <Typography fontWeight={600}>${price}</Typography>
                        </Grid>
                        <Grid item xs={6} container alignItems="center" justifyContent="space-evenly">
                            <RemoveOutlinedIcon fontSize='small' sx={buttonStyle} onClick={() => isInCart() > 0 ? decreaseCartItem(product._id) : decreaseLocalQuantity()} />
                            <Typography>{isInCart() > 0 ? isInCart() : localQuantity}</Typography>
                            <AddOutlinedIcon fontSize='small' sx={buttonStyle} onClick={() => isInCart() > 0 ? increaseCartItem(product._id) : increaseLocalQuantity()} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}

            <Grid container my={5}>
                <Grid item xs={12} sx={{ borderRadius: '15px', backgroundColor: color, textAlign: 'center', p: '7px 0' }}>
                    <img width="80%" src={product.image} alt="Product" />
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

            <Grid container my={2}>
                <Grid item xs={6}>
                    <Typography fontWeight={600}>${price}</Typography>
                </Grid>
                <Grid item xs={6} container alignItems="center" justifyContent="space-evenly">
                    <RemoveOutlinedIcon  sx={buttonStyle} onClick={() => isInCart() > 0 ? decreaseCartItem(product._id) : decreaseLocalQuantity()} />
                    <Typography>{isInCart() > 0 ? isInCart() : localQuantity}</Typography>
                    <AddOutlinedIcon sx={buttonStyle} onClick={() => isInCart() > 0 ? increaseCartItem(product._id) : increaseLocalQuantity()} />
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="black"
                sx={{ color: '#fff', borderRadius: '10px', p: 2 }}
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
