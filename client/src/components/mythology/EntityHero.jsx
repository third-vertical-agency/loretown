export default function EntityHero({ name, subtitle, image }) {
  return (
    <section className="relative min-h-[400px] flex items-end overflow-hidden rounded-2xl">
      {image && (
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative p-8">
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="mt-3 text-gray-300">{subtitle}</p>
      </div>
    </section>
  );
}
