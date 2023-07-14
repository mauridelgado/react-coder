import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../components/common/counter/CounterContainer";
import products from "../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = () => {
  const { addToCart } = useContext(CartContext);

  const [elemento, setElemento] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setElemento(res));
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...elemento, quantity: cantidad };
    addToCart(productCart);
  };
  return (
    <div className="detail">
      <div className="card">
        <img className="prod" src={elemento.img} alt={elemento.title} />
        <h1>{elemento.title}</h1>

        <h2>${elemento.price}</h2>
        <p>{elemento.description}</p>
        <CounterContainer stock={elemento.stock} onAdd={onAdd} />

        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
