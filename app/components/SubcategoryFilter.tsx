interface SubcategoryFilterProps {
  subcategories: string[];
  active: string | null;
  onSelect: (value: string | null) => void;
}

const pillClass = (isActive: boolean) =>
  `px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
    isActive
      ? "bg-[#f5c52a] text-neutral-900 border-[#f5c52a]"
      : "border-neutral-600 text-white hover:border-neutral-400"
  }`;

const SubcategoryFilter = ({
  subcategories,
  active,
  onSelect,
}: SubcategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onSelect(null)}
        className={pillClass(active === null)}
      >
        All
      </button>
      {subcategories.map((sub) => (
        <button
          key={sub}
          onClick={() => onSelect(sub)}
          className={pillClass(active === sub)}
        >
          {sub}
        </button>
      ))}
    </div>
  );
};

export default SubcategoryFilter;
