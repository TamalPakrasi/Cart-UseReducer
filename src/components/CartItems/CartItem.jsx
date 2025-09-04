import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CartItem({ id, image, title, description, price, quantity }) {
  console.log("cartitem is rendering...");
  return (
    <div className="card relative">
      <div className="w-64 max-h-30 flex-center aspect-square overflow-hidden">
        <LazyLoadImage
          className="size-full object-contain"
          src={image}
          alt={id}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-base mb-2">{title}</div>
        <p className="text-gray-700 text-sm text-justify">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center gap-4">
        <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-red-700">
          Price: ${Number(price).toFixed(2)}
        </span>

        <div className="flex items-center gap-2">
          <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold cursor-pointer">
            -
          </button>

          <span className="px-3 py-1 text-base font-medium">{quantity}</span>

          <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold cursor-pointer">
            +
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <button className="text-white bg-red-500 px-3 py-2 cursor-pointer text-xs">
          Remove
        </button>
      </div>
    </div>
  );
}

export default memo(CartItem);
