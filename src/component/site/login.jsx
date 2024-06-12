import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import { MuiOtpInput } from "mui-one-time-password-input";
import "react-phone-input-2/lib/style.css";
import { Box, Button, CircularProgress } from '@mui/material';
function login({ onClose }) {
    const handleChange = (newValue) => {
        setOtp(newValue);
    };
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState();
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSendOtp = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOtpSent(true);
        }, 2000);
    };
    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onClose()
        }, 1500);
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
                    {otpSent ? (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: 1,
                                }}
                            >
                                <MuiOtpInput
                                    value={otp}
                                    onChange={handleChange}
                                    length={6}
                                    gap={2}
                                    style={{ width: "450px" }}
                                />
                            </Box>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleSubmit}
                            >
                                {loading ? <CircularProgress size={24} color='white'/> : "Submit"}
                            </Button>
                        </>
                    ) : (
                        <>
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
                                {loading ? <CircularProgress size={24} color='white' /> : "Send Otp"}
                            </Button>
                        </>
                    )}
                </Box>
            </Box>
        </div>
    )
}
export default login