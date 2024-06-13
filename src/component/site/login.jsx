import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { MuiOtpInput } from 'mui-one-time-password-input';
import 'react-phone-input-2/lib/style.css';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
function Login({ onClose }) {
    const handleChange = (newValue) => {
        setOtp(newValue);
    };
    const [number, setNumber] = useState('');
    const [otp, setOtp] = useState('');
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
            onClose();
        }, 1500);
    };
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: { xs: '100%', sm: 400, md: 500 },
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 2,
            }}
        >
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    margin: '0 auto',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: 1,
                    boxShadow: 3,
                    p: { xs: 1, sm: 2 }, 
                }}
            >
                {otpSent ? (
                    <>
                        <Typography variant="h6" sx={{ textAlign: 'center' }}>
                            Enter OTP
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 1,
                                width: '100%',
                            }}
                        >
                            <MuiOtpInput
                                value={otp}
                                onChange={handleChange}
                                length={6}
                                gap={1}
                                sx={{
                                    width: '100%',
                                    maxWidth: '450px',
                                    '& input': {
                                        width: { xs: '30px', sm: '40px', md: '50px' },
                                    },
                                }}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleSubmit}
                            sx={{ alignSelf: 'center', width: { xs: '100%', sm: 'auto' } }}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h6" sx={{ textAlign: 'center' }}>
                            Enter Phone Number
                        </Typography>
                        <PhoneInput
                            inputStyle={{
                                width: '100%',
                                height: '40px',
                                fontFamily: 'Monospace',
                                border: '1px solid #AEB4BE',
                            }}
                            containerStyle={{ width: '100%' }} 
                            country={'in'}
                            value={number}
                            onChange={(value) => setNumber(value)}
                            inputProps={{
                                name: 'phone',
                                required: true,
                                type: 'tel',
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSendOtp}
                            disabled={!number}
                            sx={{ alignSelf: 'center', width: { xs: '90%', sm: 'auto' } }} // Full-width button for xs screens
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Send OTP'}
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
}
export default Login;