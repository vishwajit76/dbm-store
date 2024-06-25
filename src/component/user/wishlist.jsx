import React from 'react';
import { Box, Checkbox, Grid, Typography } from '@mui/material';
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { useSelector, useDispatch } from 'react-redux';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { removeFromWishlist } from '../../redux/wishlist/wishlistSlice';

const Wishlist = ({ onClose }) => {
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const dispatch = useDispatch();

    const handleRemoveFromWishlist = (index) => {
        dispatch(removeFromWishlist(index));
    };

    return (
        <Box sx={{ width: { xs: 250, md: 350 }, p: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                <NavigateBeforeRoundedIcon
                    fontSize="large"
                    cursor="pointer"
                    onClick={onClose}
                />
                <Typography fontWeight={600}>Wishlist</Typography>
            </Grid>
            {wishlistItems?.map((item, index) => (
                <>
                    <Grid
                        key={index}
                        container
                        sx={{ borderRadius: '15px' }}
                        p={2}
                        my={5}
                        boxShadow="0 0 10px #eee"
                        justifyContent="space-between"
                    >
                        <Grid item xs={12} md={4} sx={{ borderRadius: '15px', backgroundColor: '#FBF5EC', textAlign: 'center' }}>
                            <img width={85} height={85} src={item.product.product.image} alt="Product" />
                        </Grid>
                        <Grid item xs={12} md={7} container direction="column" justifyContent="space-between">
                            <Typography>{item.product.product.name}</Typography>
                            <Grid container justifyContent='space-between' alignItems='center'>
                                <Grid container item xs={6} justifyContent='space-between'>
                                    <Typography sx={{ color: '#818181de' }}>Price</Typography>
                                    <Typography>
                                        ₹{item.product.product.rates.reduce((min, variation) => Math.min(min, variation.price), Infinity)} -
                                        ₹{item.product.product.rates.reduce((max, variation) => Math.max(max, variation.price), -Infinity)}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} textAlign='end'>
                                    <Checkbox
                                        onChange={() => handleRemoveFromWishlist(index)}
                                        icon={<FavoriteBorder />}
                                        checkedIcon={<Favorite />}
                                        checked={item.isInWishlist}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>

            ))}
        </Box>
    );
}

export default Wishlist;
