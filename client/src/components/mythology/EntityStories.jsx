export default function EntityStories({ stories = [] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Famous Stories</h2>
      <ul className="space-y-3 text-gray-400">
        {stories.map((story, index) => (
          <li key={index}>• {story}</li>
        ))}
      </ul>
    </section>
  );
}
