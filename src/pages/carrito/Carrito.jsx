import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./carrito.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpiado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };
  return (
    <div className="carrito">
      <h1>Mi carrito</h1>

      {cart.map((elemento) => {
        return (
          <div className="card">
            <div className="aComprar" key={elemento.id}>
              <img className="img" src={elemento.img} alt={elemento.title} />
              <h1>{elemento.title}</h1>
              <h2>${elemento.price}</h2>
              <h2>{elemento.quantity}</h2>
              <button onClick={() => deleteById(elemento.id)}>eliminar</button>
            </div>
          </div>
        );
      })}

      <button onClick={limpiar}>Limpiar carrito</button>
      <Link to="/checkout">
        <button>Terminar la compra</button>
      </Link>
    </div>
  );
};

export default CartContainer;
