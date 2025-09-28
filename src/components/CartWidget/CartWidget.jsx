import Cart from "../../assets/img/carrito-de-compras.png"
export default function CartWidget(){
  return (
    <div >
      <span><img clasname= "carrito" style={{ height:60, padding:20}} src={Cart} alt="" /></span>
    </div>
  )
}