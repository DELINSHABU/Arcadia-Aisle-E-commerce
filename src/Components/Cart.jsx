import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Empty from './Empty';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
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

    const handleOrder = (item, price) => {
        setSelectedItems(prevItems => {
            const isSelected = prevItems.some(selectedItem => selectedItem.id === item.id);
            if (isSelected) {
                return prevItems.filter(selectedItem => selectedItem.id !== item.id);
            } else {
                return [...prevItems, { ...item, price }];
            }
        });
    };

    useEffect(() => {
        const total = selectedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotalPrice(total);
    }, [selectedItems]);

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-center items-center py-2 ">
                <h2 className="text-xl md:text-4xl font-serif uppercase ">My Cart Products</h2>
            </div>
            <div className='w-1/2 mx-auto  justify-center items-center'>
                {cartItems.length == 0 ? (
                    <Empty name="Cart"></Empty>
                ) : (
                    cartItems?.map((item, index) => (
                        <div key={index}>
                            <div className=" grid grid-cols-1 md:grid-cols-4 justify-around items-center gap-4 bg-white shadow-lg rounded-lg p-2 my-2">

                                <input type="checkbox" onClick={() => handleOrder(item, item.price)} className="checkbox checkbox-warning col-auto" />

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


                            </div>
                            <div className='flex justify-around items-center'>
                                <p className='text-xl'>Total Price: {totalPrice}</p>
                                <Link className="bg-orange-500 text-white px-4 py-2 rounded">Order Now</Link>
                            </div>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default Cart;


