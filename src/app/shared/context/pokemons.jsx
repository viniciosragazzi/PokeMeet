import React, { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext({});

function PokemonProvider({ children }) {
  //     const [id, setId] = useState(11)
  //     const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${id}`)

  //     const [pokemons, setPokemons] = useState('')
  //     const [pokemonData, setPokemonData] = useState('')

  // useEffect(() => {
  //     fetch(url)
  //     .then((response)=>{
  //         return response.json()
  //     })
  //     .then((data)=>{
  //         let pk = data
  //         let pokemonsData = data
  //         setPokemons(pk)
  //         setPokemonData(pokemonsData)

  //     })
  //     .catch((err)=>{
  //         console.log(err);
  //     })

  // }, [url]);

  // const nextPokemonPage = () =>{
  //     let newURL = pokemonData.next
  //     setUrl(newURL)
  // }
  const [initial, setInitial] = useState(1);
  const [finaly, setFinaly] = useState(20);
  const [pokemonsList, setPokemonList] = useState([]);
  const [load, setLoad] = useState(false)
  const fetchPokemon = () => {

  
    const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for (let i = initial; i <= finaly; i++) {

      pokemonPromises.push(
        fetch(getPokemonUrl(i)).then((response) => response.json())
      );
    }
    Promise.all(pokemonPromises).then((pokemons) => {
        let pokemonsL = pokemons
        setPokemonList(pokemonsL)
    });
  
  };
  fetchPokemon();

  const nextPagePokemon = () =>{
    const ini = initial  + 20
    const fin = finaly + 20
    setInitial(ini)
    setFinaly(fin)
    fetchPokemon();
    setLoad(true)
    setTimeout(() => {
        
    setLoad(false)
    }, 1000);
  } 
  const backPagePokemon = () =>{
    if(initial > 20){
      const ini = initial  - 20
    const fin = finaly - 20
    setInitial(ini)
    setFinaly(fin)
    fetchPokemon();
    setLoad(true)
    setTimeout(() => {
        
    setLoad(false)
    }, 1000);
    }
  } 
  const homePagePokemon = () =>{
    if(initial > 20){
      const ini = 1
    const fin =  20
    setInitial(ini)
    setFinaly(fin)
    fetchPokemon();
    setLoad(true)
    setTimeout(() => {
        
    setLoad(false)
    }, 1000);
    }
  } 

  return (
    <PokemonContext.Provider value={{initial, fetchPokemon,backPagePokemon,load, pokemonsList,nextPagePokemon,homePagePokemon}}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
