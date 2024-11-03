"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import { ShoppingCart  } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function AddToCartButton({ product }) {
  const handleClick = () => {
    fbq.event("Purchase", { currency: "USD", value: 10 });
  };
  const dispatch = useDispatch();
  function handleAddToCart() {
    // Dispatch the reducer
    dispatch(addToCart(product));
    toast.success("Item added Successfully");
  }
  return (
    <button
      onClick={() => {handleAddToCart(); handleClick();}}
      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-sm text-white"
    >
      <ShoppingCart size={18} />
      <span>Add to Cart</span>
    </button>
  );
}
