"use client";
import { calculateDiscountPercentage } from "@/lib/calculatePercentage";
import AddToCartButton from "@/components/frontend/AddToCartButton";
import Breadcrumb from "@/components/frontend/Breadcrumb";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import ProductImageCarousel from "@/components/frontend/ProductImageCarousel";
import ProductShareButton from "@/components/frontend/ProductShareButton";
import { getData } from "@/lib/getData";
import {PhoneCall, Truck } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";


export default async function ProductDetailPage({ params: { slug } }) {
  const product = await getData(`products/product/${slug}`);
  const { id } = product;
  const catId = product.categoryId;
  const category = await getData(`categories/${catId}`);
  const categoryProducts = category.products;
  const products = categoryProducts.filter((product) => product.id !== id);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const urlToShare = `${baseUrl}/products/${slug}`;
  const targetDate = '2024-09-01T00:00:00Z';
  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-white col-span-12 md:col-span-9 md:flex border border-gray-100 rounded-sm">
          <div className="w-full md:w-5/12">
            <ProductImageCarousel
              productImages={product.productImages}
              thumbnail={product.imageUrl}
            />
          </div>
          <div className="w-full md:w-7/12 ml-2 lg:ml-5 pr-3 pb-5">
            <div className="flex items-center justify-between mt-3">
              <h1>
                {product.title}
              </h1>
            </div>
          <div className="flex gap-3 mt-2 mb-8">
            <div>
              <h4>Cateogory : <Link className="text-blue-600" href={`/category/${category.slug}`}>{category.title}</Link></h4>
            </div>
{/*             <span>|</span>
            <div>
              <p><b>Brand :</b> Brand Name</p>
            </div> */}
          </div>
          <div className="border-b border-gray-300">
            <h4><b>SPECIFICATION : </b></h4>
            <p className="py-2 ">{product.description}</p>
            <div className="flex items-center gap-8 mb-4 justify-between">
              <h4>SKU: {product.sku}</h4>
              <p className="py-1.5 px-4 border rounded-full text-slate-900 ">
                <b>Stock</b>: {product.productStock}
              </p>
            </div>
          </div>
          <flashsale/>
          {/* <div>
            <h1>Welcome to My Store!</h1>
            <CountdownTimer targetDate={targetDate} />
          </div> */}
          <div className="flex items-center gap-3 pt-4 border-b border-gray-200 pb-4">
            <div className="gap-3 flex items-end">
              <h4 className="text-2xl font-bold">BDT {product.salePrice}</h4>
              {product?.productPrice > product?.salePrice && (
                <del className="text-[#75757a] text-xl font-light">
                  BDT {product?.productPrice}
                </del>
              )}
              {product?.productPrice > product?.salePrice && (
                <h5 className="bg-[#fef3e9] text-[#f68b1e] flex items-center py-1 px-2 rounded-sm"><b>
                  -
                  {calculateDiscountPercentage(
                    product?.productPrice,
                    product?.salePrice
                  )}
                  %</b>
                </h5>
              )}
                  {/* 
                  <h4 className="text-2xl font-bold">BDT {product.salePrice}</h4>
                  <del className="text-[#75757a] text-xl font-light">
                    BDT {product.productPrice}
                  </del>
                </div>
                <div className="flex items-center bg-lime-200 py-1 px-2 rounded-sm text-slate-900 ">
                  <h4>- <b>
                    {calculateDiscountPercentage(
                      product?.productPrice,
                      product?.salePrice
                    )}%</b></h4>
                </div> */}
          </div>
          </div>
          <div className="flex justify-between items-center py-6">
            <AddToCartButton product={product} />
            <div className="flex gap-3">
              <div>
              <PhoneCall className="mt-3"/>
              </div>
              <div>
                <h4>Call for Any Query :<br/>
                01511- 309 309</h4>
              </div>
            </div>
          </div>
          <div className="float-right">
            <ProductShareButton urlToShare={urlToShare} />
          </div>
        </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-3 sm:block bg-white border border-gray-100 rounded-sm dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden">
          <h4 className="dark:bg-gray-800 p-2 font-medium border-b border-gray-200 dark:border-gray-600 text-slate-800 dark:text-slate-100">
            DELIVERY & RETURNS
          </h4>

          <div className="p-2 space-y-2">
            {/* <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3">
              <span>BDyana Express </span>
              <Send />
            </div> 
            <div className="py-3 text-slate-100 border-b border-gray-500">
              Eligible for Free Delivery.
              <Link href="#">View Details</Link>
            </div> */}
            <div className="flex border-b border-gray-200 gap-2 pb-4">
              <div>
                <Truck className="mt-3"/>
              </div>
              <div>
                <h3>Cash on Delivery Available.</h3>
                <h5>Delivery Fees<br/>
                Inside Dhaka  BDT 60, Outside Dhaka  BDT 100. Estimated delivery on next day When you order Our delivery agent will contact you on the day of delivery</h5>
              </div>
            </div>
            <div className="flex border-b border-gray-200 gap-2 pb-4">
              <div>
                <Truck className="mt-3"/>
              </div>
              <div>
                <h3>Standard Delivery.</h3>
                <h5>Guaranteed by 1-3 Days</h5>
              </div>
            </div>
            <div className="flex border-b border-gray-200 gap-2 pb-4">
              <div>
                <Truck className="mt-3"/>
              </div>
              <div>
                <h3>Warranty not available.</h3>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <Truck className="mt-3"/>
              </div>
              <div>
                <h3>This item is non-returnable.</h3>
              </div>
             </div>
           {/* <h2 className="text-slate-200 py-2">Choose your Location</h2>
            <div className=" pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-700 my-8 rounded-sm py-2">
        <h2 className="mb-4 text-xl font-semibold dark:text-slate-200 ml-3">
          Similar Products
        </h2>
        <CategoryCarousel products={products} />
      </div>
    </div>
  );
}