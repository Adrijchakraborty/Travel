import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import Search from '../components/Home/Search'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Search/>
    </div>
  )
}

export default Home