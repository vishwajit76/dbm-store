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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
    
    </div>
  );
}
