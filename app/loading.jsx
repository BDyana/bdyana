import React from "react";
import Image from "next/image";
import logo from "../public/Logo.png";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="text-center m-auto">
        <Image src={logo} alt="BDyana logo" className="lg:w-80 w-64"/>
      </div>
    </div>
  );
}
