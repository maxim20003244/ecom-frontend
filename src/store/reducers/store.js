import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";
import {cartReducer} from "./cartReducer";
import { authReducer } from "./authReducer";
import {thunk} from "redux-thunk";

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
     : [];
const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
     : [];

     const initialState = {
         auth: {user: user},
         carts : {cart : cartItems},

        //carts: { cart: [] },
       
     }

     export const store = configureStore({
        reducer: {
          products: productReducer,
          errors: errorReducer,
          carts: cartReducer,
          auth: authReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
        preloadedState: initialState,
      });
export default store;