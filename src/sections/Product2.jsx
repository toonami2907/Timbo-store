import React, { useContext, useState } from "react";
import Product_Card from "./Product_Card";
import Filters from "../components/Filters";
import { ProductContext } from "../hooks/Product_Context";

export const Productwo = [
  {
    id: 11,
    qty: 1,
    Price: 50,
    name: "Plain Grey Unisex Hoodie",
    img: "/Rectangle 53 (6).png",
  },
  {
    id: 12,
    qty: 1,
    Price: 50,
    name: "Sky Stock Blue Jean For Men",
    img: "/Rectangle 53 (7).png",
  },
  {
    id: 13,
    qty: 1,
    Price: 50,
    name: "Osc Signature MENS Quality ",
    img: "/WIDE-LEG WOOL TROUSERS 2 (1).png",
  },
  {
    id: 14,
    qty: 1,
    Price: 50,
    name: "Dark Grey Summer Short ",
    img: "/WIDE-LEG WOOL TROUSERS 1 (2).png",
  },
  {
    id: 15,
    qty: 1,
    Price: 50,
    name: "Men's Short Sleeve Round  ",
    img: "/WIDE-LEG WOOL TROUSERS 1 (1).png",
  },
  {
    id: 16,
    qty: 1,
    Price: 50,
    name: "Reclaimed Vintage men loose ",
    img: "/Group 957 (1).png",
  },
  {
    id: 17,
    qty: 1,
    Price: 50,
    name: "Plain Grey Unisex Hoodie",
    img: "/Rectangle 53 (5).png",
  },
  {
    id: 18,
    qty: 1,
    Price: 50,
    name: "Reclaimed Vintage men loose",
    img: "/Rectangle 53 (4).png",
  },
  {
    id: 19,
    qty: 1,
    Price: 50,
    name: "Plain Grey Unisex Hoodie",
    img: "/WIDE-LEG WOOL TROUSERS 1.png",
  },
  {
    id: 20,
    qty: 1,
    Price: 50,
    name: "Plain Grey Unisex Hoodie",
    img: "/Rectangle 53 (3).png",
  },
];
export default function Product2() {
  const { female } = useContext(ProductContext);
  const [showAll, setShowAll] = useState(false);
  const initialItemsToShow = 10;
  const itemsToShow = showAll ? female.length : initialItemsToShow;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <Filters />
      <div className="lg:px-10 px-2">
        <h1 className="text-2xl font-bold">All items</h1>
        <p className="text-xs">{itemsToShow} / 15 items</p>
        <div className="py-5">
          <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-4  grid-cols-2 sm:grid-cols-2 h-full">
            {Array.isArray(female) &&
              female
                .slice(0, itemsToShow)
                .map((item, idx) => <Product_Card product={item} key={idx} />)}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 py-10 ">
          <p className=" text-xs md:text-sm text-gray-700">
            {showAll
              ? "Click to show more product"
              : "Click to show less product"}
          </p>
          <button
            onClick={toggleShowAll}
            className="py-2 px-5 border-2 border-gray-700  hover:bg-black hover:text-white bg-gray-50 text-black"
          >
            {showAll ? "Load Less" : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
}
