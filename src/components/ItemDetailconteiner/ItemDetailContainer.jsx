import { useParams } from "react-router-dom";
import { getProductById } from "../../data/mockAPI";
import { useEffect, useState } from "react";
import ButtonAddToCart from "../CartWidget/ButtonAddToCart";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { idParam } = useParams();
  const [product, setProduct] = useState({ loading: true });

  useEffect(() => {
    getProductById(idParam)
      .then((response) => setProduct(response))
      .catch((error) => alert(error));
  }, [idParam]);

  if (product.loading) {
    return <p>Cargando producto....</p>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-card-detail">
        <h2 className="item-card-title">{product.nombre}</h2>
        <img
          className="item-card-img-detail"
          src={product.imagen}
          alt={product.nombre}
        />
        <p className="item-description">{product.descripcion}</p>
        <h3 className="item-card-price">Precio: ${product.precio}</h3>

        <ButtonAddToCart />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
