import { Link } from "react-router-dom";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/img/logoreact.jpg"

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <ul>
        <li>
          <Link to="/categoria/Jersey">Jersey</Link>
        </li>
        <li>
          <Link to="/categoria/Pecheras">Pecheras</Link>
        </li>
        <li>
          <Link to="/categoria/Cascos">Cascos</Link>
        </li>
        <li>
          <Link to="/categoria/Botas">Botas</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}
export default NavBar;
