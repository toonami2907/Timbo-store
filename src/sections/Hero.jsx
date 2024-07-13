import React from 'react'

export default function Hero() {
  return (
    <div className='h-[400px] relative hidden md:flex flex-col items-center justify-center bg-gray-200/30'>
       <img src='/hero.png' className='absolute top-0 w-full h-full'/>
    </div>
  )
}
