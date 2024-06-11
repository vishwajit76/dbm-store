import { Outlet } from "react-router-dom";
import Navbar from "./component/site/navbar";
// import './index.css'
import "../src/App.css";
import Home from "./component/user/Home";
import Shop from "./component/user/Shop";
import About from "./component/user/About";
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
// import Featured from "./component/user/Featured";
import Faq from "./component/user/Faq";
import Featured from"./component/user/Featured";
import Footer from "./component/user/Footer";


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
        <Box sx={{ bgcolor: "#F4F4F4" }}>

          <Navbar />
          <section id="home"> <Home /></section>

          <section id="shop" style={{scrollBehavior:"smooth",transition:"0.3s ease all",transitionDuration:"5s"}}><Shop /></section>

          <section id="featured"><Featured/></section>

          <section id="about"><About /></section>

          <section id="faq"> <Faq /></section>

          <Footer />
        </Box>

      </ThemeProvider>
    </>
  );
}

export default App;


