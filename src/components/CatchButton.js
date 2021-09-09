export default function CatchButton({ pokemon, setAllPokemons, allPokemons }) {
  const handleClick = () => {
    setAllPokemons(
      allPokemons.map((p) => {
        if (pokemon.id === p.id) {
          return {
            ...p,
            isCaught: true,
            caughtDate: new Date(),
          };
        } else {
          return p;
        }
      })
    );
  };

  return (
    <button
      type="button"
      disabled={pokemon.isCaught}
      onClick={handleClick}
      className="btn btn-primary"
    >
      {pokemon.isCaught ? "Caught" : "Catch"}
    </button>
  );
}
