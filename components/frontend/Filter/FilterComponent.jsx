import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import Sorting from "./Sorting";
import Filters from "./Filters";
import FilteredProducts from "./FilteredProducts";

export default function FilterComponent({ category, products }) {
  const { title, slug } = category;
  const productCount = category.products.length;
  return (
    <div>
      <div className="bg-white space-y-2 text-slate-900 py-6 px-2">
        {/* <Breadcrumb title={title} resultCount={productCount} /> */}
        <Sorting isSearch={category?.isSearch} title={title} slug={slug} />
      </div>
      <div className="grid grid-cols-12 py-8 gap-1">
        <div className="col-span-2 hidden md:flex bg-white p-2 rounded-sm">
          <Filters slug={slug} isSearch={category?.isSearch} />
        </div>
        <div className="lg:col-span-10 col-span-12">
          <FilteredProducts
            isSearch={category?.isSearch}
            productCount={productCount}
            products={products}
          />
        </div>
      </div>
    </div>
  );
}
