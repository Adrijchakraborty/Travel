import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-3 px-5 md:px-20 bg-slate-200'>
      <div className='w-8 font-serif flex justify-center items-center gap-2'> <img src={Logo} alt="Logo" /> <p className='hidden md:block'>Travel</p></div>
      <div className='hidden md:flex gap-10 teko-family tracking-wide'>
        <Link to={'/'}> Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/packeges'}>Packeges</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
      <div>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">Book now</button>
      </div>
    </div>
  )
}

export default Navbar