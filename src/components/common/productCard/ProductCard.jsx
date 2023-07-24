import "./productCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ elemento }) {
  return (
    <div className="card">
      <img className="prodImg" src={elemento.img} alt={elemento.title} />{" "}
      <h1>{elemento.title}</h1>
      <h2>${elemento.price}</h2>
      <Link to={`/itemDetail/${elemento.id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
}
