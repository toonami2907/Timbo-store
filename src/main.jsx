import React,{ Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import ProductProvider from "./hooks/Product_Context.jsx";
import Loading from '../src/components/Loading.jsx'


const Product_Detai = lazy(() => import("./pages/Product_Detai.jsx"));
const Checkout = lazy(() => import("./pages/Checkout.jsx"));
const Women = lazy(() => import("./pages/Women.jsx"));
const App = lazy(() => import("./App.jsx"));


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
  <Suspense fallback={<Loading />}>
  <ProductProvider>
    <AppRoutes />
  </ProductProvider>
  </Suspense>
</BrowserRouter>
);
