import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemons = async (limit, offset) => {
  return (await axios(`${API_URL}pokemon?limit=${limit}&offset=${offset}`)).data
    .results;
};

export const fetchOnePokemonByUrl = async (url) => {
  return (await axios(url)).data;
};

export const fetchOnePokemonByName = async (pokemonName) => {
  return (await axios(`${API_URL}pokemon/${pokemonName}`)).data;
};

export const fetchOnePokemonById = async (pokemonid) => {
  return (await axios(`${API_URL}pokemon/${pokemonid}`)).data;
};

export const fetchPokemonEncountersById = async (pokemonid) => {
  return (await axios(`${API_URL}pokemon/${pokemonid}/encounters/`)).data;
};

export const fetchItems = async (limit, offset) => {
  return (await axios(`${API_URL}item?limit=${limit}&offset=${offset}`)).data
    .results;
};

export const fetchItemByUrl = async (url) => {
  return (await axios(url)).data;
};

export const fetchOneItemById = async (itemId) => {
  return (await axios(`${API_URL}item/${itemId}`)).data;
};
