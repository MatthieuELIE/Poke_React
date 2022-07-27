import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "@components/UserContextProvider";

import PokemonCard from "@components/PokemonCard";

import { fetchUserFavorites, fetchOnePokemonById } from "@services/api";

export default function FavoritesPage() {
  const { user } = useContext(UserContext);

  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const getPokemons = await fetchUserFavorites(user.user_id);

    getPokemons.forEach(async (item) => {
      const pokemonData = await fetchOnePokemonById(item.pokemon_id);
      setPokemons((pokemon) => [...pokemon, pokemonData]);
    });
  }, []);

  return (
    <div className="bg-amber-100 my-12">
      <h1 className="font-bold text-center text-3xl p-6 poppins">
        Favorite List
      </h1>
      <div className="flex flex-wrap w-2/3 md:w-3/4 mx-auto justify-center text-center">
        {pokemons
          .sort((a, b) => a.id - b.id)
          .map((pokemon) => (
            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
