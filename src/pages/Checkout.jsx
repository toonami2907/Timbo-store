import React, { useEffect, useState } from "react";
import DeliveryInfo from "../components/DeliveryInfo";
import DeliveryMethod from "../components/DeliveryMethod";
import Cart, { calculateTotal } from "../components/Cart";
import CheckCart from "../components/CheckCart";

export default function Checkout() {
  const [cartitems, setCart]= useState([])
  console.log(cartitems);
  useEffect(()=>{
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartLocalStorage)
  },[])
  return (
    <div className="md:px-10 px-5 py-5">
      <section className="h-screen w-full py-2 flex items-center justify-center">
        <div className="lg:w-[90%] w-full max-h-screen lg:h-screen h-[90%] overflow-y-auto mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4">
          <div className="h-full lg:col-span-2 w-full flex flex-col gap-2 text-sm">
            <div className="w-full px-5 py-5 rounded-sm shadow-sm bg-white">
              <div className="flex justify-between text-sm">
                <h1 className="font-semibold">Buyer's information</h1>
                <p>Edit</p>
              </div>
              <div className="py-2 text-gray-700 text-xs">
                <p>42, Western road, Testing Avenue, Lagos</p>
                <p className="py-1">081 234 456 78</p>
                <p>testinginfo@gmail.com</p>
              </div>
            </div>
            <DeliveryInfo />
            <DeliveryMethod />
          </div>
          <div className="lg:col-span-1 w-full lg:h-[600px] flex flex-col justify-between shadow-sm bg-white px-2 py-5">
            <div className="flex justify-between text-sm py-2">
              <h1 className="font-semibold">Order total</h1>
              <p>edit</p>
            </div>
            <div className="lg:max-h-full h-full lg:h-[350px] lg:overflow-y-auto ">
              <CheckCart cartitems={cartitems} />
            </div>
            <section className=" border-b-2 md:border-t-2 py-3 flex gap-5 flex-col border-gray-200">
              <div className="flex justify-between text-xs text-gray-700 py-2">
                <p>{cartitems && cartitems.length} items</p>
                <p>${calculateTotal(cartitems)}</p>
              </div>
              <div className="flex justify-between text-xs text-gray-700 ">
                <p>Delivery</p>
                <p>$5.00</p>
              </div>
            </section>
            <div className="flex justify-between text-sm font-bold py-5 ">
                <p>Total to pay:</p>
                <p>${calculateTotal(cartitems) + 5}</p>
            </div>
            <button className="bg-black text-white w-full py-2">Pay</button>
          </div>
        </div>
      </section>
    </div>
  );
}
