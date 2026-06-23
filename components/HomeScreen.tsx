"use client";

import { useState, useEffect } from "react";

type Theme = "sky" | "violet";

const categories = ["Top", "Design", "Code", "Marketing"];

const courses = [
  {
    title: "Programming",
    emoji: "💻",
    tint: "from-sky-100 to-sky-200",
  },
  {
    title: "Finance",
    emoji: "🧮",
    tint: "from-violet-100 to-violet-200",
  },
];

function Icon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  switch (name) {
    case "menu":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-3.6-3.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M3 11l9-7 9 7M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bookmark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M6 4h12v17l-6-4-6 4V4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.7 21a2 2 0 01-3.4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomeScreen() {
  const [theme, setTheme] = useState<Theme>("sky");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Top");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // You can add navigation or filtering logic here
    console.log(`Selected category: ${category}`);
  };

  const handleCourseClick = (courseTitle: string) => {
    console.log(`Selected course: ${courseTitle}`);
    // You can add navigation to course detail here
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`Navigated to: ${tab}`);
    // You can add navigation logic here
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    // You can add search logic here
  };

  return (
    <div 
      className="flex items-center justify-center bg-[#eef1f6]"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* Theme switcher */}
      <div 
        className="absolute top-2 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-white p-1 shadow-md"
        style={{
          top: Math.min(dimensions.width, dimensions.height) < 640 ? '8px' : '16px',
        }}
      >
        <button
          onClick={() => setTheme("sky")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition sm:px-4 sm:py-1.5 sm:text-sm ${
            theme === "sky" ? "bg-[#3FCBFF] text-white" : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Sky
        </button>
        <button
          onClick={() => setTheme("violet")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition sm:px-4 sm:py-1.5 sm:text-sm ${
            theme === "violet" ? "bg-[#7B2FF7] text-white" : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Violet
        </button>
      </div>

      <div
        data-theme={theme}
        className="relative overflow-hidden border-[3px] border-white bg-white shadow-lg sm:border-[6px] sm:shadow-soft"
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100vw',
          maxHeight: '100vh',
          borderRadius: Math.min(dimensions.width, dimensions.height) < 640 ? '16px' : '36px',
        }}
      >
        {/* Gradient top section */}
        <div 
          className="bg-theme-gradient absolute inset-x-0 top-0 rounded-b-[30px] sm:rounded-b-[40px]"
          style={{
            height: Math.min(dimensions.width, dimensions.height) < 640 ? '30%' : '260px',
            minHeight: Math.min(dimensions.width, dimensions.height) < 640 ? '150px' : '180px',
          }}
        />

        <div className="relative flex h-full w-full flex-col">
          {/* Status bar */}
          <div className="flex shrink-0 items-center justify-between px-4 pt-2 text-[10px] font-semibold text-white sm:px-5 sm:pt-3 sm:text-[11px]">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="hidden sm:inline">▂▄▆█</span>
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Header */}
          <div className="flex shrink-0 items-center justify-between px-4 pt-3 text-white sm:px-5 sm:pt-4">
            <button onClick={() => console.log("Menu opened")} className="hover:opacity-80 transition">
              <Icon name="menu" className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button onClick={() => setShowSearch(!showSearch)} className="hover:opacity-80 transition">
              <Icon name="search" className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          {/* Welcome row */}
          <div className="flex shrink-0 items-center justify-between px-4 pt-3 sm:px-5 sm:pt-4">
            <div>
              <h1 className="font-display text-base font-bold text-white sm:text-lg">
                Welcome Gloria!
              </h1>
              <p className="text-[10px] text-white/80 sm:text-[11px]">
                Today is a great day to learn something new!
              </p>
            </div>
            <button 
              onClick={() => console.log("Profile clicked")}
              className="h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-white/70 bg-gradient-to-br from-amber-200 to-rose-200 sm:h-10 sm:w-10 hover:scale-105 transition"
            />
          </div>

          {/* Stat pills */}
          <div className="flex shrink-0 flex-wrap items-center gap-1.5 px-4 pt-2 sm:gap-2 sm:px-5 sm:pt-3">
            {[
              ["Courses:", "5"],
              ["Total Pts:", "500"],
              ["Level:", "Gold"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center gap-0.5 rounded-full bg-gold px-2 py-0.5 text-[9px] font-semibold text-ink shadow-chip sm:gap-1 sm:px-2.5 sm:py-1 sm:text-[10px]"
              >
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          {/* Search card */}
          <div 
            className="relative z-10 mx-4 mt-3 rounded-xl bg-white p-3 shadow-md sm:mx-5 sm:mt-4 sm:rounded-card sm:p-4 sm:shadow-soft"
            style={{
              marginTop: Math.min(dimensions.width, dimensions.height) < 640 ? '8px' : '16px',
            }}
          >
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

            {/* Category pills */}
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

          {/* Your Courses */}
          <div className="flex-1 px-4 pb-2 pt-3 sm:px-5 sm:pb-3 sm:pt-4">
            <h2 className="font-display text-sm font-semibold text-ink">
              Your Courses
            </h2>
            <div className="mt-2 flex h-[calc(100%-2rem)] flex-col gap-3 sm:mt-3 sm:flex-row sm:gap-3">
              {courses.map((course) => (
                <button
                  key={course.title}
                  onClick={() => handleCourseClick(course.title)}
                  className="flex flex-1 flex-col rounded-xl bg-slate-50 p-3 shadow-chip transition hover:scale-[1.02] sm:rounded-card"
                >
                  <div
                    className={`flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-br ${course.tint} text-2xl sm:text-3xl`}
                  >
                    {course.emoji}
                  </div>
                  <div className="mt-2 rounded-full bg-pill-active py-1 text-center text-[10px] font-semibold text-white sm:mt-3 sm:py-1.5 sm:text-[11px]">
                    {course.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex shrink-0 items-center justify-around border-t border-slate-100 px-4 py-2 sm:justify-between sm:px-8 sm:py-3">
            {[
              { id: "home", icon: "home" },
              { id: "bookmark", icon: "bookmark" },
              { id: "bell", icon: "bell" },
              { id: "user", icon: "user" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`transition hover:scale-110 ${
                  activeTab === tab.id ? "text-accent" : "text-slate-300 hover:text-slate-500"
                }`}
              >
                <Icon name={tab.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}