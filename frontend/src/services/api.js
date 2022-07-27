import axios from "axios";

const API_POKEMON_URL = "https://pokeapi.co/api/v2/";

const API_URL = "http://localhost:5000";

const pokeReactApi = axios.create({
  withCredentials: true,
});

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
  return (await pokeReactApi.post(`${API_URL}/login`, data)).data;
};

export const fetchMe = async (data) => {
  try {
    return (await pokeReactApi.get(`${API_URL}/me`, data)).data;
  } catch (err) {
    return null;
  }
};

export const logout = async (data) => {
  return (await pokeReactApi.delete(`${API_URL}/logout`, data)).data;
};

// Appel favorites database
export const fetchUserFavorites = async (userId) => {
  return (await pokeReactApi.get(`${API_URL}/favorites`, { userId })).data;
};

export const addToFavorites = async (userId, pokemonId) => {
  return (
    await pokeReactApi.post(`${API_URL}/favorites`, { userId, pokemonId })
  ).data;
};

export const removeFavorites = async (id) => {
  return (await pokeReactApi.delete(`${API_URL}/favorites/${id}`)).data;
};
