import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer"

function ShoppingEvent() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 154);
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("/ShoppingEvent.json")
            .then(data => data.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center py-12 bg-gradient-to-r from-orange-100 to-gray-100">
                <div className="flex flex-wrap justify-center items-center gap-10">
                    <div>
                        <img src="https://i.ibb.co/KF2ym6S/apple.png" alt="" />
                    </div>
                    <div className="text-center md:text-start items-center  mx-3 md:mx-0">
                        <h2 className="text-4xl  md:text-6xl font-bold mb-4">Apple Shopping Event</h2>
                        <p className="text-lg md:text-2xl mb-6">Hurry and get discounts on all Apple devices up to 20%</p>
                        <div className="flex mb-6 space-x-4">
                            <CountdownTimer targetDate={targetDate} />
                        </div>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-md mb-6">Go Shopping</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 mx-2">
                    {items.map((product, index) => (
                        <div key={index} className="bg-white p-2 hover:scale-110 transform-gpu transition-transform duration-300   rounded-md shadow-md text-center flex justify-center items-center">
                            <div className="mb-2">
                                <img src={product?.image} alt={product?.name} className="h-24 mx-auto" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{product?.name}</h3>
                                <div className="text-yellow-500 mb-2">
                                    {'★'.repeat(product?.rating)}
                                </div>
                                <p className="text-lg font-bold">{product?.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShoppingEvent