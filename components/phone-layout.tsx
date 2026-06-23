"use client";

import { useState, useEffect } from "react";
import BottomNav from "./bottom-nav";

type Theme = "sky" | "violet";

interface PhoneLayoutProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  children: React.ReactNode;
}

export default function PhoneLayout({ theme, setTheme, children }: PhoneLayoutProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const isMobile = Math.min(dimensions.width, dimensions.height) < 640;

  return (
    <div
      className="flex items-center justify-center bg-[#eef1f6]"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Theme switcher */}
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-white p-1 shadow-md"
        style={{
          top: isMobile ? "8px" : "16px",
        }}
      >
        <button
          onClick={() => setTheme("sky")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition sm:px-4 sm:py-1.5 sm:text-sm ${
            theme === "sky"
              ? "bg-[#3FCBFF] text-white"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Sky
        </button>
        <button
          onClick={() => setTheme("violet")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition sm:px-4 sm:py-1.5 sm:text-sm ${
            theme === "violet"
              ? "bg-[#7B2FF7] text-white"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Violet
        </button>
      </div>

      <div
        data-theme={theme}
        className="relative overflow-hidden border-[3px] border-white bg-white shadow-lg sm:border-[6px] sm:shadow-soft"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          maxHeight: "100vh",
          borderRadius: isMobile ? "16px" : "36px",
        }}
      >
        {/* Gradient top section */}
        <div
          className="bg-theme-gradient absolute inset-x-0 top-0 rounded-b-[30px] sm:rounded-b-[40px]"
          style={{
            height: isMobile ? "30%" : "260px",
            minHeight: isMobile ? "150px" : "180px",
          }}
        />

        <div className="relative flex h-full w-full flex-col">
          {children}
          <BottomNav />
        </div>
      </div>
    </div>
  );
}