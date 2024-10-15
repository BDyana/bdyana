import OrderCard from "@/components/Order/OrderCard";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  // Fetch All Orders
  const orders = await getData("orders");
  // Get the user Id
  const session = await getServerSession(authOptions);
  if (!session) return;
  const userId = session?.user?.id;
  if (orders.length === 0 || !orders) {
    return <p>No Orders Yet</p>;
  }
  // Filter By User Id
  const allOrders = orders.filter((order) => order);
  // console.log(userOrders);
  return (
    <section className="py-6 bg-white">
      <div className="px-4 m-auto max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Customer Orders
            </h1>
            <p className="mt-2 text-sm font-normal text-gray-600">
              Check the status of recent and old orders & discover more products
            </p>
          </div>

          <ul className="mt-4 space-y-3">
            {allOrders.map((order, i) => {
              return <OrderCard key={i} order={order} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
