"use client";

import React, { useEffect, useRef } from "react";
import { Search, Sparkles } from "lucide-react";
import FilterChip from "@/src/components/ui/FilterChip";
import { Category } from "@/src/data/macros";

export interface SearchHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  totalCount: number;
  filteredCount: number;
}

export default function SearchHero({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onSelectCategory,
  totalCount,
  filteredCount,
}: SearchHeroProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-[#ff5722] text-xs font-bold uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Biblioteca inteligente</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#172033] tracking-tight">
            Respondé más rápido, ayudá mejor
          </h1>
        </div>

        <div className="text-right">
          <span className="text-3xl font-extrabold text-[#ff5722] leading-none block">
            {totalCount}
          </span>
          <span className="text-[10px] font-bold text-[#697386] tracking-wider uppercase">
            Macros activas
          </span>
        </div>
      </div>

      <div className="relative mb-5 group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-[#697386] group-focus-within:text-[#ff5722] transition-colors" />
        </div>
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscador inteligente de macros..."
          className="w-full pl-12 pr-20 py-3.5 bg-white border border-[#e9e5de] rounded-2xl text-[#172033] placeholder-[#697386]/70 text-sm shadow-2xs focus:outline-hidden focus:border-[#ff5722] focus:ring-4 focus:ring-orange-500/10 transition-all font-medium"
        />
        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center">
          <button
            type="button"
            onClick={() => searchInputRef.current?.focus()}
            className="px-2.5 py-1 bg-[#FAF8F3] border border-[#e9e5de] rounded-lg text-xs font-semibold text-[#697386] hover:bg-[#F3EFE6] transition-colors shadow-2xs cursor-pointer select-none"
          >
            Ctrl K
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <FilterChip
              key={cat.id}
              active={selectedCategory === cat.id}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.name.replace("Todas las macros", "Todas")}
            </FilterChip>
          ))}
        </div>

        <span className="text-xs text-[#697386] font-semibold">
          {filteredCount} {filteredCount === 1 ? "resultado" : "resultados"}
        </span>
      </div>
    </div>
  );
}
