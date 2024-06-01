// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Button,
//   Grid,
//   Avatar,
//   Menu,
//   MenuItem,
//   Container,
// } from "@mui/material";
// // import Sider from "../components/slider";
// import { Outlet, Link } from "react-router-dom";
// import imanav from "../image/logo (7) 1.png";
// import cart from "../image/Vector.png";
// // import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// // import cart from '../pages/product/cart'
// function Navbar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" color="">
//       <Container >
//         <Toolbar>
//           <Grid item xs={6} sm={3}>
//             <Box
//               // component={Link}
//               href="/"
//               variant="h6"
//               sx={{
//                 textDecoration: "none",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               {" "}
//               <img
//                 src={imanav}
//                 alt=""
//                 style={{ marginLeft: "-35px", height: "60px" }}
//               />
//             </Box>
//           </Grid>
//           <Box sx={{ display: { xs: "none", md: "flex" }, m: " 0 60px" }}>
//             <Link to="/">
//               <Button style={{ color: "#8E8E8E", marginRight: "30px" }}>
//               HOME
//               </Button>
//             </Link>
//             <Link to="/shop">
//               <Button style={{ color: "#8E8E8E", marginRight: "30px" }}>
//                 SHOP
//               </Button>
//             </Link>
//             <Link to="/featured">
//               <Button style={{ color: "#8E8E8E", marginRight: "30px" }}>
//               FEATURED
//               </Button>
//             </Link>

//             <Link to="/about">
//               <Button style={{ color: "#8E8E8E", marginRight: "30px" }}>
//                 ABOUT US
//               </Button>
//             </Link>
//             <Link to="/faq">
//               <Button style={{ color: "#8E8E8E", marginRight: "30px" }}>
//                 FAQ
//               </Button>
//             </Link>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",

//               justifyContent: { md: "end", xs: "center" },
//             }}
//           >
//             <Box sx={{ width: { sx: "px" } }}>
//               <Button variant="contained" color="primary" >
//                 Let's Talk
//               </Button>
//             </Box>

//               <img src={cart} alt="" variant="contained" width={'25px'}/>
//               {/* <cart fontSize="large"  /> */}

//             <Typography
//               id="basic-button"
//               aria-controls={open ? "basic-menu" : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? "true" : undefined}
//               onClick={handleClick}
//               sx={{ display: "inline-block" }}

//             >
//               <Avatar
//                 alt="Remy Sharp"
//                 sx={{
//                   width: 30,
//                   height: 30,
//                   margin: { xs: "0 20px 0 10px", md: "0 0px 0 10px" },
//                 }}
//               />
//             </Typography>
//           </Box>

//           {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <Grid container>
//               {/* <Sider /> */}
//             {/* </Grid>
//           </Box> */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = [
  { label: "HOME", path: "/" },
  { label: "SHOP", path: "/shop" },
  { label: "FEATURED", path: "/featured" },
  { label: "ABOUT US", path: "/about" },
  { label: "FAQ", path: "/faq" }
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ margin: "0px", padding: "0px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component={Link} to={page.path}>
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/* main nav start */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
