import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import Search from '../components/Home/Search'
import Events from '../components/Home/Events'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Search/>
      <Events/>
    </div>
  )
}

export default Home