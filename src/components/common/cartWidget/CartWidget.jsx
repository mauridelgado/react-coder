import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <Badge badgeContent={total} showZero color="primary">
      <ShoppingCartIcon color="main" sx={{ fontSize: 30 }} />
    </Badge>
  );
};

export default CartWidget;
