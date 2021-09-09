import { Link } from "react-router-dom";
import { getPokemonImageUrl } from "../utils/pokemon-image-url-util";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="mb-2 mt-2">
      <Link
        to={"/pokemon/" + pokemon.id}
        style={{ textDecoration: "none", textTransform: "capitalize" }}
      >
        <img
          src={getPokemonImageUrl(pokemon.id)}
          alt={pokemon.id}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getPokemonImageUrl(25);
          }}
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="card-title text-truncate">{pokemon.name}</h2>
        </div>
      </Link>
    </div>
  );
}
