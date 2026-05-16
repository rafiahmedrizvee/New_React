import React from "react";
import Electronic from "../Home/Electronics/Electronic";
import Furniture from "../Home/Furniture/Furniture";

const Products = () => {
  

  return (
    <div>
        
      <div>
        <h1 className=" text-5xl font-bold text-center my-5">
          Electronic Products
        </h1>

        <Electronic></Electronic>
      </div>
      <div>
        <h1 className=" text-5xl font-bold text-center my-5">
          Furniture Products
        </h1>

         <Furniture></Furniture>
      </div>
    </div>
  );
};

export default Products;
