import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (id) => {
        setCartItems((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
        }));
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => {
        const updatedItems = { ...prev };
        if (updatedItems[id] > 1) {
            updatedItems[id] -= 1;
        } else {
            delete updatedItems[id];
        }
        return updatedItems;
        });
    };
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
