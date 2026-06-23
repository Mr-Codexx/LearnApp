"use client";

import { useState } from "react";
import Icon from "./icons";

const categories = ["Top", "Design", "Code", "Marketing"];

export default function SearchCard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Top");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    console.log(`Selected category: ${category}`);
  };

  return (
    <div className="relative z-10 mx-4 mt-3 rounded-xl bg-white p-3 shadow-md sm:mx-5 sm:mt-4 sm:rounded-card sm:p-4 sm:shadow-soft">
      <p className="font-display text-xs font-semibold text-ink sm:text-sm">
        What will you learn today?
      </p>
      <form onSubmit={handleSearch} className="mt-2 flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 sm:mt-3 sm:py-2">
        <Icon name="search" className="h-3 w-3 text-slate-400 sm:h-4 sm:w-4" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Find a subject to learn"
          className="bg-transparent text-[10px] text-slate-400 outline-none placeholder:text-slate-400 sm:text-[12px] flex-1"
        />
      </form>

      <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => handleCategoryClick(c)}
            className={`whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-medium transition sm:px-3 sm:py-1.5 sm:text-[11px] ${
              selectedCategory === c
                ? "bg-pill-active text-white hover:opacity-90"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}