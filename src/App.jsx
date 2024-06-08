import { Outlet } from "react-router-dom";
import Navbar from "./component/site/navbar";
import './index.css'
import Home from "./component/user/Home";
import Shop from "./component/user/Shop";
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Featured from "./component/user/Featured";
import Faq from "./component/user/Faq";


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif', // Replace 'YourDesiredFontFamily' with your preferred font family
  },
  palette: {
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000",
    },
    khaki: {
      main: '#8E8E8E'
    },
    mainBg: {
      main: '#F4F4F4'
    },
    gray: {
      main: '#adadaade'
    }
  },
});
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ background: 'mainBg'}}>
          <Navbar />
          <Home />
          <Shop />
          <Featured />
          <Faq />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
