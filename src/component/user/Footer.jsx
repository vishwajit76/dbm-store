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
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);
  const [refundDialogOpen, setRefundDialogOpen] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  const isLargeDevice = useMediaQuery((theme) => theme.breakpoints.up("md"));

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

  const handleTermsDialogOpen = () => {
    setTermsDialogOpen(true);
  };

  const handleTermsDialogClose = () => {
    setTermsDialogOpen(false);
  };

  const handlePrivacyDialogOpen = () => {
    setPrivacyDialogOpen(true);
  };

  const handlePrivacyDialogClose = () => {
    setPrivacyDialogOpen(false);
  };

  const handleRefundDialogOpen = () => {
    setRefundDialogOpen(true);
  };

  const handleRefundDialogClose = () => {
    setRefundDialogOpen(false);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Container sx={{ paddingBottom: "20px" }}>
          <Grid
            container
            spacing={4}
            marginTop={10}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Address and Contact Information */}
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center" // Center content vertically
                alignItems={{ xs: "center", md: "flex-start" }} // Center horizontally on xs, start on md
                textAlign="center" // Center text on all screen sizes
              >
                <img
                  src={img}
                  alt="Logo"
                  style={{ height: "70px", marginBottom: "20px" }}
                />{" "}
                {/* Adjust margin bottom for spacing */}
                <Box textAlign={{ xs: "center", sm: "left" }}>
                  <Typography sx={{ color: "black" }}>
                    <strong>Address:</strong>
                    B204, Sumel Business Park – 7,
                  </Typography>
                  <Typography>Odhav, Ahmedabad – 382415</Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems={{ xs: "center", sm: "flex-start" }}
                    mt={3}
                  >
                    <Typography
                      onClick={handleEmailClick}
                      sx={{ cursor: "pointer", color: "black" }}
                    >
                      <strong>Email:</strong> info@digibulkmarketing.com
                    </Typography>
                    <Typography
                      onClick={handlePhoneClick}
                      sx={{ cursor: "pointer", color: "black" }}
                    >
                      <strong>Phone:</strong> 1800-889-8358
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center" // Center items
                  textAlign="center" // Center text
                  mt={2} // Adjust margin top for spacing
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center", // Center icons
                      paddingTop: "15px",
                      gap: "10px", // Add space between icons
                    }}
                  >
                    <FacebookIcon
                      sx={{
                        backgroundColor: "lightblue",
                        borderRadius: "50%",
                        padding: "8px",
                        cursor: "pointer",
                      }}
                    />
                    <XIcon
                      sx={{
                        backgroundColor: "lightblue",
                        borderRadius: "50%",
                        padding: "8px",
                        cursor: "pointer",
                      }}
                    />
                    <YouTubeIcon
                      sx={{
                        backgroundColor: "lightblue",
                        borderRadius: "50%",
                        padding: "8px",
                        cursor: "pointer",
                      }}
                    />
                    <GoogleIcon
                      sx={{
                        backgroundColor: "lightblue",
                        borderRadius: "50%",
                        padding: "8px",
                        cursor: "pointer",
                      }}
                    />
                    <InstagramIcon
                      sx={{
                        backgroundColor: "lightblue",
                        borderRadius: "50%",
                        padding: "8px",
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* About Us and Useful Links */}
            <Grid item xs={12} md={5} lg={4}>
              <Grid container spacing={2} justifyContent="space-around">
                {/* Useful Links */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start" // Align items at the start
                    textAlign="left" // Align text to the left
                    mt={{ xs: 0, sm: 4 }} // Adjust margin top for different screen sizes
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
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems={{ xs: "center", sm: "flex-start" }} // Center on xs, start on sm and above
                textAlign="left" // Align text to the left
                mt={{ xs: 0, sm: 4 }} // Adjust margin top for different screen sizes
              >
                <Typography fontWeight={600}>NEWSLETTER</Typography>
                <Stack spacing={2} mt={3} width="100%" alignItems="center">
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
                  <Box
                    display="flex"
                    justifyContent="center" // Center button
                    width="100%"
                    sx={{
                      justifyContent: { xs: "center", sm: "flex-start" }, // Center on xs, start on sm and above
                      mt: { xs: 3, sm: 0 }, // Adjust margin top for different screen sizes
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#0084FE",
                        color: "white",
                        marginTop: "12px",
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
            padding: "5px",
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
      <Box sx={{ backgroundColor: "#8C8C8C" }} padding="20px 0">
        <Container>
          <Grid container display="flex">
            <Grid item xs={12} md={5}>
              <Typography
                fontSize="14px"
                sx={{ color: "#fff", alignItems: "center" }}
              >
                Copyright © Designed & Developed by BITBEAST Pvt. Ltd. 2024
              </Typography>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                display="flex"
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "#fff", cursor: "pointer" }}
                  onClick={handlePrivacyDialogOpen}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  sx={{ color: "#fff", cursor: "pointer" }}
                  onClick={handleTermsDialogOpen}
                >
                  Terms and Conditions
                </Typography>
                <Typography
                  sx={{ color: "#fff", cursor: "pointer" }}
                  onClick={handleRefundDialogOpen}
                >
                  Refund and Return Policy
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  Contact
                </Typography>
                <Typography sx={{ color: "#fff", cursor: "pointer" }}>
                  About
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyDialogOpen} onClose={handlePrivacyDialogClose}>
        <DialogTitle>{"Privacy Policy"}</DialogTitle>
        <DialogContent>
          <Typography>Here is the privacy policy...</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePrivacyDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Terms and Conditions Dialog */}
      <Dialog open={termsDialogOpen} onClose={handleTermsDialogClose}>
        <DialogTitle>{"Terms and Conditions"}</DialogTitle>
        <DialogContent>
          <Typography>Here are the terms and conditions...</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTermsDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Refund and Return Policy Dialog */}
      <Dialog open={refundDialogOpen} onClose={handleRefundDialogClose}>
        <DialogTitle>{"Refund and Return Policy"}</DialogTitle>
        <DialogContent>
          <Typography>Here is the refund and return policy...</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRefundDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Footer;
