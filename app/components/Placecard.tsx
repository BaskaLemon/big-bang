import Link from "next/link";
import { Place } from "./categories-data";

const HeartIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z" />
  </svg>
);

const AccessibleIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="4" r="2" />
    <path d="M12 8a2 2 0 0 0-2 2v4l-4 2v2l4.5-2 1.5 5h2l-1.7-6 2.7 1v-2l-3-1.5V10a2 2 0 0 0-2-2z" />
  </svg>
);

const PlaceCard = ({ place }: { place: Place }) => {
  return (
    <Link
      href={`/place/${place.slug}`}
      className="block rounded-2xl border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-colors"
    >
      <div className="relative h-44 bg-neutral-900">
        <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          {place.subCategory}
          {place.accessible && <AccessibleIcon />}
        </span>
        <button
          onClick={(e) => e.preventDefault()}
          aria-label="Save"
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:text-[#f5c52a]"
        >
          <HeartIcon />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-xs text-[#f5c52a] mb-1">
          <span>★</span>
          <span>{place.rating}</span>
        </div>
        <div className="text-base font-semibold text-white">{place.name}</div>
        <div className="text-xs text-neutral-400 mt-0.5">
          {place.description} · {place.location}
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
