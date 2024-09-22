"use client";
import { DoorOpen, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  function handleSearch(data) {
    const { searchTerm } = data;
    console.log(searchTerm);
    reset();
    router.push(`/search?search=${searchTerm}`);
  }
  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex items-center w-full">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <DoorOpen className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div> */}
        <input
          {...register("searchTerm")}
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-gray-200 focus:border-gray-300 block w-full lg:p-2.5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 rounded-l"
          placeholder="Search Products, Categories, Markets..."
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center lg:py-2.5 py-1.5 px-3 text-sm font-medium text-white bg-gray-700 border border-gray-700 hover:bg-gray-800 focus:ring-1 focus:outline-none focus:ring-gray-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 rounded-r"
      >
        <Search className="w-4 h-4 me-2" />
        Search
      </button>
    </form>
  );
}
