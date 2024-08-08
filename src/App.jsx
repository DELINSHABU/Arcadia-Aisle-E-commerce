import { Outlet } from "react-router-dom"
import Navbar from "./Shared/Navbar"
import Footer from "./Shared/Footer"
import './App.css';

function App() {

  return (
    <div className="mainBody">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  )
}

export default App
