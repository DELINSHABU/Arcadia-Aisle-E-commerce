import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function ViewDetails() {

    const products = useLoaderData();
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    // console.log(products)

    const {
        id,
        price,
        title,
        brand,
        image,
    } = products;


    const saveToLocalStorage = (key, value) => {
        const existing = localStorage.getItem(key);
        const data = existing ? JSON.parse(existing) : [];
        const itemIndex = data.findIndex(item => item.id === value.id);
        if (itemIndex !== -1) {
            data[itemIndex].quantity += value.quantity;
        } else {
            data.push(value);
        }

        localStorage.setItem(key, JSON.stringify(data));
    };

    const handleOrder = () => {
        const item = {
            id,
            price,
            title,
            brand,
            image,
            quantity,
        };
        saveToLocalStorage('cart', item);
        console.log('Item added to cart:', item);
    };


    return (
        <div><div className="flex flex-col items-center bg-gray-100 py-5 ">
            <div className="flex justify-center items-center py-5 ">
                <h2 className="text-xl md:text-4xl font-serif uppercase py-5">Your product information</h2>
            </div>

            <div>

                <div className="flex flex-col lg:flex-row lg:items-start bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
                    <div className="flex-shrink-0 p-4">
                        <img className="h-64 w-64 object-cover" src={image} alt={title} />
                        <div className="flex space-x-2 mt-2">
                            <img className="h-16 w-16 object-cover" src={image} alt="Thumbnail 1" />
                            <img className="h-16 w-16 object-cover" src={image} alt="Thumbnail 2" />
                            <img className="h-16 w-16 object-cover" src={image} alt="Thumbnail 3" />
                            <img className="h-16 w-16 object-cover" src={image} alt="Thumbnail 4" />
                        </div>
                    </div>
                    <div className="p-4 flex-1">
                        <h2 className="text-xl font-bold">Yamaha MT-15</h2>
                        <p className="text-gray-700 mt-2">Brand: {brand}</p>
                        <p className="text-gray-700 mt-2">Tk: {price}</p>
                        <div className="mt-4">
                            <span className="text-gray-700">Quantity:</span>
                            <button onClick={decrementQuantity} className="mx-2 px-3 py-1 bg-gray-200 rounded">-</button>
                            <span>{quantity}</span>
                            <button onClick={incrementQuantity} className="mx-2 px-3 py-1 bg-gray-200 rounded">+</button>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                        <div className="mt-4 flex space-x-4">
                            <button onClick={handleOrder} className="px-4 py-2 bg-orange-500  text-white rounded">Buy</button>
                            <button onClick={handleOrder} className="px-4 py-2 bg-orange-500  text-white rounded">Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </div></div>
    )
}

export default ViewDetails;