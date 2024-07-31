
function FAQSection() {
    return (
        <div><div className="flex flex-col items-center py-12 bg-gray-50">
            <h2 className="text-3xl font-bold mb-8">Why You Purchase From Us</h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="mb-8 md:mb-0 md:mr-8">
                    <img src="https://i.ibb.co/L9vJkVq/camera.jpg" alt="Why Purchase" className="w-80 h-80 object-cover rounded-md" />
                </div>
                <div className="flex flex-col space-y-4">
                    {["What type of product we provide?", "Is available 7 days return product?", "What type of product we provide?", "Is available 7 days return product?"].map((question, index) => (
                        <div key={index} className="bg-gray-200 rounded-md p-4 text-lg">
                            {question}
                        </div>
                    ))}
                </div>
            </div>
        </div></div>
    )
}

export default FAQSection