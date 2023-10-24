const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemon = (pokemonId) => {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then((response) => {
    response.json();
  });
};
