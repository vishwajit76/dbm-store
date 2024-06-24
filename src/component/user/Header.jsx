import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Box,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const Header = () => {
  const [currency, setCurrency] = useState("INR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@digibulkmarketing.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:18008898358";
  };

  const socialMediaIcons = [
    { icon: <XIcon fontSize="small" />, link: "https://www.twitter.com" },
    {
      icon: <FacebookIcon fontSize="small" />,
      link: "https://www.facebook.com",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://www.instagram.com",
    },
  ];

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ cursor: "pointer", fontSize: "medium" }} />
            <Typography
              onClick={handleEmailClick}
              sx={{ cursor: "pointer", color: "#fff", ml: 1 }}
            >
              info@digibulkmarketing.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <CallIcon sx={{ cursor: "pointer", fontSize: "medium" }} />
            <Typography
              onClick={handlePhoneClick}
              sx={{ cursor: "pointer", color: "#fff" }}
            >
              1800-889-8358
            </Typography>
          </Box>
          <FormControl variant="standard" sx={{ color: "#fff" }}>
            <Select
              labelId="currency-select-label"
              id="currency-select"
              value={currency}
              onChange={handleChange}
              label="Currency"
              sx={{
                ".MuiSelect-icon": { color: "#fff" },
                ".MuiInputBase-input": { color: "#fff", cursor: "pointer" },
                cursor: "pointer",
              }}
            >
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            {socialMediaIcons.map((social, index) => (
              <Box
                key={index}
                onClick={() => window.open(social.link, "_blank")}
                sx={{ cursor: "pointer" }}
              >
                {social.icon}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
