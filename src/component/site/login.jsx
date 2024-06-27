// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import { MuiOtpInput } from "mui-one-time-password-input";
// import "react-phone-input-2/lib/style.css";
// import { Box, Button, CircularProgress, Snackbar, SnackbarContent, Typography } from "@mui/material";
// import { useDispatch } from 'react-redux';
// import { setToken, setUserDetail } from '../../redux/auth/authSlice';
// import axiosInstance from '../../util/axiosInstance';

// function Login({ onClose }) {
//   const [number, setNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false); 
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success");
//   const dispatch = useDispatch();

//   const handleChange = (newValue) => {
//     setOtp(newValue);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   const handleSendOtp = async () => {
//     if (!otpSent) { 
//       setLoading(true);
//       const data = {
//         phone: "+" + number,
//         master_reseller_id: "626f85e0544a264104223e37",
//         auth_type: "phone",
//       };

//       try {
//         const response = await axiosInstance.post('user/send-otp', data);

//         if (response.status !== 200) {
//           throw new Error("Network response was not ok");
//         }

//         setLoading(false);
//         setOtpSent(true); // Mark OTP as sent
//         setSnackbarMessage("OTP sent successfully!");
//         setSnackbarSeverity("success");
//         setSnackbarOpen(true);
//       } 
//       catch (error) {
//         console.error("Error sending OTP:", error);
//         setLoading(false);
//         setError("Failed to send OTP. Please try again."); // Set error state
//         setSnackbarMessage("Failed to send OTP. Please try again.");
//         setSnackbarSeverity("error");
//         setSnackbarOpen(true);
//       }
//     }
//   };

//   const handleVerifyOtp = async () => {
//     setLoading(true);
//     const data = {
//       phone: "+" + number,
//       otp: otp,
//       master_reseller_id: "626f85e0544a264104223e37",
//       auth_type: "phone",
//     };

//     try {
//       const response = await axiosInstance.post('user/verify-otp', data);

//       if (response.status !== 200) {
//         throw new Error("Network response was not ok");
//       }

//       const result = response.data;

//       setLoading(false);
//       if (result.status) {
//         dispatch(setToken(result));
//         dispatch(setUserDetail(result));
//         setSnackbarMessage("OTP verified successfully!");
//         setSnackbarSeverity("success");
//         setSnackbarOpen(true);
//         onClose();
//       } else {
//         setError("Invalid OTP. Please try again.");
//         setSnackbarMessage("Invalid OTP. Please try again.");
//         setSnackbarSeverity("error");
//         setSnackbarOpen(true);
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setLoading(false);
//       setError("Failed to verify OTP. Please try again.");
//       setSnackbarMessage("Failed to verify OTP. Please try again.");
//       setSnackbarSeverity("error");
//       setSnackbarOpen(true);
//     }
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "90%",
//           maxWidth: { xs: "80%", sm: 250, md: 300 },
//           bgcolor: "background.paper",
//           boxShadow: 24,
//           p: { xs: 2, sm: 3, md: 4 },
//           borderRadius: 2,
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//         }}
//       >
//         {otpSent ? (
//           <>
//             <Typography variant="h6" sx={{ textAlign: "center", mb: 1 , color:'white' }}>
//               Enter OTP
//             </Typography>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 gap: 1,
//                 width: "100%",
//               }}
//             >
//               <MuiOtpInput
//                 value={otp}
//                 onChange={handleChange}
//                 length={6}
//                 gap={1}
//                 autoFocus
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     handleVerifyOtp();
//                   }
//                 }}
//                 sx={{
//                   width: "100%",
//                   maxWidth: "450px",
//                   "& input": {
//                     width: { xs: "30px", sm: "40px", md: "50px" },
//                   },
//                 }}
//               />
//             </Box>
//             <Button
//               fullWidth
//               variant="contained"
              
//               onClick={handleVerifyOtp}
//               sx={{ mt: 2 , backgroundColor:'#0084fe' , color:'#fff'}}
//               disabled={!otp || loading}
//             >
//               {loading ? (
//                 <CircularProgress size={24} color="inherit" />
//               ) : (
//                 "Submit"
//               )}
//             </Button>
            
//             {error && (
//               <Typography variant="body2" color="error" sx={{ mt: 2, textAlign: "center" }}>
//                 {error}
//               </Typography>
//             )}
            
//           </>
//         ) : (
//           <>
//             <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
//               Enter Phone Number
//             </Typography>
//             <PhoneInput
//               inputStyle={{
//                 width: "100%",
//                 height: "40px",
//                 fontFamily: "Monospace",
//                 border: "1px solid #AEB4BE",
//                 marginBottom: "16px",
//               }}
//               containerStyle={{ width: "100%" }}
//               country={"in"}
//               value={number}
//               onChange={(value) => setNumber(value)}
//               inputProps={{
//                 name: "phone",
//                 required: true,
//                 type: "tel",
//               }}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleSendOtp();
//                 }
//               }}
//             />
//             <Button
//               fullWidth
//               variant="contained"
           
