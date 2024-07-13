import { Minus, Plus } from 'lucide-react'
import React from 'react'

export default function CartCard() {
  return (
    <div className='flex fex items-center justify-between bg-gray-200 text-black' >
        <div>
            <img src="/Group 957.png" alt="" className='md:h-[120px] h-[100px] w-[100px] md:w-[120px]' />
        </div>
        <p>$8500</p>
        <ul className='flex items-center g'>
            <button className='p-2 rounded-full hover:text-white hover:bg-gray-500'> <Plus size={20}/></button>
            <div>0</div>
            <button className='p-2 rounded-full hover:text-white hover:bg-gray-500'><Minus size={20}/></button>
        </ul>
    </div>
  )
}
