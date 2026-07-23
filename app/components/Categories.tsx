"use client";

import { useState } from "react";
import { CATEGORIES } from "./categories-data";
import CategoryRow from "./CategoryRow";
import CategoryPreview from "./CategoryPreview";

const Categories = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const activeCategory = CATEGORIES.find((c) => c.slug === hoveredSlug) ?? null;

  return (
    <div className="relative min-h-125">
      <div className="max-w-xs">
        <p className="text-xs tracking-widest text-neutral-500 mb-4">
          CATEGORIES
        </p>
        {CATEGORIES.map((category) => (
          <CategoryRow
            key={category.slug}
            category={category}
            isActive={hoveredSlug === category.slug}
            onHover={setHoveredSlug}
          />
        ))}
        <p className="text-xs text-neutral-500 mt-4">
          {activeCategory ? activeCategory.tagline : "Hover over a category"}
        </p>
      </div>
      {activeCategory && <CategoryPreview category={activeCategory} />}
    </div>
  );
};

export default Categories;
