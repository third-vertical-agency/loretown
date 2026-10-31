import { Link } from "react-router-dom";
import SearchBar from "../../components/common/SearchBar";
import SectionHeading from "../../components/common/SectionHeading";
import CategoryCard from "../../components/common/CategoryCard";

const categories = [
  {
    title: "Gods & Deities",
    description: "Discover divine beings, celestial rulers and ancient gods.",
    path: "/gods",
    symbol: "✧",
    count: "120+",
  },
  {
    title: "Demons & Devils",
    description: "Explore dark entities, fallen angels and evil spirits.",
    path: "/demons",
    symbol: "◈",
    count: "80+",
  },
  {
    title: "Mythical Creatures",
    description: "Encounter legendary beasts and supernatural creatures.",
    path: "/creatures",
    symbol: "♜",
    count: "150+",
  },
  {
    title: "Heroes & Legends",
    description: "Meet legendary warriors, demigods and ancient heroes.",
    path: "/heroes",
    symbol: "⚔",
    count: "90+",
  },
];

const featuredEntities = [
  {
    name: "Zeus",
    type: "Greek Mythology",
    category: "King of the Gods",
    path: "/gods/zeus",
    symbol: "⚡",
  },
  {
    name: "Shiva",
    type: "Hindu Mythology",
    category: "God of Destruction",
    path: "/gods/shiva",
    symbol: "ॐ",
  },
  {
    name: "Odin",
    type: "Norse Mythology",
    category: "Allfather",
    path: "/gods/odin",
    symbol: "ᛟ",
  },
  {
    name: "Lucifer",
    type: "Christian Tradition",
    category: "Fallen Angel",
    path: "/demons/lucifer",
    symbol: "✦",
  },
];

const popularMythologies = [
  { name: "Greek", path: "/mythologies/greek", symbol: "🏛" },
  { name: "Hindu", path: "/mythologies/hindu", symbol: "🕉" },
  { name: "Norse", path: "/mythologies/norse", symbol: "⚔" },
  { name: "Egyptian", path: "/mythologies/egyptian", symbol: "𓂀" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[680px] flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,120,45,0.13),transparent_60%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0B0D]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-amber-500/[0.06] px-5 py-2">
            <span className="text-amber-400">✧</span>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
              The Encyclopedia of Mythology
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
            Beyond the
            <span className="block font-serif italic text-amber-400">
              Realm of Legends
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
            Discover the gods who ruled the heavens, the demons who haunted the
            underworld, and the legendary creatures that lived beyond human
            imagination.
          </p>

          <div className="mx-auto mt-10 max-w-xl">
            <SearchBar />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/explore"
              className="rounded-lg bg-amber-500 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-amber-400"
            >
              Explore the Unknown ↗
            </Link>

            <Link
              to="/mythologies"
              className="rounded-lg border border-white/15 px-7 py-3.5 text-sm text-white/80 transition hover:border-amber-500/40 hover:text-amber-400"
            >
              Discover Mythologies
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
            {[
              ["12+", "Mythologies"],
              ["500+", "Mythical Entities"],
              ["100+", "Ancient Stories"],
            ].map(([number, label]) => (
              <div key={label}>
                <p className="text-2xl font-semibold text-amber-400">
                  {number}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/35">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          title="Explore the Mythical World"
          description="Enter different realms of mythology and discover the beings that shaped ancient beliefs."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:bg-amber-500/[0.03]"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-3xl text-amber-400">
                  {category.symbol}
                </span>
                <span className="text-xs text-white/30">{category.count}</span>
              </div>

              <h3 className="text-lg font-semibold group-hover:text-amber-400">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {category.description}
              </p>

              <p className="mt-7 text-xs tracking-widest text-amber-400">
                EXPLORE COLLECTION ↗
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Entities */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              title="Legends of the Ancient World"
              description="Meet some of the most iconic figures in mythology."
            />

            <Link
              to="/gods"
              className="mb-8 text-sm text-amber-400 hover:text-amber-300"
            >
              Explore all gods ↗
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {featuredEntities.map((entity, index) => (
              <Link
                key={entity.name}
                to={entity.path}
                className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#28211A] via-[#151515] to-[#0B0B0D] p-6 transition hover:border-amber-500/40"
              >
                <span className="absolute -right-4 -top-8 text-9xl text-amber-500/[0.06]">
                  {entity.symbol}
                </span>

                <span className="text-xs tracking-widest text-amber-400/70">
                  0{index + 1} / FEATURED
                </span>

                <div className="relative">
                  <p className="text-xs text-white/40">{entity.type}</p>

                  <h3 className="mt-2 text-2xl font-semibold group-hover:text-amber-400">
                    {entity.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/40">
                    {entity.category}
                  </p>

                  <p className="mt-5 text-xs text-amber-400">
                    DISCOVER ENTITY ↗
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mythologies */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          title="Worlds of Mythology"
          description="Every civilization has its own stories, gods and mysteries."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {popularMythologies.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="group flex items-center gap-4 rounded-xl border border-white/[0.08] p-5 transition hover:border-amber-500/30"
            >
              <span className="text-3xl text-amber-400">{item.symbol}</span>

              <div>
                <h3 className="font-medium group-hover:text-amber-400">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-white/35">Explore legends ↗</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-amber-500/15 bg-gradient-to-br from-amber-500/[0.08] to-transparent px-6 py-20 text-center">
          <span className="text-3xl text-amber-400">✧</span>

          <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">
            Every Legend Has a Beginning
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
            Travel through ancient civilizations, uncover forgotten stories and
            discover the extraordinary world of mythology.
          </p>

          <Link
            to="/explore"
            className="mt-8 inline-flex rounded-lg bg-amber-500 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-amber-400"
          >
            Begin Your Journey ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
