import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Products from "../Pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
                path:"/",
                element: <Home/>
        },
        {
                path:"/home",
                element: <Home/>
        },
        {
                path:"/about",
                element: <About/>
        },
        {
                path:"/products",
                element: <Products/>
        },
        {
                path:"/service",
                element: <Service/>
        }
],
  },
]);
export default router;
