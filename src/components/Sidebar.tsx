"use client";

import React from "react";
import {
  LayoutGrid,
  WalletCards,
  ReceiptText,
  Smartphone,
  Settings,
  Layers,
  LucideIcon,
} from "lucide-react";
import { Category } from "@/src/data/macros";

const iconMap: Record<string, LucideIcon> = {
  LayoutGrid: LayoutGrid,
  WalletCards: WalletCards,
  ReceiptText: ReceiptText,
  Smartphone: Smartphone,
  Settings: Settings,
};

export interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  categoryCounts: Record<string, number>;
}

export default function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-[#e9e5de] flex flex-col shrink-0 min-h-screen p-5">
      <div>
        <div className="mb-8 px-1">
          <img
            src="/logo.png"
            alt="Fudo Macros"
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="mb-3 px-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#697386]">
            Espacio de trabajo
          </p>
        </div>

        <nav className="space-y-1">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Layers;
            const count = categoryCounts[cat.id] ?? 0;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#fff0e9] text-[#ff5722] shadow-2xs"
                    : "text-[#697386] hover:bg-[#FAF8F3] hover:text-[#172033]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-[#ff5722]" : "text-[#697386]"
                    }`}
                  />
                  <span>{cat.name}</span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-[#ffd7c5] text-[#e94817]"
                      : "bg-[#FAF8F3] text-[#697386] border border-[#e9e5de]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
