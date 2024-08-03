import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Page/Home/Home";
import App from "../App";
import ViewDetails from "../Components/ViewDetails";
import Cart from "../Components/Cart";
import AllProducts from "../Page/AllProducts/AllProducts";
import Sari from "../Page/Sari/Sari";
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
                    return data.find(item => item.id == params.id);
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
            },
            {
                path: "/sari",
                element: <Sari></Sari>
            },
        ]
    },
]);
export default router;