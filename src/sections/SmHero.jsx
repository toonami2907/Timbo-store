import React from 'react'

export default function SmHero() {
  return (
    <div className='h-[400px] relative md:hidden flex flex-col items-center justify-center bg-gray-200/30'>
       <img src='/sm.png' className='absolute top-0 w-full h-full'/>
    </div>
  )
}
