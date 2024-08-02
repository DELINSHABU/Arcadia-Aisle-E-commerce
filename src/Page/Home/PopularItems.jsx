import { useEffect } from 'react'
import Title from '../../Components/Title'
import { useState } from 'react'
import "./BuyNowButton.css"
import Aos from 'aos';
import ItemCard from '../../Components/ItemCard';

function PopularItems() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("/AllProducts.json")
            .then(data => data.json())
            .then(data => setItems(data))
    }, [])
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto '>
                <Title name={"Popular Items"}></Title>

                <div className='relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-2  py-10'>
                    {
                        items?.slice(0, 5).map((item, idx) =>
                            <ItemCard key={idx} item={item} idx={idx}></ItemCard>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default PopularItems