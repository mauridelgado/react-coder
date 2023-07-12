import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <span className="carrito">
      <Link to="/cart">
        <img
          className="carritoImg"
          src="https://img.icons8.com/ios/25/shopping-cart--v1.png"
          alt="shopping-cart--v1"
        />
      </Link>
      <p>0</p>
    </span>
  );
};
export default CartWidget;
