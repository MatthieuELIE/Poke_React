import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchOnePokemonByName } from "@services/api";

import PokemonCard from "@components/PokemonCard";

export default function Searchpage() {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState();

  const handlePokemonSearch = (event) => {
    setPokemonSearch(event.target.value);
  };

  const submitPokemonSearch = (e) => {
    e.preventDefault();
    setPokemonName(pokemonSearch);
    setPokemonSearch("");
  };

  useEffect(async () => {
    if (pokemonName) {
      setPokemon(await fetchOnePokemonByName(pokemonName));
    }
  }, [pokemonName]);

  return (
    <div className="mt-24 mb-12">
      <div className="flex justify-center">
        <div className="mb-2 xl:w-96">
          <form onSubmit={submitPokemonSearch}>
            <label
              htmlFor="exampleSearch2"
              aria-label="search"
              className="form-label inline-block mb-2 text-gray-700 poppins font-bold text-center"
            >
              Looking for something ?...
            </label>
            <input
              type="search"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none poppins"
              id="exampleSearch2"
              placeholder="Type your pokemon's name !"
              value={pokemonSearch}
              onChange={handlePokemonSearch}
            />
          </form>
        </div>
      </div>
      {pokemon && (
        <div className="flex justify-center w-1/3 mx-auto my-12">
          <Link to={`/pokemon/${pokemon.id}`}>
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
            />
          </Link>
        </div>
      )}
    </div>
  );
}
