import "./counter.css";
const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div>
      <div className="contador">
        <button onClick={restar}>-</button>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button>
      </div>
      <div className="agregar">
        <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Counter;
