import { Outlet } from "react-router-dom";
import Navbar from "./component/site/navbar";
import './index.css'
import  Home  from "./component/user/Home";

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Home/>
   
    </>
  );
}

export default App;
