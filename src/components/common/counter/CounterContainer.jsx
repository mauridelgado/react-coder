import { useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : Swal.fire({
          title: "Máximo",
          text: "Cantidad máxima del producto.",
          imageUrl:
            "https://res.cloudinary.com/dn6wz2clp/image/upload/v1689957878/png-clipart-pepe-the-frog-frog-leaf-animals_cv4dso-removebg-preview_p3fgtx.png",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
