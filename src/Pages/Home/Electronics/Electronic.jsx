import React, { useEffect, useState } from "react";
import Electronics from "./Electronics";

const Electronic = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/electronicproduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="md:grid grid-cols-3 ">
      {products.map((product) => (
        <Electronics key={product.id} product={product}></Electronics>
      ))}
    </div>
  );
};

export default Electronic;
