import ItemListContainer from "./pages/ItemList/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/layouts/Layout";
import Carrito from "./pages/carrito/Carrito";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Carrito />} />

          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
