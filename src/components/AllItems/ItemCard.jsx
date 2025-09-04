import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ItemCard({ id, image, title, description, price, dispatch }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  const addToCartHandler = () => {
    const payload = { id, image, title, description, price, quantity: 1 };
    setIsAddedToCart(true);
    dispatch({ type: "ADD_TO_CART", payload });
  };

  return (
    <div className="card">
      <div className="w-52 flex-center aspect-square overflow-hidden">
        <LazyLoadImage
          className="size-full object-contain"
          src={image}
          alt={id}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base text-justify">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">
          Price: ${Number(price).toFixed(2)}
        </span>
        <button
          className={`inline-block text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
            isAddedToCart
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
          }`}
          onClick={addToCartHandler}
          disabled={isAddedToCart}
        >
          {isAddedToCart ? "Added" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
