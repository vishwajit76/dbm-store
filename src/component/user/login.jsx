import React from 'react'
import PhoneInput from "react-phone-input-2";
import { MuiOtpInput } from "mui-one-time-password-input";
import "react-phone-input-2/lib/style.css";
import { Box, Button } from '@mui/material';

function login() {

    const handleChange = (newValue) => {
        setOtp(newValue);
      };


    const [number, setNumber] = useState("");
  const [otp, setOtp] = useState();
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Simulate sending OTP
    setOtpSent(true);
  };
  const handleSubmit = () => {
    // Handle form submission
    // alert(`Number: ${number}, OTP: ${otp.join("")}`);
  };

  

 

  return (

    <div>
     
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "90%",
                    maxWidth: { xs: 250, md: 400 },
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      margin: "0 auto",
                      padding: 3,
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: 1,
                      boxShadow: 3,
                    }}
                  >
                    {!otpSent && (
                      <>
                        {/* <TextField
                          label="Enter Number"
                          variant="outlined"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          required

                        /> */}
                        <PhoneInput
                          inputStyle={{
                            width: "100%",
                            height: "40px",
                            fontFamily: "Monospace",
                            border: "1px solid #AEB4BE",
                          }}
                          country={"in"}
                          value={number}
                          onChange={(value) => setNumber(value)}
                          inputProps={{
                            name: "phone",
                            required: true,
                            type: "tel",
                          }}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSendOtp}
                          disabled={!number}
                        >
                          Send OTP
                        </Button>
                      </>
                    )}
                    {otpSent && (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 1,
                          }}
                        >
                          {/* {otp.map((digit, index) => ( */}
                          <MuiOtpInput
                            value={otp}
                            onChange={handleChange}
                            length={6}
                            gap={2}
                            style={{ width: "450px" }}
                          />

                          {/* ))} */}
                        </Box>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                      </>
                    )}
                  </Box>
                </Box>
              
    </div>
  )
}

export default login
