import { PokemonItem } from "../PokemonItem/PokemonItem";

export const PokemonList = ({ pokemon }) => {
  console.log(pokemon.results);
  return (
    <>
      <ul>
        {pokemon.map((item) => (
          <li key={item.id}>
            <PokemonItem pokemon={item}  />
          </li>
        ))}
      </ul>
    </>
  );
};
