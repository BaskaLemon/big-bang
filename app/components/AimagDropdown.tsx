"use client";

import React, { useState } from "react";

type Aimag = {
  name: string;
  count: number;
};
const AIMAGS: Aimag[] = [
  { name: "Ulaanbaatar", count: 37 },
  { name: "Arkhangai", count: 0 },
  { name: "Bayan-Ulgii", count: 0 },
  { name: "Bayankhongor", count: 0 },
  { name: "Bulgan", count: 0 },
  { name: "Govi-Altai", count: 0 },
  { name: "Govisumber", count: 0 },
  { name: "Darkhan-Uul", count: 2 },
  { name: "Dornogovi", count: 0 },
  { name: "Dornod", count: 0 },
  { name: "Dundgovi", count: 0 },
  { name: "Zavkhan", count: 0 },
  { name: "Orkhon", count: 1 },
  { name: "Uvurkhangai", count: 1 },
  { name: "Umnugovi", count: 0 },
  { name: "Sukhbaatar", count: 0 },
  { name: "Selenge", count: 0 },
  { name: "Tuv", count: 9 },
  { name: "Uvs", count: 0 },
  { name: "Khovd", count: 0 },
  { name: "Khuvsgul", count: 2 },
  { name: "Khentii", count: 0 },
];
const TOTAL = AIMAGS.reduce((sum, a) => sum + a.count, 0);

export default function AimagDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-neutral-800 text-white text-sm font-medium px-4 py-2 rounded-full border border-neutral-700"
      >
        <span className="w-2 h-2 rounded-full bg-[#f5c52a]" />
        <span>All</span>
        <span className="text-[#f5c52a] font-semibold">{TOTAL}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-neutral-400 ml-0.5 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-12 z-50 bg-neutral-700/80 backdrop-blur-sm rounded-2xl p-4 w-170 border border-neutral-600">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSelected(null);
                setOpen(false);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-colors
                    ${selected === null ? "bg-[#f5c52a] text-neutral-900 border-[#f5c52a]" : "bg-transparenttext-white border-neutral-500 hover:border-neutral-300"}`}
            >
              <span>All</span>
              <span
                className={
                  selected === null ? "text-neutral-800" : "text-[#f5c52a] "
                }
              >
                {TOTAL}
              </span>
            </button>
            {AIMAGS.map((aimag) => (
              <button
                key={aimag.name}
                onClick={() => {
                  setSelected(aimag.name);
                  setOpen(false);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-colors
                    ${selected === aimag.name ? "bg-[#f5c52a] text-neutral-900 border-[#f5c52a]" : "bg-transport text-white border-neutral-500 hover:border-neutral-300"}`}
              >
                <span>{aimag.name}</span>
                <span
                  className={
                    selected === aimag.name
                      ? "text-neutral-800"
                      : "text-[#f5c52a]"
                  }
                >
                  {aimag.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
