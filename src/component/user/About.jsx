import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import img1 from "../image/anydesk.png";
import img2 from "../image/imagea2.png";
import img3 from "../image/imagea3.png";
import teslaLogo from "../image/480px-Tesla_logo 1.png";
import coronaLogo from "../image/corona-logo-2 1.png";
import imgv from "../image/Scan.png";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Link } from "react-router-dom";
import img5 from "../image/logo (1).png";
import ReCAPTCHA from "react-google-recaptcha";
const SITE_KEY = "6LcNLbMpAAAAAHT-3b_fICQjCcUEivSg53-srBQn";

const logos = [
  { src: teslaLogo, alt: "Tesla Logo" },
  { src: coronaLogo, alt: "Corona Logo" },
  { src: coronaLogo, alt: "Corona Logo" },
  { src: teslaLogo, alt: "Tesla Logo" },
  { src: coronaLogo, alt: "Corona Logo" },
  { src: coronaLogo, alt: "Corona Logo" },
  { src: teslaLogo, alt: "Tesla Logo" },
  { src: coronaLogo, alt: "Corona Logo" },
  { src: coronaLogo, alt: "Corona Logo" },
  { src: teslaLogo, alt: "Tesla Logo" },
  { src: coronaLogo, alt: "Corona Logo" },
  { src: coronaLogo, alt: "Corona Logo" },
];

const About = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@digibulkmarketing.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:18008898358";
  };

  const [setRecaptchaValue] = useState("");
  const captchaRef = useRef();

  const onChange = (value) => {
    console.log(value);
    setRecaptchaValue(value);
  };

  return (
    <Container sx={{ bgcolor: "#F4F4F4", padding: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={8}>
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              fontWeight={500}
              fontSize={"25px"}
            >
              Hassle Free Installation & Support Assistance Remotely
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              color={"#9A9A9A"}
              fontWeight={600}
            >
              AnyWhere. AnyTime. AnyDesk
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              color={"#9A9A9A"}
              align="justify"
            >
              Installation assistance is a Free service offered by Digi Bulk
              Marketing which allows the clients to sit back and relax while we
              install the application to their target Windows Desktop & Laptop.
              If you are a potential customer or an existing client who wishes
              to install Digi Bulk Marketing to a computer, and do not want to
              get into the hassle of installation process, our expert team will
              do it for you. The application will be installed via AnyDesk. No
              physical access required to target Desktop to install the
              application.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "center", md: "flex-end" } }}>
  <Button
    variant="contained"
    color="primary"
    href="https://anydesk.com/en/downloads/windows"
    target="_blank"
  >
    Download Anydesk
  </Button>
</Box>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              width: { xs: "80%", sm: "100%", md: "100%" },
            }}
          >
            <img
              src={img1}
              alt="Your Image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
      <Grid item xs={12} md={5}>
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "100%", sm: "100%", md: "380px" }, // Adjusted width for different screen sizes
      margin: "auto", // Center the Box horizontally
    }}
  >
    <img
      src={img2}
      alt="Your Image"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  </Box>
</Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" sx={{ color: "#1783FE", marginBottom: 2 }}>
              Digi Bulk Marketing
            </Typography>
            <Typography
              fontSize={"30px"}
              fontWeight={600}
              sx={{ marginBottom: 3 }}
            >
              Unlock Your Marketing Potential With DigiBulkMarketing!
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 3 }}
              align="justify"
            >
              At Digi Bulk Marketing, We Are Passionate About Empowering
              Businesses With Cutting-Edge Marketing Solutions. As A Leading
              Software-Selling Company, We Specialize In Providing Robust Tools
              That Streamline Marketing Efforts, Enhance Customer Engagement,
              And Drive Growth. Our Team Of Dedicated Professionals Combines
              Technical Expertise With A Deep Understanding Of Market Dynamics
              To Deliver Innovative Software Products. Whether It's Email
              Campaigns, Social Media Automation, Or Data Analytics, We're
              Committed To Helping Our Clients Achieve Their Marketing Goals.
              Join Us On This Digital Journey, And Let's Transform The Way You
              Connect With Your Audience!
            </Typography>
            <Box
              width={150}
              margin={"30px 0 0 0"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Typography
                bgcolor={"#1783FE"}
                height={"50px"}
                width={"50px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"50%"}
              >
                <IconButton
                  href="https://www.youtube.com/watch?v=2nsRe8ct_I8&ab_channel=BitBeast"
                  target="blank"
                  sx={{ color: "white" }}
                >
                  <PlayArrowOutlinedIcon fontSize="large" color="white" />
                </IconButton>
              </Typography>
              <Typography fontWeight={"600"}>Our Story</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={7}>
          <CardContent>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h6"
                sx={{ color: "#1783FE", marginBottom: 2 }}
              >
                Digi Bulk Marketing
              </Typography>
              <Typography
                fontSize={"30px"}
                fontWeight={600}
                sx={{ marginBottom: 3 }}
              >
                Unlock Your Marketing Potential With DigiBulkMarketing!
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 3 }}
                align="justify"
              >
                At Digi Bulk Marketing, We Are Passionate About Empowering
                Businesses With Cutting-Edge Marketing Solutions. As A Leading
                Software-Selling Company, We Specialize In Providing Robust
                Tools That Streamline Marketing Efforts, Enhance Customer
                Engagement, And Drive Growth. Our Team Of Dedicated
                Professionals Combines Technical Expertise With A Deep
                Understanding Of Market Dynamics To Deliver Innovative Software
                Products. Whether It's Email Campaigns, Social Media Automation,
                Or Data Analytics, We're Committed To Helping Our Clients
                Achieve Their Marketing Goals. Join Us On This Digital Journey,
                And Let's Transform The Way You Connect With Your Audience!
              </Typography>
              <Box
                width={150}
                margin={"30px 0 0 0"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Typography
                  bgcolor={"#1783FE"}
                  height={"50px"}
                  width={"50px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"50%"}
                >
                  <IconButton
                    href="https://www.youtube.com/watch?v=2nsRe8ct_I8&ab_channel=BitBeast"
                    target="blank"
                    sx={{ color: "white" }}
                  >
                    <PlayArrowOutlinedIcon fontSize="large" color="white" />
                  </IconButton>
                </Typography>
                <Typography fontWeight={"600"}>Our Story</Typography>
              </Box>
            </Box>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "end" },
              alignItems: "center",
            }}
          >
            <img
              src={img3}
              alt="Your Image"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography fontWeight={600} fontSize={"25px"} sx={{ marginBottom: 3 }}>
          OUR VISION
        </Typography>
        <Typography align="justify">
          This site is not a part of WhatsApp or Facebook / Meta. Mentioned
          names or logos are properties of their respective companies. The
          information on this website is for educational purposes only, we
          neither support nor be held responsible for any misuse of this info.
          This tool is not affiliated with any brand or website. Buyer must use
          the software responsibly and adhere to the website terms or usage
          policy (or whatever is applicable). it’s just a standalone tool that
          can facilitate and extend some options in WhatsApp. it’s not a spam
          tool and not allowed to use it for spamming or violating WhatsApp
          policies. This tool automates a natural human’s behavior to save
          his/her time in manually collecting data already AVAILABLE PUBLICALLY
          and we do not take responsibility for how the buyer uses this
          software. All disputes are subject to Delhi jurisdiction.
        </Typography>
      </Box>

      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          mt: 4,
          color: "white",
          borderRadius: "20px",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Free Update",
              description: "No Any Pay For Update",
            },

            {
              title: "Available In Store",
              description: "DBM Available On Microsoft Store",
            },
            {
              title: "Secure Payment",
              description: "100% Secure Payment",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
              >
                <img
                  src={imgv}
                  alt={item.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Typography variant="h6" fontWeight={900} marginTop={2}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>

      <Grid container spacing={4} sx={{ padding: "34px" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">Trust Is Earned, </Typography>
          <Typography variant="h3"> Not Given</Typography>
          <Typography align="justify" marginTop={"30px"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type Lorem Ipsum has been type
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
        >
          <Grid container spacing={2} justifyContent="center">
            {logos.map((logo, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={4}
                key={index}
                style={{ textAlign: "center" }}
              >
                <Box
                  sx={{
                    width: { md: "60%", sm: "40%", xs: "60%" },
                    margin: "auto",
                  }}
                >
                  <img src={logo.src} alt={logo.alt} width="100%" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
