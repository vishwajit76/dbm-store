import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import img from "../image/logo (1).png";

function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@digibulkmarketing.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:18008898358";
  };

  return (
    <>
      <Container>
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
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* About Us and Useful Links */}
          <Grid item xs={12} md={5} lg={4}>
            <Grid container spacing={2} justifyContent="space-around">
              {/* About Us */}
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems={{ xs: "center", sm: "flex-start" }}
                  textAlign={{ xs: "center", sm: "left" }}
                  mt={{ xs: 4, sm: 0 }}
                >
                  <Typography fontWeight={600}>About Us</Typography>
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
                        Privacy Policy
                      </Typography>
                      <Typography
                        component="li"
                        style={{ cursor: "pointer", color: "black" }}
                      >
                        Terms and Conditions
                      </Typography>
                      <Typography
                        component="li"
                        style={{ cursor: "pointer", color: "black" }}
                      >
                        Refund and Return Policy
                      </Typography>
                      <Typography
                        component="li"
                        style={{ cursor: "pointer", color: "black" }}
                      >
                        Contact
                      </Typography>
                      <Typography
                        component="li"
                        style={{ cursor: "pointer", color: "black" }}
                      >
                        About
                      </Typography>
                    </ul>
                  </Box>
                </Box>
              </Grid>

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
              <Typography fontWeight={600} marginRight={"65px"}>
                NEWSLETTER
              </Typography>
              <Stack spacing={0} mt={1}>
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
                <Button
                  sx={{
                    mt: 3,
                    width: "50%",
                    backgroundColor: "#",
                    color: "white",
                  }}
                  type="submit"
                  variant="contained"
                >
                  SUBSCRIBE
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Box
        sx={{ backgroundColor: "#8C8C8C" }}
        margin=" 50px 0 0 0 "
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
                  Download
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  Shop
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  Orders
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  Reseller
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  FAQ
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
