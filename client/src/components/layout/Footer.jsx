import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Gods & Deities", path: "/gods" },
      { name: "Demons & Devils", path: "/demons" },
      { name: "Mythical Creatures", path: "/creatures" },
      { name: "Heroes & Legends", path: "/heroes" },
    ],
  },
  {
    title: "Discover",
    links: [
      { name: "Mythologies", path: "/mythologies" },
      { name: "Realms", path: "/realms" },
      { name: "Artifacts", path: "/artifacts" },
      { name: "Ancient Stories", path: "/stories" },
    ],
  },
  {
    title: "Explore More",
    links: [
      { name: "All Collections", path: "/explore" },
      { name: "Search", path: "/search" },
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="text-2xl text-amber-400">✦</span>
              <span className="text-2xl font-semibold tracking-[0.2em]">
                LoreTown
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
              Discover the ancient worlds of gods, demons, legendary creatures
              and forgotten civilizations. Explore the stories that shaped
              mythology across cultures.
            </p>

            <p className="mt-6 text-xs tracking-widest text-amber-400/70 uppercase">
              Beyond the realm of legends
            </p>
          </div>

          {/* Footer Navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-sm font-semibold text-white">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/40 transition hover:text-amber-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/[0.08]" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/30 md:flex-row">
          <p>© {new Date().getFullYear()} LoreTown. All rights reserved.</p>

          <p className="tracking-widest uppercase">Gods · Monsters · Legends</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
