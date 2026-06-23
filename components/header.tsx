"use client";

import Icon from "./icons";

interface HeaderProps {
  onMenuClick?: () => void;
  onSearchClick?: () => void;
}

export default function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  return (
    <div className="flex shrink-0 items-center justify-between px-4 pt-3 text-white sm:px-5 sm:pt-4">
      <button onClick={onMenuClick} className="hover:opacity-80 transition">
        <Icon name="menu" className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button onClick={onSearchClick} className="hover:opacity-80 transition">
        <Icon name="search" className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}