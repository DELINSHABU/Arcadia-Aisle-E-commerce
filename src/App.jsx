import { Outlet } from "react-router-dom"
import Navbar from "./Shared/Navbar"
import Footer from "./Shared/Footer"

function App() {

  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  )
}

export default App
