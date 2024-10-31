import Link from "next/link";
import React from "react";

export default async function ArenaGrid() {
  return (
    <div className="bg-pink-300 mt-12 p-2 border border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden mb-4 grid grid-cols-3 lg:grid-cols-6 gap-2">

    <Link href="" className="py-20 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">
    <img src=""/>
    <h3>Ladies</h3>
    </Link>
    <Link href="" className="py-20 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Man's</Link>
    <Link href="" className="py-20 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Kid's</Link>
    <Link href="" className="py-20 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Industrial Materials</Link>
    <Link href="" className="py-20 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Home Appliance</Link>
    <Link href="" className="py-14 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Home Appliance</Link>
    <Link href="" className="py-14 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Ladies</Link>
    <Link href="" className="py-14 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Man's</Link>
    <Link href="" className="py-14 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Kid's</Link>
    <Link href="" className="py-14 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Industrial Materials</Link>
    <Link href="" className="py-14 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Home Appliance</Link>
    <Link href="" className="py-14 text-center bg-slate-100 hover:bg-slate-300 duration-300 transition-all rounded-sm">Home Appliance</Link>
    </div>
  );
}
