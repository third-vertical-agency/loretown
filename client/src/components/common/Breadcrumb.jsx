import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex gap-2 text-sm text-gray-400">
      {items.map((item, index) => (
        <span key={index} className="flex gap-2">
          {index > 0 && <span>/</span>}
          {item.path ? (
            <Link to={item.path} className="hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
