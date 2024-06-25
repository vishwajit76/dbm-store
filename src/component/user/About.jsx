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
  Modal,
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

  const [youtubeID] = useState("2nsRe8ct_I8");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <Container sx={{ bgcolor: "#F4F4F4", padding: 4 }}>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={7}>
        <CardContent>
          <Typography
            variant="subtitle"
            gutterBottom
            fontWeight={600}
            // margin={"20px 0"} // Add marginBottom to create a gap
          >
            Hassle Free Installation & Support Assistance Remotely
          </Typography>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              variant="body"
              gutterBottom
              color={"#1783FE"}
              
              margin={'10px 0' }
            >
              AnyWhere. AnyTime. AnyDesk
            </Typography>
            <Typography variant="body" gutterBottom align="justify" margin={' 20px 0px '}>
              Installation assistance is a Free service offered by Digi Bulk
              Marketing which allows the clients to sit back and relax while
              we install the application to their target Windows Desktop &
              Laptop. If you are a potential customer or an existing client
              who wishes to install Digi Bulk Marketing to a computer, and do
              not want to get into the hassle of installation process, our
              expert team will do it for you. The application will be
              installed via AnyDesk. No physical access required to target
              Desktop to install the application.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "center", md: "flex-end" },
            }}
          >
            <Button
              variant="contained"
              sx={{ margin: " 30px 0 " }}
              color="primary"
              href="https://anydesk.com/en/downloads/windows"
              target="_blank"
            >
              Download Anydesk
            </Button>
          </Box>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            width: { xs: "80%", sm: "100%", md: "100%" },
          }}
        >
          <img src={img1} alt="Your Image" style={{ maxWidth: "100%" }} />
        </Box>
      </Grid>
    </Grid>

    <Grid container spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
      <Grid item xs={12} md={5} justifyContent={"start"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "100%", md: "380px" },
            // margin: "0 15px",
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
        <Box sx={{ textAlign: { xs: "center", md: "left" },  }}>
          <Typography
            variant="body"
            sx={{ color: "#1783FE",  }}
            lineHeight={3.5}
          >
            Digi Bulk Marketing
          </Typography>
          <Box >
            <Typography variant="subtitle"    margin={'10px 0' } >
              Unlock Your Marketing Potential With DigiBulkMarketing!
            </Typography>
          </Box>
          <Typography variant="body" textAlign={'justify'} display={'flex'} margin={' 20px 0'}>
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
          <>
      <Box
        width={150}
        margin={"30px 0 0 0"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          cursor: "pointer",
        }}
        onClick={handleOpen}
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
            sx={{ color: "white" }}
          >
            <PlayArrowOutlinedIcon fontSize="large" color="white" />
          </IconButton>
        </Typography>
        <Typography
          fontWeight={"600"}
          sx={{ textDecoration: "none", color: "#000", cursor: "pointer" }}
          onClick={handleOpen}
        >
          Our Story
        </Typography>
      </Box>
      
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '80%',
            maxWidth: 700,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/2nsRe8ct_I8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </> 
        </Box>
      </Grid>
    </Grid>

    <Grid container spacing={1} sx={{ marginTop: 4 }}>
      <Grid item xs={12} md={7}>
        <CardContent sx={{padding:'none'}}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }} padding='none'>
            <Typography
              variant="body"
              margin={'100px 0'}
              sx={{ color: "#1783FE",}}
              lineHeight={3.5}
            >
              Digi Bulk Marketing
            </Typography>
            <Box>
              <Box>
                <Typography variant="subtitle" margin={'10px 0' }>
                  Unlock Your Marketing Potential With DigiBulkMarketing!
                </Typography>
              </Box>
              <Typography
                variant="body"
                sx={{ marginBottom: 3 }}
                textAlign={'justify'} display={'flex'} margin={' 20px 0px '}
              >
                At Digi Bulk Marketing, We Are Passionate About Empowering
                Businesses With Cutting-Edge Marketing Solutions. As A Leading
                Software-Selling Company, We Specialize In Providing Robust
                Tools That Streamline Marketing Efforts, Enhance Customer
                Engagement, And Drive Growth. Our Team Of Dedicated
                Professionals Combines Technical Expertise With A Deep
                Understanding Of Market Dynamics To Deliver Innovative
                Software Products. Whether It's Email Campaigns, Social Media
                Automation, Or Data Analytics, We're Committed To Helping Our
                Clients Achieve Their Marketing Goals. Join Us On This Digital
                Journey, And Let's Transform The Way You Connect With Your
                Audience!
              </Typography>
            </Box>
            <>
      <Box
        width={150}
        margin={"30px 0 0 0"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          cursor: "pointer",
        }}
        onClick={handleOpen}
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
            sx={{ color: "white" }}
          >
            <PlayArrowOutlinedIcon fontSize="large" color="white" />
          </IconButton>
        </Typography>
        <Typography
          fontWeight={"600"}
          sx={{ textDecoration: "none", color: "#000", cursor: "pointer" }}
          onClick={handleOpen}
        >
          Our Story
        </Typography>
      </Box>
      
      <Modal
      
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
            
        }}
      >
        <Box
          sx={{
            width: '80%',
            maxWidth: 700,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/2nsRe8ct_I8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </> 
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

    <Box sx={{ marginTop: 4 }} display={'flex' } flexDirection={'column'}>
      <Typography fontWeight={600} variant="subtitle" sx={{ marginBottom: 3 }}>
        OUR VISION
      </Typography>
      <Typography align="justify" variant="body">
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

    <Grid container spacing={4} sx={{ padding: " 34px 0" }}>
      <Grid item xs={12} md={6}>
        <Typography variant="title">Trust Is Earned, </Typography>
        <Typography variant="title" > Not Given</Typography>
        <Box>
          
        <Typography align="justify" marginTop={"30px"} variant="body" >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type Lorem Ipsum has been type
        </Typography>
        </Box>
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
  </Container>;
};

export default About;
