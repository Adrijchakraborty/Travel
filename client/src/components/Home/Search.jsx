import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
const Search = () => {
  return (
    <div className='flex items-center justify-center relative'>
      <form className='flex items-center justify gap-3 bg-white shadow-2xl px-5 md:px-16 py-5 rounded-xl absolute -top-8'>
        <input type="text" placeholder='search your destination' className='px-2 md:px-4 py-1 md:py-2 border-slate-600 border-2 rounded-xl' />
        <IoSearchOutline className='text-2xl cursor-pointer'/>
      </form>
    </div>
  )
}

export default Search