import React from "react";

export default function DeliveryMethod() {
  return (
    <div>
      <div className="w-full  px-5 py-5 rounded-sm shadow-sm bg-white">
        <h1 className="font-semibold">Delivery Method</h1>
        <div className="py-2 text-gray-700 text-xs">
          <p>Enter your shipping address to view avaiable shipping method</p>
          <ul className="py-5 flex flex-col gap-5">
            <li className="flex items-center gap-5">
              <input type="checkbox" className="rounded-full h-4 w-4" />
              <span className="font-semibold">Pickup</span>
            </li>
            <li className="flex items-center gap-5">
              <input type="checkbox" className="rounded-full h-4 w-4" />
              <span className="flex flex-col">
              <span className="font-semibold">Standard Delivery</span>
              <span>Enter your delivery address to view your delivery price</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
