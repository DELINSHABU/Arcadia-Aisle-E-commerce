import { Link } from 'react-router-dom'
import { MdShoppingCartCheckout, MdLogin } from "react-icons/md";
import { useEffect, useState } from 'react';



function Navbar() {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const getCartItemsCount = () => {
      const items = localStorage.getItem('cart');
      const data = items ? JSON.parse(items) : [];
      const count = data.reduce((total, item) => total + item.quantity, 0);
      setCartItemCount(count);
    };

    getCartItemsCount();

    const handleStorageChange = (event) => {
      if (event.storageArea === localStorage && event.key === 'cart') {
        getCartItemsCount();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  const navList =
    <>
      <li className='hover:text-black  text-white rounded ' ><Link to="/">Home</Link></li>
      <li className='hover:text-black  text-white rounded ' ><Link to="/allProducts">All Items</Link></li>
      <li className="dropdown dropdown-hover z-50 ">
        <div tabIndex={0} role="button" className='hover:text-black  text-white rounded '>Fashion & Clothing</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 shadow ">
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/shirt">Shirt</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/t-Shirt">T-Shirt</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/sari">Sari</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/kurta">Kurta</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/pant">Pant</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/shoes">Shoes</Link></li>
        </ul>

      </li>
      <li className="dropdown dropdown-hover z-50 ">
        <div tabIndex={0} role="button" className='hover:text-black  text-white rounded ' >Electronic Accessories</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 shadow ">
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/appleMacbook">Apple MacBook</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/businessLaptop">Business Laptop</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/gamingLaptop">Gaming Laptop</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="Ultrabook">Ultrabook</Link></li>
        </ul>

      </li>
      <li className="dropdown dropdown-hover z-50 ">
        <div tabIndex={0} role="button" className='hover:text-black  text-white rounded ' >Health & Beauty</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 shadow ">
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/hairCare">Hair Care</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/skinCare">Skin Care</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="manCare">Man Care</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/womanCare">Woman Care</Link></li>
        </ul>

      </li>
      <li className="dropdown dropdown-hover z-50 ">
        <div tabIndex={0} role="button" className='hover:text-black  text-white rounded ' >Cars & MotorBikes</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 shadow ">
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/cars">Cars</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/motorBikes">MotorBikes</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="carsParts"> Cars Parts</Link></li>
          <li className='  text-black hover:bg-orange-400 hover:text-white rounded-2xl'><Link to="/motorbikesParts">MotorBikes Parts</Link></li>
        </ul>

      </li>



    </>
  return (

    <div className='bg-gradient-to-r from-[#F26E00] to-[#F6A100] container mx-auto text-white z-50 '>
      <div className='bg-gradient-to-r from-[#F26E00] to-[#F6A100]'>
        <div className='navbar'>
          <div className="navbar-start">
            {/* responsive menu */}
            <div className="drawer drawer-end lg:hidden z-10" >
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-gradient-to-r from-[#F26E00] to-[#F6A100] text-base-content min-h-full w-56 px-4 ">
                  {navList}
                </ul>
              </div>
            </div>
            <Link className="shadow-lg border-2 hover:border-white md:p-2  text-white  lg:-ml-0 md:-ml-12 lg:w-[120px] w-[150px] px-1 bg-gradient-to-r from-[#F26E00] to-[#F6A100] ml-0 rounded-lg">Arcadia Aisle</Link>
          </div>
          {/* Search bar */}
          <label className="md:mx-1">
            <input type="text" className="px-2 py-1 rounded-xl md:w-60  w-24 text-black ml-1 md:ml-8 lg:ml-0" placeholder="Search" />
          </label>
          {/* lg menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navList}
            </ul>
          </div>
          <div>
          </div>
          <div className="navbar-end">
            <Link to="/cart">
              <div className='hover:text-black transition hover:bg-white lg:mx-0 md:mx-0 px-2 rounded py-1'>
                <div className="indicator">
                  {cartItemCount > 0 && (
                    <span className="indicator-item badge -top-1">{cartItemCount}</span>
                  )}
                  <MdShoppingCartCheckout className='text-xl hover:text-black' />
                  <button>Cart</button>
                </div>
              </div>
            </Link>
            <Link className="px-1 text-xl font-serif bg-white rounded text-black hover:text-white hover:bg-black border-none flex justify-center items-center gap-1 ml-2"><MdLogin />Login</Link>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Navbar