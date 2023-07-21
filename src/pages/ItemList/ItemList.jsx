import ProductCard from "./../../components/common/productCard/ProductCard";
import "./itemList.css";
import { Skeleton } from "@mui/material";

const ItemList = ({ items }) => {
  return (
    <div className="principal">
      <h1 className="subt">Nuestros productos</h1>
      <div className="itemList">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
