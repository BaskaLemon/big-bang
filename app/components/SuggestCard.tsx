/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Star, Image } from "lucide-react";

type CardType = "SCENIC SPOTS" | "PLACES" | "EVENTS";

type Card = {
  id: number;
  type: CardType;
  rating: number;
  name: string;
  subtitle: string;
  image?: string;
};

const CARDS: Card[] = [
  {
    id: 1,
    type: "SCENIC SPOTS",
    rating: 4.9,
    name: "Тайхар чулуу",
    subtitle: "Байгалийн дурсгал",
  },
  {
    id: 2,
    type: "PLACES",
    rating: 4.9,
    name: "Од ажиглалын кэмп",
    subtitle: "Од ажиглах",
  },
  {
    id: 3,
    type: "EVENTS",
    rating: 4.9,
    name: "Задгай кино үдэш",
    subtitle: "Кино",
  },
  {
    id: 4,
    type: "SCENIC SPOTS",
    rating: 4.9,
    name: "Ёлын ам",
    subtitle: "Хавцал",
  },
  { id: 5, type: "PLACES", rating: 4.9, name: "Q Club", subtitle: "Бильярд" },
  {
    id: 6,
    type: "EVENTS",
    rating: 4.8,
    name: "Board Game Meetup",
    subtitle: "Цуглаалт",
  },
  {
    id: 7,
    type: "SCENIC SPOTS",
    rating: 4.8,
    name: "Элсэн тасархай",
    subtitle: "Элсэн манхан",
  },
  {
    id: 8,
    type: "PLACES",
    rating: 4.9,
    name: "Bullseye Bar",
    subtitle: "Дартс бар",
  },
  {
    id: 9,
    type: "EVENTS",
    rating: 4.7,
    name: "UB Jazz Night",
    subtitle: "Концерт",
  },
];

// Each card type gets its own badge color
const TYPE_COLORS: Record<CardType, string> = {
  "SCENIC SPOTS":
    "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  PLACES: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  EVENTS: "bg-green-500/20 text-green-400 border border-green-500/30",
};

function PlaceCard({ card }: { card: Card }) {
  return (
    <div className="min-w-45 max-w-45 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 flex flex-col shrink-0">
      {/* Image area */}
      <div className="relative">
        {card.image ? (
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-40 object-cover"
          />
        ) : (
          // Placeholder when no image is set
          <div className="w-full h-40 bg-neutral-800 flex items-center justify-center">
            <Image className="w-8 h-8 text-neutral-600" />
          </div>
        )}

        {/* Badge and rating overlaid on top of the image */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${TYPE_COLORS[card.type]}`}
          >
            {card.type}
          </span>
          <span className="flex items-center gap-1 bg-black/50 text-white text-xs font-medium px-2 py-0.5 rounded-full">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            {card.rating}
          </span>
        </div>
      </div>

      {/* Name and subtitle */}
      <div className="p-3">
        <p className="text-white text-sm font-semibold truncate">{card.name}</p>
        <p className="text-neutral-400 text-xs mt-0.5 truncate">
          {card.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function TopRated() {
  return (
    <div className="px-6 py-4">
      <h2 className="text-white font-semibold text-lg mb-4">Top rated</h2>

      {/* Horizontal scrollable row — hides scrollbar visually */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {CARDS.map((card) => (
          <PlaceCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
