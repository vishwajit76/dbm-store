import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import img from '../image/logo (1).png'
function Footer() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:info@digibulkmarketing.com';
      };
    
      const handlePhoneClick = () => {
        window.location.href = 'tel:18008898358';
      };
    
  return (
    
       <>
      <Container>
        <Grid container spacing={4} marginTop={10}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <img src={img} alt="Logo" style={{ maxWidth: '40%', height: 'auto' }} />
            </Box>
            <Box mt={4}>
              <Typography>Address: B204, Sumel Business Park – 7,</Typography>
              <Typography>Odhav, Ahmedabad – 382415</Typography>
              <Box display="flex" flexDirection='column' justifyContent='flex-start'>
                <Typography mt={4} onClick={handleEmailClick} style={{ cursor: 'pointer', color: 'black' }}>
                  Email: info@digibulkmarketing.com
                </Typography>
                <Typography mt={0} onClick={handlePhoneClick} style={{ cursor: 'pointer', color: 'black' }}>
                  Phone: 1800-889-8358
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3} >
            <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <Box marginTop={{ xs: '20px', sm: 0 }} textAlign='left' justifyContent={'center'} alignItems={'center'}>
                <Typography fontWeight={600}>
                  USEFUL LINKS
                </Typography>
                <Box mt={3}>
                  <ul style={{ listStyleType: 'inherit', padding: 0, margin: 0,fontWeight:"300"}}>
                    <li style={{ listStylePosition: 'inside', marginBottom: '0px',cursor: 'pointer' }}>Download</li>
                    <li style={{ listStylePosition: 'inside', cursor: 'pointer' }}>Shop</li>
                    <li style={{ listStylePosition: 'inside',cursor: 'pointer'  }}>Orders</li>
                    <li style={{ listStylePosition: 'inside', cursor: 'pointer' }}>Reseller</li>
                    <li style={{ listStylePosition: 'inside',cursor: 'pointer'  }}>FAQ</li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <Box marginTop={{ xs: '20px', sm: 0 }} textAlign={{ xs: 'center', sm: 'left' }}>
                <Typography fontWeight={600} marginRight={'65px'}>
                  NEWSLETTER
                </Typography>
                <Stack spacing={0} mt={1}>
                  <TextField variant='standard' color='black' label='Enter your Name' fullWidth />
                  <TextField variant='standard' color='black' label='Enter your email' fullWidth />
                  <Button sx={{
                    mt: 3,
                    width: '50%',
                    backgroundColor: '#',
                    color: 'white'
                  }} type="submit" variant="contained">
                    SUBSCRIBE
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: '#8C8C8C' }} margin={' 50px 0 0 0 '} padding={' 20px 0'}>
        <Container>
          <Grid container display={'flex'}>
            <Grid item xs={12} md={6}>

              <Typography fontSize={'14px'} sx={{ color: "#fff", alignItems: 'center' }}>
                Copyright © Designed & Developed by BITBEAST PRIVATE LIMITED 2023
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display={"flex"} sx={{ flexDirection: { xs: 'column', sm: "row" }, alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ color: '#fff',cursor: 'pointer' }}>Download</Typography>
                <Typography sx={{ color: '#fff', cursor: 'pointer' }}>Shop</Typography>
                <Typography sx={{ color: '#fff', cursor: 'pointer' }}>Orders</Typography>
                <Typography sx={{ color: '#fff', cursor: 'pointer' }}>Reseller</Typography>
                <Typography sx={{ color: '#fff', cursor: 'pointer' }}>FAQ</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>

  )
}

export default Footer
