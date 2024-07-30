import { useEffect } from 'react'
import Title from '../../Components/Title'
import { useState } from 'react'
import { MdShoppingCartCheckout, MdFavorite, MdShare, MdCompareArrows } from 'react-icons/md';
import "./BuyNowButton.css"

function PopularItems() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("/PopularItem.json")
            .then(data => data.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <Title name={"Popular Items"}></Title>

            <div className='relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-2 py-10'>
                {
                    items?.slice(0, 5).map((item) =>
                        <div key={item?.id} className="card relative  bg-base-100 shadow-xl py-5  hover:scale-110 transform-gpu transition-transform duration-300 translate-x-6  ">
                            <div className='indicator -right-[84%] '>
                                <div className="indicator-item absolute bg-orange-500 text-xs text-white font-bold p-1  transform rounded-tl-full rounded-bl-full">
                                    {item?.badge}
                                </div>
                            </div>

                            <figure>
                                <img
                                    className='w-52 h-56 object-cover mx-auto p-4  '
                                    src={item?.image}
                                    alt="Shoes" />

                            </figure>
                            <div className="icons-container hidden space-x-2 hover:flex justify-center items-center">
                                <MdCompareArrows className=" text-2xl text-orange-500 " />
                                <MdFavorite className='text-2xl text-orange-500' />
                                <MdShare className='text-2xl text-orange-500' />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl w-full h-24">{item?.title}</h2>
                                <div className='flex justify-between items-center text-black font-bold px-2'>
                                    <p className='line-through'>${item?.price}</p>
                                    <p className=''>${item?.offer_price}</p>
                                </div>
                            </div>
                            <button className="buy-now-button relative bg-orange-500 text-white py-2 mx-4 text-lg rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                                <span className="buy-now-text">BUY NOW</span>
                                <i className="fas fa-shopping-cart cart-icon">
                                    <MdShoppingCartCheckout className='text-2xl' />
                                </i>

                            </button>


                        </div>)
                }

            </div>
        </div>
    )
}

export default PopularItems