import { Box, Button, Grid, Typography } from '@mui/material';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
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
    const [selectedOption, setSelectedOption] = useState('home');

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: ''
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            country: '',
            zip: ''
        };

        // Validate name
        if (!name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        } else if (!/^[a-zA-Z\s]*$/.test(name)) {
            newErrors.name = 'Name should only contain letters and spaces';
            valid = false;
        }

        // Validate email
        if (!email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        // Validate phone number
        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required';
            valid = false;
        } else if (!/^\d{12}$/.test(phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
            valid = false;
        }

        // Validate address
        if (!address.trim()) {
            newErrors.address = 'Address is required';
            valid = false;
        }

        // Validate city
        if (!city.trim()) {
            newErrors.city = 'City is required';
            valid = false;
        }

        // Validate state
        if (!state.trim()) {
            newErrors.state = 'State is required';
            valid = false;
        }

        // Validate country
        if (!country.trim()) {
            newErrors.country = 'Country is required';
            valid = false;
        }

        // Validate zip code
        if (!zip.trim()) {
            newErrors.zip = 'Zip code is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        const isValid = validateForm();

        if (isValid) {
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
        }
    };

    return (
        <Box sx={{ width: { xs: 250, md: 350 }, p: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between" mb={3}>
                <Grid item>

                <NavigateBeforeRoundedIcon
                    fontSize="large"
                    cursor="pointer"
                    onClick={onClose}
                    />
                    </Grid>
                   

                
                <Typography fontWeight={600}  align="center">Checkout</Typography>
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
    value={selectedOption}
    onChange={(e) => setSelectedOption(e.target.value)}
>
    <FormControlLabel value="home" control={<Radio />} label="Home" />
    <FormControlLabel value="office" control={<Radio />} label="Office" />
</RadioGroup>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                            {errors.phone && (
                                <Typography variant="caption" color="error">
                                    {errors.phone}
                                </Typography>
                            )}
                        </Grid> 
                        <Grid item xs={12}>
                            <TextField
                                label="Billing address"
                                variant="outlined"
                                fullWidth
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                error={!!errors.address}
                                helperText={errors.address}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="City"
                                variant="outlined"
                                fullWidth
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                error={!!errors.city}
                                helperText={errors.city}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="State"
                                variant="outlined"
                                fullWidth
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                error={!!errors.state}
                                helperText={errors.state}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                                label="Country"
                                variant="outlined"
                                fullWidth
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                error={!!errors.country}
                                helperText={errors.country}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Zip code"
                                variant="outlined"
                                fullWidth
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                error={!!errors.zip}
                                helperText={errors.zip}
                            />
                        </Grid>
                    </Grid>
                    <Box display="flex" justifyContent="space-between" mt={2} >
                        {/* <Button variant="contained" onClick={handleSubmit} fullWidth>
                            Place order
                        </Button> */}

<Button
                variant="contained"
                color="black"
                sx={{ color: '#fff', borderRadius: '10px', p: 2 }}
                fullWidth
                // disabled={isInCart() > 0}
                // onClick={addToCartHandler}
            >
                Place order {/* {loading ? <CircularProgress size={24} color='inherit' /> : "Add to Cart"} */}
            </Button>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default Checkout;
