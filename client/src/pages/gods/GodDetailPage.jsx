import { Link, useParams } from "react-router-dom";
import gods from "../../data/gods";

export default function GodDetailPage() {
  const { slug } = useParams();

  const god = gods.find((item) => item.slug === slug);

  if (!god) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif">Deity Not Found</h1>
        <Link to="/gods" className="mt-5 text-amber-400">
          Back to Gods ↗
        </Link>
      </div>
    );
  }

  const relatedGods = gods.filter((item) => god.related.includes(item.slug));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[620px] flex items-end overflow-hidden">
        <img
          src={god.image}
          alt={god.name}
          className="absolute inset-0 h-full w-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
          <Link
            to="/gods"
            className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-amber-400"
          >
            Gods & Deities / {god.mythology}
          </Link>

          <p className="mt-12 text-xs uppercase tracking-[0.4em] text-amber-400">
            {god.mythology} Mythology
          </p>

          <h1 className="mt-4 font-serif text-6xl font-bold sm:text-8xl">
            {god.name}
          </h1>

          <h2 className="mt-5 text-xl text-white/80">{god.title}</h2>

          <p className="mt-2 text-sm text-white/50">{god.subtitle}</p>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-white/60">
            {god.introduction}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {god.domains.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs text-amber-300"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_340px]">
        <div className="space-y-16">
          {/* Overview */}
          <section>
            <SectionTitle number="01" title="Divine Overview" />

            <p className="mt-6 max-w-3xl text-base leading-9 text-white/60">
              {god.introduction}
            </p>
          </section>

          {/* Domains */}
          <section>
            <SectionTitle number="02" title="Domains & Symbols" />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 p-6">
                <p className="text-xs tracking-widest text-amber-400">
                  DOMAINS
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {god.domains.map((domain) => (
                    <span
                      key={domain}
                      className="rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-white/70"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 p-6">
                <p className="text-xs tracking-widest text-amber-400">
                  SACRED SYMBOLS
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {god.symbols.map((symbol) => (
                    <span
                      key={symbol}
                      className="rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-white/70"
                    >
                      {symbol}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Powers */}
          <section>
            <SectionTitle number="03" title="Powers & Abilities" />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {god.powers.map((power, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
                >
                  <span className="text-xs text-amber-400">
                    ABILITY 0{index + 1}
                  </span>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {power}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Stories */}
          <section>
            <SectionTitle number="04" title="Mythological Stories" />

            <div className="mt-6 space-y-5">
              {god.stories.map((story, index) => (
                <div
                  key={story.title}
                  className="border-b border-white/10 pb-5"
                >
                  <p className="text-xs text-amber-400">STORY 0{index + 1}</p>

                  <h3 className="mt-3 text-lg font-semibold">{story.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {story.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Relationships */}
          <section>
            <SectionTitle number="05" title="Divine Relationships" />

            <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
              {god.relationships.map((person, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 last:border-0"
                >
                  <span className="text-sm text-white/40">
                    {person.relation}
                  </span>

                  {person.slug ? (
                    <Link
                      to={`/gods/${person.slug}`}
                      className="text-sm text-amber-400 hover:text-amber-300"
                    >
                      {person.name} ↗
                    </Link>
                  ) : (
                    <span className="text-sm text-white/80">{person.name}</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related Gods */}
          {relatedGods.length > 0 && (
            <section>
              <SectionTitle number="06" title="Related Deities" />

              <div className="mt-6 grid grid-cols-2 gap-4">
                {relatedGods.map((related) => (
                  <Link
                    key={related.id}
                    to={`/gods/${related.slug}`}
                    className="group overflow-hidden rounded-xl border border-white/10 transition hover:border-amber-500/40"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-[#17130F]">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    <div className="p-4">
                      <p className="text-xs text-amber-400">
                        {related.mythology}
                      </p>

                      <h3 className="mt-2 font-semibold">{related.name}</h3>

                      <p className="mt-2 text-xs text-white/40">
                        {related.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Profile Sidebar */}
        <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:sticky lg:top-28">
          <p className="text-xs tracking-[0.3em] text-amber-400">
            DIVINE PROFILE
          </p>

          <h2 className="mt-5 font-serif text-3xl">{god.name}</h2>

          <p className="mt-2 text-sm text-white/40">
            {god.mythology} Mythology
          </p>

          <div className="my-6 h-px bg-white/10" />

          <div className="space-y-5">
            <ProfileItem label="Origin" value={god.origin} />
            <ProfileItem label="Classification" value={god.classification} />
            <ProfileItem label="Gender" value={god.gender} />
            <ProfileItem label="Primary Weapon" value={god.weapon} />

            {Object.entries(god.attributes).map(([key, value]) => (
              <ProfileItem key={key} label={key} value={value} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function SectionTitle({ number, title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs tracking-widest text-amber-400">{number}</span>

      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}

function ProfileItem({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-white/30">{label}</p>

      <p className="mt-1 text-sm leading-6 text-white/80">{value}</p>
    </div>
  );
}
