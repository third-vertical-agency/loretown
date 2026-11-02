import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Link2,
  MapPin,
  Tag,
  Users,
  Zap,
} from "lucide-react";

import creatures from "@/data/creatures";

export default function CreatureDetailPage() {
  const { slug } = useParams();
  const [activeImage, setActiveImage] = useState(null);

  const creature = useMemo(
    () => creatures.find((c) => c.slug === slug),
    [slug],
  );

  // ---- Not found ----
  if (!creature) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <span className="text-4xl text-amber-400/30">✧</span>
        <h1 className="text-lg font-semibold text-white">Creature not found</h1>
        <p className="text-sm text-white/50">"{slug}" is not in the archive.</p>
        <Link
          to="/creatures"
          className="mt-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-amber-500/30 hover:text-amber-400"
        >
          Back to Creatures
        </Link>
      </div>
    );
  }

  // ---- Derived image state ----
  const gallery = [creature.image, ...(creature.images ?? [])].filter(Boolean);
  const displayImage =
    activeImage && gallery.includes(activeImage) ? activeImage : creature.image;

  return (
    <div className="flex flex-col gap-6 lg:h-[calc(100dvh-6.5rem)] lg:flex-row lg:overflow-hidden">
      {/* ─────────────────── LEFT: IMAGES ─────────────────── */}
      <aside className="flex flex-col gap-4 lg:w-[44%] lg:min-w-0 lg:overflow-y-auto lg:pr-2">
        <Link
          to="/creatures"
          className="flex w-fit items-center gap-1 text-xs text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-3.5" />
          Back to Creatures
        </Link>

        {/* Main image */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/2">
          <img
            src={displayImage}
            alt={creature.name}
            className="aspect-4/5 w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-sm">
            {creature.mythology}
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
                    alt={`${creature.name} view ${i + 1}`}
                    className="aspect-square w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
      </aside>

      {/* ─────────────────── RIGHT: DETAILS ─────────────────── */}
      <div className="min-w-0 space-y-8 pb-6 lg:flex-1 lg:overflow-y-auto lg:pr-2 scrollbar-none">
        {/* Header */}
        <header className="space-y-2 border-b border-white/[0.06] pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/50">
              {creature.classification}
            </span>
            {creature.weapon && (
              <span className="rounded-full border border-amber-500/20 bg-amber-500/[0.06] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-amber-400/80">
                {creature.weapon}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            {creature.name}
          </h1>
          <p className="text-sm font-medium text-amber-400/90">
            {creature.title}
          </p>
          <p className="text-xs text-white/50">{creature.subtitle}</p>
        </header>

        {/* Introduction */}
        <Section title="Introduction">
          <p className="text-sm leading-relaxed text-white/70">
            {creature.introduction}
          </p>
        </Section>

        {/* Quick facts */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <InfoCard icon={MapPin} label="Origin" value={creature.origin} />
          <InfoCard
            icon={Tag}
            label="Classification"
            value={creature.classification}
          />
          <InfoCard icon={Users} label="Gender" value={creature.gender} />
          {creature.weapon && (
            <InfoCard icon={Zap} label="Weapon" value={creature.weapon} />
          )}
        </div>

        {/* Domains & Symbols */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TagGroup title="Domains" items={creature.domains} />
          <TagGroup title="Symbols" items={creature.symbols} />
        </div>

        {/* Attributes */}
        {creature.attributes && Object.keys(creature.attributes).length > 0 && (
          <Section title="Attributes">
            <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {Object.entries(creature.attributes).map(([key, value]) => (
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
        {creature.powers?.length > 0 && (
          <Section title="Powers">
            <ul className="space-y-1.5">
              {creature.powers.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-sm text-white/70"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Stories */}
        {creature.stories?.length > 0 && (
          <Section title="Stories" icon={<BookOpen className="size-3.5" />}>
            <div className="space-y-2">
              {creature.stories.map((s) => (
                <article
                  key={s.title}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-white/[0.12]"
                >
                  <h3 className="text-sm font-medium text-amber-400/90">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    {s.description}
                  </p>
                </article>
              ))}
            </div>
          </Section>
        )}

        {/* Relationships */}
        {creature.relationships?.length > 0 && (
          <Section title="Relationships">
            <div className="flex flex-wrap gap-2">
              {creature.relationships.map((r) => {
                const key = `${r.name}-${r.relation}`;
                const base =
                  "rounded-full border px-3 py-1 text-xs transition-colors";
                return r.slug ? (
                  <Link
                    key={key}
                    to={`/creatures/${r.slug}`}
                    className={`${base} border-amber-500/20 bg-amber-500/[0.06] text-amber-400/90 hover:bg-amber-500/10`}
                  >
                    {r.name} · {r.relation}
                  </Link>
                ) : (
                  <span
                    key={key}
                    className={`${base} border-white/10 bg-white/5 text-white/60`}
                  >
                    {r.name} · {r.relation}
                  </span>
                );
              })}
            </div>
          </Section>
        )}

        {/* Related */}
        {creature.related?.length > 0 && (
          <Section title="Related" icon={<Link2 className="size-3.5" />}>
            <div className="flex flex-wrap gap-2">
              {creature.related.map((s) => (
                <Link
                  key={s}
                  to={`/creatures/${s}`}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs capitalize text-white/70 transition-colors hover:border-amber-500/30 hover:text-amber-400"
                >
                  {s}
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

function Section({ title, icon, children }) {
  return (
    <section className="space-y-2">
      <h2 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/40">
        {icon}
        {title}
      </h2>
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

function TagGroup({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="space-y-2">
      <h2 className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
        {title}
      </h2>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
