import React from "react";
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
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const about = () => {
  return (
    <Box sx={{ bgcolor:"#F4F4F4"}}>
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px 0",
        bgcolor:"#F4F4F4"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "16px",
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={8} >
            <CardContent>
              
              <Typography variant="h5" gutterBottom fontWeight={600} fontSize={'25px'}>
                Hassle Free Installation & Support Assistance Remotely
              </Typography>
              <Typography variant="subtitle1" gutterBottom color={'#9A9A9A'} fontWeight={600}>
                AnyWhere. AnyTime. AnyDesk
              </Typography>
              <Typography variant="body1" gutterBottom color={'#9A9A9A'}  align="justify">
                Installation assistance is a Free service offered by Digi Bulk Marketing which allows the clients to sit back and relax while we install the application to their target Windows Desktop & Laptop. If you are a potential customer or an existing client who wishes to install Digi Bulk Marketing to a computer, and do not want to get into the hassle of installation process, our expert team will do it for you. The application will be installed via AnyDesk. No physical access required to target Desktop to install the application.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

              <Button variant="contained" color="primary"  >
                Download Anydesk
              </Button>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={12}  md={4}>
          <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:"auto",
    flexWrap:'nowrap',
    
    
    width: { xs: "80%", sm: "100%", md: "100%" }, // Adjust the percentage based on your design needs
  }}
>
  <img src={img1} alt="Your Image" style={{ maxWidth: "100%", height: "auto" }} />
</Box>
</Grid>


        </Grid>
      </Box>
    </Container>
    

    <Container sx={{ padding: 4 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5}>
        <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    flexWrap: 'nowrap',
    width: { xs: '250px', sm: '250px', md: '380px' }, // Set the width for different breakpoints
  }}
>
  <img src={img2} alt="Your Image" style={{ maxWidth: "100%", height: "auto" }} />
</Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ color: '#1783FE', marginBottom: 2 }}>
              Digi Bulk Marketing
            </Typography>
            <Typography fontSize={'30px'} fontWeight={600} sx={{ marginBottom: 3 }}>
              Unlock Your Marketing Potential With DigiBulkMarketing!
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }} align="justify">
              At Digi Bulk Marketing, We Are Passionate About Empowering Businesses With Cutting-Edge Marketing Solutions. As A Leading Software-Selling Company, We Specialize In Providing Robust Tools That Streamline Marketing Efforts, Enhance Customer Engagement, And Drive Growth. Our Team Of Dedicated Professionals Combines Technical Expertise With A Deep Understanding Of Market Dynamics To Deliver Innovative Software Products. Whether It's Email Campaigns, Social Media Automation, Or Data Analytics, We're Committed To Helping Our Clients Achieve Their Marketing Goals. Join Us On This Digital Journey, And Let's Transform The Way You Connect With Your Audience!
            </Typography>
            
            
            <Box width={150} margin={'30px 0 0 0'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <Typography bgcolor={'#1783FE'} height={'50px'} width={'50px'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} >
                <PlayArrowOutlinedIcon fontSize='large' color='white'  />
              </Typography>
              <Typography >
                Our Story
              </Typography>
            </Box>  

          </Box>
        </Grid>
      </Grid>
    </Container>


    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px 0",
        bgcolor:"#F4F4F4"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "16px",
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={7} >
            <CardContent>
              
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ color: '#1783FE', marginBottom: 2 }}>
              Digi Bulk Marketing
            </Typography>
            <Typography fontSize={'30px'} fontWeight={600} sx={{ marginBottom: 3 }}>
              Unlock Your Marketing Potential With DigiBulkMarketing!
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }} align="justify">
              At Digi Bulk Marketing, We Are Passionate About Empowering Businesses With Cutting-Edge Marketing Solutions. As A Leading Software-Selling Company, We Specialize In Providing Robust Tools That Streamline Marketing Efforts, Enhance Customer Engagement, And Drive Growth. Our Team Of Dedicated Professionals Combines Technical Expertise With A Deep Understanding Of Market Dynamics To Deliver Innovative Software Products. Whether It's Email Campaigns, Social Media Automation, Or Data Analytics, We're Committed To Helping Our Clients Achieve Their Marketing Goals. Join Us On This Digital Journey, And Let's Transform The Way You Connect With Your Audience!
            </Typography>
            <Box width={150} margin={'30px 0 0 0'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <Typography bgcolor={'#1783FE'} height={'50px'} width={'50px'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} >
                <PlayArrowOutlinedIcon fontSize='large' color='white'  />
              </Typography>
              <Typography>
                Our Story
              </Typography>
            </Box>
            
          </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

              
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={12}  md={5}>
          <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:"auto",
    flexWrap:'nowrap',
    width: { xs: '250px', sm: '250px', md: '350px' },
    
   // Adjust the percentage based on your design needs
  }}
>
  <img src={img3} alt="Your Image" style={{ maxWidth: "100%", height: "auto" }} />
</Box>
</Grid>


        </Grid>
      </Box>
    </Container>
    </Box>
  );
};

export default about;
