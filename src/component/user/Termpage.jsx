// import React from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';

// const TermsAndConditions = () => {
//   const handleButtonClick = () => {
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjgzZWFjYWI3ZWZmZDNmMGM5YzFlNyIsImlhdCI6MTcxODYxNjA5MiwiZXhwIjoxNzIxMjA4MDkyfQ.I5oGxvPrMGTqwvZRsUhCc-V3Bmi8TtB_8KtwPeHJY3s  '; // Replace with your actual token

//     const axiosInstance = axios.create({
//       baseURL: 'https://api.digibulkmarketing.com',
//       // timeout: 1000,
//       headers: { 
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}` // Include the token here
//       }
//     });

//     axiosInstance.post('/user/pages', {
//       // Include any data you need to send in the request body here
//     })
//     .then(response => {
//       console.log('Success:', response.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleButtonClick}>
//         Accept Terms and Conditions
//       </Button>
//     </div>
//   );
// };

// export default TermsAndConditions;
// import React, { useState } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';

// const TermsAndConditions = () => {
//   const [responseData, setResponseData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleButtonClick = async () => {
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjgzZWFjYWI3ZWZmZDNmMGM5YzFlNyIsImlhdCI6MTcxODYxNjA5MiwiZXhwIjoxNzIxMjA4MDkyfQ.I5oGxvPrMGTqwvZRsUhCc-V3Bmi8TtB_8KtwPeHJY3s'; // Replace with your actual token

//     const axiosInstance = axios.create({
//       baseURL: 'https://api.digibulkmarketing.com',
//       headers: { 
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     });

//     try {
//       const response = await axiosInstance.post('/user/pages', {});
//       console.log('Response:', response.data); // Debugging line to check response data
//       setResponseData(response.data);
//       setError(null); 
//     } catch (error) {
//       console.error('Error:', error.message); // Debugging line to check error
//       setError(error.message); 
//       setResponseData(null); 
//     }
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleButtonClick}>
//         Accept Terms and Conditions
//       </Button>
//       {responseData && (
//         <div>
//           <h3>Response Data:</h3>
//           <pre>{JSON.stringify(responseData, null, 2)}</pre>
//         </div>
//       )}
//       {error && (
//         <div style={{ color: 'red' }}>
//           <h3>Error:</h3>
//           <pre>{error}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TermsAndConditions;




import * as React from 'react';
import { Box, Button, Typography, Modal, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import Paypal from '../image/paypal.png';
import razorpay from '../image/razorpay.png';
import Stripe from '../image/stripe.png';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState('Razorpay');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePlaceOrder = () => {
    console.log('Selected Payment Method:', selectedPaymentMethod);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 400 },
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" display={'flex'} justifyContent={'center'} variant="h4" component="h2" gutterBottom>
            View Payment Details
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
            Price Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2" fontSize={'18px'}>Price</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography variant="body2" fontSize={'18px'}>1200</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" fontSize={'18px'}>Quantity</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography variant="body2" fontSize={'18px'}>1</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" fontSize={'18px'}>Total</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography variant="body2" fontSize={'18px'}>1200</Typography>
            </Grid>
          </Grid>
          <Box my={2}>
            <Typography variant="h6" component="div">
              Payment Method
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="payment-method"
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <FormControlLabel
                  value="Razorpay"
                  control={<Radio />}
                  label={ 
                    <Box display="flex" alignItems="center">
                      <img src={razorpay} alt="Razorpay" width="100px" style={{ background: 'white', marginRight: '10px' }} />
                      <Typography noWrap fontWeight={600}>Payment With RazorPay</Typography>
                    </Box>
                  }
                />
                <FormControlLabel
                  value="Stripe"
                  control={<Radio />}
                  label={
                    <Box display="flex" alignItems="center">
                      <img src={Stripe} alt="Stripe" width="100px" style={{ background: 'white', marginRight: '10px' }} />
                      <Typography noWrap fontWeight={600}>Payment With Stripe</Typography>
                    </Box>
                  }
                />
                <FormControlLabel
                  value="Paypal"
                  control={<Radio />}
                  label={
                    <Box display="flex" alignItems="center">
                      <img src={Paypal} alt="Paypal" width="100px" style={{ background: 'white', marginRight: '10px' }} />
                      <Typography noWrap fontWeight={600}>Payment With PayPal</Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Grid container spacing={2} display={'flex'} justifyContent="space-between">
            
              <Button onClick={handleClose} color="primary" variant="contained" >
                Back To Checkout Details
              </Button>
           
              <Button variant="contained" color="primary"  onClick={handlePlaceOrder}>
                Place Order
              </Button>
       
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
