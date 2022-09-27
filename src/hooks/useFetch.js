import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();

        data.results.forEach(async (el) => {
          let res = await fetch(el.url),
            json = await res.json();
  
          //console.log(json);
          let pokemon = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default,
          };
  
          setPokemons((pokemons) => [...pokemons, pokemon]);
        })
        
        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };
    
    getData(url);
  }, [url]);

  return { pokemons, isPending, error };
};