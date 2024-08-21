import { useEffect } from 'react'
import Title from '../../Components/Title'
import { useState } from 'react'
import "./BuyNowButton.css"
import Aos from 'aos';
import ItemCard from '../../Components/ItemCard';
import "./PopularItems.css"

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
        <div className='popularItemsDiv'>
            <div className='container mx-auto '>
            <Title className="title" style={{ color: 'red'}}  name={"Popular Orders"}></Title>
            {/* <h1> Popular Orders</h1> */}

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