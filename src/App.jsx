import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar.jsx'
import Item from './components/item.jsx'
function App() {
 

  function getUserColor(){
    return "white";
  }
const greetingStyle =  
    {
      color: getUserColor(),
      fontSize: "50px",
      textAlign: "center",
      backgroundColor: "grey",
      
    }
  return (
    <>
   
    <NavBar/>
    <h1 style={greetingStyle}> Bienvenidos</h1>
     <section className="itemListConteiner">
     <div className="casco">
     <Item  img="https://az-offroad.com/74853-medium_default/casco-alpinestar-s-m-10-flood-negro-gris-oscuro.jpg"   producto="Casco Alpinestar" descripcion="Equipado con E-2, MIPS®" price="$180.000"/>
     <Item img="https://www.palermobikes.com.ar/5868-large_default/casco-sm8-triple-supertech-red-white-t-m.jpg"   producto="Casco Alpinestar" descripcion="Equipado con E-2, MIPS®" price="$180.000"/>
    </div>
    <div className="jersey">
     <Item img="https://http2.mlstatic.com/D_NQ_NP_2X_825030-MLA90292819940_082025-F.webp"   producto="Jersey" descripcion="Material Dryfit " price="$80.000"/>
     <Item img="https://http2.mlstatic.com/D_NQ_NP_917941-MLA72572468179_102023-O.webp"   producto="Jersey" descripcion="Material Dryfit  Modelo flux" price="$70.000"/>
     </div>
     <div className="pecheras">
     <Item img="https://http2.mlstatic.com/D_NQ_NP_962685-MCO51845926731_102022-O.webp"   producto="Pechera Alpinestar" descripcion="A1 pro chest" price="$280.000"/>
     <Item img="https://http2.mlstatic.com/D_NQ_NP_709658-MLA84431429813_052025-O.webp"   producto="Pechera Alpinestar" descripcion="Bionic action" price="$230.000"/>
     </div>
     <div className="botas">
     <Item img="https://acdn-us.mitiendanube.com/stores/001/671/051/products/76461df22e3af331dfa7c80560b55bac_gd-b0501ed8dabdae9ab317367828381694-480-0.jpg"   producto="Botas Alpinestar" descripcion="Tech 3" price="$480.000"/>
     <Item img="https://www.enduroleon.com/shop/98443-large_default/botas-alpinestars-tech-10-super-ventilada-blanca-roja.jpg"   producto="Botas Alpinestar" descripcion="Tech 10 superventilada" price="$530.000"/>
    </div>
    </section>
    </>
  )
}

export default App
