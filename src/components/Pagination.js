export default function Pagination({
  allPokemons,
  pokemonsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const buttonsList = [];

  for (let i = 0; i <= allPokemons.length / pokemonsPerPage; i++) {
    buttonsList.push(
      <button
        key={i}
        className="btn btn-light m-1"
        disabled={i + 1 === currentPage}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </button>
    );
  }
  return buttonsList;
}
