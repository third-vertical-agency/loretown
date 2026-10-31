import EntityCard from "../common/EntityCard";

export default function RelatedEntities({ entities = [] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Related Entities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {entities.map((entity) => (
          <EntityCard key={entity.slug} {...entity} />
        ))}
      </div>
    </section>
  );
}
