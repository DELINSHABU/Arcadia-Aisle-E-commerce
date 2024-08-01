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
        path: "/viewsDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const response = await fetch(`/PopularItem.json`);
          const data = await response.json();
          return data.find(item => item.id === params.id);
        }
      }, {
        path: "/cart",
        element: <Cart></Cart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
