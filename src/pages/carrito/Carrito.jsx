import { Link } from "react-router-dom";
import "./carrito.css";

const CartContainer = () => {
  return (
    <div>
      <h1>Mi carrito</h1>
      <Link to="/checkout">
        <button>Comprar</button>
      </Link>
      <Link to="/">
        <button>Seguir comprando</button>
      </Link>
    </div>
  );
};

export default CartContainer;
