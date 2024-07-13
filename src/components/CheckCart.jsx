import { Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { removeFromLocalStorageArray } from '../utils/Index'

export default function CheckCart({cartitems}) {
  const getFullImageUrl = (url) => {
    const baseUrl = 'https://api.timbu.cloud/images/';
    return `${baseUrl}${url}`;
  };

  return (
    <div>
        {Array.isArray(cartitems) && cartitems.map((item, idx)=> (
            <li key={idx} className="py-6 flex space-x-6">
            <img
              src={getFullImageUrl(item.photos[0].url)}
              alt=""
              className="flex-none w-24 h-24 object-center object-cover bg-gray-100 rounded-md"
            />
            <div className="flex-auto">
              <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                <div className="flex-auto flex flex-col justify-center text-sm font-medium space-y-1">
                  <h3 className="text-gray-600 text-xs">{item.name}</h3>
                  <h3 className="text-gray-600 text-xs">Qty : {item.qty}</h3>
                  <p className="text-gray-900 text-sm">${item.current_price || 33}</p>
                  <button 
                     onClick={()=>removeFromLocalStorageArray("cart", item.id)}
                      className='flex item-center text-red-600'><Trash size={20}/></button>
                </div>
              </div>
            </div>
          </li>
        ))}
    </div>
  )
}
