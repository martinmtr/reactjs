import "./item.css";
import { Link } from "react-router-dom";
import ButtonAddToCart from "../CartWidget/ButtonAddToCart";

function Item({ id, title, descripcion, imagen, precio }) {
  return (
    <div className="card">
      <img src={imagen} alt={title} />
      <h2 className="producto">{title}</h2>
      <div className="esp">
        <Link to={`/detalle/${id}`}>
          <button>Ver detalles</button>
        </Link>
      </div>
      <h3 className="price">Precio: ${precio}</h3>
      <ButtonAddToCart />
    </div>
  );
}

export default Item;
