import { useEffect, useState } from 'react';
import "./popularCategories.css"



function PopularCategories() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("/PopularCategoris.json") // Make sure the file path is correct
          .then(data => data.json())
          .then(data => {
            // Sort the data based on the 'id' property in ascending order
            const sortedData = data.sort((a, b) => a.id - b.id);
            setItems(sortedData); 
          })
          .catch(error => console.error('Error fetching JSON:', error));
      }, [])
    
    return (
        <div className='container mx-auto'>
            <div className="flex justify-center items-center py-5 ">
                <h2 className="text-2xl md:text-4xl font-serif uppercase py-5">Categories</h2>
            </div>
            <div className='py-10'>
                <div className=' grid grid-cols-2 md:grid-cols-3  lg:grid-cols-7 gap-4 mx-2 '>
                    {
                        items?.map((item, idx) => <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-delay={idx * 200}
                            data-aos-easing="ease-in-sine" key={item?.id} className=" Cards shadow-lg rounded-lg overflow-hidden">
                            <img
                                className="w-44 h-48 object-cover hover:scale-110  duration-300  "
                                src={item?.image}
                                alt={item?.title}
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">{item?.title}</h2>
                                <p className="text-gray-600">{item?.productItem} products</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>)
}

export default PopularCategories