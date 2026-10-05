"use client";

import React, { useState, useMemo } from "react";
import Sidebar from "@/src/components/Sidebar";
import Header from "@/src/components/Header";
import SearchHero from "@/src/components/SearchHero";
import MacroCard from "@/src/components/MacroCard";
import Button from "@/src/components/ui/Button";
import { categories, initialMacros, Macro } from "@/src/data/macros";
import { SearchX } from "lucide-react";

export default function Home() {
  const [macros, setMacros] = useState<Macro[]>(initialMacros);
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      todas: macros.length,
    };
    categories.forEach((cat) => {
      if (cat.id !== "todas") {
        counts[cat.id] = macros.filter((m) => m.category === cat.id).length;
      }
    });
    return counts;
  }, [macros]);

  const filteredMacros = useMemo(() => {
    return macros.filter((macro) => {
      const matchesCategory =
        selectedCategory === "todas" || macro.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        macro.title.toLowerCase().includes(query) ||
        macro.text.toLowerCase().includes(query) ||
        macro.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [macros, selectedCategory, searchQuery]);

  const handleToggleFavorite = (macroId: string) => {
    setMacros((prev) =>
      prev.map((m) =>
        m.id === macroId ? { ...m, isFavorite: !m.isFavorite } : m
      )
    );
  };

  const handleNewMacro = () => {
    alert("Próximamente: Modal para crear nueva macro.");
  };

  const handleOpenRecent = () => {
    alert("Próximamente: Historial de macros recientes.");
  };

  const handleEdit = (macro: Macro) => {
    alert(`Próximamente: Editar macro "${macro.title}"`);
  };

  return (
    <div className="flex min-h-screen bg-[#faf8f3] text-[#172033]">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          onNewMacro={handleNewMacro}
          onOpenRecent={handleOpenRecent}
        />

        <main className="flex-1 p-8 max-w-7xl w-full mx-auto">
          <SearchHero
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            totalCount={macros.length}
            filteredCount={filteredMacros.length}
          />

          {filteredMacros.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredMacros.map((macro) => (
                <MacroCard
                  key={macro.id}
                  macro={macro}
                  onToggleFavorite={handleToggleFavorite}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#e9e5de] rounded-2xl p-12 text-center my-8 shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-[#fff0e9] text-[#ff5722] flex items-center justify-center mx-auto mb-4">
                <SearchX className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#172033] mb-1">
                No se encontraron macros
              </h3>
              <p className="text-xs text-[#697386] max-w-sm mx-auto mb-5">
                No hay resultados para &quot;{searchQuery}&quot; en la categoría seleccionada. Intenta con otra palabra o limpiá el filtro.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("todas");
                }}
              >
                Limpiar búsqueda y filtros
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
