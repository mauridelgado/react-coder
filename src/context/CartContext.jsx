import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = isInCart(item.id);

    if (existe) {
      let newArray = cart.map((producto) => {
        if (producto.id === item.id) {
          return { ...producto, quantity: item.quantity };
        } else {
          return producto;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((producto) => producto.id !== id);
    setCart(newArray);
  };

  const isInCart = (id) => {
    let existe = cart.some((producto) => producto.id === id);
    return existe;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, producto) => {
      return acc + producto.price * producto.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, producto) => {
      return acc + producto.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    const product = cart.find((producto) => producto.id === id);
    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
