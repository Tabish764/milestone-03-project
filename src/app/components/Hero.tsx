import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-7xl px-4 mt-[80px] mx-auto'>
        <div>

        <h1 className='text-4xl font-bold text-red-600 shadow-lg'>RenderBoost</h1>
        <p className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-9 max-w-[900px] mt-5 font-medium text-gray-200'>
        Crafted with the latest technology, our PCs deliver unmatched performance for gaming, content creation, and everything in between.
        </p>
        <div>
            <Link href={'/products'} className='hover:text-white bg-red-600 py-3 mt-5 px-5 rounded-md hover:bg-red-500 hover:scale-105 hover:shadow-xl transition-all duration-300'>Start Shopping</Link>
        </div>
        </div>
    </div>
  )
}

export default Hero