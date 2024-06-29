import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import {
  Box,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const [currency, setCurrency] = useState("INR");
  const [isAddIcon, setIsAddIcon] = useState(true); // State to track which icon to display
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether header is expanded

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

  const toggleIcon = () => {
    setIsAddIcon((prevState) => !prevState); // Toggle between true and false
    setIsExpanded((prevState) => !prevState); // Toggle the header height
  };

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Container
        sx={{
          height:
            isSmallScreen || isXSmallScreen
              ? isExpanded
                ? "50px"
                : "30px"
              : "auto",
          transition: "height 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
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
          {(isExpanded || (!isSmallScreen && !isXSmallScreen)) && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                flexWrap: "wrap",
              }}
            >
              <CallIcon sx={{ cursor: "pointer", fontSize: "medium" }} />
              <Typography
                onClick={handlePhoneClick}
                sx={{ cursor: "pointer", color: "#fff" }}
              >
                1800-889-8358
              </Typography>
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
              {socialMediaIcons.map((social, index) => (
                <Box
                  key={index}
                  onClick={() => window.open(social.link, "_blank")}
                  sx={{ cursor: "pointer", color: "#fff" }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          )}
        </Box>
        {isSmallScreen || isXSmallScreen ? (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: "20px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={toggleIcon}
          >
            {isAddIcon ? <AddRoundedIcon /> : <RemoveRoundedIcon />}
          </Box>
        ) : null}
      </Container>
    </div>
  );
};

export default Header;
