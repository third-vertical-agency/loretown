import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Explore", path: "/explore" },
  { name: "Gods", path: "/gods" },
  { name: "Demons", path: "/demons" },
  { name: "Creatures", path: "/creatures" },
  { name: "Heroes", path: "/heroes" },
  { name: "Mythologies", path: "/mythologies" },
  { name: "Stories", path: "/stories" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0B0B0D]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10">
            <span className="text-xl text-amber-400">✦</span>
          </div>

          <span className="text-xl font-semibold tracking-[0.2em]">
            LoreTown
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition-colors duration-200 ${
                  isActive ? "text-amber-400" : "text-white/60 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Search */}
        <Link
          to="/search"
          className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-amber-500/40 hover:text-amber-400"
        >
          Search ↗
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
