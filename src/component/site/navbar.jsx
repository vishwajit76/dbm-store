import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
  Modal,
  TextField,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Checkout from "../user/checkout";
import Cart from "../user/cart";
import Login from "./login";
import Order from "../user/order";
import logo from "../image/logo (1).png";
import OrderDetails from "../user/orderDetails";
import EditProfile from "./editProfile";
import { Logout } from "@mui/icons-material";
import { store } from '../../redux/store';
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const pages = [
  { id: "#home", name: "HOME" },
  { id: "#shop", name: "SHOP" },
  { id: "#featured", name: "FEATURED" },
  { id: "#about", name: "ABOUT US" },
  { id: "#faq", name: "FAQ" },
];

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [checkoutDrawer, setCheckoutDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState(
    "/static/images/avatar/2.jpg"
  );
  const [details, setDetails] = useState(false);
  console.log(store.getState());
  
  const toggleOrderDetailsDrawer = (newOpen) => () => {
    setDetails(newOpen);
    if (newOpen) setOpenOrder(false);
  };
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleClick = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const toggleDrawer = (newOpen) => () => setOpen(newOpen);
  const toggleCartDrawer = (newOpen) => () => setOpenCart(newOpen);
  const toggleOrderDrawer = (newOpen) => () => setOpenOrder(newOpen);

  const toggleCheckoutDrawer = (newOpen) => () => {
    setCheckoutDrawer(newOpen);
    if (newOpen) setOpenCart(false);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      textAlign="right"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "25px",
        }}
      >
        <img src={logo} alt="Logo" width="70%" />
      </Box>
      {/* <KeyboardBackspaceRoundedIcon
        fontSize="large"
        sx={{ margin: "30px 20px 0 0" }}
      /> */}
      <List>
        {pages.map((text, index) => (
          <ListItem key={`${text.id}-${index}`}>
            <ListItemButton href={text.id}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          backgroundColor: "#fff",
          position: "fixed",
          bottom: 0,
          p: "20px 30px",
          width: { xs: 190, md: 250 },
          boxShadow: "0 0 10px gray",
        }}
      >
        <ArrowBackIosNewRoundedIcon
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>
    </Box>
  );
  return (
    <div style={{ paddingTop: 56 }}>
      <AppBar elevation={0} position="fixed" sx={{ background: "#f4f4f4" }}>
        <Container>
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between" }}
            disableGutters
          >
            {/* logo */}
            <Box sx={{ width: { xs: "40%", md: "20%" } }}>
              <img src={logo} alt="Logo" width="100%" />
            </Box>

            {/* links */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                  gap: "25px",
                },
              }}
            >
              {pages.map((page, index) => (
                <Typography
                  component="a"
                  key={`${page.id}-${index}`}
                  onClick={handleCloseUserMenu}
                  sx={{
                    mx: 2,
                    color: "#000",
                    display: "block",
                    fontSize: "15px",
                    textDecoration: "none",
                  }}
                  color="khaki"
                  href={page.id}
                >
                  {page.name}
                </Typography>
              ))}
            </Box>

            {/* cart and avatar*/}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Badge badgeContent={0} color="primary" sx={{ mx: 3 }}>
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

              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  onClick={handleClick}
                  sx={{ p: 0 }}
                >
                  <Avatar
                    alt="Profile Picture"
                    src={profilePicture}
                    sx={{ width: 35, height: 35 }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="open drawer"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer(true)}
                  color="black"
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                  {DrawerList}
                </Drawer>
              </Box>
            </Box>

            {/* checkout drawer */}
            <Drawer
              anchor="right"
              open={checkoutDrawer}
              onClose={toggleCheckoutDrawer(false)}
            >
              <Checkout onClose={toggleCheckoutDrawer(false)} />
            </Drawer>

            {/* cart drawer */}
            <Drawer
              anchor="right"
              open={openCart}
              onClose={toggleCartDrawer(false)}
            >
              <Cart
                onClose={toggleCartDrawer(false)}
                onClick={toggleCheckoutDrawer(true)}
              />
            </Drawer>

            {/* order drawer */}
            <Drawer
              anchor="right"
              open={openOrder}
              onClose={toggleOrderDrawer(false)}
            >
              <Order
                onClose={toggleOrderDrawer(false)}
                orderDetails={toggleOrderDetailsDrawer(true)}
              />
            </Drawer>

            {/* order details drawer */}
            <Drawer
              anchor="right"
              open={details}
              onClose={toggleOrderDrawer(false)}
            >
              <OrderDetails onClose={toggleOrderDetailsDrawer(false)} />
            </Drawer>

            {/* edit profile modal */}
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              {/* <EditProfile /> */}
              <Login onClose={handleCloseModal} />
            </Modal>

            {/* user menu */}
            <Menu
              anchorEl={anchorElUser}
              id="account-menu"
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              onClick={handleCloseUserMenu}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  padding: "15px",
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={handleCloseUserMenu}
                data-item="Name"
                sx={{ fontSize: "10px" }}
              >
                Name
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleOpenModal} data-item="Profile">
                Profile
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu} data-item="Wishlist">
                Wishlist
              </MenuItem>
              <MenuItem onClick={toggleOrderDrawer(true)} data-item="Orders">
                Orders
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseUserMenu} data-item="Logout">
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
