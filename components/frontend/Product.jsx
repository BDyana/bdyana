"use client";
import { calculateDiscountPercentage } from "@/lib/calculatePercentage";
import { addToCart } from "@/redux/slices/cartSlice";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    // Dispatch the reducer
    dispatch(addToCart(product));
    toast.success("Product added Successfully");
  }
  return (
    <div className="mb-2 mx-1 bg-white dark:bg-slate-900 overflow-hidden border hover:shadow">
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
          className="w-full"
        />
      </Link>
      <div className="px-1 lg:px-2">
        <Link href={`/products/${product.slug}`}>
          <h4 className="text-sm text-center dark:text-slate-200 text-slate-900 my-2 line-clamp-1">
            {product.title}
          </h4>
          {/* <p>{category.title}</p> */}
        </Link>
        <div className="flex items-center justify-between gap-2 pb-1 dark:text-slate-200 text-slate-800">
          <div>
            <p className="leading-none font-medium">৳ {product?.salePrice}</p>
            <del className="text-slate-500 text-sm mr-2">
              ৳ {product?.productPrice}
            </del>
            {product?.productPrice > product?.salePrice && (
              <h5 className="bg-[#fef3e9] text-[#f68b1e] p-1 inline ">
                -
                {calculateDiscountPercentage(
                  product?.productPrice,
                  product?.salePrice
                )}
                %
              </h5>
            )}
          </div>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center hover:bg-gray-100 px-3 py-3 rounded-full text-black"
          >
            <ShoppingCart size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
