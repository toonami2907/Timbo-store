import React, { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import toast from 'react-hot-toast';
import { FetchProductPrice } from "../../server.js";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Product_Card({ product }) {
  const [cartList, setCartList] = useState([]);

  const apiKey2 = "96f5a2de92a74f0893e761ce068fa42a20240712150020262309";
  const App_id = 'K16NZFZPDN3M6XH';
  const organization_id = "e93554589c4e4b0fa96dcd763ad28532";

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]");
    setCartList(cartLocalStorage);
  }, []);

 


  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const AddtoCart = async (id) => {
    try {
      const response = await axios.get(`/api/products/${id}?organization_id=${organization_id}&Appid=${App_id}&Apikey=${apiKey2}`);
      const productToAdd = { ...response.data, qty: 1 }; // Add qty field with initial value
      console.log("this is product", productToAdd);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if product already exists in cart
      const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);

      if (existingProductIndex !== -1) {
        // Product exists in cart, increment quantity
        cart[existingProductIndex].qty += 1;
      } else {
        // Product is new in cart, add with initial quantity
        cart.push(productToAdd);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Product added to Cart");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product to Cart");
    }
  };

  const getFullImageUrl = (url) => {
    const baseUrl = 'https://api.timbu.cloud/images/';
    return `${baseUrl}${url}`;
  };
  const imageUrl = product.photos.length > 0 ? getFullImageUrl(product.photos[0].url) : null;

  return (
    <Link 
    to={`/product/${product.id}`}
    className="flex flex-col mx-auto md:mx-0 gap-2 gap-y-5 rounded-lg">
      <div className="bg-gray-100 relative overflow-hidden rounded-lg">
        {product.photos.length > 0 && (
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover object-center"
          />
        )}
        <button
          className="absolute bottom-2 bg-gray-200/70 p-2 right-2 rounded-full"
        >
          <ShoppingBag />
        </button>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p className="text-sm font-medium">{product.name}</p>
        <p className="text-xs text-gray-700">All sizes available</p>
        <p className="text-sm font-semibold">{FetchProductPrice(product.current_price)}</p>
      </div>
    </Link>
  );
}
