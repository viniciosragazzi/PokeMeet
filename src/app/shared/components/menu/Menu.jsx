import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {MdCatchingPokemon, MdAccountBox}from "react-icons/md"
import {IoLogoOctocat, IoLogoGameControllerA} from "react-icons/io"
import {AiOutlineClose, AiOutlineWechat} from "react-icons/ai"
import {GiGroupedDrops, GiHamburgerMenu} from "react-icons/gi"

const Menu = () => {
    const [menuShow, setMenuShow] = useState(false);

  return (
    <header>
        <div className="hamb" onClick={()=>{setMenuShow(!menuShow)}}>
        { menuShow ?     <AiOutlineClose/> : <GiHamburgerMenu/>}
        </div>
      <nav className={`${menuShow ? 'show' : null}`}> 
        <li>
          <NavLink to="inicio" activeClassName="is-active"  onClick={()=>{setMenuShow(!menuShow)}}>
          <IoLogoOctocat/>  Home
          </NavLink>
        </li>
        <li>
          <NavLink to="pokedex" activeClassName="is-active"  onClick={()=>{setMenuShow(!menuShow)}}>
          <MdCatchingPokemon/> Pokedex
          </NavLink>
        </li>
        <li>
            
          <NavLink to="game" activeClassName="is-active"  onClick={()=>{setMenuShow(!menuShow)}}>
          <IoLogoGameControllerA/>  Game
          </NavLink>
        </li>
        <li>
            
            <NavLink to="community" activeClassName="is-active"  onClick={()=>{setMenuShow(!menuShow)}}>
            <AiOutlineWechat/>  Community
            </NavLink>
          </li>
          <li>
            
            <NavLink to="about" activeClassName="is-active">
            <GiGroupedDrops/>  About
            </NavLink>
          </li>
          <li>
            
            <NavLink to="perfil" activeClassName="is-active">
            <MdAccountBox/>  Perfil
            </NavLink>
          </li>
      </nav>
    </header>
  );
};

export default Menu;
