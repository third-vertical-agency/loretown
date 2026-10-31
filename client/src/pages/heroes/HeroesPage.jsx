import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";

const heroes = [
  {
    name: "Hercules",
    mythology: "Greek",
    title: "The Legendary Hero",
    symbol: "⚔",
    slug: "hercules",
  },
  {
    name: "Achilles",
    mythology: "Greek",
    title: "The Greatest Warrior",
    symbol: "🛡",
    slug: "achilles",
  },
  {
    name: "Perseus",
    mythology: "Greek",
    title: "Slayer of Medusa",
    symbol: "✧",
    slug: "perseus",
  },
  {
    name: "Karna",
    mythology: "Hindu",
    title: "The Great Warrior",
    symbol: "☀",
    slug: "karna",
  },
  {
    name: "Arjuna",
    mythology: "Hindu",
    title: "The Master Archer",
    symbol: "🏹",
    slug: "arjuna",
  },
  {
    name: "Beowulf",
    mythology: "Germanic",
    title: "The Monster Slayer",
    symbol: "⚔",
    slug: "beowulf",
  },
];

export default function HeroesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <PageHeader
        title="Heroes & Legends"
        description="Discover the warriors, demigods and legendary figures whose courage and deeds became immortal stories."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {heroes.map((hero, index) => (
          <Link
            key={hero.slug}
            to={`/heroes/${hero.slug}`}
            className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#252016] to-[#0B0B0D] p-6 transition hover:-translate-y-1 hover:border-amber-500/40"
          >
            <div className="flex justify-between">
              <span className="text-xs text-white/30">0{index + 1}</span>
              <span className="text-xs text-amber-400/70">
                {hero.mythology.toUpperCase()}
              </span>
            </div>

            <span className="absolute right-4 top-14 text-8xl text-amber-500/[0.07]">
              {hero.symbol}
            </span>

            <div className="relative">
              <p className="text-xs text-amber-400/70">{hero.title}</p>

              <h2 className="mt-2 text-2xl font-semibold group-hover:text-amber-400">
                {hero.name}
              </h2>

              <p className="mt-5 text-xs tracking-widest text-white/50 group-hover:text-amber-400">
                DISCOVER LEGEND ↗
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
