import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import image1 from "../image/img1.png";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ImageIcon from "@mui/icons-material/Image";
import "../../index.css";
import { useTheme } from "@mui/system";
import bulkimg from "../image/image 2.svg";
import wew1 from "../image/Vectorhome 1 copy.svg";
import wew2 from "../image/Vectorhome 2.svg";
import star1 from "../image/Starhome 1.svg";
import star2 from "../image/Starhome 2.svg";
import bulkimgPdf from "../image/image 3.svg";
import bulkimgaudio from "../image/image 4.svg";
import MailIcon from "@mui/icons-material/Mail";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import ReportIcon from "@mui/icons-material/Report";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SpeakerIcon from "@mui/icons-material/Speaker";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
// import '../site/navbar'

const Home = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
 

  return (
    
    <div>
      <Box sx={{ backgroundColor: "#f4f4f4", py: 6 }}>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                <Box
                  component="span"
                  
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    display: "inline-block",
                    backgroundColor: "primary.main",
                    p: 1,
                    borderRadius: 2,
                    transform: "rotate(-8deg)",
                    position: { xs: "relative", md: "absolute" },
                    top: { xs: "30px", md: "-24px" },
                    left: { xs: "-11px", md: "45px" },
                    mb: { xs: 2, md: 0 },
                  }}
                >
                  #1 Bulk
                </Box>
              </Typography>
              <Box sx={{ fontSize: { xs: "10px", sm: "30px", md: "50px" } }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  WhatsApp
                </Typography>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  Marketing Tool &
                </Typography>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  More
                </Typography>
              </Box>
              <Typography variant="body1">
                Unlock the full potential of the world's most popular
              </Typography>
              <Typography variant="body1">
                messaging platform with our premium features, including
              </Typography>
              <Typography variant="body1">
                bulk messaging, chatbot support, autoresponders, and
              </Typography>
              <Typography variant="body1">much more!</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                // width:'fit-content',
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "fit-content",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={image1}
                  alt="Marketing Team"
                  sx={{
                    width: { xs: "250px", md: "500px" },
                    borderRadius: 2,
                    transform: "rotate(0deg)",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <Box
                  sx={{
                    // position: "relative",

                    position: "absolute",
                    // top: "50%",
                    bottom: { xs: "50px", md: "130px" },
                    left: { xs: "-40px", md: "40px" },
                    // left: "10%",
                    mt: { xs: -5, md: -4 },

                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="white"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      marginBottom: "15px",
                      zIndex: 1,
                      display: "flex",
                      whiteSpace: "nowrap",
                      borderRadius: "8px",
                      transform: {
                        xs: "rotate(-5deg)",
                        md: "translateX(-50%) rotate(-5deg)",
                      },
                      width: { xs: "70px", md: "auto" },
                      fontSize: { xs: "10px", md: "14px" },
                    }}
                  >
                    Easy use
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      wordSpacing: "0px",
                      whiteSpace: "none",
                      backgroundColor: "primary.main",
                      color: "white",
                      borderRadius: "8px",
                      // position: "absolute",
                      zIndex: 1,

                      // bottom: { xs: "20px", md: "80px" },
                      // right: { xs: "220px", md: "340px" },
                      transform: {
                        xs: "rotate(5deg)",
                        md: "translateX(-50%) rotate(5deg)",
                      },
                      width: { xs: "70px", md: "auto" },
                      fontSize: { xs: "10px", md: "14px" },
                    }}
                  >
                    Powerful
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid>
            <Grid item margin={"50px 0"}>
              <Box >
                <img
                  src={wew1}
                  alt=""
                  style={{ position: "absolute", left: "0px" }}
                />
              </Box>
              <Box>
                <img
                  src={star1}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "220px",
                    bottom: "80px",
                  }}
                />
              </Box>
              <Box>
                <img
                  src={wew2}
                  alt=""
                  style={{
                    position: "absolute",
                    right: "100px",
                    bottom: "80px",
                  }}
                />
              </Box>
              <Box>
                <img
                  src={star2}
                  alt=""
                  style={{
                    position: "absolute",
                    right: "30px",
                    bottom: "110px",
                  }}
                />
              </Box>

              <Typography
                textAlign={"center"}
                margin={"10px"}
                fontWeight={600}
                sx={{
                  position: "relative",
                  fontSize: { xs: "20px", sm: "30px", md: "45px" },
                }}
              >
                Why
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    mx: 1,
                  }}
                >
                  Bulk
                </Box>
                WhatsApp?
              </Typography>

              <Typography
                sx={{
                  position: "relative",
                  fontSize: { xs: "12px", sm: "20px", md: "25px" },
                }}
                textAlign={"center"}
                lineHeight={"35px"}
                color={"#9A9A9A"}
              >
                Bulk WhatsApp Sender Supports Multiple Formats
              </Typography>
            </Grid>

            <Grid>
              <Box
                sx={{
                  typography: "body1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <TabContext value={value}>
                  <Box
                    sx={{
                      borderColor: "",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="responsive tabs example"
                      variant="fullWidth"
                      sx={{
                        width: "100%",
                        "& .MuiTab-root": {
                          color: "black",
                          flex: 1,
                        },
                      }}
                    >
                      <Tab label="IMAGE" value="1" />
                      <Tab label="PDF" value="2" />
                      <Tab label="AUDIO" value="3" />
                    </TabList>
                  </Box>
                  <Box sx={{ width: "100%", textAlign: "center", mt: 2 }}>
                    <TabPanel value="1">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: isSmallScreen ? "column" : "row",
                          alignItems: "center",
                          p: 2,
                          boxShadow: "none",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow:'0px 0px 10px lightgray',
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            width: 200,
                            height: 200,
                            mb: isSmallScreen ? 1 : 0,
                            mr: isSmallScreen ? 0 : 1,
                          }}
                        >
                          <img src={bulkimg} alt="" />
                        </Box>
                        <CardContent sx={{ p: 0 }}>
                          <Typography
                            variant="h6"
                            component="div"
                            fontSize={"28px"}
                            fontWeight={600}
                            sx={{ mb: 1, textAlign: "left" }}
                          >
                            Image
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            fontSize={"24px"}
                            sx={{ textAlign: "left" }}
                          >
                            Software supports multiple images along with
                            captions for each image which can be sent to all the
                            imported numbers with a click of a single button.
                          </Typography>
                        </CardContent>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        padding="20px"
                        sx={{
                          overflowX: "auto",
                          "&::-webkit-scrollbar": {
                            display: "none",
                          },
                          "-ms-overflow-style": "none" /* IE and Edge */,
                          "scrollbar-width": "none" /* Firefox */,
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="baseline"
                          sx={{
                            flexWrap: "nowrap",
                            gap: "20px",
                            "@media (max-width: 900px)": {
                              flexWrap: "wrap",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                            color={""}
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <MailIcon fontSize="large" />
                            </Box>

                            <Typography variant="body1">
                              Send Customized Messages
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <ImportContactsIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Import Contacts
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <PersonAddIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Send Without Saving Contact
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <AccountCircleIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Multi Account
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <ChatIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Create Multiple Variations
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <ReportIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">Get Report</Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="200px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <MailIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Scheduling message
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </TabPanel>
                    <TabPanel value="2">
                      {" "}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: isSmallScreen ? "column" : "row",
                          alignItems: "center",
                          p: 2,
                          boxShadow: "none",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            width: 200,
                            height: 200,
                            mb: isSmallScreen ? 2 : 0,
                            mr: isSmallScreen ? 0 : 2,
                          }}
                        >
                          <img src={bulkimgPdf} alt="" />
                        </Box>
                        <CardContent sx={{ p: 0 }}>
                          <Typography
                            variant="h6"
                            component="div"
                            fontSize={"28px"}
                            fontWeight={600}
                            sx={{ mb: 1, textAlign: "left" }}
                          >
                            PDF
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            fontSize={"24px"}
                            sx={{ textAlign: "left" }}
                          >
                            Bulkwhatsapp is great tool for sharing PDF to
                            multiple user.It is the best way to express the
                            thought with an unlimited number of character.
                          </Typography>
                        </CardContent>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        padding="20px"
                        sx={{
                          overflowX: "auto",
                          "&::-webkit-scrollbar": {
                            display: "none",
                          },
                          "-ms-overflow-style": "none" /* IE and Edge */,
                          "scrollbar-width": "none" /* Firefox */,
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="baseline"
                          sx={{
                            flexWrap: "nowrap",
                            gap: "20px",
                            "@media (max-width: 900px)": {
                              flexWrap: "wrap",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <LaptopWindowsIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Send Customized Messages
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <PhoneAndroidOutlinedIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Import Contacts
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <CameraAltIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Send Without Saving Contact
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <LiveTvIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Multi Account
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <CreditCardIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Create Multiple Variations
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <SpeakerIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">Get Report</Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="200px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <SportsEsportsIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Scheduling message
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </TabPanel>
                    <TabPanel value="3">
                      {" "}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: isSmallScreen ? "column" : "row",
                          alignItems: "center",
                          p: 2,
                          boxShadow: "none",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            width: 200,
                            height: 200,
                            mb: isSmallScreen ? 2 : 0,
                            mr: isSmallScreen ? 0 : 2,
                          }}
                        >
                          <img src={bulkimgaudio} alt="" />
                        </Box>
                        <CardContent sx={{ p: 0 }}>
                          <Typography
                            variant="h6"
                            component="div"
                            fontSize={"28px"}
                            fontWeight={600}
                            sx={{ mb: 1, textAlign: "left" }}
                          >
                            AUDIO
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            fontSize={"24px"}
                            sx={{ textAlign: "left" }}
                          >
                            It not only supports the text but also various media
                            files.WhatsApp Marketing through Audios on mobile is
                            very important for every sector now a days.
                          </Typography>
                        </CardContent>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        padding="20px"
                        sx={{
                          overflowX: "auto",
                          "&::-webkit-scrollbar": {
                            display: "none",
                          },
                          "-ms-overflow-style": "none" /* IE and Edge */,
                          "scrollbar-width": "none" /* Firefox */,
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="baseline"
                          sx={{
                            flexWrap: "nowrap",
                            gap: "20px",
                            "@media (max-width: 900px)": {
                              flexWrap: "wrap",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <LaptopWindowsIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Send Customized Messages
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <PhoneAndroidOutlinedIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Import Contacts
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <CameraAltIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Send Without Saving Contact
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <LiveTvIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Multi Account
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <CreditCardIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Create Multiple Variations
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="120px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <SpeakerIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">Get Report</Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            minWidth="200px"
                            minHeight="100px"
                          >
                            <Box
                              borderRadius={"50px"}
                              width={"75px"}
                              height={"75px"}
                              sx={{
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <SportsEsportsIcon fontSize="large" />
                            </Box>
                            <Typography variant="body1">
                              Scheduling message
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </TabPanel>
                  </Box>
                </TabContext>
              </Box>
            </Grid>
            
            
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
