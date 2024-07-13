import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([])
    const [female, setFemale] = useState([])
    const [men, setMen] = useState([])

    const apiKey = "3033f1f1dad44fcb8d86ed91dfe131cb20240712123809729209";
    const apiKey2 = "96f5a2de92a74f0893e761ce068fa42a20240712150020262309";
    const App_id = "K16NZFZPDN3M6XH";
    const organization_id = "e93554589c4e4b0fa96dcd763ad28532";

    const fetchAndRemoveProducts = async () => {
        try {
            const response =await axios.get(`https://api.timbu.cloud/products?organization_id=e93554589c4e4b0fa96dcd763ad28532&reverse_sort=false&page=1&Appid=K16NZFZPDN3M6XH&Apikey=96f5a2de92a74f0893e761ce068fa42a20240712150020262309`)
            const products = response.data.items; // Assuming response.data is the array of products
            
            // console.log("Original products:", products);
    
            for (let i = products.length - 1; i >= 0; i--) {
                if (products[i].name && products[i].name.includes("Women's")) {
                    console.log("Removing product:", products[i].name);
                    products.splice(i, 1); // Remove the product at index i
                }
            }
    
            // console.log("Updated products:", products);
            setProducts(products)
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    const fetchAndExcludeWomen = async () => {
        try {
            const response = await axios.get(`/api/products?organization_id=${organization_id}&reverse_sort=false&page=1&Appid=${App_id}&Apikey=${apiKey2}`);
            const products = response.data.items; // Assuming response.data is the array of products
            
            console.log("Original products:", products);
    
            const updatedProducts = [];
    
            for (let i = 0; i < products.length; i++) {
                if (products[i].name && products[i].name.includes("Women's")) {
                    updatedProducts.push(products[i]);
                }
            }
    
            console.log("Updated products with Women's:", updatedProducts);
            setFemale(updatedProducts); // Assuming setFemale updates state or performs another action
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    


      useEffect(()=>{
        fetchAndRemoveProducts()
        fetchAndExcludeWomen()
      },[])

  return <ProductContext.Provider value={{products,apiKey2,App_id,organization_id, female}}>{children}</ProductContext.Provider>;
}
