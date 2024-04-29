import React from 'react'
import Bg from "../../assets/bg-video.mp4"

const Hero = () => {
  return (
    <div className='max-h-[40vw] px-20 py-5 overflow-hidden relative'>
      <video src={Bg} muted autoPlay loop className='w-full rounded-lg'></video>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-serif text-center text-6xl tracking-wide'><h1 className='text-slate-600'>Explore the </h1><h2 className='text-8xl text-transparent text-bg'>World</h2></div>
    </div>
  )
}

export default Hero