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
import GamingLaptop from "../Page/GamingLaptop/GamingLaptop";
import UltraBook from "../Page/UltraBook/UltraBook";
import HairCare from "../Page/HairCare/HairCare";
import SkinCare from "../Page/SkinCare/SkinCare";
import ManCare from "../Page/ManCare/ManCare";
import WomanCare from "../Page/WomanCare/WomanCare";
import Cars from "../Page/Cars/Cars";
import MotorBikes from "../Page/MotorBikes/MotorBikes";
import CarsParts from "../Page/CarsParts/CarsParts";
import MotorBikesParts from "../Page/MotorBikesParts/MotorBikesParts";
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
            {
                path: "/gamingLaptop",
                element: <GamingLaptop></GamingLaptop>
            },
            {
                path: "/ultraBook",
                element: <UltraBook></UltraBook>
            },
            {
                path: "/hairCare",
                element: <HairCare></HairCare>
            },
            {
                path: "/skinCare",
                element: <SkinCare></SkinCare>
            },
            {
                path: "/manCare",
                element: <ManCare></ManCare>
            },
            {
                path: "/womanCare",
                element: <WomanCare></WomanCare>
            },
            {
                path: "/cars",
                element: <Cars></Cars>
            },
            {
                path: "/motorBikes",
                element: <MotorBikes></MotorBikes>
            },
            {
                path: "/carsParts",
                element: <CarsParts></CarsParts>
            },
            {
                path: "/motorbikesParts",
                element: <MotorBikesParts></MotorBikesParts>
            },
        ]
    },
]);
export default router;