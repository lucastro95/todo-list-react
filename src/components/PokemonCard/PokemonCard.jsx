import { PokemonCardWrapper } from "./PokemonCardStyle"


const PokemonCard = (item) => {
  return (
    <PokemonCardWrapper>
        <img src={item.item.avatar} alt={item.item.name} />
        <h3>{item.item.name}</h3>
    </PokemonCardWrapper>
  )
}

export default PokemonCard