import "./item.css"
function itemListConteiner(props){
    
return(
   
    <div className="card">
        <img src={props.img} alt="" />
    <h2 className="producto">{props.producto}</h2>
    <h2 className="esp">{props.descripcion}</h2>
    <h3 classname="precio">{props.price}</h3>
    
    <button> Agregar al carrito</button>
</div>

)

}
export default itemListConteiner

