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
                {cartItems.length == 0 ? (
                    <div >
                        <p className='text-3xl text-center mx-auto py-2'>Your cart is empty</p>
                        <div className="flex w-52 flex-col gap-4  mx-auto">
                            <div className="flex items-center gap-4">
                                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                </div>
                            </div>
                            <div className="skeleton h-32 w-full"></div>
                        </div>
                    </div>
                ) : (
                    cartItems?.map((item, index) => (
                        <div key={index} className=" flex flex-wrap justify-center items-center gap-4 bg-white shadow-lg rounded-lg p-2 my-2">
                            <img className="h-32 w-32 object-cover rounded-md" src={item.imageUrl} alt={item.name} />
                            <div>
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="text-gray-700">Brand: {item.brand}</p>
                                <p className="text-gray-700">Tk: {item.price * item?.quantity}</p>
                                <p className="text-gray-700">Quantity: {item?.quantity}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Delete
                            </button>
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


