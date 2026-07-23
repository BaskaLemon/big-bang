import Link from "next/link";
import { Category } from "./categories-data";

interface CategoryRowProps {
  category: Category;
  isActive: boolean;
  onHover: (slug: string | null) => void;
}

const CategoryRow = ({ category, isActive, onHover }: CategoryRowProps) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      onMouseEnter={() => onHover(category.slug)}
      onMouseLeave={() => onHover(null)}
      className="flex items-center gap-3 py-2 group"
    >
      <span className="text-xs text-neutral-500 w-6">{category.number}</span>
      <span
        className={`text-lg font-medium transition-colors ${
          isActive ? "text-white" : "text-neutral-300 group-hover:text-white"
        }`}
      >
        {category.name}
      </span>
      <span className="text-xs text-[#f5c52a]">{category.count}</span>
      <span
        className={`h-px bg-[#f5c52a] transition-all duration-300 ${
          isActive ? "w-6 opacity-100" : "w-0 opacity-0"
        }`}
      />
    </Link>
  );
};

export default CategoryRow;
