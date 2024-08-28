import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function CategoryGrid() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter(
    (category) => category.products.length > 0
  );

  const selectRandomCategories = (categories, count) => {
    let shuffled = categories.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
  };

  const newCategories = selectRandomCategories(categories, 16);
  // console.log(categories);
  return (
    <div className="bg-white border border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
      <h2 className="bg-slate-100 dark:bg-gray-800 py-3 px-4 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100">
        Shop By Category
      </h2>
      <div className="grid sm:grid-cols-8 grid-cols-4 text-center items-center gap-x-1 gap-y-8">
        {newCategories.length > 0 &&
          newCategories.map((category, i) => {
            return (
              <Link
                key={i}
                href={`/category/${category.slug}`}
                className="gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md py-4"
              >
                <Image
                  width={500}
                  height={500}
                  className="w-16 h-16 rounded-full object-cover m-auto"
                  src={category.imageUrl}
                  alt={category.title}
                />
                <span className="text-sm block mt-4">{category.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
