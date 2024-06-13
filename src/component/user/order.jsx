import { Box, Divider, Grid, Typography } from '@mui/material'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import zomatoImg from '../image/google-map-extractor-7 1.png';
import React from 'react'

const order = ({ onClose }) => {
    return (
        <Box sx={{ width: { xs: 250, md: 350 }, p: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                <KeyboardBackspaceRoundedIcon
                    fontSize="large"
                    cursor="pointer"
                    onClick={onClose}
                />
                <Typography fontWeight={600}>Orders</Typography>
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
                        <img width={85} height={85} src={zomatoImg} alt="Product" />
                    </Grid>
                    <Grid item xs={12} md={7} container direction="column" justifyContent="space-between">
                        <Typography>Button Sender</Typography>
                        <Grid container alignItems="center">
                            <Grid item xs={12} container justifyContent='space-between'>
                                <Typography sx={{ color: '#818181de' }}>Price</Typography>
                                <Typography>$999</Typography>
                            </Grid>
                            <Grid item xs={12} container justifyContent='space-between'>
                                <Typography sx={{ color: '#818181de' }}>Quantity</Typography>
                                <Typography>1</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider /></Grid>
                            <Grid item xs={12} container justifyContent='space-between'>
                                <Typography sx={{ color: '#818181de' }}>Total</Typography>
                                <Typography>$999</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            ))}
        </Box>
    )
}

export default order
