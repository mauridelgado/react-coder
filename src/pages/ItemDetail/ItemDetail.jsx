import { useEffect, useState } from "react";
import products from "../../productsMock";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  return (
    <div className="detail">
      <div className="card">
        <img className="prod" src={producto.img} alt={producto.title} />
        <h1>{producto.title}</h1>

        <h2>${producto.price}</h2>
        <p>{producto.description}</p>

        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
