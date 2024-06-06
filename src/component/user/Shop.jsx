import { Box, Container, CircularProgress, Typography, Rating, Grid, Card, ListItem, List, Drawer, ListItemText, CardContent, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Carousel from 'react-multi-carousel';
import { makeStyles } from '@mui/styles';
import 'react-multi-carousel/lib/styles.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
const useStyles = makeStyles({
  carousel: {
    padding: '100px 0',
    textAlign: 'center'
  },
});

const arrowStyle = {
  border: 1, p: 1, borderRadius: '50%', ml: 2
};

const dot = {
  mr: 2,
  height: 8,
  width: 8,
  background: '#0084FE',
  borderRadius: '50%'
}

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [drawerProduct, setDrawerProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (newOpen, product = null) => () => {
    setOpen(newOpen);
    setDrawerProduct(product);
  };

  const drowerData = (
    <Box sx={{ width: 350 }} role="presentation">
      {drawerProduct && (
        <List>
          <ListItem disablePadding>
            <ListItemText primary={drawerProduct.name} />
          </ListItem>
          <ListItem disablePadding>
            <img src={drawerProduct.image} alt={drawerProduct.name} width="100%" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Price: $${drawerProduct.price}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={drawerProduct.description} />
          </ListItem>
          {/* Add more product details as needed */}
        </List>
      )}
    </Box>
  );

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
          setSelectedProduct(data.products[0]); // Set the initial selected product
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
      <Box sx={{ background: '#f4f4f4' }} >
        <Container>
          <CircularProgress />
          <Typography>Loading...</Typography>
        </Container>
      </Box>
    );
  }

  const multiCarouselResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselResponsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  const styles = {
    root: {
      padding: '32px 0',
      textAlign: 'center',
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    iconButton: {
      color: '#007bff',
      fontSize: '3rem',
    },
    content: {
      textAlign: 'left',
      paddingLeft: '16px',
    },
  };


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
            <Box
              component="span"
              sx={{
                color: "primary.main",
                mx: 1,
              }}
            >
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
              <Card key={item.id} onClick={toggleDrawer(true, item)} sx={{ width: '80%', textAlign: 'center', borderRadius: "15px", p: 2 }}>
                <Grid container sx={{ borderRadius: "15px", backgroundColor: "#FBF5EC", textAlign: 'center' }}>
                  <Grid item xs={12}>
                    <img width={200} height={200} src={item.image} />
                  </Grid>
                </Grid>
                <Typography sx={{ my: "10px" }}>
                  {item.name}
                </Typography>
                <Box display={'flex'} justifyContent={'center'}>
                  <Rating readOnly value={5} />
                  <Typography>99+ Reviews</Typography>
                </Box>
              </Card>
            ))}
          </Carousel>
        </Box>

        <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
          {drowerData}
        </Drawer>

        <Grid container spacing={5} alignItems='center'>
          <Grid item md={6} xs={12}>
            <Carousel responsive={carouselResponsive} afterChange={(previousSlide, { currentSlide }) => handleProductChange(currentSlide)}>
              {products && products.products.map((item, index) => (
                <Card key={item.id} sx={{ textAlign: 'center', borderRadius: "15px", py: 10, px: 3 }}>
                  <img width={300} height={300} src={item.image} />
                </Card>
              ))}
            </Carousel>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant='h4' fontWeight={600}>
              {selectedProduct && selectedProduct.name}
            </Typography>
            <List>
              <ListItem disablePadding>
                <Box sx={dot}></Box>
                <ListItemText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={dot}></Box>
                <ListItemText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={dot}></Box>
                <ListItemText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={dot}></Box>
                <ListItemText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={dot}></Box>
                <ListItemText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={dot}></Box>
                <ListItemText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus itaque temporibus!</ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>


          <Grid>
          <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 0',
      }}
    >
      <Card
    style={{
      clipPath: 'polygon(50% 0%, 35% 100%, 65% 100%)',
      transform: 'translate(0%, 0%)',
      backgroundColor: 'white',
    }}
    sx={{ maxWidth: '50%', width: '100%' , justifyContent:'center'}}
  >
    gh
  </Card>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          width: '100%',
        }}
  
      >
        <Grid container spacing={2} alignItems="center">
          <Grid 
            item 
            xs={12} 
            md={4} 
            sx={{
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ width: '100%', minWidth: '30%' }} 
            >
              How It Work
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                // backgroundColor: '#f9f9f9',
                borderRadius: '10px',
                padding: '16px',
              }}
            >
              <Box >

              <IconButton color='white'  variant="contained"   sx={{  fontSize: '3rem',  bgcolor:'#007bff', color:'#fff'}}>
                <PlayArrowOutlinedIcon fontSize="large" />
              </IconButton>
              </Box>
              <CardContent>
                <Typography variant="h6">
                  HOW THE BULK WHATSAPP SOFTWARE WORKS?
                </Typography>
                <Typography variant="body1">
                  Watch a video which shows a detailed step by step process of how to get started with our Bulk WhatsApp Software.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>


          </Grid>
      </Container>
    </Box>
  );
};

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <Box position="absolute" top={20} right={30} display="flex" justifyContent='center' alignItems="center">
      <ArrowBackIcon onClick={previous} sx={arrowStyle} />
      <ArrowForwardIcon onClick={next} sx={arrowStyle} />
    </Box>
  );
};

export default Shop;
