import { Link } from "react-router-dom";

export default function EntityCard({ name, slug, image, category }) {
  return (
    <Link to={slug} className="group block">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover rounded-xl"
        />
      )}
      <p className="text-xs text-gray-400 mt-3">{category}</p>
      <h3 className="text-lg font-semibold group-hover:text-amber-400">
        {name}
      </h3>
    </Link>
  );
}
