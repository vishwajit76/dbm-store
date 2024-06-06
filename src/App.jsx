import { Outlet } from "react-router-dom";
import Navbar from "./component/site/navbar";
import './index.css'
import Home from "./component/user/Home";
import Shop from "./component/user/Shop";
import About from "./component/user/About";
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
  },
});
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor:"#F4F4F4"}}>

        <Navbar />
        <Home />
        <Shop />
        <About/>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
