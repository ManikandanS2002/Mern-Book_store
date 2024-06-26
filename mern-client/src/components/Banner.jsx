import React from 'react'
import BannerCard from '../Home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* Left Side */}
            <div className='md:w-1/2 space-y-8 h-full'>
              <h2 className='text-5xl font-bold leading-snug text-black'>Buy and sell your Books <span className='text-blue-700'>for the Best Prices</span> </h2>
              <p className='md:w-4/5'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Praesentium consequuntur modi, obcaecati nesciunt, facilis molestias nihil, 
                 odit repellat quas esse ipsum iste animi vel assumenda?
              </p>
              <div>
                 <input type='search' name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none' ></input>
                 <button className='bg-blue-700 px-6 py-2 text-white font-medium 
                 hover:bg-black transition-all ease-in duration-200'>Search</button>
              </div>
            </div>
            
            {/* Right Side */}
            <div> 
              <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner
