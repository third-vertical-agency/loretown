import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";

const creatures = [
  {
    name: "Phoenix",
    origin: "Greek / Egyptian",
    type: "Rebirth & Fire",
    symbol: "♨",
    slug: "phoenix",
  },
  {
    name: "Cerberus",
    origin: "Greek",
    type: "Underworld Guardian",
    symbol: "♜",
    slug: "cerberus",
  },
  {
    name: "Hydra",
    origin: "Greek",
    type: "Multi-headed Serpent",
    symbol: "≋",
    slug: "hydra",
  },
  {
    name: "Griffin",
    origin: "Ancient Near East / Greek",
    type: "Hybrid Beast",
    symbol: "♞",
    slug: "griffin",
  },
  {
    name: "Dragon",
    origin: "Various Traditions",
    type: "Legendary Reptile",
    symbol: "🐉",
    slug: "dragon",
  },
  {
    name: "Minotaur",
    origin: "Greek",
    type: "Half-man, Half-bull",
    symbol: "♉",
    slug: "minotaur",
  },
  {
    name: "Garuda",
    origin: "Hindu / Buddhist",
    type: "Divine Bird",
    symbol: "🦅",
    slug: "garuda",
  },
  {
    name: "Jormungandr",
    origin: "Norse",
    type: "World Serpent",
    symbol: "🐍",
    slug: "jormungandr",
  },
];

export default function CreaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <PageHeader
        title="Mythical Creatures"
        description="From fire-breathing dragons to guardians of the underworld, discover the legendary creatures of ancient mythology."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {creatures.map((creature, index) => (
          <Link
            key={creature.slug}
            to={`/creatures/${creature.slug}`}
            className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1F211B] via-[#141613] to-[#0B0B0D] p-6 transition hover:-translate-y-1 hover:border-emerald-500/30"
          >
            <div className="flex justify-between">
              <span className="text-xs text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-emerald-400/70">BESTIARY</span>
            </div>

            <span className="absolute right-4 top-14 text-8xl text-emerald-500/[0.07]">
              {creature.symbol}
            </span>

            <div className="relative">
              <p className="text-xs text-emerald-400/70">{creature.origin}</p>

              <h2 className="mt-2 text-2xl font-semibold group-hover:text-emerald-400">
                {creature.name}
              </h2>

              <p className="mt-2 text-sm text-white/40">{creature.type}</p>

              <p className="mt-5 text-xs tracking-widest text-white/50 group-hover:text-emerald-400">
                EXPLORE CREATURE ↗
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
