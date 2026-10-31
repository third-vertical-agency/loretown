export default function FilterBar({ filters = [], value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange?.(filter)}
          className={`px-4 py-2 rounded-full border ${
            value === filter
              ? "border-amber-400 text-amber-400"
              : "border-white/10 text-gray-400"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
