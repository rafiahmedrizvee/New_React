import React from "react";

const Furniture = () => {
  const furniture = [
    {
      id: 201,
      title: "Modern Wooden Chair",
      brand: "IKEA",
      price: 149,
      category: "furniture",
      material: "Wood",
      rating: 4.4,
      stock: 25,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      description: "Minimal modern wooden chair",
    },
    {
      id: 202,
      title: "Luxury Sofa Set",
      brand: "Ashley",
      price: 899,
      category: "sofa",
      material: "Leather",
      rating: 4.7,
      stock: 8,
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
      description: "Premium leather sofa set",
    },
  ];
  return (
    <div className="md:grid grid-cols-3 ">
      {furniture.map((product) => (
        <div key={product.id}>


<div className="flex justify-center items-center min-h-screen  p-5">
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

        
        </div>
      ))}
    </div>
  );
};

export default Furniture;
