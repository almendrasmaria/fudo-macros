"use client";

import React from "react";
import { Clock, Plus, ChevronRight } from "lucide-react";
import Button from "@/src/components/ui/Button";

export interface HeaderProps {
  onNewMacro: () => void;
  onOpenRecent: () => void;
}

export default function Header({ onNewMacro, onOpenRecent }: HeaderProps) {
  return (
    <header className="h-16 px-8 flex items-center justify-between border-b border-[#e9e5de] bg-white/80 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-2 text-xs font-medium text-[#697386]">
        <span className="hover:text-[#172033] cursor-pointer transition-colors">
          Soporte
        </span>
        <ChevronRight className="w-3.5 h-3.5 text-[#697386]/60" />
        <span className="text-[#172033] font-bold">Centro de macros</span>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="sm"
          icon={Clock}
          onClick={onOpenRecent}
        >
          Recientes
        </Button>

        <Button
          variant="primary"
          size="sm"
          icon={Plus}
          onClick={onNewMacro}
        >
          Nueva macro
        </Button>
      </div>
    </header>
  );
}
