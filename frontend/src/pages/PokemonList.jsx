import React, { useState, useEffect } from "react";

import PokemonCard from "@components/PokemonCard";

import { fetchPokemons, fetchOnePokemonByUrl } from "@services/api";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(async () => {
    const getPokemons = await fetchPokemons(20, offset);

    getPokemons.forEach(async (item) => {
      const pokemonData = await fetchOnePokemonByUrl(item.url);
      setPokemons((pokemon) => [...pokemon, pokemonData]);
    });
  }, [offset]);

  return (
    <div className="bg-amber-100">
      <h1 className="font-bold text-center text-3xl p-8 poppins">
        Pokemon List
      </h1>
      <div className="flex flex-wrap w-2/3 md:w-3/4 mx-auto justify-center text-center">
        {pokemons
          .sort((a, b) => a.id - b.id)
          .map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
            />
          ))}
        <button
          onClick={() => setOffset(offset + 20)}
          type="button"
          className="w-full font-bold text-center text-xl p-2 m-4 poppins hover:opacity-50 hover:scale-105 duration-700 ease-in-out"
        >
          Load More Pokemons...
        </button>
      </div>
    </div>
  );
}
