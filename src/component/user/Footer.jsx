import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import img from "../image/logo (1).png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to toggle scroll-to-top button visibility based on scroll position
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const handleEmailClick = () => {
    window.location.href = "mailto:info@digibulkmarketing.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:18008898358";
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Container sx={{ paddingBottom: "20px" }}>
          <Grid container spacing={4} marginTop={10}>
            {/* Address and Contact Information */}
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                justifyContent={{ xs: "center", sm: "flex-start" }}
                flexDirection="column"
                alignItems="center"
                textAlign={{ xs: "center", sm: "left" }}
              >
                <img
                  src={img}
                  alt="Logo"
                  style={{ maxWidth: "40%", height: "auto" }}
                />
                <Box mt={4}>
                  <Typography>
                    Address: B204, Sumel Business Park – 7,
                  </Typography>
                  <Typography>Odhav, Ahmedabad – 382415</Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                  >
                    <Typography
                      mt={4}
                      onClick={handleEmailClick}
                      style={{ cursor: "pointer", color: "black" }}
                    >
                      Email: info@digibulkmarketing.com
                    </Typography>
                    <Typography
                      mt={0}
                      onClick={handlePhoneClick}
                      style={{ cursor: "pointer", color: "black" }}
                    >
                      Phone: 1800-889-8358
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "15px",
                      }}
                    >
                      <FacebookIcon
                        sx={{
                          backgroundColor: "lightblue",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                      <XIcon
                        sx={{
                          backgroundColor: "lightblue",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                      <YouTubeIcon
                        sx={{
                          backgroundColor: "lightblue",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                      <GoogleIcon
                        sx={{
                          backgroundColor: "lightblue",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                      <InstagramIcon
                        sx={{
                          backgroundColor: "lightblue",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* About Us and Useful Links */}
            <Grid item xs={12} md={5} lg={4}>
              <Grid container spacing={2} justifyContent="space-around">
                {/* Useful Links */}
                <Grid item xs={12} sm={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems={{ xs: "center", sm: "flex-start" }}
                    textAlign={{ xs: "center", sm: "left" }}
                    mt={{ xs: 4, sm: 0 }}
                  >
                    <Typography fontWeight={600}>USEFUL LINKS</Typography>
                    <Box mt={3}>
                      <ul
                        style={{
                          listStyleType: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <Typography
                          component="li"
                          style={{ cursor: "pointer", color: "black" }}
                        >
                          Download
                        </Typography>
                        <Typography
                          component="li"
                          style={{ cursor: "pointer", color: "black" }}
                        >
                          Shop
                        </Typography>
                        <Typography
                          component="li"
                          style={{ cursor: "pointer", color: "black" }}
                        >
                          Orders
                        </Typography>
                        <Typography
                          component="li"
                          style={{ cursor: "pointer", color: "black" }}
                        >
                          Reseller
                        </Typography>
                        <Typography
                          component="li"
                          style={{ cursor: "pointer", color: "black" }}
                        >
                          FAQ
                        </Typography>
                      </ul>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Newsletter Subscription */}
            <Grid item xs={12} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems={{ xs: "center", sm: "flex-start" }}
                textAlign={{ xs: "center", sm: "left" }}
                mt={{ xs: 4, sm: 0 }}
              >
                <Typography fontWeight={600}>NEWSLETTER</Typography>
                <Stack spacing={2} mt={3} width="100%">
                  <TextField
                    variant="standard"
                    color="black"
                    label="Enter your Name"
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    color="black"
                    label="Enter your email"
                    fullWidth
                  />
                  <Box display="flex" justifyContent="center" width="100%">
                    <Button
                      sx={{
                        mt: 3,
                        backgroundColor: "#0084FE",
                        color: "white",
                      }}
                      type="submit"
                      variant="contained"
                    >
                      SUBSCRIBE
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Scroll to Top Button */}
      {showScroll && (
        <Box
          sx={{
            backgroundColor: "#0084FE",
            position: "fixed",
            bottom: 0,
            right: 0,
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              color: "#fff",
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      )}

      {/* Footer Bottom */}
      <Box
        sx={{ backgroundColor: "#8C8C8C" }}
        // margin=" 50px 0 0 0 "
        padding=" 20px 0"
      >
        <Container>
          <Grid container display="flex">
            <Grid item xs={12} md={6}>
              <Typography
                fontSize="14px"
                sx={{ color: "#fff", alignItems: "center" }}
              >
                Copyright © Designed & Developed by BITBEAST PRIVATE LIMITED
                2023
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  Privacy Policy |
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  Terms and Conditions |
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  Refund and Return Policy |
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  Contact |
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  About
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
