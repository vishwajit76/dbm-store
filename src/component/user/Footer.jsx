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
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import axiosInstance from "../../util/axiosInstance";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);
  const [refundDialogOpen, setRefundDialogOpen] = useState(false);
  const [privacyContent, setPrivacyContent] = useState(null);
  const [termsContent, setTermsContent] = useState(null);
  const [refundContent, setRefundContent] = useState(null);
  const [error, setError] = useState(null);
  const [storeData, setStoreData] = useState(null); 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isLargeDevice = useMediaQuery((theme) => theme.breakpoints.up("md"));

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

  // Fetch store data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("app/store/626f85e0544a264104223e37");
        setStoreData(response.data.storeSettings); 
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleEmailClick = () => {
    window.location.href = `mailto:${storeData?.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${storeData?.phone}`;
  };

  const handleTermsDialogOpen = async () => {
    try {
      const response = await axiosInstance.get("user/page/terms-conditions");
      setTermsContent(response.data.page.content);
      setError(null);
    } catch (error) {
      setError(error.message);
      setTermsContent(null);
    }
    setTermsDialogOpen(true);
  };

  const handleTermsDialogClose = () => {
    setTermsDialogOpen(false);
  };

  const handlePrivacyDialogOpen = async () => {
    try {
      const response = await axiosInstance.get("user/page/privacy-policy");
      setPrivacyContent(response.data.page.content);
      setError(null);
    } catch (error) {
      setError(error.message);
      setPrivacyContent(null);
    }
    setPrivacyDialogOpen(true);
  };

  const handlePrivacyDialogClose = () => {
    setPrivacyDialogOpen(false);
  };

  const handleRefundDialogOpen = async () => {
    try {
      const response = await axiosInstance.get("user/page/refund-policy");
      setRefundContent(response.data.page.content);
      setError(null);
    } catch (error) {
      setError(error.message);
      setRefundContent(null);
    }
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
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Address and Contact Information */}
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign="center"
              >
                <img
                  src={`https://api.digibulkmarketing.com${storeData?.logo || "/media/logo/logo.png"}`}
                  alt="Logo"
                  style={{ height: "70px", marginBottom: "20px" }}
                />
                <Box textAlign={{ xs: "center", sm: "left" }}>
                  <Typography sx={{ color: "black" }}>
                    <strong>Address:</strong> {storeData?.address}
                  </Typography>
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
                      <strong>Email:</strong> {storeData?.email}
                    </Typography>
                    <Typography
                      onClick={handlePhoneClick}
                      sx={{ cursor: "pointer", color: "black" }}
                    >
                      <strong>Phone:</strong> {storeData?.phone}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  textAlign="center"
                  mt={2}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "15px",
                      gap: "10px",
                    }}
                  >
                    {storeData?.socialMedia.facebook && (
                      <a href={storeData.socialMedia.facebook} target="_blank" rel="noopener noreferrer"  color="#000" >
                        <FacebookIcon
                          sx={{
                            backgroundColor: "lightblue",
                            borderRadius: "50%",
                            padding: "8px",
                            cursor: "pointer",
                            color:'#000'

                          }}
                        />
                      </a>
                    )}
                    {storeData?.socialMedia.twitter && (
                      <a href={storeData.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <XIcon
                          sx={{
                            backgroundColor: "lightblue",
                            borderRadius: "50%",
                            padding: "8px",
                            cursor: "pointer",
                            color:'#000'

                          }}
                        />
                      </a>
                    )}
                    {storeData?.socialMedia.youtube && (
                      <a href={storeData.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                        <YouTubeIcon
                          sx={{
                            backgroundColor: "lightblue",
                            borderRadius: "50%",
                            padding: "8px",
                            cursor: "pointer",
                            color:'#000'

                          }}
                        />
                      </a>
                    )}
                    {storeData?.socialMedia.google && (
                      <a href={storeData.socialMedia.google} target="_blank" rel="noopener noreferrer">
                        <GoogleIcon
                          sx={{
                            backgroundColor: "lightblue",
                            borderRadius: "50%",
                            padding: "8px",
                            cursor: "pointer",
                            color:'#000'

                          }}
                        />
                      </a>
                    )}
                    {storeData?.socialMedia.instagram && (
                      <a href={storeData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <InstagramIcon
                          sx={{
                            backgroundColor: "lightblue",
                            borderRadius: "50%",
                            padding: "8px",
                            cursor: "pointer",
                            color:'#000'

                          }}
                        />
                      </a>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* About Us and Useful Links */}
            <Grid item xs={12} md={4}>
              <Grid container spacing={2} justifyContent="space-around">
                {/* Useful Links */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: { md: "center", lg: "left", xs: "center" },
                  }}
                >
                  <Box mt={{ xs: 0, sm: 4 }}>
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
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                mt={{ xs: 0, sm: 4 }}
              >
                <Typography fontWeight={600}>NEWSLETTER</Typography>
                <Stack spacing={2} mt={3} width="100%" alignItems="center">
                  <TextField
                    variant="standard"
                    color="black"
                    label="Enter your Name"
                    sx={{
                      width: { md: "100%", sm: "250px", xs: "250px" },
                    }}
                  />
                  <TextField
                    variant="standard"
                    color="black"
                    label="Enter your email"
                    sx={{ width: { md: "100%", sm: "250px", xs: "250px" } }}
                  />
                  <Box
                    display="flex"
                    justifyContent="center"
                    sx={{
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      mt: { xs: 3, sm: 0 },
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
            padding: "2px",
            borderRadius: "50%",
            marginBottom: "7px",
            marginRight: "10px",
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

      <Dialog open={privacyDialogOpen} onClose={handlePrivacyDialogClose}>
        <DialogTitle>{"Privacy Policy"}</DialogTitle>
        <DialogContent>
          {privacyContent ? (
            <Typography>{privacyContent}</Typography>
          ) : (
            <Typography>{error || "Loading..."}</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePrivacyDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={termsDialogOpen} onClose={handleTermsDialogClose}>
        <DialogTitle>{"Terms and Conditions"}</DialogTitle>
        <DialogContent>
          {termsContent ? (
            <Typography>{termsContent}</Typography>
          ) : (
            <Typography>{error || "Loading..."}</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTermsDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={refundDialogOpen} onClose={handleRefundDialogClose}>
        <DialogTitle>{"Refund and Return Policy"}</DialogTitle>
        <DialogContent>
          {refundContent ? (
            <Typography>{refundContent}</Typography>
          ) : (
            <Typography>{error || "Loading..."}</Typography>
          )}
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
