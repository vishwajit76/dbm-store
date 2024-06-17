import {
  Box,
  Container,
  CircularProgress,
  Typography,
  Rating,
  Grid,
  Card,
  ListItem,
  List,
  Drawer,
  ListItemText,
  ListItemIcon,
  Skeleton,
  IconButton,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-multi-carousel";
import Badge from "@mui/material/Badge";
import { makeStyles } from "@mui/styles";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Cart from "./cart";
import "react-multi-carousel/lib/styles.css";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ShopDetails from "./productDetails";
import Checkout from "./checkout";
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  carousel: {
    padding: "100px 0",
    textAlign: "center",
  },
  dotList: {
    margin: "20px 0",
  },
});

const arrowStyle = {
  border: 1,
  p: 1,
  borderRadius: "50%",
  ml: 2,
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
      backgroundColor: "#0084FE",
      color: "white",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: "30px",
      zIndex: 1,
    }}
  >
    <KeyboardArrowLeftRoundedIcon sx={{ color: "#fff" }} fontSize="large" />
  </Box>
);

const CustomRightArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      backgroundColor: "#0084FE",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: "30px",
      zIndex: 1,
    }}
  >
    <KeyboardArrowRightRoundedIcon sx={{ color: "#fff" }} fontSize="large" />
  </Box>
);

const CustomButtonGroup = ({ next, previous }) => (
  <Box
    position="absolute"
    top={20}
    right={30}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <ArrowBackIcon onClick={previous} sx={arrowStyle} />
    <ArrowForwardIcon onClick={next} sx={arrowStyle} />
  </Box>
);

