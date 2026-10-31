export default function PageHeader({ title, description }) {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      {description && (
        <p className="mt-3 text-gray-400">{description}</p>
      )}
    </section>
  );
}
