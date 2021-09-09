import Pagination from "../components/Pagination";
import { useState } from "react";
import PokemonsList from "../components/PokemonsList";

export default function CaughtPokemonsPage({ allPokemons }) {
  const pokemonsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const caughtPokemons = allPokemons.filter((pokemon) => pokemon.isCaught);
  
  return (
    <div className="container">
      <PokemonsList
        allPokemons={caughtPokemons}
        pokemonsPerPage={pokemonsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="d-flex flex-wrap justify-content-center">
        <Pagination
          allPokemons={caughtPokemons}
          pokemonsPerPage={pokemonsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
