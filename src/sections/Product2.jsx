import React, { useContext, useState } from "react";
import Product_Card from "./Product_Card";
import Filters from "../components/Filters";
import { ProductContext } from "../hooks/Product_Context";
import { Loader } from "lucide-react";


export default function Product2() {
  const { female, loading } = useContext(ProductContext);
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
        {loading ? (
            <p className="text-center flex items-center justify-center">
              <span className="animate-spin text-blue-700 mr-2"><Loader /></span> Loading, please wait...
            </p>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 grid-cols-2 sm:grid-cols-2 h-full">
              {Array.isArray(female) && female.slice(0, itemsToShow).map((item, idx) => (
                <Product_Card product={item} key={idx} />
              ))}
            </div>
          )}
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
