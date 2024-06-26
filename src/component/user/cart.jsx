import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Divider,
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
import { setProductDetails } from '../../redux/payment/paymentSlice'

const buttonStyle = {
  p: 0.1,
  boxShadow: "0 0 10px #eee",
  cursor: "pointer",
};

export default function Cart({ onClose, onClick, openProduct }) {
  const cartData = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const productDetails = useSelector((state) => state.payment.productDetails);
  console.log("productDetails" , productDetails);
  const couponCode = "a5623d";
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id, variationId, e) => {
    e.stopPropagation();
    dispatch(removeFromCart({ id: id, variationId: variationId }));
  };

  const handleOpenProduct = (product, variation, e) => {
    e.stopPropagation();
    openProduct();
    dispatch(cartProduct({ product: product, variation: variation }));
  };

  const increaseCartItem = (id, variationId, e) => {
    e.stopPropagation();
    dispatch(increaseQuantity({ id: id, variationId: variationId }));
  };

  const decreaseCartItem = (id, variationId, quantity, e) => {
    e.stopPropagation();
    dispatch(decreaseQuantity({ id: id, variationId: variationId }));
  };

  const handleCheckout = () => {
    dispatch(setProductDetails(cartData.map(i => ({
      product_id: i.product.id,
      variation_id: i.variation._id,
      quantity: i.quantity
    }))))
    onClick()
  };

  console.log();


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
                sx={{ borderRadius: "15px", cursor: "pointer" }}
                p={1}
                my={1}
                boxShadow="0 0 10px #eee"
                justifyContent="space-between"
                onClick={(e) => handleOpenProduct(item.product, item.variation, e)}
              >
                <Grid
                  item
                  xs={2}
                  container
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: "#FBF5EC",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img width={50} height={50} src={item.image} alt="Product" />
                </Grid>
                <Grid
                  item
                  xs={8}
                  container
                  direction="column"
                  justifyContent="space-between"
                >
                  <Typography>{item.name}</Typography>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography fontWeight={600}>
                        ₹{item.price} x {item.quantity}
                      </Typography>
                      <Typography fontWeight={600}>
                        ₹{(item.price * item.quantity).toFixed(2)}
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
                  <Typography>{item.variation?.title}</Typography>
                </Grid>
                <Grid item xs={1} container justifyContent="end">
                  <CloseIcon
                    cursor="pointer"
                    fontSize="5px"
                    onClick={(e) =>
                      handleRemoveFromCart(item.id, item.variation?._id, e)
                    }
                  />
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
                <Typography>₹{subtotal.toFixed(2)}</Typography>
              </Grid>
              <Grid item xs={12} container justifyContent="space-between">
                <Typography
                  sx={{ color: "#818181de" }}
                >Discount</Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} container justifyContent="space-between">
                <Typography fontWeight={600}>Final Price</Typography>
                <Typography fontWeight={600}>
                  ₹{subtotal}
                </Typography>
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
    </div>
  );
}
