import { Link, useLocation } from "react-router-dom";

export default function TitleOfThePage() {
  const { pathname } = useLocation();
  return (
    <nav className="bg-dark h-30 w-100">
      <ul className="nav container text-white nav-pilled">
        <li className="nav-item ">
          <Link
            to=""
            style={{ textDecoration: pathname === "/" ? "underline" : "none" }}
          >
            <span className="nav-link text-white fs-5 text-primary text-decoration-none">
              All Pokemons
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/caught"
            style={{
              textDecoration: pathname === "/caught" ? "underline" : "none",
            }}
          >
            <span className="nav-link text-white fs-5 text-decoration-none">
              Caught Pokemons
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
