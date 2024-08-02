import Lottie from "lottie-react"
import Title from "../../Components/Title"
import ReturnPolicy from "/public/ReturnPolicy.json"
import CashOnDelivary from "/public/CashOnDelivery.json"
import Delivery from "/public/Delivery.json"
import LowCost from "/public/LowCost.json"
import BestQuality from "/public/BestQuality.json"
import BestShopping from "/public/BestShopping.json"

function Services() {
    return (
        <div className="container mx-auto">
            <Title name={"Our Service"}></Title>
            <div className="py-10">
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-center gap-5 mx-2 '>
                    <div className=' bg-white rounded-2xl p-2'>
                        <Lottie animationData={BestShopping} className='w-44 h-44'></Lottie>
                        <h1 className="text-lg font-serif font-medium">Best Shopping</h1>
                    </div>
                    <div className=' bg-white rounded-2xl p-2'>
                        <Lottie animationData={Delivery} className='w-44 h-44'></Lottie>
                        <h1 className="text-lg font-serif font-medium">Delivery</h1>
                    </div>
                    <div className=' bg-white rounded-2xl p-2'>
                        <Lottie animationData={BestQuality} className='w-44 h-44'></Lottie>
                        <h1 className="text-lg font-serif font-medium">Best Quality</h1>
                    </div>

                    <div className=' bg-white rounded-2xl p-2'>
                        <Lottie animationData={LowCost} className='w-44 h-44'></Lottie>
                        <h1 className="text-lg font-serif font-medium">Low Cost</h1>
                    </div>
                    <div className=' bg-white rounded-2xl p-2'>
                        <Lottie animationData={CashOnDelivary} className='w-44 h-44'></Lottie>
                        <h1 className="text-lg font-serif font-medium">Cash On Delivery</h1>

                    </div>
                    <div className=' bg-white rounded-2xl p-2'>
                        <Lottie animationData={ReturnPolicy} className='w-44 h-44'></Lottie>
                        <h1 className="text-lg font-serif font-medium">Return Policy</h1>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services