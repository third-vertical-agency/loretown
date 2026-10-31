import { useMemo, useState } from "react";

export default function useFilters(items = [], field = "category") {
  const [filter, setFilter] = useState("All");

  const results = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((item) => item[field] === filter);
  }, [items, filter, field]);

  return { filter, setFilter, results };
}
