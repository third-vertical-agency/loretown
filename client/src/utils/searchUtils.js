export function searchItems(items = [], query = "") {
  const normalized = query.toLowerCase().trim();

  if (!normalized) return items;

  return items.filter((item) =>
    Object.values(item).some((value) =>
      String(value ?? "").toLowerCase().includes(normalized)
    )
  );
}
