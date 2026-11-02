import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Link2,
  MapPin,
  Sparkles,
  Tag,
  Users,
  Zap,
} from "lucide-react";

import gods from "@/data/gods";

export default function GodDetailPage() {
  const { slug } = useParams();
  const [activeImage, setActiveImage] = useState(null);

  const god = useMemo(() => gods.find((g) => g.slug === slug), [slug]);

  // ---- Not found ----
  if (!god) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <h1 className="font-serif text-3xl">Deity Not Found</h1>
        <p className="text-sm text-white/50">"{slug}" is not in the archive.</p>
        <Link
          to="/gods"
          className="mt-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-amber-500/30 hover:text-amber-400"
        >
          Back to Gods
        </Link>
      </div>
    );
  }

  // ---- Derived image state ----
  const gallery = [god.image, ...(god.images ?? [])].filter(Boolean);
  const displayImage =
    activeImage && gallery.includes(activeImage) ? activeImage : god.image;

  const relatedGods = gods.filter((g) => god.related?.includes(g.slug));

  return (
    <div className="flex flex-col gap-6 lg:h-[calc(100dvh-6.5rem)] lg:flex-row lg:overflow-hidden">
      {/* ─────────────────── LEFT: IMAGES ─────────────────── */}
      <aside className="flex flex-col gap-4 lg:w-[44%] lg:min-w-0 lg:overflow-y-auto lg:pr-2">
        <Link
          to="/gods"
          className="flex w-fit items-center gap-1 text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-amber-400"
        >
          <ArrowLeft className="size-3.5" />
          Gods & Deities / {god.mythology}
        </Link>

        {/* Main image */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#17130F]">
          <img
            src={displayImage}
            alt={god.name}
            className="aspect-[4/5] w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-amber-300 backdrop-blur-sm">
            {god.mythology}
          </span>
        </div>

        {/* Thumbnails */}
        {gallery.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {gallery.map((src, i) => {
              const isActive = displayImage === src;
              return (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setActiveImage(src)}
                  className={`cursor-pointer overflow-hidden rounded-lg border transition-all ${
                    isActive
                      ? "border-amber-400 ring-1 ring-amber-400/40"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={src}
                    alt={`${god.name} view ${i + 1}`}
                    className="aspect-square w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.parentElement.style.display = "none";
                    }}
                  />
                </button>
              );
            })}
          </div>
        )}
      </aside>

      {/* ─────────────────── RIGHT: DETAILS ─────────────────── */}
      <div className="min-w-0 space-y-10 pb-6 lg:flex-1 lg:overflow-y-auto lg:pr-2 scrollbar-none">
        {/* Header */}
        <header className="space-y-3 border-b border-white/[0.06] pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/50">
              {god.classification}
            </span>
            {god.weapon && (
              <span className="rounded-full border border-amber-500/20 bg-amber-500/[0.06] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-amber-400/80">
                {god.weapon}
              </span>
            )}
          </div>

          <h1 className="font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {god.name}
          </h1>
          <p className="text-base font-medium text-white/80">{god.title}</p>
          <p className="text-sm text-white/50">{god.subtitle}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {god.domains.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-300"
              >
                {domain}
              </span>
            ))}
          </div>
        </header>

        {/* Introduction */}
        <Section number="01" title="Divine Overview">
          <p className="max-w-3xl text-base leading-8 text-white/60">
            {god.introduction}
          </p>
        </Section>

        {/* Quick facts */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <InfoCard icon={MapPin} label="Origin" value={god.origin} />
          <InfoCard
            icon={Tag}
            label="Classification"
            value={god.classification}
          />
          <InfoCard icon={Users} label="Gender" value={god.gender} />
          {god.weapon && (
            <InfoCard icon={Zap} label="Weapon" value={god.weapon} />
          )}
        </div>

        {/* Domains & Symbols */}
        <Section number="02" title="Domains & Symbols">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-xs tracking-widest text-amber-400">DOMAINS</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {god.domains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-sm text-white/70"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-xs tracking-widest text-amber-400">
                SACRED SYMBOLS
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {god.symbols.map((symbol) => (
                  <span
                    key={symbol}
                    className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-sm text-white/70"
                  >
                    {symbol}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Attributes */}
        {god.attributes && Object.keys(god.attributes).length > 0 && (
          <Section number="03" title="Divine Profile">
            <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {Object.entries(god.attributes).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
                >
                  <dt className="text-[10px] uppercase tracking-wider text-white/40">
                    {key}
                  </dt>
                  <dd className="mt-0.5 text-sm text-white/85">{value}</dd>
                </div>
              ))}
            </dl>
          </Section>
        )}

        {/* Powers */}
        {god.powers?.length > 0 && (
          <Section number="04" title="Powers & Abilities">
            <div className="grid gap-3 sm:grid-cols-2">
              {god.powers.map((power, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <span className="text-xs text-amber-400">
                    ABILITY 0{index + 1}
                  </span>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {power}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Stories */}
        {god.stories?.length > 0 && (
          <Section
            number="05"
            title="Mythological Stories"
            icon={<BookOpen className="size-3.5" />}
          >
            <div className="space-y-4">
              {god.stories.map((story, index) => (
                <div
                  key={story.title}
                  className="border-b border-white/10 pb-4 last:border-0"
                >
                  <p className="text-xs text-amber-400">STORY 0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold">{story.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/50">
                    {story.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Relationships */}
        {god.relationships?.length > 0 && (
          <Section number="06" title="Divine Relationships">
            <div className="overflow-hidden rounded-xl border border-white/10">
              {god.relationships.map((person, index) => (
                <div
                  key={`${person.name}-${index}`}
                  className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3 last:border-0"
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
          </Section>
        )}

        {/* Related Gods */}
        {relatedGods.length > 0 && (
          <Section
            number="07"
            title="Related Deities"
            icon={<Link2 className="size-3.5" />}
          >
            <div className="grid grid-cols-2 gap-4">
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
                    <h3 className="mt-1.5 font-semibold">{related.name}</h3>
                    <p className="mt-1 text-xs text-white/40">
                      {related.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}

/* ─────────────────── Helpers ─────────────────── */

function Section({ number, title, icon, children }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-xs tracking-widest text-amber-400">{number}</span>
        <h2 className="flex items-center gap-1.5 text-xl font-semibold">
          {icon}
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/40">
        <Icon className="size-3" />
        {label}
      </div>
      <p className="mt-1 text-sm font-medium text-white/85">{value}</p>
    </div>
  );
}
