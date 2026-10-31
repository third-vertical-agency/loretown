export default function SectionHeading({ title, description }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      {description && (
        <p className="text-gray-400 mt-2">{description}</p>
      )}
    </div>
  );
}
