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
