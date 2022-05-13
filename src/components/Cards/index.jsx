// Shift+ALT+F ordenar codigo
import React from "react";
import Product from "../Product/Product";

const Cards = (props) => {
  const { products, onAdd } = props;

  return (
    <div id="Productos">     
      <div className="flex flex-row flex-wrap items-center justify-center">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </div>
   
  );
};

export default Cards;
