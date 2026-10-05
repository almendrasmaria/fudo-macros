"use client";

import React from "react";

export interface FilterChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export default function FilterChip({
  children,
  active = false,
  className = "",
  ...props
}: FilterChipProps) {
  return (
    <button
      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
        active
          ? "bg-[#ff5722] text-white shadow-xs shadow-orange-500/20"
          : "bg-white border border-[#e9e5de] text-[#697386] hover:bg-[#FAF8F3] hover:text-[#172033]"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
