"use client";

import { useState } from "react";
import { Place } from "./categories-data";
import SubcategoryFilter from "./SubcategoryFilter";
import PlaceCard from "./Placecard";

interface CategoryPlacesClientProps {
  places: Place[];
  subcategories: string[];
}

const CategoryPlacesClient = ({
  places,
  subcategories,
}: CategoryPlacesClientProps) => {
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const filtered = activeSub
    ? places.filter((p) => p.subCategory === activeSub)
    : places;

  return (
    <div className="px-6 py-8">
      <SubcategoryFilter
        subcategories={subcategories}
        active={activeSub}
        onSelect={setActiveSub}
      />
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-neutral-500">
          <p>No places in this province yet</p>
          <button
            onClick={() => setActiveSub(null)}
            className="rounded-full border border-[#f5c52a] px-5 py-2 text-sm font-medium text-[#f5c52a] hover:bg-[#f5c52a]/10"
          >
            Show all
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((place) => (
            <PlaceCard key={place.slug} place={place} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPlacesClient;
