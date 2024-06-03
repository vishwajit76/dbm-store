import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import router from './routes/index';
import App from "./App";
import './index.css'
import Home from "./component/user/Home";
import Shop from "./component/user/Shop";
import About from "./component/user/About";
import Featured from "./component/user/Featured";
import Faq from "./component/user/Faq";

// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <h1>404</h1>,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "shop",
//         element: <Shop />,  
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "featured",
//         element: <Featured />,
//       },
//       {
//         path: "faq",
//         element: <Faq />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
