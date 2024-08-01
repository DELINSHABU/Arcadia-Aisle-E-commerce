import Lottie from "lottie-react"
import FAQAnimation from "../../../public/FAQAnimation.json"

function FAQSection() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center py-5 ">
                <h2 className="text-xl md:text-4xl font-serif uppercase py-5">Why You Purchase From Us</h2>
            </div>

            <div className="flex flex-wrap justify-center items-center py-10 mx-2 gap-4">
                <div className="mb-8 md:mb-0 md:mr-8 border-2 border-[#F26E00] rounded">
                    <Lottie animationData={FAQAnimation} className='w-full h-96 text-red-950'></Lottie>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-2xl font-medium">What type of product we provide?</div>
                        <div className="collapse-content">
                            <hr />
                            <p>We give genuine product from our seller</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-2xl font-medium">Is available 7 days return product?</div>
                        <div className="collapse-content">
                            <hr />
                            <p>Yes, Its available for all products.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-2xl font-medium">What type of product we provide?</div>
                        <div className="collapse-content">
                            <hr />
                            <p>We give genuine product from our seller</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-2xl font-medium">Is available 7 days return product?</div>
                        <div className="collapse-content">
                            <hr />
                            <p>Yes, Its available for all products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQSection