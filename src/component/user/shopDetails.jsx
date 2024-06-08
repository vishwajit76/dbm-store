import React, { useState } from 'react';
import {
    Badge, Box, Button, Grid, Rating, Typography,
} from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import zomatoImg from '../image/google-map-extractor-7 1.png';
import vector from '../image/Vector.png';

const buttonStyle = {
    p: 0.5,
    boxShadow: '0 0 10px #eee',
    cursor: 'pointer',
};

const ShopDetails = ({ onClose, product , color }) => {
    const [count, setCount] = useState(1);
    const [expanded, setExpanded] = useState(false);

    if (!product) {
        return null;
      }

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const handleCounter = (change) => {
        setCount((prevCount) => Math.max(1, prevCount + change));
    };

    return (
        <Box sx={{ width: { xs: 250, md: 350 , xl: 500 }, p: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                <KeyboardBackspaceRoundedIcon
                    fontSize="large"
                    cursor="pointer"
                    onClick={onClose}
                />
                <Typography fontWeight={600}>Detail Product</Typography>
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        borderRadius: '50%',
                    }}
                >
                    <img src={vector} alt="Vector Icon" width="50%" />
                </Box>
            </Grid>

            <Grid
                container
                sx={{ borderRadius: '15px' }}
                p={2}
                my={5}
                boxShadow="0 0 10px #eee"
                justifyContent="space-between"
            >
                <Grid item xs={4} sx={{ borderRadius: '15px', backgroundColor: color , textAlign: 'center' }}>
                    <img width={100} height={100} src={product.image} alt="Product" />
                </Grid>
                <Grid item xs={7} container direction="column" justifyContent="space-between">
                    <Typography>{product.name}</Typography>
                    <Grid container alignItems="center">
                        <Grid item xs={6}>
                            <Typography sx={{ color: '#818181de' }}>Price</Typography>
                            <Typography fontWeight={600}>${product.variations[product.variations.length -1 ].price * count}</Typography>
                        </Grid>
                        <Grid item xs={6} container alignItems="center" justifyContent="space-evenly" sx={{ flexDirection: {xs: 'column-reverse' , md: 'row'}}}>
                            <RemoveOutlinedIcon sx={buttonStyle} onClick={() => handleCounter(-1)} />
                            <Typography>{count}</Typography>
                            <AddOutlinedIcon sx={buttonStyle} onClick={() => handleCounter(1)} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container my={5}>
                <Grid item xs={12} sx={{ borderRadius: '15px', backgroundColor: color, textAlign: 'center', p: '70px 20px' }}>
                    <img width="100%" src={product.image} alt="Product" />
                </Grid>
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
                    <Grid item xs={4} textAlign="right">
                        <Typography sx={{ color: '#818181de' }}>Price</Typography>
                        <Typography fontWeight={600}>${product.variations[product.variations.length -1 ].price * count}</Typography>
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

            <Button
                variant="contained"
                color="black"
                sx={{ color: '#fff', borderRadius: '10px', p: 2 }}
                fullWidth
            >
                Add to Cart
            </Button>
        </Box>
    );
};

export default ShopDetails;
