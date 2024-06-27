import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  TextField,
  Button,
  Snackbar,
  SnackbarContent,
} from '@mui/material';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import validator from 'validator';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: '1px 1px 10px',
  p: 4,
};

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState('');
  const [profilePicture, setProfilePicture] = useState('/static/images/avatar/2.jpg');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateFields = () => {
    const errors = {};
    if (!validator.isAlpha(name.replace(/\s/g, ''))) {
      errors.name = 'Name must contain only letters';
    }
    if (!validator.isEmail(email)) {
      errors.email = 'Invalid email address';
    }
    if (!/^\d{6}$/.test(zip)) {
      errors.zip = 'Zip code must be exactly 6 digits';
    }
    if (!validator.isAlpha(state.replace(/\s/g, ''))) {
      errors.state = 'State must contain only letters';
    }
    if (!validator.isAlpha(country.replace(/\s/g, ''))) {
      errors.country = 'Country must contain only letters';
    }
    if (!validator.isAlpha(city.replace(/\s/g, ''))) {
      errors.city = 'City must contain only letters';
    }
    return errors;
  };

  const handleSave = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const profileData = {
        name,
        email,
        address,
        city,
        state,
        country,
        zip,
        phone,
      };
      localStorage.setItem('profileData', JSON.stringify(profileData));
      setSnackbarMessage('Profile updated successfully');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        ...style,
        width: '90%',
        maxWidth: { xs: 250, md: 600 },
        height: { xs: '70vh', md: 'auto' },
        overflow: 'auto',
      }}
    >
      <Typography fontSize={'26px'} fontWeight={300} gutterBottom>
        Edit Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
          <Avatar
            alt="N"
            src={profilePicture}
            sx={{ width: 100, height: 100, margin: '0 auto', cursor: 'pointer' }}
            onClick={() => document.getElementById('profile-picture-upload').click()}
          />
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="profile-picture-upload"
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item xs={12} md={9} container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              variant="outlined"
              required
              error={!!errors.name}
              helperText={errors.name}
              onChange={(e) => setName(e.target.value)}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PhoneInput
              inputStyle={{
                width: '100%',
                height: '40px',
                fontFamily: 'Monospace',
                border: '1px solid #AEB4BE',
              }}
              country={'in'}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputProps={{
                name: 'phone',
                required: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              value={email}
              required
              error={!!errors.email}
              helperText={errors.email}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Your Address"
              multiline
              rows={5}
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="Your City"
                  value={city}
                  required
                  error={!!errors.city}
                  helperText={errors.city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Your State"
                  size="small"
                  value={state}
                  required
                  error={!!errors.state}
                  helperText={errors.state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Country"
                  size="small"
                  value={country}
                  required
                  error={!!errors.country}
                  helperText={errors.country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Zip Code"
                  size="small"
                  value={zip}
                  required
                  error={!!errors.zip}
                  helperText={errors.zip}
                  onChange={(e) => setZip(e.target.value)}
                  inputProps={{ maxLength: 6 }}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={handleSave}
                  autoFocus
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarContent
          message={snackbarMessage}
          sx={{ backgroundColor: '#0084fe', color: '#fff' }}
        />
      </Snackbar>
    </Box>
  );
};

export default EditProfile;
