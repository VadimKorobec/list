import { PokemonItem } from "../PokemonItem/PokemonItem";

export const PokemonList = ({ pokemon }) => {
  
  return (
    <>
      <ul>
        {pokemon.map((item,idx) => (
          <li key={idx}>
            <PokemonItem pokemon={item}  />
          </li>
        ))}
      </ul>
    </>
  );
};
