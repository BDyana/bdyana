import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="lg:w-[1185px] mx-auto py-2 lg:py-5 px-2 bg-[#f6f8fa]">{children}</div>
      <Footer />
    </div>
  );
}
