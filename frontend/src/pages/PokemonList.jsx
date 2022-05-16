import React, { useState, useEffect } from "react";

import PokemonCard from "@components/PokemonCard";

import { fetchPokemons } from "@services/api";

export default function PokemonList() {
  const [pokemonsName, setPokemonsName] = useState([]);

  useEffect(async () => {
    setPokemonsName(await fetchPokemons(20, 0));
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemonsName.map((pokemon) => (
        <PokemonCard name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}
