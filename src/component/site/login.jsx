import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { MuiOtpInput } from "mui-one-time-password-input";
import "react-phone-input-2/lib/style.css";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
// import { Phone } from "@mui/icons-material";
import { useSelector, useDispatch } from 'react-redux';
import { setToken, setUserDetail } from '../../redux/user/userSlice';

function Login({ onClose , onLogin }) {
  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false); // State to track if OTP has been sent
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();


  const handleSendOtp = async () => {
    if (!otpSent) { // Check if OTP has already been sent
      setLoading(true);
      const data = {
        phone: "+" + number,
        master_reseller_id: "626f85e0544a264104223e37",
        auth_type: "phone",
      };

      try {
        const response = await fetch("https://api.digibulkmarketing.com/user/send-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Include any additional headers as needed
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        setLoading(false);
        setOtpSent(true); // Mark OTP as sent
      } catch (error) {
        console.error("Error sending OTP:", error);
        setLoading(false);
        setError("Failed to send OTP. Please try again."); // Set error state
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
      const response = await fetch("https://api.digibulkmarketing.com/user/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include any additional headers as needed
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      setLoading(false);
      if (result.status) {
        onClose();
        onLogin()
        dispatch(setToken(result.token))
        dispatch(setUserDetail(result))
        console.log(result);
      } else {
        setError("Invalid OTP. Please try again."); // Set error state for unsuccessful verification
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setLoading(false);
      setError("Failed to verify OTP. Please try again."); // Set error state
    }
  };

  return (
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
          <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
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
            color="secondary"
            onClick={handleVerifyOtp}
            sx={{ mt: 2 }}
            disabled={!otp || loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit"
            )}
          </Button>
          {error && (
            <Typography variant="body2" color="error" sx={{ mt: 2, textAlign: "center" }}>
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
            color="primary"
            onClick={handleSendOtp}
            disabled={!number || loading}
            sx={{ mt: 2 }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Send OTP"
            )}
          </Button>
          {error && (
            <Typography variant="body2" color="error" sx={{ mt: 2, textAlign: "center" }}>
              {error}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
}

export default Login;
