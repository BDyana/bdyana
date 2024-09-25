import { ChevronRight, Factory, Building2, Laptop, Cpu, BookHeart, Luggage, Microwave, Trophy, Baby, AlignJustify, Cable, PawPrint, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function SidebarCategories() {
    return (
        <div className="sm:col-span-3 sm:block bg-white border border-gray-300 rounded-sm  dark:bg-gray-700 dark:border-gray-700 text-slate-800 hidden">
      <h2 className="bg-slate-100 dark:bg-gray-800 py-2 px-4 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100">
        Shop By Category
      </h2>
      
      <div className="py-2 h-[350px] flex flex-col gap-2 text-sm relative">
        <ul className="">
        <li className="group">
          <Link href="https://www.bdyana.com/category/industrial-machineries"
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <Factory className="text-slate-500" size={16} />
            <span className="text-sm">Industrial Machineries</span>
            <ChevronRight className="mr-1 shrink-0 w-4 h-4 dark:text-lime-500 text-slate-400 right-0 absolute hidden group-hover:block" />
          </Link>
          <ul className="absolute left-[275px] top-0 z-10 w-full px-3 py-1 bg-white h-[340px] hidden group-hover:block">
            <li className="py-1">
              <Link className="hover:text-black transition-all" href="">Home Appliancce</Link>
            </li>
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
          </ul>
        </li>
        <li className="group">
          <Link href="https://www.bdyana.com/category/gadget-accessories"
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <Building2 className="text-slate-500" size={16} />
            <span className="text-sm">Garments & Accessories</span>
            <ChevronRight className="mr-1 shrink-0 w-4 h-4 dark:text-lime-500 text-slate-400 right-0 absolute hidden group-hover:block" />
          </Link>
          <ul className="absolute left-[275px] top-0 z-10 w-full px-3 py-1 bg-white h-[340px] hidden group-hover:block">
            <h3 className="mb-1">Thread/Yarn</h3>
            <li className="py-1">
              <Link href="https://www.bdyana.com/category/wool-thread" className="hover:text-black transition-all" >Wool Thread</Link>
            </li>
            <li className="py-0.5">
              <Link className="hover:text-black transition-all" href="">Samarian Thread</Link>
            </li>
            <li className="py-0.5">
              <Link className="hover:text-black transition-all" href="">Malaikot Thread</Link>
            </li>
            <li className="py-0.5">
              <Link className="hover:text-black transition-all" href="">Crochet Thread</Link>
            </li>
            <li className="py-0.5">
              <Link className="hover:text-black transition-all" href="https://www.bdyana.com/category/lacchi-suta">Lacchi Thread</Link>
            </li>
          </ul>
        </li>
        <li className="">
          <Link href="https://www.bdyana.com/category/computer-hardware"
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <Laptop className="text-slate-500" size={16} />
            <span className="text-sm">Computer & Hardware</span>
          </Link>
        </li>
        <li className="">
          <Link href=""
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <Cpu className="text-slate-500" size={16} />
            <span className="text-sm">Gadget & Accessories</span>
          </Link>
        </li>
        <li className="">
          <Link href=""
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <Luggage className="text-slate-500" size={16} />
            <span className="text-sm">Men's Fashion</span>
          </Link>
        </li>
        <li className="group">
          <Link href=""
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
           <BookHeart className="text-slate-500" size={16} />
            <span className="text-sm">Women's & Girls' Fashion</span>
          </Link>
          <ul className="absolute left-[275px] top-0 z-10 w-full px-3 py-1 bg-white h-[340px] hidden group-hover:block">
            <h3 className="mb-1">Ladies Bag</h3>
            <li className="hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Party Bag</Link>
            </li>
            <li className="hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Canvas Bag</Link>
            </li>
            <li className="hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Hand Bag</Link>
            </li>
            <li className="hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Casual Bag</Link>
            </li>
          </ul>
        </li>
        <li className="group">
          <Link href="https://www.bdyana.com/category/beauty-bodycare"
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
           <PawPrint className="text-slate-500" size={16} />
            <span className="text-sm">Beauty & Bodycare</span>
            <ChevronRight className="mr-1 shrink-0 w-4 h-4 dark:text-lime-500 text-slate-400 right-0 absolute hidden group-hover:block" />
          </Link>
          <ul className="absolute left-[275px] top-0 z-10 w-full px-3 py-1 bg-white h-[340px] hidden group-hover:block">
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
          </ul>
        </li>
        <li className="">
          <Link href=""
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <Baby className="text-slate-500" size={16} />
            <span className="text-sm">Mothers & Kids</span>
          </Link>
        </li>
        <li className="">
          <Link href=""
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <Microwave className="text-slate-500" size={16} />
            <span className="text-sm">Home Appliancce</span>
          </Link>
        </li>
        <li className="">
          <Link href=""
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <Cable className="text-slate-500" size={16} />
            <span className="text-sm">Electronics Device</span>
          </Link>
        </li>
        <li className="">
          <Link href=""
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <Trophy className="text-slate-500" size={16} />
            <span className="text-sm">Sports & Entertainment</span>
          </Link>
        </li>
        <li className="">
          <Link href="https://www.bdyana.com/category" target="_blank"
            className="pl-3 py-1 flex items-center gap-3 hover:bg-slate-100 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 text-slate-800"
          >
            <AlignJustify className="text-slate-500" size={16} />
            <span className="text-sm font-semibold">All Categories</span>
          </Link>
        </li>
        </ul>
      </div>
      </div>
    )
}
