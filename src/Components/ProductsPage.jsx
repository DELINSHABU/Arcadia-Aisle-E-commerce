import PopularItems from "../Page/Home/PopularItems"
import CommentCart from "./CommentCart"

function ProductsPage() {
    
    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-2">Product Details</h2>
                        <ul className="list-disc ml-5">
                            <li>This is a OnePlus mobile</li>
                            <li>Display 6'' super AMOLED</li>
                        </ul>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Comment Section</h3>
                            <textarea
                                className="w-full border rounded-md p-2 mb-2"
                                placeholder="Enter your comment"
                            ></textarea>
                            <div className="flex space-x-2 mb-2">
                                {[5, 4, 3, 2, 1].map((star,) => (
                                    <button className=" flex justify-center items-center gap-1 rounded-md bg-white  px-2 py-1 hover:bg-slate-200" key={star} >
                                        <p>{star}</p>
                                        <p className="text-yellow-500">★</p>
                                    </button>
                                ))}
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Comment</button>
                            <div className="mt-4 p-4 border-2 border-orange-500 rounded-md h-96 overflow-auto">

                                <h2 className="text-lg font-semibold mb-2">View other persons comment</h2>
                                <CommentCart email={"habib@gamail"} rating={4} comment={"nice products"}></CommentCart>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border rounded-md shadow-md col-span-2">
                        <h2 className="text-xl font-bold mb-2">Similar products that you are finding</h2>
                        <PopularItems></PopularItems>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage