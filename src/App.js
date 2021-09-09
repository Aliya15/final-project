import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PokemonsListPage from "./pages/PokemonsListPage";
import TitleOfThePage from "./components/TitleOfThePage";
import CaughtPokemonsPage from "./pages/CaughtPokemonsPage";
import SinglePokemonPage from "./pages/SinglePokemonPage";
import { getPokemonsListData } from "./services/data-service";

export default function App() {
  const pokemonsList = getPokemonsListData();
  const [allPokemons, setAllPokemons] = useState(
    pokemonsList.map((pokemon) => ({
      ...pokemon,
      isCaught: false,
      caughtDate: null,
    }))
  );

  return (
    <Router>
      <div>
        <TitleOfThePage />
        <div>
          <Switch>
            <Route exact path="/">
              <PokemonsListPage
                allPokemons={allPokemons}
                setAllPokemons={setAllPokemons}
              />
            </Route>
            <Route path="/caught">
              <CaughtPokemonsPage allPokemons={allPokemons} />
            </Route>
            <Route path="/pokemon/:id">
              <SinglePokemonPage allPokemons={allPokemons} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
