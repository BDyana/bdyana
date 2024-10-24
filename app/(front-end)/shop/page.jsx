import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Shop() {
  return (
    <div className="bg-white border border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden mb-4">
      <h2 className="py-3 px-4 font-semibold border-b border-gray-200 dark:border-gray-600 text-slate-800 dark:text-slate-100 text-center">
        Shop
      </h2>
      <div className="grid sm:grid-cols-7 grid-cols-2 text-center items-center gap-1 lg:px-2 py-4">
        <h2>Seller Name</h2>
      </div>
    </div>
  );
}
