import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash } from 'lucide-react';
import { decrementItemQuantity, incrementItemQuantity, removeFromLocalStorageArray } from '../utils/Index';

export const calculateTotal = (cartitems) => {
  console.log(cartitems);
  return (
    cartitems &&
    cartitems.reduce(
      (total, item) => total + (item.current_price || 33) * (item.qty || 1),
      0
    ) || 0
  );
};

export default function Cart({ setOpen, open }) {
  const [cartitems, setCart] = useState([]);
  
  const getFullImageUrl = (url) => {
    const baseUrl = 'https://api.timbu.cloud/images/';
    return `${baseUrl}${url}`;
  };

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartLocalStorage);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex-grow overflow-y-auto px-4 pt-4 pb-16 sm:pt-8 sm:pb-24 xl:pt-14">
        <div className="w-full">     
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {Array.isArray(cartitems) && cartitems.length === 0 ? (
                <h1 className="text-3xl py-5">NO ITEM. ADD ITEMS</h1>
              ) : (
                cartitems.map((item, idx) => (
                  <li key={idx} className="py-6 flex space-x-6">
                    {item.photos && item.photos.length > 0 && (
                      <img
                        src={getFullImageUrl(item.photos[0].url)}
                        alt={item.name}
                        className="flex-none w-24 h-24 object-center object-cover bg-gray-100 rounded-md"
                      />
                    )}
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto flex flex-col justify-center text-sm font-medium space-y-1">
                          <h3 className="text-gray-600 text-xs">{item.name}</h3>
                          <p className="text-gray-900 flex items-center justify-between w-full">
                            Price: {item.current_price || 33}
                          </p>
                          <button 
                            onClick={() => removeFromLocalStorageArray("cart", item.id)}
                            className='flex items-center  w-5 text-red-600'>
                            <Trash size={20} />
                          </button>
                        </div>
                        <div className="flex-none flex space-x-4">
                          <button
                            type="button"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => incrementItemQuantity("cart", item.id)}
                          >
                            <Plus />
                          </button>
                          <p>{item.qty || 1}</p>
                          <button
                            type="button"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => decrementItemQuantity("cart", item.id)}
                          >
                            <Minus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Total:</p>
          <p>${calculateTotal(cartitems)}</p>
        </div>
        <div className="mt-6">
          <button
            onClick={() => setOpen(!open)}
            className="bg-black w-full rounded-md py-3 text-white text-lg"
          >
            <Link to='/Checkout'>Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
