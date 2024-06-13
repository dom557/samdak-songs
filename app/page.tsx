"use client";

import React, { useState } from "react";
import Playlist from "./components/Playlist"; // Adjust the path as needed
import Navbar from "./components/Navbar"; // Adjust the path as needed
import Footer from "./components/Footer";

const MainPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="h-full w-full   bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <Navbar onSearch={handleSearch} />
      <div className="pt-16">
        <Playlist searchQuery={searchQuery} />
      </div>
      <Footer />
    </main>
  );
};

export default MainPage;
