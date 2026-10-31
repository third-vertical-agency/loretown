import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";

const categories = [
  {
    name: "Gods & Deities",
    description: "The divine rulers, creators and protectors.",
    path: "/gods",
    symbol: "✧",
    number: "01",
  },
  {
    name: "Demons & Devils",
    description: "Dark entities, fallen angels and spirits.",
    path: "/demons",
    symbol: "◈",
    number: "02",
  },
  {
    name: "Mythical Creatures",
    description: "Beasts, monsters and supernatural beings.",
    path: "/creatures",
    symbol: "♜",
    number: "03",
  },
  {
    name: "Heroes & Legends",
    description: "Warriors, demigods and legendary figures.",
    path: "/heroes",
    symbol: "⚔",
    number: "04",
  },
  {
    name: "Mythologies",
    description: "Discover ancient cultures and their beliefs.",
    path: "/mythologies",
    symbol: "⌘",
    number: "05",
  },
  {
    name: "Realms & Afterlife",
    description: "Heavens, underworlds and mythical dimensions.",
    path: "/realms",
    symbol: "☼",
    number: "06",
  },
  {
    name: "Artifacts & Weapons",
    description: "Divine weapons and legendary treasures.",
    path: "/artifacts",
    symbol: "⚒",
    number: "07",
  },
  {
    name: "Ancient Stories",
    description: "Explore the stories behind the legends.",
    path: "/stories",
    symbol: "▤",
    number: "08",
  },
];

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <PageHeader
        title="Explore the Unknown"
        description="A gateway to ancient civilizations, divine beings, legendary creatures and forgotten worlds."
      />

      <div className="mb-10 flex flex-wrap gap-3">
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs text-amber-400">
          All Collections
        </span>
        <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">
          Ancient Worlds
        </span>
        <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">
          Divine & Dark
        </span>
        <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">
          Legends & Stories
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={category.path}
            className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#211C17] to-[#101012] p-7 transition hover:-translate-y-1 hover:border-amber-500/40"
          >
            <span className="absolute right-5 top-3 text-7xl text-amber-500/[0.07]">
              {category.symbol}
            </span>

            <p className="text-xs tracking-widest text-amber-400/60">
              COLLECTION {category.number}
            </p>

            <div className="absolute bottom-7 left-7 right-7">
              <h2 className="text-xl font-semibold group-hover:text-amber-400">
                {category.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {category.description}
              </p>

              <p className="mt-5 text-xs text-amber-400">EXPLORE ↗</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
