"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#e9e5de]">
      <p className="text-xs text-[#697386] font-medium">
        Mostrando <span className="font-bold text-[#172033]">{startItem}-{endItem}</span> de{" "}
        <span className="font-bold text-[#172033]">{totalItems}</span> macros
      </p>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-xl border border-[#e9e5de] bg-white text-[#697386] hover:bg-[#FAF8F3] hover:text-[#172033] disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer shadow-2xs"
          title="Página anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#ff5722] text-white shadow-xs shadow-orange-500/20"
                  : "border border-[#e9e5de] bg-white text-[#697386] hover:bg-[#FAF8F3] hover:text-[#172033]"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-xl border border-[#e9e5de] bg-white text-[#697386] hover:bg-[#FAF8F3] hover:text-[#172033] disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer shadow-2xs"
          title="Página siguiente"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
