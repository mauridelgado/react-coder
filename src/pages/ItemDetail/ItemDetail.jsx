import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../components/common/counter/CounterContainer";

import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [producto, setProducto] = useState({});

  const { id } = useParams();

  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
  };
  return (
    <div className="detail">
      <div className="card">
        <div className="img">
          <img src={producto.img} alt={producto.title} />
        </div>
        <h1>{producto.title}</h1>

        <h2>${producto.price}</h2>
        <p>{producto.description}</p>
        {(typeof totalQuantity === "undefined" ||
          producto.stock > totalQuantity) &&
          producto.stock > 0 && (
            <CounterContainer stock={producto.stock} onAdd={onAdd} />
          )}
      </div>
    </div>
  );
};

export default ItemDetail;
