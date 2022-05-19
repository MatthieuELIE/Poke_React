import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemons = async (limit, offset) => {
  return (await axios(`${API_URL}pokemon?limit=${limit}&offset=${offset}`)).data
    .results;
};

export const fetchOnePokemonByUrl = async (url) => {
  return (await axios(url)).data;
};
