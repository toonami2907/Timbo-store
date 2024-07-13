import React, { useEffect, useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingBagIcon,
  UserRound,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navigation = [
  { name: "Men", to: "/" },
  { name: "Women", to: "/Women" },
];

export const Navbar2 = () => {
  const [searchbox, setSearchbox] = useState(false);
  const [cartitems, setCartitems] = useState([]);
  const [cart, setCart] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartitems(cartLocalStorage);
  }, []);

  const cartnumber = cartitems.length;

  const handleInput = () => {
    setSearchbox(true);
  };

  const closeSearchbox = () => {
    setSearchbox(false);
  };

  return (
    <div className="h-full">
      <nav className="w-full py-4  LinkStyles flex relative justify-between items-center px-3  lg:px-10 bg-white">
        <div className="flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden  pr-2 h-10 "
          >
            <Menu />
          </button>
          <Link
            to="/"
            className="text-2xl LinkStyles font-['unbounded-bold'] text-black"
          >
            {" "}
            TIMBU
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <ul className="lg:flex gap-5 items-center ml-3 lg:w-[30%]  hidden">
          {Navigation.map((navitem, idx) => (
            <li key={idx} className="text-lg LinkStyles font-semibold">
              <Link to={navitem.to}>{navitem.name}</Link>
            </li>
          ))}
        </ul>
        {/* DESKTOP SEARCH FUNCTIONALITY */}
        <div className="flex items-center justify-between gap-10">
          <form className="lg:flex relative hidden">
            <input
              type="text"
              placeholder="Search"
              className="md:w-[400px] xl:w-[550px] border border-black  pl-14 h-10 outline-none placeholder:text-[18px] pr-4 bg-gray-200"
            />
            <button type="button" className="absolute top-2 left-0 px-3 ">
              <Search size={25} />
            </button>
          </form>
        </div>
        <div className="flex gap-2">
          <div className="md:flex items-center">
            <button className="hover:bg-gray-300 px-2 h-10 lg:hidden rounded-full">
              <Search />
            </button>
            <button className="hover:bg-gray-300 px-2 h-10 lg:hidden rounded-full">
              <UserRound />
            </button>
            <button
              onClick={() => setCart(!cart)}
              className="hover:bg-gray-300 relative px-2 h-10 rounded-full"
            >
              <ShoppingBagIcon />
              <span className="absolute text-xs px-2 py-1 -top-1 rounded-full text-white bg-purple-800 -right-1">
                {cartnumber}
              </span>
            </button>
            {cart && (
              <div className="fixed inset-0 bg-opacity-50 bg-black backdrop-blur-sm z-50">
                <div className="sm:w-[70%] h-screen absolute md:px-5 px-2 py-3 top-0 right-0 bg-white">
                  <button
                    onClick={() => setCart(!cart)}
                    type="button"
                    className=" px-2 h-5v rounded-full"
                  >
                    <X size={25} />
                  </button>
                  {/* Cart */}
                  <div className="pt-10 h-full overflow-y-auto">
                    <h1 className="text-center bg-black text-white py-2">
                      CART ITEMS
                    </h1>
                    <Cart setOpen={setCart} open={cart} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* MOBILE DEVICE NAVIGATION */}
        <div
          className={`lg:hidden fixed inset-0 transition-transform transform ${
            open ? "translate-x-0" : "translate-x-full"
          } bg-opacity-50 bg-black backdrop-blur-sm z-50`}
        >
          <div className="sm:w-[70%] w-full h-screen absolute px-10 top-0 right-0 bg-white">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="absolute top-4 right-3 px-2 h-10 rounded-full hover:bg-gray-300"
            >
              <X size={25} />
            </button>
            <ul className="flex flex-col py-16 gap-7 justify-between">
              {Navigation.map((nav, idx) => (
                <li key={idx}>
                  <Link onClick={() => setOpen(!open)} to={nav.to}>
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h1 className="absolute bottom-1 text-sm">&copy; 2024 TIMBU</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};
