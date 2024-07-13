import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Women from "./pages/Women.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductProvider from "./hooks/Product_Context.jsx";
import Product_Detai from "./pages/Product_Detai.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<App />} />
        <Route path="/Women" index element={<Women />} />
        <Route path="/Checkout" index element={<Checkout />} />
        <Route path="/product/:id" index element={<Product_Detai />} />
      </Route>
    </Routes>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ProductProvider>
    <AppRoutes />
  </ProductProvider>
  </BrowserRouter>
);
