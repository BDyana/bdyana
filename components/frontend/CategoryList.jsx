import Link from "next/link";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";
import { MoveRight } from 'lucide-react';

export default function CategoryList({ category, isMarketPage }) {
  return (
    <div className="bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
      <div className="dark:bg-gray-800 py-1 pl-4 pr-0 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
        <h2>{category.title}</h2>
        <Link
          className="duration-300 transition-all text-slate-800 dark:text-slate-100 rounded-md px-4 py-2"
          href={`/category/${category.slug}`}
        >
          <MoveRight />
        </Link>
      </div>
      <div className="bg-white dark:bg-slate-700 pt-2 px-1 pb-0">
        <CategoryCarousel
          isMarketPage={isMarketPage}
          products={category.products}
        />
      </div>
    </div>
  );
}
