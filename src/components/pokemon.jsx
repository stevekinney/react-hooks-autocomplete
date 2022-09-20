const Loading = () => (
  <p className="animate-pulse p-4 bg-yellow-300 border-2 border-yellow-500 text-yellow-700">
    Loading…
  </p>
);

const Error = ({ message }) => (
  <p className="p-4 bg-red-300 border-2 border-red-500 text-red-900">
    {message || 'An error occured.'}
  </p>
);

const Pokemon = ({ pokemon, loading, error }) => {
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!pokemon) return null;
  if (!pokemon.length) return null;

  return (
    <section className="flex gap-4 flex-col">
      {pokemon.map(({ id, name }) => (
        <article className="p-4 border-2 border-pink-400">
          <h2>
            {name} (#{id})
          </h2>
        </article>
      ))}
    </section>
  );
};

export default Pokemon;
