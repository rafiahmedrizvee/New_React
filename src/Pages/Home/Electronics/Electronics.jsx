import React from "react";

const Electronics = ({ product }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-2xl">{product.title}</h2>

          <p className="text-gray-500">Brand: {product.brand}</p>

          <p>{product.description}</p>

          <div className="flex justify-between items-center mt-3">
            <span className="text-xl font-bold text-primary">
              ${product.price}
            </span>

            <span className="badge badge-secondary">⭐ {product.rating}</span>
          </div>

          <div className="mt-2">
            <span className="badge badge-outline">{product.category}</span>

            <span className="badge badge-success ml-2">
              Stock: {product.stock}
            </span>
          </div>

          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
