import { Outlet } from "react-router-dom";
import Navbar from "./component/site/navbar";
import './index.css'
import Home from "./component/user/Home";
import Shop from "./component/user/Shop";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000",
    },
    khaki: {
      main: '#8E8E8E'
    }
  },
});
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
        <Shop />
      </ThemeProvider>
    </>
  );
}

export default App;
