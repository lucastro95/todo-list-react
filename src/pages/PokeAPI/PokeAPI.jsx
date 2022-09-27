import React from 'react'
import { useState } from 'react'
import Pokemons from '../../components/Pokemons/Pokemons'
import Search from '../../components/Search/Search'
import { useFetch } from '../../hooks/useFetch'
import { PokeAPIWrapper } from './PokeAPIStyle'

const PokeAPI = () => {
  const [form, setForm] = useState('')
  const [poke, setPoke] = useState('')
  const [newPokemons, setNewPokemons] = useState({})

  let url = "https://pokeapi.co/api/v2/pokemon/";

  let { pokemons, isPending, error } = useFetch(url);

  if (error) {
    console.log(error)
  }

  const handleChange = (e) => {
    setForm((e.target.value).toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPoke(form)
    setNewPokemons(pokemons.filter(el => el.name.includes(form)))
    console.log(newPokemons);
  }

  return (
    <PokeAPIWrapper>
      <Search handleChange={handleChange} handleSubmit={handleSubmit} form={form}/>
      <Pokemons poke={poke} pokemons={pokemons} isPending={isPending} newPokemons={newPokemons}/>
    </PokeAPIWrapper>
  )
}

export default PokeAPI