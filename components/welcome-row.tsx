"use client";

export default function WelcomeRow() {
  return (
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
  );
}