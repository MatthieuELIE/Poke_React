import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "@components/UserContextProvider";

import FavoritePokemon from "@components/FavoritePokemon";

import {
  fetchOnePokemonById,
  fetchPokemonEncountersById,
  fetchUserFavorites,
  addToFavorites,
  removeFavorites,
} from "@services/api";

import { statsData } from "@services/statsData";

export default function PokemonPage() {
  const { user, setUser } = useContext(UserContext);

  const [pokemon, setPokemon] = useState();
  const [pokemonImg, setPokemonImg] = useState();
  const [encounters, setEncounters] = useState();

  const { pokemonId } = useParams();

  if (user) {
    useEffect(async () => {
      const favorites = await fetchUserFavorites(user.id);
      setUser({ ...user, favorites });
    }, [user.favorites]);
  }

  useEffect(async () => {
    if (user) {
      const favorites = await fetchUserFavorites(user.id);
      setUser({ ...user, favorites });
    }

    const pokemonData = await fetchOnePokemonById(pokemonId);
    setPokemon(pokemonData);

    const pokemonEncounters = await fetchPokemonEncountersById(pokemonId);
    setEncounters(pokemonEncounters[0]?.location_area.name ?? "No Area");

    setPokemonImg(pokemonData.sprites.front_default);
  }, []);

  const handleClick = async (favoritePokemon) => {
    // eslint-disable-next-line
    if (isFavorite(favoritePokemon)) {
      const favorite = user.favorites.find(
        (fav) => fav.pokemon_id === favoritePokemon.id
      );

      removeFavorites(favorite.id);

      setUser({
        ...user,
        favorites: user.favorites.filter(
          (fav) => fav.pokemon_id !== favoritePokemon.id
        ),
      });
    } else {
      const favorite = await addToFavorites(user.id, pokemon.id);

      setUser({
        ...user,
        favorites: [...user.favorites, favorite],
      });
    }
  };

  const isFavorite = (favoritePokemon) => {
    return (
      user?.favorites?.find(
        (favorite) => favorite.pokemon_id === favoritePokemon.id
      ) !== undefined
    );
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-amber-200 w-[90%] py-10 px-10 mx-auto my-24 border-4 border-black rounded-xl shadow-lg">
        <div className="flex justify-between">
          <div className="sm:flex space-x-7 md:items-start items-center">
            <div
              className={`w-56 ${pokemon.types[0].type.name} p-2 m-2 flex flex-col justify-center items-center border-4 border-black rounded-xl shadow-lg`}
            >
              <img
                className="rounded-md md:w-80"
                src={pokemonImg}
                alt={pokemon.name}
              />
            </div>
            <div className="flex">
              <div>
                <h1 className="text-slate-700 text-4xl font-bold my-2 capitalize">
                  {pokemon.name} - #{pokemon.id}
                </h1>
                <div>
                  <button
                    type="button"
                    value={pokemon.sprites.front_default}
                    onClick={(e) => setPokemonImg(e.target.value)}
                    className="border-2 px-2 py-2 m-1 w-36 rounded-md border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100 transition duration-75"
                  >
                    FRONT
                  </button>
                  <button
                    type="button"
                    value={pokemon.sprites.back_default}
                    onClick={(e) => setPokemonImg(e.target.value)}
                    className="border-2 px-2 py-2 m-1 w-36 rounded-md border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100 transition duration-75"
                  >
                    BACK
                  </button>
                  <button
                    type="button"
                    value={pokemon.sprites.front_shiny}
                    onClick={(e) => setPokemonImg(e.target.value)}
                    className="border-2 px-2 py-2 m-1 w-36 rounded-md border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100 transition duration-75"
                  >
                    SHINY
                  </button>
                </div>
                <div className="my-6 mx-4 p-2 flex flex-col capitalize">
                  <h3 className="px-2 mx-2 font-semibold text-xl text-slate-700 my-auto">
                    Type
                    <span>
                      {"s".repeat(pokemon.types.length > 1 ? 1 : 0)}
                    </span>{" "}
                    :
                  </h3>
                  {pokemon.types.map((type, index) => (
                    <p
                      key={index}
                      className="px-4 mx-2 font-semibold text-lg text-slate-600"
                    >
                      {type.type.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {user && (
            <div>
              {user && (
                <div className="flex justify-center mb-2">
                  <FavoritePokemon
                    isFavorite={isFavorite(pokemon)}
                    // eslint-disable-next-line
                    handleClick={() => handleClick(pokemon)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-8 sm:grid grid-cols-3 sm:space-x-4">
          <div className="bg-amber-100 border-slate-600 border-2 p-6 rounded-md mb-4 flex flex-row justify-between content-center shadow-md">
            <div className="my-auto">
              <span className="text-slate-700 text-md">Location</span>
              <h2 className="text-slate-600 text-xl font-semibold capitalize">
                {encounters?.split("-").join(" ")}
              </h2>
            </div>
            <i
              style={{ color: "#012442" }}
              className="fa-solid fa-location-crosshairs my-auto text-4xl"
            />
          </div>
          <div className="bg-amber-100 border-slate-600 border-2 p-6 rounded-md mb-4 flex flex-row justify-between content-center shadow-md">
            <div>
              <span className="text-slate-700 text-md">Heigth</span>
              <h2 className="text-slate-600 text-2xl font-semibold">
                {pokemon.height * 10} cm
              </h2>
            </div>
            <i
              style={{ color: "#012442" }}
              className="fa-solid fa-arrows-up-down my-auto text-4xl"
            />
          </div>
          <div className="bg-amber-100 border-slate-600 border-2 p-6 rounded-md mb-4 flex flex-row justify-between content-center shadow-md">
            <div>
              <span className="text-slate-700 text-md">Weight</span>
              <h2 className="text-slate-600 text-2xl font-semibold">
                {pokemon.weight / 10} kg
              </h2>
            </div>
            <i
              style={{ color: "#012442" }}
              className="fa-solid fa-weight-hanging my-auto text-4xl"
            />
          </div>
        </div>
        <div className="sm:grid lg:grid-cols-6 grid-cols-2 sm:gap-x-4">
          {pokemon.stats.map((pokemonStat, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center bg-amber-100 border-slate-600 border-2 p-6 rounded-md mb-4  shadow-md"
            >
              <div>
                <span className="text-md text-slate-700 capitalize">
                  {pokemonStat.stat.name}
                </span>
                <h1 className="text-3xl font-bold text-slate-600">
                  {pokemonStat.base_stat}
                </h1>
              </div>
              <i
                style={{ color: `${statsData[index].color}` }}
                className={`${statsData[index].img} text-2xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
