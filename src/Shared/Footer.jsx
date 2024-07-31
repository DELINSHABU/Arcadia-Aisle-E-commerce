import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaPinterest, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-white  py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-10">
            <div className="mb-6">
              <Link className="shadow-lg border-2 hover:border-white  text-white right-0 w-full p-2 bg-gradient-to-r from-[#F26E00] to-[#F6A100] rounded-lg ">Arcadia Aisle</Link>
            </div>
            <p className="text-gray-600 text-lg mt-2">
              Condimentum adipiscing vel neque dis nam parturient orci at scelerisque.
            </p>
            <h4 className="text-2xl font-semibold text-gray-800 mt-4">Subscribe us</h4>
            <div className="flex space-x-2 mt-2">
              <Link to="/" className="text-[#2E487E] hover:text-gray-800 text-2xl"><FaFacebook /></Link>
              <Link to="/" className="text-[#000000] hover:text-gray-800 text-2xl"><BsTwitterX /></Link>
              <Link to="/" className="text-[#AE1B21] hover:text-gray-800 text-2xl"><FaPinterest /></Link>
              <Link to="/" className="text-[#0274B3] hover:text-gray-800 text-2xl"><FaLinkedin /></Link>
              <Link to="/" className="text-[#2F95C2] hover:text-gray-800 text-2xl"><FaTelegram /></Link>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Categories</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Smartphones</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Laptops</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Hardware</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Cameras</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Headphones</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Bathroom</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Useful Links</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Promotions</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Stores</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Our contacts</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Delivery & Return</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Outlet</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Download App on Mobile:</h4>
            <p className="text-gray-600 mt-2">15% discount on your first purchase</p>
            <div className="flex space-x-2 mt-2">
              <Link to="/"><img src="https://i.ibb.co/kQ5LWjg/image.png" alt="Google Play" className="w-32 h-10" /></Link>
              <Link to="/"><img src="https://i.ibb.co/9pNtQn2/image.png" alt="App Store" className="w-32 h-10 border-2 border-black rounded" /></Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 border-t pt-4">
          <p className="text-gray-600">ARCADIA AISLE © 2024 CREATED BY MD HABIBUR RAHMAN. PREMIUM E-COMMERCE SOLUTIONS.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;