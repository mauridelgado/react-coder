import { Link } from "react-router-dom";
import "./navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dn6wz2clp/image/upload/v1686780060/guitar-drink_pyflgn.png"
            alt="logo"
            className="logo"
          />{" "}
        </Link>

        <ul className="navUl">
          <li>
            <Link to="/">Todos</Link>
          </li>
          <li>
            <Link to="/category/cervezas">Cervezas</Link>
          </li>

          <li>
            <Link to="/category/vinos">Vinos</Link>
          </li>
          <li>
            <Link to="/category/destilados">Destilados</Link>
          </li>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
