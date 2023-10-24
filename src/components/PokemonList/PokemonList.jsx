import { PokemonItem } from "../PokemonItem/PokemonItem";

export const PokemonList = ({ pokemons }) => {
  console.log(pokemons.results);
  return (
    <>
      <ul>
        {[pokemons].map((item) => (
          <li key={item.id}>
            <PokemonItem pokemon={item}  />
          </li>
        ))}
      </ul>
    </>
  );
};
