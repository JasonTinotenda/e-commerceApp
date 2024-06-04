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
    const getTotalCartAmount = (itemId) =>{
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if (cartItems[item]>0){
                    let itemInfo = food_list.find((product) => product._id === item);
                    totalAmount += itemInfo.price*cartItems[item];
                }
            }
            return totalAmount;
    }
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
