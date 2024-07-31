import { useEffect, useState } from "react"
import Title from "../../Components/Title"
import { MdMessage, MdShare } from "react-icons/md"


function Articles() {

    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("/Articles.json")
            .then(data => data.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="bg-white">
            <Title name={"Our Articles"}></Title>
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cards.map((item, index) =>
                        <div key={index} className="max-w-sm rounded overflow-hidden bg-white shadow-xl pb-5">
                            <div className="relative h-48">
                                <img className="w-full h-48 object-cover " src={item?.image} alt={item?.title} />
                                <div className=" absolute  bottom-0 left-0 w-full">
                                    <div className="flex justify-around items-center   bg-slate-900/60 w-full text-white py-1">
                                        <div className="flex justify-center items-center gap-2">
                                            <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/L9vJkVq/camera.jpg" alt="" />
                                            <p >Mr. Habib</p>
                                        </div>
                                        <div className="flex justify-center items-end gap-4">
                                            <MdMessage className='text-2xl text-orange-500' />
                                            <MdShare className='text-2xl text-orange-500' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-6 py-4 h-40">
                                <div className="font-bold text-xl mb-2">{item?.title}</div>
                                <p className="text-gray-700 text-base">
                                    {item?.description}
                                </p>
                            </div>
                            <p className="text-blue-500 text-center ">Continue Reading</p>

                        </div>)}
                </div>
            </div>
        </div>)
}

export default Articles