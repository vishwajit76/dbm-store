import React from 'react';
import hiringImage from '../image/Image.png';
import Carousel from 'react-multi-carousel';
import { makeStyles } from '@mui/styles';
import 'react-multi-carousel/lib/styles.css';
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const useStyles = makeStyles({
  carousel: {
    padding: '100px 0 50px 0',
    textAlign: 'center'
  },
  dotList: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },
  customDot: {
    width: 40,
    height: 5,
    borderRadius: '20%',
    backgroundColor: '#1783FE',
    margin: '0 5px',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: '#7C7979'
    }
  }
});

const arrowStyle = {
  border: 1, p: 1, borderRadius: '50%', ml: 2
};

const Featured = () => {
  const classes = useStyles();

  const multiCarouselResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.8,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <Box position="absolute" top={20} right={30} display="flex" justifyContent='center' alignItems="center">
        <ArrowBackRoundedIcon onClick={previous} sx={arrowStyle} />
        <ArrowForwardRoundedIcon onClick={next} sx={arrowStyle} />
      </Box>
    );
  };

  const CustomDot = ({ onClick, active }) => {
    return (
      <li
        className={`${classes.customDot} ${active ? 'active' : ''}`}
        onClick={onClick}
      />
    );
  };

  return (
    <Box sx={{ background: '#f4f4f4' }}>
      <Container>
        <Carousel
          showDots
          customDot={<CustomDot />}
          customButtonGroup={<CustomButtonGroup />}
          arrows={false}
          swipeable={false}
          responsive={multiCarouselResponsive}
          containerClass={classes.carousel}
          dotListClass={classes.dotList}
        >
          <Card sx={{ width: '90%', textAlign: 'center', borderRadius: "15px", p: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={7} >
                <img src={hiringImage} alt="" width={300} />
              </Grid>
              <Grid item xs={12} md={5} align='left'>
                <Typography sx={{ my: "10px" }} variant='h3' fontWeight={600}>
                  20% OFF
                </Typography>
                <Typography sx={{ my: "10px" }} variant='h5'>
                  Special Christmas Day Offer
                </Typography>
                <Button variant='contained' fullWidth sx={{ borderRadius: '10px', py: 1, mt: 5 }} >Discover Now<ArrowForwardRoundedIcon /></Button>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: '90%', textAlign: 'center', borderRadius: "15px", p: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={7} >
                <img src={hiringImage} alt="" width={300} />
              </Grid>
              <Grid item  xs={12} md={5} align='left'>
                <Typography sx={{ my: "10px" }} variant='h3' fontWeight={600}>
                  20% OFF
                </Typography>
                <Typography sx={{ my: "10px" }} variant='h5'>
                  Special Christmas Day Offer
                </Typography>
                <Button variant='contained' fullWidth sx={{ borderRadius: '10px', py: 1, mt: 5 }} >Discover Now<ArrowForwardRoundedIcon /></Button>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: '90%', textAlign: 'center', borderRadius: "15px", p: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={7} >
                <img src={hiringImage} alt="" width={300} />
              </Grid>
              <Grid item  xs={12} md={5} align='left'>
                <Typography sx={{ my: "10px" }} variant='h3' fontWeight={600}>
                  20% OFF
                </Typography>
                <Typography sx={{ my: "10px" }} variant='h5'>
                  Special Christmas Day Offer
                </Typography>
                <Button variant='contained' fullWidth sx={{ borderRadius: '10px', py: 1, mt: 5 }} >Discover Now<ArrowForwardRoundedIcon /></Button>
              </Grid>
            </Grid>
          </Card>
        </Carousel>
      </Container>
    </Box>
  )
}

export default Featured;
