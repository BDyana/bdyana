import { convertIsoDateToNormal } from "@/lib/convertIsoDatetoNormal";
import { generateSlug } from "@/lib/generateSlug";
import Link from "next/link";
import React from "react";

export default function OrderCard({ order }) {
  const orderCreationDate = convertIsoDateToNormal(order.createdAt);
  const subTotal = order?.orderItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  if (order.orderItems.length === 0) {
    return null;
  }

  return (
    <li className="overflow-hidden bg-white border border-gray-400 rounded-md">
      <div className="">
        <div className="border-b border-gray-200 lg:border-b-0 lg:border-r bg-gray-50">
          <div className="px-4 py-6 sm:p-6 lg:p-2">
            <div className="flex grid grid-cols-2 gap-2 md:grid-cols-5">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Order Number
                </p>
                <p className="text-sm font-bold text-gray-900">
                  #{order.orderNumber}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Date</p>
                <p className="text-sm font-bold text-gray-900">
                  {orderCreationDate}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Quantity
                </p>
                <p className="text-sm font-bold text-gray-900">
                  {/* {item.quantity} */}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Amount
                </p>
                <p className="text-sm font-bold text-gray-900">
                  ৳ {subTotal}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Order Status
                </p>
                <div className="mt-0.5 flex items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-3 h-3 rounded-full text-white bg-amber-400 mr-1.5">
                    <svg
                      className="w-2 h-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {" "}
                    {order.orderStatus}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-2">
          <ul className="space-y-7">
            {order.orderItems.length > 0
              ? order.orderItems.map((item, i) => {
                  const slug = generateSlug(item.title);
                  return (
                    <li key={i} className="relative flex pb-10 sm:pb-0">
                      <div className="flex-shrink-0">
                        <img
                          className="object-cover rounded-lg w-10 h-10"
                          src={item.imageUrl}
                          alt={item.title}
                        />
                      </div>

                      <div className="flex flex-col justify-between flex-1 ml-5">
                        <div className="sm:grid sm:grid-cols-2 sm:gap-x-5">
                          <div>
                            <p className="text-base font-bold text-gray-900">
                              {item.title}
                            </p>
                          </div>

                          <div className="mt-4 sm:mt-0 flex items-center justify-between">
                            <p className=" text-sm font-medium text-gray-500 me-4">
                              {item.quantity}
                            </p>
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 sm:relative">
                          <div className="flex space-x-5">
                            <Link
                              href={`/products/${slug}`}
                              title={item.title}
                              className="p-1 -m-1 text-sm font-medium text-gray-500 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                              {" "}
                              View Product{" "}
                            </Link>
                          <button
                            type="button"
                            className="p-1 -m-1 text-sm font-medium text-gray-500 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          >
                            View Order
                          </button>

                          <Link
                            href={`/dashboard/orders/${order.id}/invoice`}
                            className="p-1 -m-1 text-sm font-medium text-gray-500 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          >
                            View Invoice
                          </Link>
                          </div>
                          </div>
                      </div>
                    </li>
                  );
                })
              : ""}
          </ul>
            <div className="">
              <p className="text-base font-bold text-gray-900">
                Customer Details
              </p>
              <div className="flex grid grid-cols-2 gap-2 md:grid-cols-4">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Name: 
                </p>
                <p className="text-sm font-bold text-gray-900">
                  {order.firstName} {order.lastName}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Email Address: 
                </p>
                <p className="text-sm font-bold text-gray-900">
                  {order.email}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Mobile No: 
                </p>
                <p className="text-sm font-bold text-gray-900">
                  {order.phone}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Shipping Address: 
                </p>
                <p className="text-sm font-bold text-gray-900">
                {order.streetAddress} {order.city} {order.country}
                </p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </li>
  );
}
