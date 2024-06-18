// import { Outlet } from "react-router-dom";
// import Navbar from "./component/site/navbar";
// // import './index.css'
// import "../src/App.css";
// import Home from "./component/user/Home";
// import Shop from "./component/user/Shop";
// import About from "./component/user/About";
// import { Box, createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
// // import Featured from "./component/user/Featured";
// import Faq from "./component/user/Faq";
// import Featured from "./component/user/Featured";
// import Footer from "./component/user/Footer";
// import Termpage from "./component/user/Termpage";
// // import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   typography: {
//     fontFamily: 'Montserrat, Arial, sans-serif',
//     fontSize: {
//       fontWeight: 600,
//       fontSize: '1.875rem', // 30px base size for h3
//       [theme.breakpoints.up('sm')]: {
//         fontSize: '2.5rem', // 40px for small screens and up
//       },
//       [theme.breakpoints.up('md')]: {
//         fontSize: '3.125rem', // 50px for medium screens and up
//       },
//     },
//   },
//   palette: {
//     white: {
//       main: "#ffffff",
//     },
//     black: {
//       main: "#000",
//     },
//     khaki: {
//       main: '#8E8E8E'
//     },
//     mainBg: {
//       main: '#F4F4F4'
//     },
//     gray: {
//       main: '#adadaade'
//     },
//     green: {
//       main: '#21E500'
//     }
//   },
// });
// function App() {

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Box sx={{ bgcolor: "#F4F4F4" }}>
//             <Navbar />

//           <section id="home"><Home /></section>

//           <section id="shop"><Shop /></section>

//           <section id="featured"><Featured /></section>

//           <section id="about"><About /></section>

//           <section id="faq"> <Faq /></section>
//  <Termpage/>
//           <Footer />
//         </Box>

//       </ThemeProvider>
//     </>
//   );
// }

// export default App;


import React from "react";
import { ThemeProvider, Box, createTheme } from "@mui/material";
import Navbar from "./component/site/navbar";
import Home from "./component/user/Home";
import Shop from "./component/user/Shop";
import About from "./component/user/About";
import Faq from "./component/user/Faq";
import Featured from "./component/user/Featured";
import Footer from "./component/user/Footer";
import Termpage from "./component/user/Termpage";

// Define the theme directly inside App.js
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem', // 30px base size for h3
      '@media (min-width:600px)': {
        fontSize: '2.5rem', // 40px for small screens and up
      },
      '@media (min-width:900px)': {
        fontSize: '3.125rem', // 50px for medium screens and up
      },
    },
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
    },
    green: {
      main: '#21E500'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#F4F4F4" }}>
        <Navbar />
        <section id="home"><Home /></section>
        <section id="shop"><Shop /></section>
        <section id="featured"><Featured /></section>
        <section id="about"><About /></section>
        <section id="faq"><Faq /></section>
        <Termpage />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
