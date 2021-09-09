import React, { useState } from "react";
import PokemonsList from "../components/PokemonsList";
import Pagination from "../components/Pagination";

export default function PokemonsListPage({ allPokemons, setAllPokemons }) {
  const pokemonsPerPage = 31;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container">
      <PokemonsList
        setAllPokemons={setAllPokemons}
        allPokemons={allPokemons}
        pokemonsPerPage={pokemonsPerPage}
        currentPage={currentPage}
      />
      <div className="d-flex flex-wrap justify-content-center">
        <Pagination
          allPokemons={allPokemons}
          pokemonsPerPage={pokemonsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
