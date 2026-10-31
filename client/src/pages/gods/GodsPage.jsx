import { Link } from "react-router-dom";
import { useState } from "react";
import PageHeader from "../../components/common/PageHeader";

const gods = [
  {
    name: "Zeus",
    mythology: "Greek",
    domain: "Thunder & Sky",
    symbol: "⚡",
    slug: "zeus",
    description: "King of the Olympian gods.",
  },
  {
    name: "Poseidon",
    mythology: "Greek",
    domain: "Sea & Earthquakes",
    symbol: "♆",
    slug: "poseidon",
    description: "Ruler of the seas.",
  },
  {
    name: "Athena",
    mythology: "Greek",
    domain: "Wisdom & War",
    symbol: "⚔",
    slug: "athena",
    description: "Goddess of wisdom and strategy.",
  },
  {
    name: "Shiva",
    mythology: "Hindu",
    domain: "Destruction & Transformation",
    symbol: "ॐ",
    slug: "shiva",
    description: "The destroyer and transformer.",
  },
  {
    name: "Vishnu",
    mythology: "Hindu",
    domain: "Preservation",
    symbol: "✧",
    slug: "vishnu",
    description: "The preserver of the universe.",
  },
  {
    name: "Brahma",
    mythology: "Hindu",
    domain: "Creation",
    symbol: "✺",
    slug: "brahma",
    description: "The creator of the universe.",
  },
  {
    name: "Odin",
    mythology: "Norse",
    domain: "Wisdom & War",
    symbol: "ᛟ",
    slug: "odin",
    description: "The Allfather of Norse mythology.",
  },
  {
    name: "Thor",
    mythology: "Norse",
    domain: "Thunder & Strength",
    symbol: "⚡",
    slug: "thor",
    description: "God of thunder and protector of mankind.",
  },
  {
    name: "Ra",
    mythology: "Egyptian",
    domain: "Sun & Creation",
    symbol: "☀",
    slug: "ra",
    description: "The ancient Egyptian sun god.",
  },
];

const filters = ["All", "Greek", "Hindu", "Norse", "Egyptian"];

export default function GodsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGods =
    activeFilter === "All"
      ? gods
      : gods.filter((god) => god.mythology === activeFilter);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <PageHeader
        title="Gods & Deities"
        description="Meet the divine rulers, creators, protectors and forces that shaped the mythologies of ancient civilizations."
      />

      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2.5 text-sm transition ${
              activeFilter === filter
                ? "border-amber-500 bg-amber-500/10 text-amber-400"
                : "border-white/10 text-white/50 hover:border-white/30"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* God Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredGods.map((god, index) => (
          <Link
            key={god.slug}
            to={`/gods/${god.slug}`}
            className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#292219] via-[#171614] to-[#0B0B0D] p-6 transition hover:-translate-y-1 hover:border-amber-500/40"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-amber-400/70">
                {god.mythology.toUpperCase()}
              </span>
            </div>

            <div className="absolute right-4 top-14 text-8xl text-amber-500/[0.07] transition group-hover:scale-110">
              {god.symbol}
            </div>

            <div className="relative">
              <p className="text-xs text-amber-400/70">{god.domain}</p>

              <h2 className="mt-2 text-2xl font-semibold group-hover:text-amber-400">
                {god.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/40">
                {god.description}
              </p>

              <p className="mt-5 text-xs tracking-widest text-white/50 group-hover:text-amber-400">
                DISCOVER ↗
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredGods.length === 0 && (
        <p className="py-16 text-center text-white/40">
          No gods found in this mythology.
        </p>
      )}
    </div>
  );
}
