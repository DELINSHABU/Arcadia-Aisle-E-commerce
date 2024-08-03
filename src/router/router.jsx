import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Page/Home/Home";
import App from "../App";
import ViewDetails from "../Components/ViewDetails";
import Cart from "../Components/Cart";
import AllProducts from "../Page/AllProducts/AllProducts";
import Sari from "../Page/Sari/Sari";
import Shirt from "../Page/Shirt/Shirt";
import TShirt from "../Page/T-shirt/TShirt";
import Kurta from "../Page/Kurta/Kurta";
import Pant from "../Page/Pant/Pant";
import Shoes from "../Page/Shoes/Shoes";
import AppleMacbook from "../Page/AppleMacbook/AppleMacbook";
import BusinessLaptop from "../Page/BusinessLaptop/BusinessLaptop";
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
            {
                path: "/shirt",
                element: <Shirt></Shirt>
            },
            {
                path: "/t-Shirt",
                element: <TShirt></TShirt>
            },
            {
                path: "/kurta",
                element: <Kurta></Kurta>
            },
            {
                path: "/pant",
                element: <Pant></Pant>
            },
            {
                path: "/shoes",
                element: <Shoes></Shoes>
            },
            {
                path: "/appleMacbook",
                element: <AppleMacbook></AppleMacbook>
            },
            {
                path: "/businessLaptop",
                element: <BusinessLaptop></BusinessLaptop>
            },
        ]
    },
]);
export default router;