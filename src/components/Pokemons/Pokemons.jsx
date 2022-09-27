import { PokemonsWrapper } from "./PokemonsStyle";
import PokemonCard from "../PokemonCard/PokemonCard";

const Pokemons = ({poke, pokemons, isPending, newPokemons}) => {
    let pokeToRender

    if(!poke) {
        pokeToRender = pokemons
    } else {
        pokeToRender = newPokemons
    }

  return (
    <PokemonsWrapper>
      {isPending && <div>Cargando Pokemones...</div>}
      {pokemons && pokeToRender.map(item => <PokemonCard key={item.id} item={item}/>)}
    </PokemonsWrapper>
  );
};

export default Pokemons;
