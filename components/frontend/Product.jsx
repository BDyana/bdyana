"use client";
import { calculateDiscountPercentage } from "@/lib/calculatePercentage";
import { addToCart } from "@/redux/slices/cartSlice";
import ProgressBar from "@ramonak/react-progress-bar";
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
  const progress = (product.productLeft / product.productStock) * 100;
  console.log(progress);

  return (
    <div className="mb-2 mx-1 bg-white dark:bg-slate-900 overflow-hidden border hover:shadow  ">
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
          <h4 className="text-sm text-center dark:text-slate-200 text-slate-900 my-2 line-clamp-2">
            {product.title}
          </h4>
        </Link>
        <div className="flex items-center justify-between gap-2 pb-1 dark:text-slate-200 text-slate-800">
          <div>
            <p className="leading-none font-medium">৳ {product?.salePrice}</p>
            {product?.productPrice > product?.salePrice && (
              <del className="text-slate-500 text-sm mr-1 lg:mr-2">
                ৳ {product?.productPrice}
              </del>
            )}
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
            <p className="text-gray-500 dark:text-gray-600 text-xs mt-4">
              {product?.productStock} items left
            </p>
          </div>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center hover:bg-gray-100 p-2 lg:p-3 rounded-full text-black"
          >
            <ShoppingCart size={17} />
          </button>
        </div>

        <ProgressBar
          completed={`${progress}`}
          isLabelVisible={false}
          bgColor={
            progress >= 70 ? "#00b289" : progress >= 50 ? "#d4851e" : "#f56565"
          }
          height={10}
        />
      </div>
    </div>
  );
}