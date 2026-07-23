import Link from "next/link";
import { Category } from "./categories-data";

const CategoryPreview = ({ category }: { category: Category }) => {
  if (category.previewPlaces.length === 0) {
    return (
      <div className="absolute bottom-8 right-8 text-sm text-neutral-500">
        No places in {category.name} yet
      </div>
    );
  }

  return (
    <div className="absolute bottom-8 right-8 flex gap-4">
      {category.previewPlaces.slice(0, 3).map((place) => (
        <Link
          key={place.name}
          href={`/category/${category.slug}`}
          className="w-40 rounded-xl border border-neutral-700 bg-neutral-900/70 backdrop-blur-sm p-3 hover:border-neutral-500 transition-colors"
        >
          <div className="h-20 rounded-lg bg-neutral-800 mb-2" />
          <div className="flex items-center gap-1 text-xs text-[#f5c52a] mb-1">
            <span>★</span>
            <span>{place.rating}</span>
          </div>
          <div className="text-sm font-semibold text-white truncate">
            {place.name}
          </div>
          <div className="text-xs text-neutral-400 truncate">
            {place.location}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPreview;
