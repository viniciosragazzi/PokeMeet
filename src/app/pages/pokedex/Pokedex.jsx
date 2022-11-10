import React, { useContext, useState } from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { HiHome } from "react-icons/hi";

import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

import { PokemonContext } from "../../shared/context/pokemons";

export const Pokedex = () => {
  const { pokemonsList, initial, nextPagePokemon, load, backPagePokemon,homePagePokemon} = useContext(PokemonContext);

  let imgs = document.querySelectorAll('.image img')
  imgs.forEach((img)=>{
    if(img.clientHeight < 54 ){
        img.classList.add('upImg')
    }
  })
  
const [name, setName] = useState('')
const [nameTemp, setNameTemp] = useState('')

const searchFunc = (e) =>{
  setNameTemp(e.target.value)
  if(e.target.value === ''){
    setName('')
  }
}
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
            <input type="text" placeholder="Pesquise seu pokemon preferido" onChange={(e)=>{searchFunc(e)}} />
            <div
              className="searchBtn"
           onClick={(e)=>setName(nameTemp)} 
            >
              <MdCatchingPokemon />
            </div>
          </div>
          <div className="navigateArea">
            <span className={`back ${initial <= 20 ? 'arrowDisable' : ''  }`}  onClick={()=>{backPagePokemon()}}><IoMdArrowRoundBack/></span>
            <span className={`home ${initial <= 20 ? 'arrowDisable' : ''  }`} onClick={()=>{homePagePokemon()}}><HiHome/></span>
            <span className="next" onClick={()=>{nextPagePokemon()}}><IoMdArrowRoundForward/></span>
          </div>
          <div className="pokemonList">
            {!load ? pokemonsList
              ? pokemonsList.filter((pk)=> pk.name.includes(name)).map((pokemon, index) => (
                <div className="pokemonCard" key={index}>
                  <div className="image">
                    <img
                      src={pokemon.sprites.front_default}
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
                        pokemon.types.map((tp, key) => (
                          <span key={key} className={`type ${tp.type.name}`}>
                            {tp.type.name}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))
              : null :  <img className="loadingImg" src='https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif'/>}
          </div>
        
        </div>
      </div>
    </div>
  );
};
