"use client";
import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { HelpCircle, ShoppingCart, User } from "lucide-react";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";
import CartCount from "./CartCount";
import { useSession } from "next-auth/react";
import UserAvatar from "../backoffice/UserAvatar";
import ContactInfo from "./ContactInfo";
import { PhoneCall } from "lucide-react";
export default function Navbar() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white dark:bg-slate-700 shadow sticky top-0 z-40 w-full backdrop-blur-md">
      <div className="container flex items-center justify-between lg:pt-3.5 pt-0 lg:px-0 px-2 max-w-6xl gap-6 mx-auto">
        {/* Logo */}
         <Link className="" href="/">
          <Image src={logo} alt="BDyana logo" className="w-36 lg:w-40 mt-1"/>
        </Link>
      
          {/* SEARCH */}
          <div className="flex-grow hidden md:flex">
            <div className="w-full">
            <SearchForm />
            </div>
          </div>
          <div className="sm:flex hidden">
            <ContactInfo/>
          </div>
          <div>
            <div className="flex gap-1 lg:gap-2 ml-2">
              {status === "unauthenticated" ? (
                <Link
                  href="/login"
                  className="flex items-center space-x-1 text-green-950 dark:text-slate-100"
                >
                  <User />
                  <span className="md:flex hidden">Login</span>
                </Link>
              ) : (
                <UserAvatar user={session?.user} />
              )}
              <CartCount />
              <ThemeSwitcherBtn />
            </div>
              {/* <div className="flex sm:hidden gap-2">
                <PhoneCall size={14} className="mt-1"/>
                <h4><b>01511- 309 309</b></h4>
            </div> */}
          </div>
        </div>
        <div className="container mx-auto mt-1 pb-2 px-2">
          <div className="flex md:hidden mx-auto">
              <div className="flex overflow-hidden w-full">
                <SearchForm />
              </div>
          </div>
        </div>
    </div>
  );
}
