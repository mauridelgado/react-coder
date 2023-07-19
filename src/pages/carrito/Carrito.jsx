import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./carrito.css";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);

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

      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default CartContainer;
