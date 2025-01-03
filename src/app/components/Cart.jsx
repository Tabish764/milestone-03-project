'use client'
import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../context/CartContext'
const Cart = ({data}) => {
  
    const {item,setItems} = useContext(CartContext)
    const addToCart = () => {
        setItems([...item,data])
        console.log(item);
        toast.success('Added to Cart', {
          position: 'top-right',
          autoClose: 500, 
        });
    }
    
  return (
    <>
    
    <button onClick={addToCart} className="bg-red-600 py-2 px-4 rounded-lg mt-auto">Add to Cart</button>
    </>
  )
}

export default Cart