import React, { useContext, useEffect } from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { PokemonContext } from "../../shared/context/pokemons";

export const Pokedex = () => {
  const { pokemonsList, nextPagePokemon, load } = useContext(PokemonContext);
  let imgs = document.querySelectorAll('.image img')
  imgs.forEach((img)=>{
    if(img.clientHeight < 54 ){
        img.classList.add('upImg')
    }
  })
  return (
    <div className="page">
      <div className="app">
        <div className="title">
          <h1>
            Poke<span>Meet</span>
          </h1>
        </div>
        <div className="pokedexArea">
          <div className="search">
            <input type="text" placeholder="Pesquise seu pokemon preferido" />
            <div
              className="searchBtn"
              onClick={() => {
                nextPagePokemon();
              }}
            >
              <MdCatchingPokemon />
            </div>
          </div>
          <div className="pokemonList">
            {!load ? pokemonsList
              ? pokemonsList.map((pokemon, index) => (
                  <div className="pokemonCard" key={index}>
                    <div className="image">
                      <img
                        src={`${`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif` ? `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`: `https://projectpokemon.org/images/normal-sprite/raichu.gif`}`}
                        alt={pokemon.name}


                      />
                    </div>
                    <div className="infos">
                      <span className="id">
                        N°<span className="idNumber">{pokemon.id}</span>
                      </span>
                      <span className="name">{pokemon.name}</span>
                      <div className="types">
                      {
                          pokemon.types.map((tp) => (
                            <span className={`type ${tp.type.name}`}>
                              {tp.type.name}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                ))
              : null :  <img src=' https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif'/>}
          </div>
        </div>
      </div>
    </div>
  );
};
