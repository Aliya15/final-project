import CatchButton from "./CatchButton";
import PokemonCard from "./PokemonCard";

export default function PokemonsList({
  setAllPokemons,
  allPokemons,
  currentPage,
  pokemonsPerPage,
}) {
  return (
    <div className="row d-flex justify-content-center">
      {allPokemons
        .slice(
          currentPage * pokemonsPerPage - pokemonsPerPage,
          currentPage * pokemonsPerPage - 1
        )
        .map((pokemon) => {
          return (
            <div
              className="card col-xl-3 col-sm-4 col-12 m-2 p-0"
              style={{ width: "18rem" }}
            >
              <PokemonCard pokemon={pokemon} key={pokemon.id.toString()} />
              <CatchButton
                pokemon={pokemon}
                setAllPokemons={setAllPokemons}
                allPokemons={allPokemons}
              />
            </div>
          );
        })}
    </div>
  );
}
