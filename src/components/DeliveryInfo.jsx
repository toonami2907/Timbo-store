import React from 'react'

export default function DeliveryInfo() {
  return (
    <div>
         <div className="w-full  px-5 py-5 rounded-sm shadow-sm bg-white">
              <h1 className="font-semibold">Delivery information</h1>
              <form className="py-5 flex flex-col gap-5">
                <div>
                  <label htmlFor="state">state</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full border-2 outline-none border-gray-700 h-8 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="city">city</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full border-2 outline-none border-gray-700 h-8 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="Town">Town</label>
                  <input
                    type="text"
                    id="Town"
                    name="Town"
                    className="w-full border-2 outline-none border-gray-700 h-8 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="Address">Address</label>
                  <input
                    type="text"
                    id="Address"
                    name="Address"
                    className="w-full border-2 outline-none border-gray-700 h-8 px-3 "
                  />
                </div>
              </form>
            </div>
    </div>
  )
}
