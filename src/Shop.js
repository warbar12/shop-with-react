import React from "react";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from './pages/layout';
import Home from './pages/home';
import Cart from './pages/cart';
import Category from './pages/categoryPage';
import Order from "./pages/order";
import Contacts from './pages/contacts';
import ErrorBoundary from "./pages/errorBoundary";
import "./reset.css";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="category/:categoryId" element= {<Category/>} />
      <Route path="cart" element={<Cart />} />
      <Route path="order" element={<Order/>}/>
      <Route path="contacts" element={<Contacts />}/>
    </Route>
  )
);

function Shop() {
  return <RouterProvider router={router} />;
}

export default Shop;
