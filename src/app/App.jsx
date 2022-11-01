import { useState } from "react";
import "../App.css";
import Routes from "./routes";
import PokemonProvider from "./shared/context/pokemons";
function App() {
  const [value, setValue] = useState();
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
}

export default App;
