"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Sorting({ title, slug, isSearch }) {
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  const min = searchParams.get("min") || 0;
  const max = searchParams.get("max") || "";
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page")) || 1;
  console.log(sortParam);
  const sortingLinks = [
    {
      title: "Relevance",
      href: isSearch ? `/search?search=${search}` : `/category/${slug}`,
      sort: null,
    },
    {
      title: "Price - High to Low",
      href: isSearch
        ? `/search?search=${search}&page=${page}&sort=desc&min=${min}&max=${max}`
        : `/category/${slug}?page=${page}&sort=desc&min=${min}&max=${max}`,
      sort: "desc",
    },
    {
      title: "Price - Low to High",
      href: isSearch
        ? `/search?search=${search}&page=${page}&sort=asc&min=${min}&max=${max}`
        : `/category/${slug}?page=${page}&sort=asc&min=${min}&max=${max}`,
      sort: "asc",
    },
  ];
  return (
    <div className="lg:flex items-center justify-between">
      {/* <h2 className="text-2xl">Search Results - Electronic</h2> */}
      <h2 className="text-2xl font-medium ">
        {isSearch && "Search Results - "}
        {title}
      </h2>
      <div className="flex text-sm items-center gap-3 lg:mt-0 mt-5">
        <p>Sort by:</p>
        <div className="flex items-center gap-1">
          {sortingLinks.map((link, i) => {
            return (
              <Link
                key={i}
                className={`${
                  link.sort === sortParam
                    ? "text-sm text-white font-medium bg-gray-700 px-3 py-1 border border-gray-700"
                    : "border border-slate-500 px-2 py-1"
                }`}
                href={link.href}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
