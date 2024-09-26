"use client";
import Breadcrumb from "@/components/frontend/Breadcrumb";
import CartItems from "@/components/frontend/CartItems";
import CartSubTotalCard from "@/components/frontend/CartSubTotalCard";
import EmptyCart from "@/components/frontend/EmptyCart";
import React from "react";
import { useSelector } from "react-redux";
export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
<<<<<<< HEAD
=======
  // console.log(cartItems);
>>>>>>> fbe612953c2fcf2680eaee0cd3799976f94d839c
  const subTotal =
    cartItems
      .reduce((acc, currentItem) => {
        return acc + currentItem.salePrice * currentItem.qty;
      }, 0)
      .toFixed(2) ?? 0;
<<<<<<< HEAD
=======

  // console.log(subTotal);
>>>>>>> fbe612953c2fcf2680eaee0cd3799976f94d839c
  return (
    <div>
      <Breadcrumb />
      {cartItems.length > 0 ? (
<<<<<<< HEAD
        <div className="grid grid-cols-12 gap-6 md:gap-14">
=======
        <div className='grid grid-cols-12 gap-6 md:gap-14 '>
>>>>>>> fbe612953c2fcf2680eaee0cd3799976f94d839c
          <CartItems cartItems={cartItems} />
          <CartSubTotalCard subTotal={subTotal} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
