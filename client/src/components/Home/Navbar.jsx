import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-3 px-20 bg-slate-200'>
      <div className='w-8 font-serif flex justify-center items-center gap-2'> <img src={Logo} alt="Logo" /> Travel</div>
      <div className='flex gap-10 teko-family tracking-wide'>
        <Link to={'/'}> Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/packeges'}>Packeges</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
      <div>
        <button>
          Book now
        </button>
      </div>
    </div>
  )
}

export default Navbar