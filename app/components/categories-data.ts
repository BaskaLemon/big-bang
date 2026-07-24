export interface CategoryPreviewPlace {
  name: string;
  rating: number;
  location: string;
}

export interface Category {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  count: number;
  previewPlaces: CategoryPreviewPlace[];
}
export interface Place {
  slug: string;
  categorySlug: string;
  subCategory: string;
  name: string;
  rating: number;
  description: string;
  location: string;
  accessible?: boolean;
}

export const PLACES: Place[] = [
  {
    slug: "sup-club",
    categorySlug: "adrenalin",
    subCategory: "Паддл",
    name: "SUP Club",
    rating: 4.6,
    description: "Туул гол · Зун",
    location: "Ulaanbaatar",
  },
  {
    slug: "ub-shooting-club",
    categorySlug: "adrenalin",
    subCategory: "Буудлага",
    name: "UB Shooting Club",
    rating: 4.5,
    description: "Буудлагын танхим · Зааварчилгаатай",
    location: "Ulaanbaatar",
    accessible: true,
  },
  {
    slug: "vertical-wall",
    categorySlug: "adrenalin",
    subCategory: "Авиралт",
    name: "Vertical Wall",
    rating: 4.5,
    description: "Хана авиралтын төв",
    location: "Ulaanbaatar",
  },
  {
    slug: "indoor-golf-ub",
    categorySlug: "adrenalin",
    subCategory: "Гольф симулятор",
    name: "Indoor Golf UB",
    rating: 4.5,
    description: "Симулятор · 2 хүн",
    location: "Ulaanbaatar",
    accessible: true,
  },
  {
    slug: "steppe-arena",
    categorySlug: "adrenalin",
    subCategory: "Мөсний гулгуур",
    name: "Steppe Arena",
    rating: 4.3,
    description: "Мөсөн талбай · Тоног түрээстэй",
    location: "Ulaanbaatar",
  },
  {
    slug: "sky-resort",
    categorySlug: "adrenalin",
    subCategory: "Цана / мотор",
    name: "Sky Resort",
    rating: 4.0,
    description: "Цанын бааз · 12-3 сар",
    location: "Ulaanbaatar",
  },
  {
    slug: "archery-club",
    categorySlug: "adrenalin",
    subCategory: "Нум сум",
    name: "Archery Club",
    rating: 4.2,
    description: "Нум сумны сургалт",
    location: "Ulaanbaatar",
  },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null;
}

export function getPlacesByCategory(slug: string) {
  return PLACES.filter((p) => p.categorySlug === slug);
}

export function getSubcategories(slug: string) {
  return Array.from(
    new Set(getPlacesByCategory(slug).map((p) => p.subCategory)),
  );
}
export const CATEGORIES: Category[] = [
  {
    slug: "adrenalin",
    number: "01",
    name: "Adrenaline & Sports",
    tagline: "Heart-racing adventures — the fastest way to break the ice.",
    count: 0,
    previewPlaces: [
      { name: "SUP Club", rating: 4.6, location: "Tuul River · Zun" },
      {
        name: "UB Shooting Club",
        rating: 4.5,
        location: "Shooting range · Guided",
      },
      { name: "Vertical Wall", rating: 4.5, location: "Climbing center" },
    ],
  },
  {
    slug: "wellness",
    number: "02",
    name: "Rest & Wellness",
    tagline: "Slow down and breathe — spas, hot springs, quiet corners.",
    count: 0,
    previewPlaces: [],
  },
  {
    slug: "nature",
    number: "03",
    name: "Travel & Nature",
    tagline: "Wide open steppe, mountains, and everything in between.",
    count: 0,
    previewPlaces: [],
  },
  {
    slug: "food",
    number: "04",
    name: "Food & Drinks",
    tagline: "Local flavors and cozy spots to share a meal.",
    count: 0,
    previewPlaces: [],
  },
  {
    slug: "entertainment",
    number: "05",
    name: "Entertainment",
    tagline: "Games, nightlife, and things to do after dark.",
    count: 0,
    previewPlaces: [],
  },
  {
    slug: "culture",
    number: "06",
    name: "Culture & Arts",
    tagline: "Museums, galleries, and Mongolia's living heritage.",
    count: 0,
    previewPlaces: [],
  },
  {
    slug: "horizon",
    number: "07",
    name: "Horizon",
    tagline: "Something new — off the beaten path.",
    count: 0,
    previewPlaces: [],
  },
];
