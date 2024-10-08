import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Category() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter(
    (category) => category.products.length > 0
  );

  const selectRandomCategories = (categories, count) => {
    let shuffled = categories.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
  };

  const newCategories = selectRandomCategories(categories);
  // console.log(categories);
  return (
    <div className="bg-white border border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden mb-4">
      <h2 className="py-3 px-4 font-semibold border-b border-gray-200 dark:border-gray-600 text-slate-800 dark:text-slate-100 text-center">
        All Categories
      </h2>
      <div className="grid sm:grid-cols-7 grid-cols-2 text-center items-center gap-1 lg:px-2 py-4">
        {newCategories.length > 0 &&
          newCategories.map((category, i) => {
            return (
              <Link
                key={i}
                href={`/category/${category.slug}`}
                className="gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-sm px-1 py-2"
              >
                <span className="text-sm block">{category.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
