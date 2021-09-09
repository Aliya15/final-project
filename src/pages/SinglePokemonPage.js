import { useParams } from "react-router-dom";
import CaughtDate from "../components/CaughtDate";
import { getPokemonImageUrl } from "../utils/pokemon-image-url-util";

export default function SinglePokemonPage({ allPokemons }) {
  let { id } = useParams();
  const currentPokemon = allPokemons.find(
    (pokemon) => pokemon.id.toString() === id
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img
            src={getPokemonImageUrl(id)}
            alt={currentPokemon.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = getPokemonImageUrl(25);
            }}
            className="img-fluid"
          />
        </div>
        <div className="col-8 d-flex flex-column justify-content-center">
          <h5>ID: {id}</h5>
          <h2 className="text-capitalize">{currentPokemon.name}</h2>

          {currentPokemon.isCaught ? (
            <>
              <h5> This Pokemon is caught on </h5>
              <CaughtDate caughtDate={currentPokemon.caughtDate} />
            </>
          ) : (
            <p>This Pokemon isn't caught</p>
          )}
        </div>
      </div>
    </div>
  );
}
