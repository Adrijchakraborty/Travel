import React from 'react'

const Hero = () => {
  return (
    <div className='h-[80vh] bg-img mx-5 md:mx-20 my-5 md:overflow-hidden relative rounded-xl'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-serif text-center text-3xl md:text-6xl tracking-wide'><h1 className='text-slate-200'>Explore the </h1><h2 className=' text-6xl md:text-8xl text-transparent text-bg'>World</h2></div>
    </div>
  )
}

export default Hero