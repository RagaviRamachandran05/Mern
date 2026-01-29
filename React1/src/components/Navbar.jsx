import React from 'react'
import {Link} from "react-router-dom"
//import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="bg-blue-600 p-4">
        <ul className="flex gap-6 text-white font-medium">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/products'>Product</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar