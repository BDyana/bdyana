import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MoveRight } from 'lucide-react';

export default async function CategoryGrid() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter(
    (category) => category.products.length > 0
  );

  const selectRandomCategories = (categories, count) => {
    let shuffled = categories.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
  };

  const newCategories = selectRandomCategories(categories, 24);
  // console.log(categories);
  return (
    <div className="bg-white border border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden mb-4">
      <div className="dark:bg-gray-800 pt-2 pl-2 text-slate-800 dark:text-slate-100 flex justify-between items-center border-b border-gray-200 dark:border-gray-600">
      <h2 className="pl-3 pb-2 pt-0.5 font-semibold text-slate-800 dark:text-slate-100">Shop By Category</h2>        
        <Link className="duration-300 transition-all text-slate-800 dark:text-slate-100 rounded-md px-4 flex gap-3 items-center" href={`/category`}>View All<MoveRight size={32} strokeWidth={1.5}/></Link>
        </div>
      <div className="grid lg:grid-cols-8 grid-cols-4 text-center items-center gap-1 lg:px-2 lg:py-2 py-3">
        {newCategories.length > 0 &&
          newCategories.map((category, i) => {
            return (
              <Link
                key={i}
                href={`/category/${category.slug}`}
                className="gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md py-4"
              >
                <Image
                  width={500}
                  height={500}
                  className="lg:w-14 w-11 lg:h-14 h-11 rounded-full object-cover m-auto"
                  src={category.imageUrl}
                  alt={category.title}
                />
                <p className="lg:mt-3 mt-2.5 line-clamp-1">{category.title}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
