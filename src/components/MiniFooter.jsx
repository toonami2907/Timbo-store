import React from 'react'

export default function MiniFooter() {
  return (
    <div className='bg-white md:px-10 px-5 text-xs  py-5 flex md:flex-row flex-col justify-between'>
        <h1>&copy; 2024 TIMBU</h1>
        <ul className='flex gap-3'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
        </ul>
    </div>
  )
}
