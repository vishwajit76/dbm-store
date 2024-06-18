import React from 'react';
import { Box, Button, Container, Grid, Typography, Divider } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import emptyCart from '../image/emptyCart.png';
import 'react-toastify/dist/ReactToastify.css';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../../redux/cart/cartSlice';

const buttonStyle = {
    p: 0.1,
    boxShadow: '0 0 10px #eee',
    cursor: 'pointer',
};

export default function Cart({ onClose, onClick }) {
    const cartData = useSelector(state => state.cart.items);
    const subtotal = useSelector(state => state.cart.subtotal);
    const couponCode = 'a5623d'
    const dispatch = useDispatch();

    const handleRemoveFromCart = (indexToRemove) => {
        dispatch(removeFromCart(indexToRemove));
        toast.info("Product removed from cart", {
            position: "bottom-left"
        });
    };

    const increaseCartItem = (id) => {
        dispatch(increaseQuantity({ id }));
    };

    const decreaseCartItem = (id, quantity) => {
        if (quantity <= 1) {
            toast.info("Product removed from cart", {
                position: "bottom-left"
            });
        } else {
            toast.warning("Product quantity decreased", {
                position: "bottom-left"
            });
        }
        dispatch(decreaseQuantity({ id }));
    };

    return (
        <div>
            <ToastContainer />
            <Box sx={{ width: { xs: 250, md: 350 }, p: 3 }}>
                <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                    <KeyboardBackspaceRoundedIcon
                        fontSize="large"
                        cursor="pointer"
                        onClick={onClose}
                    />
                    <Typography fontWeight={600}>Cart</Typography>
                </Grid>
                <Box height='43vh' overflow='auto'>
                    <Grid container>
                        {cartData.map((item, index) => (
                            <Grid
                                key={index}
                                container
                                sx={{ borderRadius: '15px' }}
                                p={1}
                                my={1}
                                boxShadow="0 0 10px #eee"
                                justifyContent="space-between"
                            >
                                <Grid item xs={2} container sx={{ borderRadius: '15px', backgroundColor: '#FBF5EC', alignItems: 'center', justifyContent: 'center' }}>
                                    <img width={50} height={50} src={item.image} alt="Product" />
                                </Grid>
                                <Grid item xs={8} container direction="column" justifyContent="space-between">
                                    <Typography>{item.name}</Typography>
                                    <Grid container alignItems="center">
                                        <Grid item xs={6}>
                                            <Typography fontWeight={600}>${(item.price * item.quantity).toFixed(2)}</Typography>
                                        </Grid>
                                        <Grid item xs={6} container alignItems="center" justifyContent="space-evenly">
                                            <RemoveOutlinedIcon sx={buttonStyle} onClick={() => decreaseCartItem(item.id, item.quantity)} />
                                            <Typography>{item.quantity}</Typography>
                                            <AddOutlinedIcon fontSize='small' sx={buttonStyle} onClick={() => increaseCartItem(item.id)} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={1} container justifyContent='end'>
                                    <CloseIcon cursor='pointer' fontSize='5px' onClick={() => handleRemoveFromCart(index)} />
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                {cartData.length === 0 && (
                    <Container sx={{ textAlign: 'center' }}><img src={emptyCart} alt='' width={240} />
                        <Typography variant='h4'>Cart is empty</Typography>
                        <Button variant='contained' sx={{ my: 2 }} href='#shop' onClick={onClose}>Continue Shopping</Button>
                    </Container>
                )}
            </Box>
            {cartData.length !== 0 && (
                <Box sx={{ backgroundColor: '#fff', position: 'fixed', bottom: 0, p: '20px 30px', width: { xs: 250, md: 350 }, boxShadow: '0 0 5px gray' }}>
                    <Grid container justifyContent='space-between' alignItems='center' my={2} p={1} border='2px solid black' borderRadius={2}>
                        <Box display='flex'>
                            <DiscountRoundedIcon /><Typography mx={2}>{couponCode.toUpperCase()}</Typography>
                        </Box>
                        <Button variant='outlined' color='black'>Apply</Button>
                    </Grid>
                    <Grid container alignItems="center">
                        <Grid item xs={12} container justifyContent='space-between'>
                            <Typography sx={{ color: '#818181de' }}>Subtotal</Typography>
                            <Typography>${(subtotal).toFixed(2)}</Typography>
                        </Grid>
                        <Grid item xs={12} container justifyContent='space-between'>
                            <Typography sx={{ color: '#818181de' }}>discount</Typography>
                            <Typography>10%</Typography>
                        </Grid>
                        <Grid item xs={12} container justifyContent='space-between'>
                            <Typography sx={{ color: '#818181de' }}>Delivery Cost</Typography>
                            <Typography color='green' sx={{ color: '#21E500' }}>FREE</Typography>
                        </Grid>
                        <Grid item xs={12}><Divider /></Grid>
                        <Grid item xs={12} container justifyContent='space-between'>
                            <Typography fontWeight={600}>Final Price</Typography>
                            <Typography fontWeight={600}>${(subtotal).toFixed(2) * 0.9}</Typography>
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        sx={{ color: '#fff', borderRadius: '10px', p: 1, mt: 2 }}
                        fullWidth
                        onClick={onClick}
                    >
                        Check Out Now
                    </Button>
                </Box>
            )}
        </div>
    );
}
