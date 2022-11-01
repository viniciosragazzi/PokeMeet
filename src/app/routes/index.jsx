import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "../shared/components/menu/Menu";
import { Home, Game, Pokedex } from "../pages";
import Context from "../shared/context/pokemons";
export default function Routes() {


  return (
    <BrowserRouter>
 
        <Menu />
        <Switch>
          <Route path="/inicio" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Switch>

    </BrowserRouter>
  );
}
