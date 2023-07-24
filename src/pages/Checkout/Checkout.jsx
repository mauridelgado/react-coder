import { useContext, useState } from "react";
import "./checkout.css";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { TextField, Button } from "@mui/material";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, getTotalPrice } = useContext(CartContext);
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      mail: "",
      phone: "",
      direction: "",
      city: "",
    },
    onSubmit: (data) => {
      generateOrder(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "El nombre debe tener al menos 5 caracteres"),
      mail: Yup.string()
        .email("El email debe contener @")
        .required("Este campo es obligatorio"),
      phone: Yup.number("Su número es incorrecto")
        .typeError("Su número es incorrecto")
        .required("Este campo es obligatorio")
        .integer("Su número de celular es incorrecto"),
      direction: Yup.string().required("Este campo es obligatorio"),
      city: Yup.string().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  const generateOrder = (data) => {
    let order = {
      buyer: data,
      items: cart,
      total: getTotalPrice(),
      date: serverTimestamp(),
    };
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
  };
  return (
    <>
      {orderId ? (
        <div>
          <h2>
            Gracias por su compra. Nos contactaremos con usted para realizar el
            pago.
          </h2>
          <h4>Su orden de compra es: {orderId}</h4>
          <div className="volver">
            <Link to="/">
              <Button type="submit" variant="contained">
                Volver a comprar{" "}
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {" "}
          <h2>
            Todos nuestros productos son enviados por la empresa DAC a la
            dirección ingresada una vez acreditado el pago mediante
            transferencia electrónica.
          </h2>
          <div className="campo">
            <TextField
              id="outlined-basic"
              label="Nombre completo"
              variant="outlined"
              name="name"
              onChange={handleChange}
              helperText={errors.name}
              error={errors.name ? true : false}
            />
            <TextField
              id="outlined-basic"
              label="Correo electrónico"
              variant="outlined"
              name="mail"
              onChange={handleChange}
              helperText={errors.mail}
              error={errors.mail ? true : false}
            />
          </div>
          <div className="campo">
            <TextField
              id="outlined-basic"
              label="Teléfono"
              variant="outlined"
              name="phone"
              onChange={handleChange}
              helperText={errors.phone}
              error={errors.phone ? true : false}
            />
            <TextField
              id="outlined-basic"
              label="Ciudad"
              variant="outlined"
              name="city"
              onChange={handleChange}
              helperText={errors.city}
              error={errors.city ? true : false}
            />
          </div>
          <div className="campo">
            <TextField
              id="outlined-multiline-static"
              label="Dirección"
              name="direction"
              multiline
              rows={4}
              onChange={handleChange}
              helperText={errors.direction}
              error={errors.direction ? true : false}
            />
          </div>
          <div className="enviar">
            <Button type="submit" variant="contained">
              Pagar
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default Checkout;
