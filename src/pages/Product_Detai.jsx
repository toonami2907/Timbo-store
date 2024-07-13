import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../hooks/Product_Context'
import { Star } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Product_Detai() {
    const [detail, setDetail]=useState([])
    const [image, setImage] = useState("")
    const [cartList, setCartList] = useState([]);
    const {organization_id,apiKey2,App_id} = useContext(ProductContext)
    const {id} = useParams()



    useEffect(() => {
        const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]");
        setCartList(cartLocalStorage);
      }, []);
    
     
    
    
      useEffect(() => {
        localStorage.setItem("cartList", JSON.stringify(cartList));
      }, [cartList]);


      const AddtoCart = async () => {
        try {
          const response = await axios.get(`/api/products/${id}?organization_id=${organization_id}&Appid=${App_id}&Apikey=${apiKey2}`);
          const productToAdd = { ...response.data, qty: 1 }; // Add qty field with initial value
    
          let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
          // Check if product already exists in cart
          const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);
    
          if (existingProductIndex !== -1) {
           return toast.error("Product is already in cart, pease visit the cart")
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

    const FindProductById = async()=>{
        const response = await axios.get(`/api/products/${id}?organization_id=${organization_id}&Appid=${App_id}&Apikey=${apiKey2}`)
        setDetail(response.data)
        setImage(response.data.photos[0].url);
    }
    useEffect(()=>{
        FindProductById()
    },[])

    const getFullImageUrl = (url) => {
        const baseUrl = 'https://api.timbu.cloud/images/';
        return `${baseUrl}${url}`;
      };
    //   const imageUrl =  getFullImageUrl(detail.photos[0].url)
        return (
               <section className="lg:py-20">
                <section className="lg:grid lg:grid-cols-2 w-[90%] mx-auto flex flex-col lg:gap-5 lg:pt-5">
                    {/* PRODUCT IMAGE */}
                    <div className="h-full flex justify-between items-center">
                        <div className="rounded-lg overflow-hidden px-5">
                            {detail ? (
                                <img src={getFullImageUrl(image)} alt={detail.name} className="h-full lg:h-full lg:w-full md:w-[600px] md:h-[400px] w-full object-center rounded-lg object-cover" />
                            ) : (
                                <div className="md:h-[400px] md:w-[600px] w-[400px] h-[200px] bg-gray-300 animate-pulse rounded-lg"></div>
                            )}
                        </div>
                    </div>
                    {/* PRODUCT INFO */}
                    <div className="lg:max-h-[600px] overflow-y-auto py-10 px-5">
                        <h1 className="text-4xl ">
                            {detail ? detail.name : <div className="w-[400px] h-[40px] bg-gray-300 animate-pulse"></div>}
                        </h1>
                        {/* PRODUCT RATING */}
                        <div className="flex gap-3 py-2 lg:flex-row flex-col items-start lg:items-center">
                            <p className="text-2xl lg:py-2">
                                {detail ? `$${detail.current_price || 33}` : <span className="w-[50px] h-[30px] bg-gray-300 animate-pulse"></span>}
                            </p>
                            <div className="flex gap-2 lg:py-5">
                                <div className="border-l lg:flex hidden border-gray-500" />
                                {detail ? (
                                    <>
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} size={18} fill="gold" color="gold" />
                                        ))}
                                        <Star fill="lightgray" size={18} color="lightgray" />
                                        <p className="text-xs md:text-sm text-gray-600">190 reviews</p>
                                    </>
                                ) : (
                                    <div className="flex gap-2">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index} className="w-[18px] h-[18px] bg-gray-300 animate-pulse"></div>
                                        ))}
                                        <div className="w-[50px] h-[18px] bg-gray-300 animate-pulse"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm py-4 lg:pb-5">
                            {detail ? detail.description : (
                                <span className="w-full h-[80px] bg-gray-300 animate-pulse"></span>
                            )}
                        </p>
                        
                        {/* ADD TO CART BUTTON */}
                        {detail ? (
                            <button
                                onClick={() => AddtoCart()}
                                className="py-3 bg-black w-full mb-4 rounded-md hover:bg-black/80 text-white text-lg">
                                Add to cart
                            </button>
                        ) : (
                            <div className="w-full h-[50px] bg-gray-300 animate-pulse rounded-md my-5"></div>
                        )}
                    </div>
                </section>
            </section>
  )
}
