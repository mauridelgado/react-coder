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
      <h2 className="subtit">Mi carrito</h2>

      {cart.map((elemento) => {
        return (
          <div className="cart">
            <div className="aComprar" key={elemento.id}>
              <img className="img" src={elemento.img} alt={elemento.title} />
              <h1>{elemento.title}</h1>
              <h2>${elemento.price}</h2>
            </div>
            <h2>{elemento.quantity}</h2>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}
      {cart.length > 0 && <h2>El total es ${total}</h2>}
      {cart.length > 0 && <button onClick={limpiar}>Limpiar carrito</button>}
      {cart.length > 0 && (
        <Link to="/checkout">
          <button>Terminar la compra</button>
        </Link>
      )}
    </div>
  );
};

export default CartContainer;
