import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../components/common/counter/CounterContainer";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    toast.success("Producto agregado al carrito", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
            <CounterContainer
              stock={producto.stock}
              onAdd={onAdd}
              initial={totalQuantity}
            />
          )}
        {producto.stock === 0 && <h2>No hay stock</h2>}

        {typeof totalQuantity !== "undefined" &&
          totalQuantity === producto.stock && (
            <h2>La cantidad máxima es {producto.stock}</h2>
          )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemDetail;
