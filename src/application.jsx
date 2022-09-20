import { useEffect, useState } from 'react';
import Pokemon from './components/pokemon';

const delay = 0;
const flakiness = 0;

const toURL = (query) =>
  `https://hungry-woolly-leech.glitch.me/api/pokemon/search/${query}?delay=${delay}&flakiness=${flakiness}`;

export const Application = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  return (
    <main className="m-auto mx-8 my-8 border-8 border-pink-300 p-4 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <label htmlFor="searchTerm" className="whitespace-nowrap">
          Search for a Pokémon
        </label>
        <input
          id="searchTerm"
          className="w-full"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a Pokémon"
        />
      </div>
      <Pokemon pokemon={pokemon} loading={false} error={error} />
    </main>
  );
};

export default Application;
