/* eslint-disable react/prop-types */
import { MdShoppingCartCheckout, MdFavorite, MdShare, MdCompareArrows } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ItemCard({ item, idx }) {
    return (
        <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay={idx * 250}
            data-aos-easing="ease-in-sine"

        >
            <div
                className="card relative  bg-base-100 shadow-xl pt-3 pb-2  hover:scale-110 transform-gpu transition-transform duration-300  ">
                <div className='indicator -right-[84%] '>
                    <div className="indicator-item absolute w-[78px]  bg-orange-500 text-xs text-white font-bold p-1  transform rounded-tl-full rounded-bl-full">
                        {item?.badge}
                    </div>
                </div>

                <figure>
                    <img
                        className='w-52 h-52 object-cover mx-auto p-4  '
                        src={item?.imageUrl}
                        alt="Shoes" />

                </figure>
                <div className="icons-container hidden space-x-2 hover:flex justify-center items-center">
                    <MdCompareArrows className=" text-2xl text-orange-500 " />
                    <MdFavorite className='text-2xl text-orange-500' />
                    <MdShare className='text-2xl text-orange-500' />
                </div>
                <div className="p-4 ">
                    <h2 className="text-xl w-full h-20">{item?.name}</h2>
                    <div className='flex justify-between items-center text-black font-bold px-2'>
                        <p className='line-through'>${item.offer_price ? item.offer_price : 250}</p>
                        <p className=''>${item?.price}</p>
                    </div>
                </div>

                <Link to={`/viewDetails/${item?.id}`} className="buy-now-button relative text-center bg-orange-500 text-white py-2 mx-4 text-lg rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">


                    <span className="buy-now-text">BUY NOW</span>
                    <i className="fas fa-shopping-cart cart-icon">
                        <MdShoppingCartCheckout className='text-2xl' />
                    </i>


                </Link>




            </div>
        </div>
    )
}

export default ItemCard