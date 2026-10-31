export default function EntityPowers({ powers = [] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Powers & Abilities</h2>
      <ul className="space-y-3 text-gray-400">
        {powers.map((power, index) => (
          <li key={index}>• {power}</li>
        ))}
      </ul>
    </section>
  );
}
