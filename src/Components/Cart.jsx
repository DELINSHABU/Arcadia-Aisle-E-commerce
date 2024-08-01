import { useEffect, useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = getFromLocalStorage('cart');
        setCartItems(items);
    }, []);

    const getFromLocalStorage = (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    };

    const saveToLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };
    const removeFromLocalStorage = (key, id) => {
        const data = getFromLocalStorage(key);
        const filteredData = data.filter(item => item.id !== id);
        saveToLocalStorage(key, filteredData);
    };

    const handleDelete = (id) => {
        removeFromLocalStorage('cart', id);
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-center items-center py-5 ">
                <h2 className="text-xl md:text-4xl font-serif uppercase py-5">My Cart Products</h2>
            </div>
            <div className='w-1/2 mx-auto  justify-center items-center'>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems?.map((item, index) => (
                        <div key={index} className=" flex justify-center items-center bg-white shadow-lg rounded-lg p-4 my-2">
                            <img className="h-32 w-32 object-cover" src={item.image} alt={item.title} />
                            <div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-700">Brand: {item.brand}</p>
                                <p className="text-gray-700">Tk: {item.price}</p>
                                <p className="text-gray-700">Quantity: {item?.quantity}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cart;


