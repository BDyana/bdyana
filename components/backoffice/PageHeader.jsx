import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function PageHeader({ heading, linkTitle, href }) {
  return (
    <div className="flex justify-between py-4 mb-4">
      <Heading title={heading} />
      <Link
        className="bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-lime-600/50 font-medium rounded-lg text-base px-4 py-2 text-center inline-flex items-center dark:focus:ring-lime-600/55 me-2 space-x-3"
        href={href}
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
