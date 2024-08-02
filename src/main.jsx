import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Page/Home/Home.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
import Cart from './Components/Cart.jsx';
import AllProducts from './Page/AllProducts/AllProducts.jsx';
import 'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const response = await fetch(`/AllProducts.json`);
          const data = await response.json();
          return  data.find(item => item.id == params.id);
        }
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      }
      ,
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
