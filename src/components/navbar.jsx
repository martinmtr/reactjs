import "./navbar.css";
import Cart from '../assets/carrito-de-compras.png';
import "./cartWidget"
import logo from '../assets/logoreact..jpg';
function NavBar() {
  return (
    <nav>
        <img className="logo" src={logo} alt="" />
    
      <ul>
        <li>
          <a href="#hero">Jersey</a>
        </li>
        <li>
          <a href="pecheras">Pecheras</a>
        </li>
        <li>
          <a href="cascos">Cascos</a>
        </li>
        <li>
          <a href="#botas">Botas</a>
        </li>
      </ul>
      <img className="carrito" src={Cart} alt=""/>
    </nav>
  );
}
export default NavBar;
