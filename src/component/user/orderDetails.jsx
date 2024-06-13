import { Box, Grid, Rating, Typography, Badge, Divider, Stepper, Step, StepLabel } from '@mui/material'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import zomatoImg from '../image/google-map-extractor-7 1.png';
import React, { useState } from 'react'

const orderDetails = ({ onClose }) => {
    const [expanded, setExpanded] = useState(false);
    const steps = ['Oreder Confirmed', 'shipping', 'to deliver'];

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
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
                    <Typography fontWeight={600}>Order Details</Typography>
                </Grid>

                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Grid container my={5}>
                    <Grid item xs={12} sx={{ borderRadius: '15px', backgroundColor: '#eee', textAlign: 'center', p: '7px 0' }}>
                        <img width="80%" src={zomatoImg} alt="Product" />
                    </Grid>
                </Grid>

                <Box>
                    <Badge badgeContent="SHIPPING" color="primary" sx={{ ml: 4 }} />
                    <Grid container alignItems="flex-end">
                        <Grid item xs={8}>
                            <Typography sx={{ my: '10px', fontWeight: 'bold' }}>
                                zomato data extractor
                            </Typography>
                            <Grid container justifyContent="space-between">
                                <Rating readOnly value={5} />
                                <Typography>99+ Reviews</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} textAlign="right">
                            <Typography sx={{ color: '#818181de' }}>Price</Typography>
                            <Typography fontWeight={600}>$999</Typography>
                        </Grid>
                    </Grid>
                </Box>
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
                <Grid container alignItems="center">
                    <Grid item xs={12} container justifyContent='space-between'>
                        <Typography sx={{ color: '#818181de' }}>Product Total</Typography>
                        <Typography>$999</Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent='space-between'>
                        <Typography sx={{ color: '#818181de' }}>discount</Typography>
                        <Typography>10%</Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent='space-between'>
                        <Typography sx={{ color: '#818181de' }}>Shipping Cost</Typography>
                        <Typography color='green' sx={{ color: '#21E500' }}>FREE</Typography>
                    </Grid>
                    <Grid item xs={12}><Divider /></Grid>
                    <Grid item xs={12} container justifyContent='space-between'>
                        <Typography fontWeight={600}>Final Price</Typography>
                        <Typography fontWeight={600}>${999 * 0.9}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default orderDetails
