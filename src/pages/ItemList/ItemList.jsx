import ProductCard from "./../../components/common/productCard/ProductCard";
import "./itemList.css";
import { Skeleton } from "@mui/material";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="principal">
      <h1 className="subt">Nuestros productos</h1>
      <div className="itemList">
        {items.length > 0
          ? items.map((elemento) => {
              return <ProductCard key={elemento.id} elemento={elemento} />;
            })
          : arr.map((e) => {
              return (
                <div className="skeleton" key={e}>
                  <Skeleton variant="rectangular" width={250} height={400} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem" }}
                    width={150}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem" }}
                    width={50}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem" }}
                    width={70}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ItemList;
