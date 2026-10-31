import { Link } from "react-router-dom";

export default function CategoryCard({ title, description, path }) {
  return (
    <Link
      to={path}
      className="block rounded-xl border border-white/10 p-6 hover:border-amber-400/50 transition"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">{description}</p>
    </Link>
  );
}
