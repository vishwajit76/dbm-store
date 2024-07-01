import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Divider,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import emptyCart from "../image/emptyCart.png";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  cartProduct,
} from "../../redux/cart/cartSlice";
import { setProductDetails } from "../../redux/payment/paymentSlice";
import { CURRENCIES_SYMBOL } from "../currency/currency";
const buttonStyle = {
  p: 0.1,
  boxShadow: "0 0 10px #eee",
  cursor: "pointer",
};

export default function Cart({ onClose, onClick, openProduct }) {
  const cartData = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const productDetails = useSelector((state) => state.payment.productDetails);
  const couponCode = "a5623d";
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const { currency , exchangeRates } = useSelector((state) => state.currency);
  console.log({ currency , exchangeRates });
  const currencySymbol = CURRENCIES_SYMBOL[currency]
  const handleRemoveFromCart = (id, variationId, e) => {
    e.stopPropagation();
    dispatch(removeFromCart({ id: id, variationId: variationId }));
    setSnackbarMessage("Item removed from cart");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleOpenProduct = (product, variation, e) => {
    e.stopPropagation();
    openProduct();
    dispatch(cartProduct({ product: product, variation: variation }));
  };

  const increaseCartItem = (id, variationId, e) => {
    e.stopPropagation();
    dispatch(increaseQuantity({ id: id, variationId: variationId }));
    setSnackbarMessage("Quantity increased");
    setSnackbarSeverity("success");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const decreaseCartItem = (id, variationId, quantity, e) => {
    e.stopPropagation();
    dispatch(decreaseQuantity({ id: id, variationId: variationId }));
    setSnackbarMessage("Quantity decreased");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleCheckout = () => {
    dispatch(
      setProductDetails(
        cartData.map((i) => ({
          product_id: i.product.id,
          variation_id: i.variation._id,
          quantity: i.quantity,
        }))
      )
    );
    onClick();
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Box sx={{ width: { xs: 250, md: 350 }, p: 3 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <NavigateBeforeRoundedIcon
            fontSize="large"
            cursor="pointer"
            onClick={onClose}
          />
          <Typography fontWeight={600}>Cart</Typography>
        </Grid>
        <Box overflow="auto">
          <Grid container>
            {cartData.map((item, index) => (
              <Grid
                key={index}
                container
                direction="column"
                sx={{ borderRadius: "15px", cursor: "pointer" }}
                p={1}
                my={1}
                boxShadow="0 0 10px #eee"
                onClick={(e) =>
                  handleOpenProduct(item.product, item.variation, e)
                }
              >
                <Grid container justifyContent="end">
                  <CloseIcon
                    cursor="pointer"
                    fontSize="small"
                    onClick={(e) =>
                      handleRemoveFromCart(item.id, item.variation?._id, e)
                    }
                  />
                </Grid>
                <Grid
                  item
                  container
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: "#FBF5EC",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img width={85} height={85} src={item.image} alt="Product" />
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Typography>{item.name}</Typography>
                  <Typography>{item.variation?.title}</Typography>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography fontWeight={600}>
                        {currencySymbol}{(item.price * exchangeRates).toFixed(2)} x {item.quantity}
                      </Typography>
                      <Typography fontWeight={600}>
                        {currencySymbol}{((item.price * item.quantity)*exchangeRates).toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      container
                      alignItems="center"
                      justifyContent="space-evenly"
                    >
                      <RemoveOutlinedIcon
                        sx={buttonStyle}
                        onClick={(e) =>
                          decreaseCartItem(
                            item.id,
                            item.variation._id,
                            item.quantity,
                            e
                          )
                        }
                      />
                      <Typography>{item.quantity}</Typography>
                      <AddOutlinedIcon
                        fontSize="small"
                        sx={buttonStyle}
                        onClick={(e) =>
                          increaseCartItem(item.id, item.variation?._id, e)
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
        {cartData.length === 0 && (
          <Container sx={{ textAlign: "center" }}>
            <img src={emptyCart} alt="" width={240} />
            <Typography variant="h4">Cart is empty</Typography>
            <Button
              variant="contained"
              sx={{ my: 2 }}
              href="#shop"
              onClick={onClose}
            >
              Continue Shopping
            </Button>
          </Container>
        )}
        {cartData.length !== 0 && (
          <Box sx={{ position: "sticky", bottom: 0, background: "#fff" }}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              my={2}
              p={1}
              border="2px solid black"
              borderRadius={2}
            >
              <Box display="flex">
                <DiscountRoundedIcon />
                <Typography mx={2}>{couponCode.toUpperCase()}</Typography>
              </Box>
              <Button variant="outlined" color="black">
                Apply
              </Button>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={12} container justifyContent="space-between">
                <Typography sx={{ color: "#818181de" }}>Subtotal</Typography>
                <Typography>{currencySymbol}{(subtotal * exchangeRates).toFixed(2)}</Typography>
              </Grid>
              <Grid item xs={12} container justifyContent="space-between">
                <Typography sx={{ color: "#818181de" }}>Discount</Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} container justifyContent="space-between">
                <Typography fontWeight={600}>Final Price</Typography>
                <Typography fontWeight={600}>{currencySymbol}{(subtotal*exchangeRates).toFixed(2)}</Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="black"
              sx={{ color: "#fff", borderRadius: 2, p: 2, my: 2 }}
              fullWidth
              onClick={handleCheckout}
            >
              Checkout Now
            </Button>
          </Box>
        )}
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <SnackbarContent
          message={snackbarMessage}
          sx={{
            backgroundColor:
              snackbarSeverity === "success"
                ? "#4CAF50"
                : snackbarSeverity === "error"
                ? "#F44336"
                : "#FF9800",
            color: "#fff",
          }}
        />
      </Snackbar>
    </div>
  );
}
