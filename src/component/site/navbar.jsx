
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid, Menu, Modal, TextField } from "@mui/material";
import logo from "../image/logo (1).png";
import vector from "../image/Vector.png";
import PhoneInput from "react-phone-input-2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const pages = ["HOME", "SHOP", "FEATURED", "ABOUT US", "FAQ"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button variant="contained">Let's Talk</Button>
      </List>

    </Box>
  );
  return (
    <AppBar elevation={0} position="static" sx={{ background: '#f4f4f4' }}>
      <Container>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
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
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "50%",
                margin: "0 25px",
              }}
            >
              <img
                src={vector}
                alt="Vector Icon"
                style={{ width: "50%", height: "50%" }}
              />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenModal} sx={{ p: 0 }}>
                <Avatar alt="D" src="/static/images/avatar/2.jpg" />
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
                    maxWidth: { xs: 300, md: 600 },
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
                        alt="D"
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
                            dropdownStyle={{}}
                            country={"in"}
                            variant="outlined"
                            placeholder="+91"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            value={email}
                            required
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
                                onChange={(e) => setZip(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Button
                                type="submit"
                                variant="contained"
                                fullWidth
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