//               onClick={handleSendOtp}
//               disabled={!number || loading}
//               sx={{ mt: 2 , backgroundColor:'#0084fe' , color:'#fff'}}
//             >
//               {loading ? (
//                 <CircularProgress size={24} color="inherit" />
//               ) : (
//                 "Send OTP"
//               )}
//             </Button>
//             {error && (
//               <Typography variant="body2" color="error" sx={{ mt: 2, textAlign: "center" }}>
//                 {error}
//               </Typography>
//             )}
//           </>
//         )}
//       </Box>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//       >
//         <SnackbarContent
//           message={snackbarMessage}
//           sx={{
//             backgroundColor: snackbarSeverity === "#0084fe" ? '#0084fe' : '#0084fe',

//             color: '#fff'
//           }}
//         />
//       </Snackbar>
//     </>
//   );
// }

// export default Login;



import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { MuiOtpInput } from "mui-one-time-password-input";
import "react-phone-input-2/lib/style.css";
import {
  Box,
  Button,
  CircularProgress,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setToken, setUserDetail } from "../../redux/auth/authSlice";
import axiosInstance from "../../util/axiosInstance";

function Login({ onClose }) {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [showModal, setShowModal] = useState(true); // New state for modal display
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSendOtp = async () => {
    if (!otpSent) {
      setLoading(true);
      const data = {
        phone: "+" + number,
        master_reseller_id: "626f85e0544a264104223e37",
        auth_type: "phone",
      };

      try {
        const response = await axiosInstance.post("user/send-otp", data);

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        setLoading(false);
        setOtpSent(true);
        setSnackbarMessage("OTP sent successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      } catch (error) {
        console.error("Error sending OTP:", error);
        setLoading(false);
        setError("Failed to send OTP. Please try again.");
        setSnackbarMessage("Failed to send OTP. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    const data = {
      phone: "+" + number,
      otp: otp,
      master_reseller_id: "626f85e0544a264104223e37",
      auth_type: "phone",
    };

    try {
      const response = await axiosInstance.post("user/verify-otp", data);

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const result = response.data;

      setLoading(false);
      if (result.status) {
        dispatch(setToken(result));
        dispatch(setUserDetail(result));
        setSnackbarMessage("OTP verified successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        // Close the modal after verifying OTP and delay the onClose call
        setShowModal(false);
        setTimeout(() => {
          onClose();
        }, 500); // Adjust the delay as needed
      } else {
        setError("Invalid OTP. Please try again.");
        setSnackbarMessage("Invalid OTP. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setLoading(false);
      setError("Failed to verify OTP. Please try again.");
      setSnackbarMessage("Failed to verify OTP. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      {showModal && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: { xs: "80%", sm: 250, md: 300 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {otpSent ? (
            <>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", mb: 1, color: "white" }}
              >
                Enter OTP
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  width: "100%",
                }}
              >
                <MuiOtpInput
                  value={otp}
                  onChange={handleChange}
                  length={6}
                  gap={1}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleVerifyOtp();
                    }
                  }}
                  sx={{
                    width: "100%",
                    maxWidth: "450px",
                    "& input": {
                      width: { xs: "30px", sm: "40px", md: "50px" },
                    },
                  }}
                />
              </Box>
              <Button
                fullWidth
                variant="contained"
                onClick={handleVerifyOtp}
                sx={{ mt: 2, backgroundColor: "#0084fe", color: "#fff" }}
                disabled={!otp || loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Submit"
                )}
              </Button>
              {error && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ mt: 2, textAlign: "center" }}
                >
                  {error}
                </Typography>
              )}
            </>
          ) : (
            <>
              <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
                Enter Phone Number
              </Typography>
              <PhoneInput
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  fontFamily: "Monospace",
                  border: "1px solid #AEB4BE",
                  marginBottom: "16px",
                }}
                containerStyle={{ width: "100%" }}
                country={"in"}
                value={number}
                onChange={(value) => setNumber(value)}
                inputProps={{
                  name: "phone",
                  required: true,
                  type: "tel",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendOtp();
                  }
                }}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={handleSendOtp}
                disabled={!number || loading}
                sx={{ mt: 2, backgroundColor: "#0084fe", color: "#fff" }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Send OTP"
                )}
              </Button>
              {error && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ mt: 2, textAlign: "center" }}
                >
                  {error}
                </Typography>
              )}
            </>
          )}
        </Box>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <SnackbarContent
          message={snackbarMessage}
          sx={{
            backgroundColor:
              snackbarSeverity === "success" ? "#4caf50" : "#f44336",
            color: "#fff",
          }}
        />
      </Snackbar>
    </>
  );
}

export default Login;
