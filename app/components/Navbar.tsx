"use client";

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

const Navbar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="backdrop-blur-md bg-white/30 fixed w-full z-10 top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">      
            <Link href="/" className="text-2xl font-bold text-green-200">samdak</Link>
          </div>
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                id="search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-0 sm:text-sm"
                placeholder="Search"
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
