export default function EntityRelationships({ relationships = [] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Relationships</h2>
      <div className="space-y-3">
        {relationships.map((item, index) => (
          <div key={index} className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400">{item.relation}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
