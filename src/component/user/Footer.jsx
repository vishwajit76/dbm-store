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
  Divider,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import img from "../image/logo (1).png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
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

  const fetchData = async () => {
    try {
      const [privacyResponse, termsResponse, refundResponse] =
        await Promise.all([
          axiosInstance.get("user/page/privacy-policy"),
          axiosInstance.get("user/page/terms-conditions"),
          axiosInstance.get("user/page/refund-policy"),
        ]);
      setPrivacyContent(privacyResponse.data.page.content);
      setTermsContent(termsResponse.data.page.content);
      setRefundContent(refundResponse.data.page.content);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleEmailClick = () => {
    window.location.href = "mailto:info@digibulkmarketing.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:18008898358";
  };

  const handleDialogOpen = (type) => {
    if (type === "terms") setTermsDialogOpen(true);
    if (type === "privacy") setPrivacyDialogOpen(true);
    if (type === "refund") setRefundDialogOpen(true);
  };

  const handleDialogClose = (type) => {
    if (type === "terms") setTermsDialogOpen(false);
    if (type === "privacy") setPrivacyDialogOpen(false);
    if (type === "refund") setRefundDialogOpen(false);
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
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign="center"
              >
                <img
                  src={img}
                  alt="Logo"
                  style={{ height: "70px", marginBottom: "20px" }}
                />
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

            <Grid item xs={12} md={5} lg={4}>
              <Grid container spacing={2} justifyContent="space-around">
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

            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
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
                    label="Enter your name"
                    sx={{ width:'250px'}}
                  />
                  <TextField
                    variant="standard"
                    color="black"
                    label="Enter your email"
                    sx={{ width:'250px'}}
                    
                  />
                  <Box
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    sx={{
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "center",
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
<Divider/>
      <Box sx={{ backgroundColor: "#fff" }} padding="20px 0">
        <Container>
          <Grid container display="flex">
            <Grid item xs={12} md={5}>
              <Typography
                fontSize="14px"
                sx={{ color: "#000", alignItems: "center" }}
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
                  sx={{ color: "#000", cursor: "pointer" }}
                  onClick={() => handleDialogOpen('privacy')}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  sx={{ color: "#000", cursor: "pointer" }}
                  onClick={() => handleDialogOpen('terms')}
                >
                  Terms and Conditions
                </Typography>
                <Typography
                  sx={{ color: "#000", cursor: "pointer" }}
                  onClick={() => handleDialogOpen('refund')}
                >
                  Refund and Return Policy
                </Typography>
                <Typography sx={{ color: "#000", cursor: "pointer" }}>
                  Contact
                </Typography>
                <Typography sx={{ color: "#000", cursor: "pointer" }}>
                  About
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Dialog
        open={privacyDialogOpen}
        onClose={() => handleDialogClose("privacy")}
      >
        <DialogTitle>{"Privacy Policy"}</DialogTitle>
        <DialogContent>
          {privacyContent ? (
            <Typography>{privacyContent}</Typography>
          ) : (
            <Typography>{error || "Loading..."}</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose("privacy")} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={termsDialogOpen} onClose={() => handleDialogClose("terms")}>
        <DialogTitle>{"Terms and Conditions"}</DialogTitle>
        <DialogContent>
          {termsContent ? (
            <Typography>{termsContent}</Typography>
          ) : (
            <Typography>{error || "Loading..."}</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose("terms")} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={refundDialogOpen}
        onClose={() => handleDialogClose("refund")}
      >
        <DialogTitle>{"Refund and Return Policy"}</DialogTitle>
        <DialogContent>
          {refundContent ? (
            <Typography>{refundContent}</Typography>
          ) : (
            <Typography>{error || "Loading..."}</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose("refund")} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Footer;
