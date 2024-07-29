import { Link } from 'react-router-dom'
import { MdShoppingCartCheckout } from "react-icons/md";

function Navbar() {
  const navList =
    <>
      <li className='hover:text-black hover:bg-white text-white rounded text-xl mx-2'><Link>Home</Link></li>
      <li className='hover:text-black hover:bg-white text-white rounded text-xl mx-2'><Link>About</Link></li>
      <li className='hover:text-black hover:bg-white text-white rounded text-xl mx-2'><Link>Shop</Link></li>
      <li className='hover:text-black hover:bg-white text-white rounded text-xl mx-2'><Link>Contact</Link></li>

    </>
  return (
    <div className='bg-gradient-to-r from-[#F26E00] to-[#F6A100]'>
      <div className="navbar container mx-auto  text-white">
        <div className="navbar-start">
          {/* responsive menu */}
          <div className="drawer drawer-end lg:hidden">
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
              <ul className="menu bg-gradient-to-r from-[#F26E00] to-[#F6A100] text-base-content min-h-full w-56 p-4">
                {navList}
              </ul>
            </div>
          </div>
          <Link className="shadow-lg md:ml-0 ml-8 sx:ml-7 btn btn-ghost border-2 hover:border-white text-sm  md:text-xl text-white bg-gradient-to-r from-[#F26E00] to-[#F6A100] rounded-lg">Arcadia Aisle</Link>
        </div>
        {/* Search bar */}
        <label className="mx-2">
          <input type="text" className="px-3 md:py-3 py-1 rounded-xl md:w-72 md:px-4 w-24 text-black ml-8" placeholder="Search" />
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
          <div className='bg-black hover:bg-white md:px-5 md:mx-8 px-2 py-1 rounded mx-1'>
            <div className="indicator">
              <span className="motion-safe:animate-spin indicator-item badge mr-2 -top-2">9+</span>
              <button><MdShoppingCartCheckout className='text-2xl md:text-4xl indicator hover:text-[#F26E00] ' /></button>
            </div>


          </div>

          <Link className="btn md:px-6  md:pt-0 text-xl font-serif px-3 hover:text-white hover:bg-black border-none">Login</Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar