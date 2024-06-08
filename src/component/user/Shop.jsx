import { Box, Container, CircularProgress, Typography, Rating, Grid, Card, ListItem, List, Drawer, ListItemText, ListItemIcon, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Carousel from 'react-multi-carousel';
import { makeStyles } from '@mui/styles';
import 'react-multi-carousel/lib/styles.css';
import ShopDetails from './shopDetails';

const useStyles = makeStyles({
  carousel: {
    padding: '100px 0',
    textAlign: 'center',
  },
});

const arrowStyle = {
  border: 1, p: 1, borderRadius: '50%', ml: 2,
};

const messages = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!",
];

const CustomLeftArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      backgroundColor: '#0084FE',
      color: 'white',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: '30px',
      zIndex: 1,
    }}
  >
    <KeyboardArrowLeftRoundedIcon sx={{ color: '#fff' }} fontSize="large" />
  </Box>
);

const CustomRightArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      backgroundColor: '#0084FE',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: '30px',
      zIndex: 1,
    }}
  >
    <KeyboardArrowRightRoundedIcon sx={{ color: '#fff' }} fontSize="large" />
  </Box>
);

const CustomButtonGroup = ({ next, previous }) => (
  <Box position="absolute" top={20} right={30} display="flex" justifyContent="center" alignItems="center">
    <ArrowBackIcon onClick={previous} sx={arrowStyle} />
    <ArrowForwardIcon onClick={next} sx={arrowStyle} />
  </Box>
);

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [drawerProduct, setDrawerProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState()
  const classes = useStyles();

  const toggleDrawer = (newOpen, product = null , color) => () => {
    setOpen(newOpen);
    setDrawerProduct(product);
    setColor(color)
  };

  const multiCarouselResponsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const carouselResponsive = {
    all: { breakpoint: { max: 4000, min: 0 }, items: 1 },
  };

  const colors = ['#FBF5EC', '#E8F5E9', '#E3F2FD', '#FCE4EC', '#FFF3E0', '#F3E5F5', '#EDE7F6'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.digibulkmarketing.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data);
        if (data.products.length > 0) {
          setSelectedProduct(data.products[0]);
        }
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleProductChange = (index) => {
    setSelectedProduct(products.products[index]);
  };

  if (error) {
    return (
      <Container>
        <Typography color="error">Error fetching data: {error}</Typography>
      </Container>
    );
  }

  if (!products) {
    return (
      <Box sx={{ background: '#f4f4f4' }}>
        <Container>
          <Typography
            fontWeight={600}
            sx={{
              background: '#f4f4f4',
              position: { xs: '', md: 'absolute' },
              fontSize: { xs: "20px", sm: "30px", md: "45px" },
            }}
          >
            New
            <Box component="span" sx={{ color: "primary.main", mx: 1 }}>
              arrival
            </Box>
            for you
          </Typography>
          <Carousel
            customButtonGroup={<CustomButtonGroup />}
            arrows={false}
            swipeable={false}
            infinite={true}
            responsive={multiCarouselResponsive}
          >
            <Skeleton width='90%' height={500}></Skeleton>
            <Skeleton width='90%' height={500}></Skeleton>
            <Skeleton width='90%' height={500}></Skeleton>
            <Skeleton width='90%' height={500}></Skeleton>
          </Carousel>
        </Container>
      </Box>
    );
  }



  return (
    <Box sx={{ background: '#f4f4f4' }}>
      <Container>
        <Box>
          <Typography
            fontWeight={600}
            sx={{
              background: '#f4f4f4',
              position: { xs: '', md: 'absolute' },
              fontSize: { xs: "20px", sm: "30px", md: "45px" },
            }}
          >
            New
            <Box component="span" sx={{ color: "primary.main", mx: 1 }}>
              arrival
            </Box>
            for you
          </Typography>
          <Carousel
            customButtonGroup={<CustomButtonGroup />}
            arrows={false}
            swipeable={false}
            infinite={true}
            responsive={multiCarouselResponsive}
            containerClass={classes.carousel}
          >
            {products && products.products.map((item, index) => (
              <Card
                key={item.id}
                onClick={toggleDrawer(true, item , colors[index % colors.length] )}
                sx={{ width: '80%', textAlign: 'center', borderRadius: "15px", p: 2 }}  
              >
                <Grid
                  container
                  sx={{ borderRadius: "15px", backgroundColor: colors[index % colors.length], textAlign: 'center' }}
                >
                  <Grid item xs={12}>
                    <img width={220} height={220} src={item.image} alt={item.name} />
                  </Grid>
                </Grid>
                <Typography sx={{ my: "10px" }}>{item.name}</Typography>
                <Box display="flex" justifyContent="center">
                  <Rating readOnly value={5} />
                  <Typography>99+ Reviews</Typography>
                </Box>
              </Card>
            ))}
          </Carousel>
        </Box>

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <ShopDetails onClose={toggleDrawer(false)} product={drawerProduct} color={color} />
        </Drawer>

        <Grid container spacing={5} alignItems="center">
          <Grid item md={6} xs={12}>
            <Carousel
              responsive={carouselResponsive}
              afterChange={(previousSlide, { currentSlide }) => handleProductChange(currentSlide)}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {products && products.products.map((item) => (
                <Card key={item.id} sx={{ textAlign: 'center', borderRadius: "15px", py: 10, px: 3 }}>
                  <img width={300} height={300} src={item.image} alt={item.name} />
                </Card>
              ))}
            </Carousel>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography ml="16px" variant="h5" fontWeight={600}>
              {selectedProduct && selectedProduct.name}
            </Typography>
            <List>
              {messages.map((message, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <FiberManualRecordIcon fontSize="1rem" color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={message} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Shop;
