import Link from "next/link";
import { Category } from "./categories-data";

interface CategoryHeroProps {
  category: Category;
  placeCount: number;
}

const CategoryHero = ({ category, placeCount }: CategoryHeroProps) => {
  return (
    <div className="relative h-96 flex flex-col justify-end bg-neutral-900 px-6 pb-8">
      <Link
        href="/"
        className="absolute top-6 left-6 text-sm text-neutral-300 hover:text-white"
      >
        ← Home
      </Link>
      <div className="flex items-end gap-3">
        <h1 className="text-6xl font-bold text-white">{category.name}</h1>
        <span className="mb-2 text-sm text-neutral-400">
          {placeCount} places
        </span>
      </div>
      <p className="mt-2 text-neutral-400">{category.tagline}</p>
    </div>
  );
};

export default CategoryHero;
