export default function EntityAttributes({ attributes = {} }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Attributes</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(attributes).map(([key, value]) => (
          <div key={key} className="border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-sm capitalize">{key}</p>
            <p className="mt-1">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
