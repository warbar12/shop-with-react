import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './cart/reducer'
import productsReducer from './productArr/productsSlice';
import introReducer from "./introProduct/introSlice";
import clientReducer  from "./order/orderSlice"
 
export const store = configureStore({
    reducer: {
        cart: cartReduser,
        products: productsReducer,
        intro: introReducer,
        client: clientReducer,
    }
}) 

