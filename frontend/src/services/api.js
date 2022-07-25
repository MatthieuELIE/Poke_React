import axios from "axios";

const API_POKEMON_URL = "https://pokeapi.co/api/v2/";

const API_URL = "http://localhost:5000";

/**
 * Api Pokemons
 */
export const fetchPokemons = async (limit, offset) => {
  return (
    await axios(`${API_POKEMON_URL}pokemon?limit=${limit}&offset=${offset}`)
  ).data.results;
};

export const fetchOnePokemonByUrl = async (url) => {
  return (await axios(url)).data;
};

export const fetchOnePokemonByName = async (pokemonName) => {
  return (await axios(`${API_POKEMON_URL}pokemon/${pokemonName}`)).data;
};

export const fetchOnePokemonById = async (pokemonid) => {
  return (await axios(`${API_POKEMON_URL}pokemon/${pokemonid}`)).data;
};

export const fetchPokemonEncountersById = async (pokemonid) => {
  return (await axios(`${API_POKEMON_URL}pokemon/${pokemonid}/encounters/`))
    .data;
};

/**
 * Api Items
 */
export const fetchItems = async (limit, offset) => {
  return (await axios(`${API_POKEMON_URL}item?limit=${limit}&offset=${offset}`))
    .data.results;
};

export const fetchItemByUrl = async (url) => {
  return (await axios(url)).data;
};

export const fetchOneItemById = async (itemId) => {
  return (await axios(`${API_POKEMON_URL}item/${itemId}`)).data;
};

/**
 * Api Users
 */
export const login = async (data) => {
  return (await axios.post(`${API_URL}/login`, data)).data;
};

export const fetchMe = async (data) => {
  try {
    return (await axios.get(`${API_URL}/me`, data)).data;
  } catch (err) {
    return null;
  }
};
