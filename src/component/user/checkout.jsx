import { Box, Button, Grid, Typography } from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import React, { useState } from "react";
import {
    TextField,
    Select,
    InputLabel,
    FormControl,
    MenuItem
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const style = {
    p: 2,
};

const Checkout = ({ onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");

    const handleSubmit = () => {
        const profileData = {
            name,
            email,
            address,
            city,
            state,
            phone,
            country,
            zip,
        };
        localStorage.setItem("profileData", JSON.stringify(profileData));
    };

    return (
        <Box sx={{ width: { xs: 250, md: 350 }, p: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                <KeyboardBackspaceRoundedIcon
                    fontSize="large"
                    cursor="pointer"
                    onClick={onClose}
                />
                <Typography fontWeight={600}>Checkout</Typography>
            </Grid>

            <Grid container spacing={5}>
                <Grid item xs={12} md={6}><Button variant='outlined' fullWidth>add address</Button></Grid>
                <Grid item xs={12} md={6}><Button variant='contained' fullWidth>make payment</Button></Grid>
            </Grid>

            <Box sx={style}>
                <Box display="flex" justifyContent="space-between" alignItems="center" >
                    <Typography variant="h6"> Address</Typography>
                </Box>
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        mt: 2,
                    }}
                >
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="home" control={<Radio />} label="Home" />
                        <FormControlLabel value="office" control={<Radio />} label="Office" />
                    </RadioGroup>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        label="Billing address"
                        variant="outlined"
                        fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="City"
                                variant="outlined"
                                fullWidth
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="State"
                                variant="outlined"
                                fullWidth
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <PhoneInput
                                inputStyle={{
                                    width: "100%",
                                    height: "55px",
                                    fontFamily: "Monospace",
                                    border: "1px solid #AEB4BE",
                                }}
                                country={"in"}
                                value={phone}
                                onChange={setPhone}
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Country</InputLabel>
                                <Select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    label="Country"
                                >
                                    <MenuItem value="US">United States</MenuItem>
                                    <MenuItem value="CA">Canada</MenuItem>
                                    <MenuItem value="GB">United Kingdom</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Zip code"
                                variant="outlined"
                                fullWidth
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Button variant="contained" onClick={handleSubmit}>
                            Checkout
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Checkout;
