import React, { useState, useEffect } from 'react';
import { Badge, Box, Button, Grid, Rating, Typography, CircularProgress, Checkbox } from '@mui/material';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { addItem, increaseQuantity, decreaseQuantity } from '../../redux/cart/cartSlice';
import { addToWishlist , removeFromWishlist } from '../../redux/wishlist/wishlistSlice';

const buttonStyle = {
    p: 0.1,
    boxShadow: '0 0 10px #eee',
    cursor: 'pointer',
};

const ProductDetails = ({ onClose, product, cartDrawer }) => {
    const productData = product?.product;
    const [expanded, setExpanded] = useState(false);
    const [selectedVariation, setSelectedVariation] = useState(product?.variation ? product?.variation : product?.product?.variations[0]);
    const [variation, setVariation] = useState(product?.product?.variations[0]);
    const [loading, setLoading] = useState(false);
    const [basePrice, setBasePrice] = useState(productData?.variations[0]?.price);
    const [price, setPrice] = useState(basePrice);
    const [localQuantity, setLocalQuantity] = useState(1);
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const isProductInWishlist = wishlistItems?.find(item => item?.product?.product?._id === productData?._id)?.isInWishlist;
    console.log(wishlistItems , isProductInWishlist);
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const productInCart = cartItems.find(item => item.id === productData?._id && item.variation?._id === variation?._id);
        if (productInCart) {
            setLocalQuantity(productInCart.quantity);
            setPrice(basePrice * productInCart.quantity);
        } else {
            setLocalQuantity(1);
            setPrice(basePrice);
        }
    }, [cartItems, productData, basePrice, variation]);

    const isInCart = () => {
        const productInCart = cartItems.find(item => item.id === productData._id && item.variation?._id === variation?._id);
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
            console.log({
                variation: variation
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

    const increaseCartItem = () => {
        dispatch(increaseQuantity({ id: productData._id, variationId: variation._id }));
        const newQuantity = isInCart() + 1;
        setPrice(basePrice * newQuantity);
    };

    const decreaseCartItem = () => {
        const productInCart = cartItems.find(item => item.id === productData._id && item.variation._id === variation._id);
        if (productInCart && productInCart.quantity > 1) {
            dispatch(decreaseQuantity({ id: productData._id, variationId: variation._id }));
            const newQuantity = isInCart() - 1;
            setPrice(basePrice * newQuantity);
        } else {
            dispatch(decreaseQuantity({ id: productData._id, variationId: variation._id }));
        }
    };

    const handleVariationClick = (index = 0, id) => {
        const selectedVariation = productData.variations ? productData.variations.find(item => id === item._id) : productData.variations.find((item, idx) => index === idx);
        console.log(selectedVariation);
        setSelectedVariation(selectedVariation);
        setVariation(selectedVariation);
        setBasePrice(selectedVariation.price);
        setPrice(selectedVariation.price * localQuantity);
    };

    const handleWishlist = () => {
        if (isProductInWishlist) {
          const index = wishlistItems.findIndex(item => item.product.id === product.id);
          dispatch(removeFromWishlist(index));
        } else {
          dispatch(addToWishlist({ product }));
        }
      };

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
                <Grid item xs={12} sx={{ borderRadius: 2, backgroundColor: '#eee', textAlign: 'center' }}>
                    <img width="80%" src={productData.image} alt="Product" />
                    <Checkbox onChange={handleWishlist} checked={isProductInWishlist} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
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
                    <Grid item xs={6} md={4} key={index}>
                        <Box
                            textAlign='center'
                            borderRadius={5}
                            p={1}
                            border={`2px solid ${selectedVariation?._id === item._id ? 'blue' : 'gray'}`}
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
                    <RemoveOutlinedIcon sx={buttonStyle} onClick={() => isInCart() > 0 ? decreaseCartItem() : decreaseLocalQuantity()} />
                    <Typography>{isInCart() > 0 ? isInCart() : localQuantity}</Typography>
                    <AddOutlinedIcon sx={buttonStyle} onClick={() => isInCart() > 0 ? increaseCartItem() : increaseLocalQuantity()} />
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
        </Box>
    );
};

export default ProductDetails;
