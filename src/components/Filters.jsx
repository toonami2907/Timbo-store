import React from "react";
import { Filtersitems } from "../sections/Product";
import { Filter, Volume } from "lucide-react";

export default function Filters() {
  return (
    <div className="h-[100px] flex overflow-hidden items-center">
        <ul className="flex w-full lg:px-10 px-2 justify-between">
          <div className="flex gap-2 items-center ">
            <li className="border border-black bg-black text-white py-1 px-2 text-sm">
              All
            </li>
            {Filtersitems.map((item, idx) => (
              <li
                key={idx}
                className="border  border-black md:block hidden text-xs hover:bg-black hover:text-white text-black py-1 px-2 lg:text-sm"
              >
                {item.name}
              </li>
            ))}
          </div>
          <li className="border flex gap-1  items-center border-black text-xs text-black py-1 px-2 lg:text-sm">
            <Filter size={20}/> <span>Filter</span>
          </li>
        </ul>
    </div>
  );
}
