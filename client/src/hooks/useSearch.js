import { useMemo, useState } from "react";

export default function useSearch(items = [], fields = ["name"]) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const search = query.toLowerCase().trim();

    if (!search) return items;

    return items.filter((item) =>
      fields.some((field) =>
        String(item[field] ?? "").toLowerCase().includes(search)
      )
    );
  }, [items, query, fields]);

  return { query, setQuery, results };
}
