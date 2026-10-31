export default function EntityOverview({ description }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-3">Overview</h2>
      <p className="text-gray-400 leading-8">{description}</p>
    </section>
  );
}
