import { Box, Divider, Drawer, Grid, Typography } from '@mui/material'
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import zomatoImg from '../image/google-map-extractor-7 1.png';
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../util/axiosInstance';
import OrderDetails from './orderDetails';

const order = ({ onClose, orderDetails }) => {
    const [details, setDetails] = useState(false)
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        const fetchOrder = async () => {
          try {
            const response = await axiosInstance.post("/orders/orders");
            console.log(response);
            const data = response.data;
            setOrders(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchOrder();
      }, []);

    const toggleOrderDetailsDrawer = (newOpen) => () => { setDetails(newOpen); onClose }

    return (
        <Box sx={{ width: { xs: 250, md: 350 }, p: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                <NavigateBeforeRoundedIcon
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
                    onClick={orderDetails}
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