const Shop = () => {
  const cartItemCount = useSelector(state => state.cart.items.length);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [drawerProduct, setDrawerProduct] = useState(null);
  const [detailDrawer, setDetailDrawer] = useState(false);
  const [checkoutDrawer, setCheckoutDrawer] = useState(false);
  const [cartDrawer, setCartDrawer] = useState(false);
  const [color, setColor] = useState();
  const classes = useStyles();

  const toggleDetailDrawer =
    (newOpen, product = null, color) =>
    () => {
      setDetailDrawer(newOpen);
      setDrawerProduct(product);
      setColor(color);
    };

  const toggleCartDrawer = (newOpen) => () => {
    setCartDrawer(newOpen);
    if (newOpen) setDetailDrawer(false);
  };

  const toggleCheckoutDrawer = (newOpen) => () => {
    setCheckoutDrawer(newOpen);
    if (newOpen) setCartDrawer(false);
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
  const colors = [
    "#FBF5EC",
    "#E8F5E9",
    "#E3F2FD",
    "#FCE4EC",
    "#FFF3E0",
    "#F3E5F5",
    "#EDE7F6",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.digibulkmarketing.com/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
        if (data.products.length > 0) {
          setSelectedProduct(data.products[0]);
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleProductChange = (index) => {
    setSelectedProduct(products.products[index]);
  };

  if (error) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography color="error">Error fetching data: {error}</Typography>
      </Container>
    );
  }
  if (!products) {
    return (
      <Box sx={{ background: "#F4F4F4" }}>
        <Container sx={{ mt: 10 }}>
          <Typography
            fontWeight={600}
            sx={{
              background: "#F4F4F4",
              position: { xs: "", md: "absolute" },
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
            <Skeleton width="90%" height={500}></Skeleton>
            <Skeleton width="90%" height={500}></Skeleton>
            <Skeleton width="90%" height={500}></Skeleton>
            <Skeleton width="90%" height={500}></Skeleton>
          </Carousel>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ background: "#F4F4F4" }}>
      <Container>
        <Box>
          <Typography
            fontWeight={600}
            sx={{
              background: "#F4F4F4",
              position: { xs: "", md: "absolute" },
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
            {products &&
              products.products.map((item, index) => (
                <Card
                  key={item.id}
                  onClick={toggleDetailDrawer(
                    true,
                    item,
                    colors[index % colors.length]
                  )}
                  sx={{
                    width: "80%",
                    textAlign: "center",
                    borderRadius: "15px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    sx={{
                      borderRadius: "15px",
                      backgroundColor: colors[index % colors.length],
                      textAlign: "center",
                    }}
                  >
                    <Grid item xs={12}>
                      <img
                        width={220}
                        height={220}
                        src={item.image}
                        alt={item.name}
                      />
                    </Grid>
                  </Grid>
                  <Typography noWrap sx={{ my: "10px" }}>
                    {item.name}
                  </Typography>
                  <Box display="flex" justifyContent="center">
                    <Rating readOnly value={5} />
                    <Typography>99+ Reviews</Typography>
                  </Box>
                </Card>
              ))}
          </Carousel>
        </Box>

        <Grid container spacing={5} alignItems="center">
          <Grid item md={6} xs={12}>
            <Carousel
              showDots
              responsive={carouselResponsive}
              afterChange={(previousSlide, { currentSlide }) =>
                handleProductChange(currentSlide)
              }
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              dotListClass={classes.dotList}
            >
              {products &&
                products.products.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      textAlign: "center",
                      borderRadius: "15px",
                      py: { xs: 5, md: 10 },
                      px: { xs: 0, md: 3 },
                    }}
                  >
                    <img
                      width={300}
                      height={300}
                      src={item.image}
                      alt={item.name}
                    />
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
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <FiberManualRecordIcon fontSize="1rem" color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={message} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>

      <Grid>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px 0",
          }}
        >
          <Card
            style={{
              clipPath: "polygon(50% 0%, 35% 100%, 65% 100%)",
              transform: "translate(0%, 0%)",
              backgroundColor: "white",
              boxShadow: "none",
            }}
            sx={{ maxWidth: "50%", width: "100%", justifyContent: "center" }}
          >
            gh
          </Card>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: { xs: "8px", md: "16px" },
              width: {md:"100%" ,sm:'90%', xs:'90%' }, // Ensures the Card takes full width on all screen sizes
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Add a shadow for visual separation
              backgroundColor: "#FFFFFF", // Optional: Add a background color
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    width: "100%",
                    minWidth: "30%",
                    fontWeight: "700",
                    fontSize: { xs: "30px", md: "36px" },
                    margin:"0 50px",
                    textAlign: { xs: "center", md: "left" }, // Added to ensure text aligns properly
                  }}
                >
                  How It Works
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    gap: "16px",
                    borderRadius: "10px",
                    padding: "16px",
                    width: {md:"100%" ,sm:'90%', xs:'90%' }, // Ensure the inner Card takes full width
                    maxWidth: "747px", // Limit the width of the inner Card on larger screens
                    margin: "0", // Center the inner Card horizontally
                    textAlign: { xs: "center", sm: "left" }, // Added to ensure content aligns properly
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#007BFF",
                      color: "#fff",
                      borderRadius: "50%",
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: { xs: "40px", sm: "50px" }, // Adjust minimum width for icon container
                      minHeight: { xs: "40px", sm: "50px" }, // Adjust minimum height for icon container
                    }}
                  >
                    <PlayArrowOutlinedIcon fontSize="large" />
                  </Box>

                  <CardContent sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "18px", sm: "24px" , md:'30px'},
                        marginBottom: "8px", // Added to separate from the body text
                      }}
                    >
                      HOW THE BULK WHATSAPP SOFTWARE WORKS?
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "14px", sm: "16px" },
                      }}
                    >
                      Watch a video which shows a detailed step by step process
                      of how to get started with our Bulk WhatsApp Software.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Grid>

      {/* cart drawer */}
      <Drawer
        anchor="right"
        open={cartDrawer}
        onClose={toggleCartDrawer(false)}
      >
        <Cart
          onClose={toggleCartDrawer(false)}
          onClick={toggleCheckoutDrawer(true)}
        />
      </Drawer>

      {/* product details drawer */}
      <Drawer
        anchor="right"
        open={detailDrawer}
        onClose={toggleDetailDrawer(false)}
      >
        <ShopDetails
          onClose={toggleDetailDrawer(false)}
          product={drawerProduct}
          color={color}
          cartDrawer={
            <Badge badgeContent={cartItemCount} color="primary">
              <Box
                sx={{
                  width: 35,
                  height: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "50%",
                }}
                onClick={toggleCartDrawer(true)}
              >
                <ShoppingBagOutlinedIcon color="black" />
              </Box>
            </Badge>
          }
        />
      </Drawer>

      {/* checkout drawer */}
      <Drawer
        anchor="right"
        open={checkoutDrawer}
        onClose={toggleCheckoutDrawer(false)}
      >
        <Checkout onClose={toggleCheckoutDrawer(false)} />
      </Drawer>
    </Box>
  );
};
export default Shop;
