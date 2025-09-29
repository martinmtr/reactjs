import Item from "../Item/Item";
import "../item/item.css";
import getMockAPIData, { getProductsByCateg } from "../../data/mockAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categParam } = useParams();

  useEffect(() => {
    setIsLoading(true);

    if (categParam) {
      getProductsByCateg(categParam)
        .then((productsByCateg) => setProducts(productsByCateg))
        .catch((error) => alert(error))
        .finally(() => setIsLoading(false));
    } else {
      getMockAPIData()
        .then((productList) => {
          setProducts(productList);
        })
        .catch((error) => {
          
          Swal.fire("Algo salió mal buscando los productos");
        })
        .finally(() => {
          
          setIsLoading(false);
        });
    }
  }, [categParam]);

  return (
    <div className="item-list-container">
      <h2>{props.greeting}</h2>
      {isLoading ? (
        <p className="item-list-container__loading" style={{textAlign:"center", color:"red", fontSize:20}}>Cargando...</p>
      ) : (
        ""
      )}
      <div>
        <h4 style= {{fontSize:35, textAlign:"center", color:"red"}}>Nuestros productos</h4>
        <div className="item-list">
          {products.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}