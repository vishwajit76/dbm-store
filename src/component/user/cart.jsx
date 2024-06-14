import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import the toastify CSS
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cart/cartSlice';

const buttonStyle = {
    p: 0.1,
    boxShadow: '0 0 10px #eee',
    cursor: 'pointer',
};

export default function Cart({ onClose, onClick }) {
    const cartData = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (indexToRemove) => {
        dispatch(removeFromCart(indexToRemove));
        toast.success("Product Removed From Cart", {
            position: "bottom-left"
        });
    };

    const increaseCartItem = (id) => {
        dispatch(increaseQuantity({ id }));
    };

    const decreaseCartItem = (id, quantity) => {
        if (quantity < 1) {
            toast.success("Product Removed From Cart", {
                position: "bottom-left"
            });
        }
        dispatch(decreaseQuantity({ id }));
    };

    return (
        <div>
            <ToastContainer /> {/* Ensure ToastContainer is placed here */}
            <Box sx={{ width: { xs: 250, md: 350 }, p: 3 }}>
                <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                    <KeyboardBackspaceRoundedIcon
                        fontSize="large"
                        cursor="pointer"
                        onClick={onClose}
                    />
                    <Typography fontWeight={600}>Cart</Typography>
                </Grid>
                {cartData.map((item, index) => (
                    <Grid
                        key={index}
                        container
                        sx={{ borderRadius: '15px' }}
                        p={2}
                        my={5}
                        boxShadow="0 0 10px #eee"
                        justifyContent="space-between"
                    >
                        <Grid item xs={4} sx={{ borderRadius: '15px', backgroundColor: '#FBF5EC', textAlign: 'center' }}>
                            <img width={80} height={80} src={item.image} alt="Product" />
                        </Grid>
                        <Grid item xs={6} container direction="column" justifyContent="space-between">
                            <Typography>{item.name}</Typography>
                            <Grid container alignItems="center">
                                <Grid item xs={6}>
                                    <Typography sx={{ color: '#818181de' }}>Price</Typography>
                                    <Typography fontWeight={600}>${item.price}</Typography>
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
                {cartData.length === 0 && <Container sx={{ fontSize: '35px' }}>Cart is empty</Container>}
            </Box>
            {cartData.length !== 0 && (
                <Box sx={{ backgroundColor: '#fff', position: 'fixed', bottom: 0, p: '20px 30px', width: { xs: 300, md: 350 }, boxShadow: '0 0 10px gray' }}>
                    <Button
                        variant="contained"
                        sx={{ color: '#fff', borderRadius: '10px', p: 1 }}
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
