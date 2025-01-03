'use client'

import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [item,setItems] = useState([])
    return (
        <CartContext.Provider value={{item,setItems}}>
        {children}
        </CartContext.Provider>
    )
}

