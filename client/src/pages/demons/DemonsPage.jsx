import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";

const demons = [
  {
    name: "Lucifer",
    origin: "Christian Tradition",
    title: "The Fallen Angel",
    symbol: "✦",
    slug: "lucifer",
  },
  {
    name: "Asmodeus",
    origin: "Jewish Tradition",
    title: "Demon of Desire",
    symbol: "◈",
    slug: "asmodeus",
  },
  {
    name: "Beelzebub",
    origin: "Christian Tradition",
    title: "Lord of the Flies",
    symbol: "♜",
    slug: "beelzebub",
  },
  {
    name: "Mara",
    origin: "Buddhist Tradition",
    title: "Tempter and Obstructor",
    symbol: "☽",
    slug: "mara",
  },
  {
    name: "Ahriman",
    origin: "Zoroastrian Tradition",
    title: "Spirit of Destruction",
    symbol: "◉",
    slug: "ahriman",
  },
  {
    name: "Lamashtu",
    origin: "Mesopotamian",
    title: "Demonic Figure",
    symbol: "𒀭",
    slug: "lamashtu",
  },
];

export default function DemonsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <PageHeader
        title="Demons & Devils"
        description="Explore the dark and mysterious entities found in religious traditions, ancient legends and supernatural folklore."
      />

      <div className="mb-10 rounded-2xl border border-red-500/15 bg-gradient-to-r from-red-950/30 to-transparent p-8">
        <p className="text-xs tracking-[0.3em] text-red-400">
          THE DARK ARCHIVE
        </p>

        <h2 className="mt-4 text-2xl font-semibold">
          Beyond the Boundaries of Light
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">
          Discover the beings associated with temptation, chaos, destruction and
          the supernatural across different traditions.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {demons.map((demon, index) => (
          <Link
            key={demon.slug}
            to={`/demons/${demon.slug}`}
            className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#251718] via-[#171214] to-[#0B0B0D] p-6 transition hover:border-red-500/40"
          >
            <div className="flex justify-between">
              <span className="text-xs text-white/30">0{index + 1}</span>
              <span className="text-xs text-red-400/70">ARCHIVE</span>
            </div>

            <span className="absolute right-4 top-14 text-8xl text-red-500/[0.07]">
              {demon.symbol}
            </span>

            <div className="relative">
              <p className="text-xs text-red-400/70">{demon.origin}</p>

              <h2 className="mt-2 text-2xl font-semibold group-hover:text-red-400">
                {demon.name}
              </h2>

              <p className="mt-2 text-sm text-white/40">{demon.title}</p>

              <p className="mt-5 text-xs tracking-widest text-white/50 group-hover:text-red-400">
                DISCOVER ENTITY ↗
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
