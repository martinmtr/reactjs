import { useState } from "react";

export default function () {
  const [statusInCart, setStatusInCart] = useState("");
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  function handleAdd() {
    /*alerta de producto agregado*/
    Swal.fire({
      title: "¡Agregado al carrito!",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
    setStatusInCart("Agregado al carrito.");
    setShowRemoveButton(true);
  }

  function handleRemove() {
    /*alerta producto eliminado*/
    Swal.fire({
      icon: "error",
      title: "Producto eliminado",
    });
    setStatusInCart("No agregado.");
    setShowRemoveButton(false);
  }

  return (
    <div className="button-cart">
      <button onClick={handleAdd}>Agregar al carrito</button>
      {showRemoveButton && <button onClick={handleRemove}>Eliminar</button>}
      <br />
      <small>{statusInCart}</small>
    </div>
  );
}
