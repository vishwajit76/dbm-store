import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import zomatoImg from '../image/google-map-extractor-7 1.png';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

const buttonStyle = {
    p: 0.1,
    boxShadow: '0 0 10px #eee',
    cursor: 'pointer',
};

export default function Cart({ onClose, onClick }) {
    const [count, setCount] = useState(1);

    const handleCounter = (change) => {
        setCount((prevCount) => Math.max(1, prevCount + change));
    };

    return (
        <div>
            <Box sx={{ width: { xs: 250, md: 350 }, p: 3 }}>
                <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                    <KeyboardBackspaceRoundedIcon
                        fontSize="large"
                        cursor="pointer"
                        onClick={onClose}
                    />
                    <Typography fontWeight={600}>Cart</Typography>
                </Grid>
                {['', '', '', ''].map((_, index) => (
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
                            <img width={80} height={80} src={zomatoImg} alt="Product" />
                        </Grid>
                        <Grid item xs={12} md={7} container direction="column" justifyContent="space-between">
                            <Typography>Button Sender</Typography>
                            <Grid container alignItems="center">
                                <Grid item xs={6}>
                                    <Typography sx={{ color: '#818181de' }}>Price</Typography>
                                    <Typography fontWeight={600}>$999</Typography>
                                </Grid>
                                <Grid item xs={6} container alignItems="center" justifyContent="space-evenly">
                                    <RemoveOutlinedIcon sx={buttonStyle} onClick={() => handleCounter(-1)} />
                                    <Typography>{count}</Typography>
                                    <AddOutlinedIcon fontSize='small' sx={buttonStyle} onClick={() => handleCounter(1)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Box>
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
        </div>
    );
}