import { createContext, useContext, useReducer } from "react";
import cartReducer, { initialState } from "./slice/cartSlice";

export const CartContext = createContext(initialState);

export const CartProvider = ({children})=>{
   const [state,dispatch] = useReducer(cartReducer,initialState);

    let cart = { cartState : state, dispatch} 

    return <CartContext.Provider value={cart}>
        {children}
    </CartContext.Provider>
}

const useCart = ()=>{
 const cart = useContext(CartContext);
 return cart;
}

export default useCart;