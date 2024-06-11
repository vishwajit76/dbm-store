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
} from "@mui/material";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import MenuIcon from "@mui/icons-material/Menu";
import PhoneInput from "react-phone-input-2";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Cart from '../user/cart';
import logo from "../image/logo (1).png";
import 'react-phone-input-2/lib/style.css';
// import PhoneInput from 'react-phone-input-2';
import validator from 'validator';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: '1px 1px 10px',
  p: 4,
};

const pages = ["HOME", "SHOP", "FEATURED", "ABOUT US", "FAQ"];

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState('');
  const [profilePicture, setProfilePicture] = useState('/static/images/avatar/2.jpg');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleCloseUserMenu = () => { setAnchorElUser(null) };
  const toggleDrawer = (newOpen) => () => { setOpen(newOpen) };
  const toggleCartDrawer = (newOpen) => () => {
    setOpenCart(newOpen)
  };
  const validateFields = () => {
    const errors = {};
    if (!validator.isAlpha(name.replace(/\s/g, ''))) {
      errors.name = 'Name must contain only letters';
    }
    if (!validator.isEmail(email)) {
      errors.email = 'Invalid email address';
    }
    if (!validator.isNumeric(zip)) {
      errors.zip = 'Zip code must contain only numbers';
    }
    if (!validator.isAlpha(state.replace(/\s/g, ''))) {
      errors.state = 'State must contain only letters';
    }
    if (!validator.isAlpha(country.replace(/\s/g, ''))) {
      errors.country = 'Country must contain only letters';
    }
    if (!validator.isAlpha(city.replace(/\s/g, ''))) {
      errors.city = 'city must contain only letters';
    }
    return errors;
  };
  const handleSave = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const profileData = {
        name,
        email,
        address,
        city,
        state,
        country,
        zip,
        phone,
      };
      localStorage.setItem('profileData', JSON.stringify(profileData));
      handleCloseModal();
    }
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} textAlign='right'>
      <KeyboardBackspaceRoundedIcon fontSize='large' sx={{ margin: '30px 20px 0 0' }} />
      <List>
        {pages.map((text, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button variant="contained">
            Let's Talk
          </Button>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <AppBar elevation={0} position="static" sx={{ background: '#f4f4f4' }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }} disableGutters>
          <Box sx={{ width: { xs: "40%", md: '20%' } }}>
            <img src={logo} alt="Logo" width='100%' />
          </Box>
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
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseUserMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "12px",
                }}
                color="khaki"
              >
                {page}
              </Button>
            ))}
            <Button variant="contained" sx={{
              my: 2,
              display: "block",
              fontSize: "12px",
            }}
            >Let's Talk</Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: 35,
                height: 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "50%",
                margin: "0 25px",
              }}
              onClick={toggleCartDrawer(true)}
            >
              <LocalMallOutlinedIcon color='black' />
            </Box>

            <Drawer anchor="right" open={openCart} onClose={toggleCartDrawer(false)}>
              <Cart onClose={toggleCartDrawer(false)} />
            </Drawer>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenModal} sx={{ p: 0 }}>
                <Avatar alt="Profile Picture" src={profilePicture} sx={{ width: 35, height: 35 }} />
              </IconButton>
              <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box
                  sx={{
                    ...style,
                    width: '90%',
                    maxWidth: { xs: 250, md: 600 },
                    height: { xs: '70vh', md: 'auto' },
                    overflow: 'auto',
                  }}
                >
                  <Typography fontSize={'26px'} fontWeight={300} gutterBottom>
                    Edit Profile
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                      <Avatar
                        alt="N"
                        src={profilePicture}
                        sx={{ width: 100, height: 100, margin: '0 auto', cursor: 'pointer' }}
                        onClick={() => document.getElementById('profile-picture-upload').click()}
                      />
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="profile-picture-upload"
                        onChange={handleFileChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Name"
                            value={name}
                            variant="outlined"
                            required
                            error={!!errors.name}
                            helperText={errors.name}
                            onChange={(e) => setName(e.target.value)}
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <PhoneInput
                            inputStyle={{
                              width: '100%',
                              height: '40px',
                              fontFamily: 'Monospace',
                              border: '1px solid #AEB4BE',
                            }}
                            country={'in'}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputProps={{
                              name: 'phone',
                              required: true,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            value={email}
                            required
                            error={!!errors.email}
                            helperText={errors.email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="small"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Your Address"
                            multiline
                            rows={5}
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <TextField
                                fullWidth
                                size="small"
                                label="Your City"
                                value={city}
                                required
                                error={!!errors.city}
                                helperText={errors.city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                fullWidth
                                label="Your State"
                                size="small"
                                value={state}
                                required
                                error={!!errors.state}
                                helperText={errors.state}
                                onChange={(e) => setState(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                fullWidth
                                label="Country"
                                size="small"
                                value={country}
                                required
                                error={!!errors.country}
                                helperText={errors.country}
                                onChange={(e) => setCountry(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                fullWidth
                                label="Zip Code"
                                size="small"
                                value={zip}
                                required
                                error={!!errors.zip}
                                helperText={errors.zip}
                                onChange={(e) => setZip(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                onClick={handleSave}
                              >
                                Save
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
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
                <MenuIcon fontSize='large' />
              </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;