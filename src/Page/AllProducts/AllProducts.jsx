import { useEffect, useRef, useState } from "react"
import Title from "../../Components/Title"
import { MdShoppingCartCheckout, MdFavorite, MdShare, MdCompareArrows } from 'react-icons/md';
import { Link } from "react-router-dom";

function AllProducts() {
    const [item, setItem] = useState()
    const [items, setItems] = useState()
    useEffect(() => {
        fetch("/AllProducts.json")
            .then(data => data.json())
            .then(data => { setItems(data), setItem(data) })
    }, [items?.id])
    const searchRef = useRef()


    const handleSort = (e) => {
        if (e.target.value == "Default") {
            const sortArray = items.sort((a, b) => a.id - b.id)
            setItems([...sortArray])
        }

        if (e.target.value == "lowtohigh") {
            const sortArray = items.sort((a, b) => a.price - b.price)
            setItems([...sortArray])

        }
        if (e.target.value == "hightolow") {
            const sortArray = items.sort((a, b) => b.price - a.price)
            setItems([...sortArray])
        }



    }

    const handleSearch = (e) => {
        e.preventDefault()
        const search = item.filter((e,) => e.name.toLowerCase().includes(searchRef.current.value.toLowerCase()))
        setItems([...search])
        if (searchRef.current.value.length < 1) {
            setItems([...items])
        }

    }

    // console.log(items);
    return (
        <div className="container mx-auto">
            <Title name={"All Products"}></Title>


            <div className="flex mx-auto justify-center items-center my-5">
                <div id="Input Section" className="w-fit mx-auto">
                    <input ref={searchRef} type="text" className="border-2 rounded-xl border-orange-500 p-1 md:w-fit w-36 " />
                    <button onClick={handleSearch} className="btn btn-sm bg-orange-500 text-white hover:bg-orange-500">Search </button>
                </div>
                <div id="dropdown" className="w-fit mx-auto py-3 md:py-0 hover:bg-orange-500">
                    <select onClick={handleSort} name="" id="" className="border-2 p-1 border-orange-500">
                        <option value="Default">Default</option>
                        <option value="lowtohigh">Low To High</option>
                        <option value="hightolow"> High to Low</option>
                    </select>

                </div>
            </div>
            <div className='relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-2 py-10'>
                {
                    items?.map((item, idx) =>
                        <div
                            key={idx}

                        >
                            <div
                                className="card relative  bg-base-100 shadow-xl pt-3 pb-2  hover:scale-110 transform-gpu transition-transform duration-300 py-5 ">
                                <div className='indicator -right-[84%] '>
                                    <div className="indicator-item absolute w-[70px]  bg-orange-500 text-xs text-white font-bold p-1  transform rounded-tl-full rounded-bl-full">
                                        {item?.badge}
                                    </div>
                                </div>

                                <figure>
                                    <img
                                        className='w-52 h-52 object-cover mx-auto p-4  '
                                        src={item?.imageUrl}
                                        alt={item?.name} />

                                </figure>
                                <div className="icons-container hidden space-x-2 hover:flex justify-center items-center">
                                    <MdCompareArrows className=" text-2xl text-orange-500 " />
                                    <MdFavorite className='text-2xl text-orange-500' />
                                    <MdShare className='text-2xl text-orange-500' />
                                </div>
                                <div className="p-4 ">
                                    <h2 className="text-xl w-full h-16">{item?.name}</h2>
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

            </div>
        </div>
    )
}

export default AllProducts