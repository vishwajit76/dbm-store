import { Outlet } from "react-router-dom";
import Navbar from "./component/site/navbar";
import './index.css'
import  Home  from "./component/user/Home";
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
  },
});
function App() {

  return (
    <>
     <ThemeProvider theme={theme}>
      <Navbar/>
      <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;
