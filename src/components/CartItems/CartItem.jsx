import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CartItem({ id, image, title, description, price }) {
  return (
    <div className="card relative">
      <div className="w-52 flex-center aspect-square overflow-hidden">
        <LazyLoadImage
          className="size-full object-contain"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          alt="1"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Title</div>
        <p className="text-gray-700 text-base text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat
          beatae asperiores, eius exercitationem molestiae, fugit expedita
          dolorum dolores rerum facere obcaecati non.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center gap-4">
        <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-red-700">
          Price: ${Number("100").toFixed(2)}
        </span>

        <div className="flex items-center gap-2">
          <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold cursor-pointer">
            -
          </button>

          <span className="px-3 py-1 text-lg font-medium">0</span>

          <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold cursor-pointer">
            +
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <button className="text-white bg-red-500 px-3 py-2 cursor-pointer">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
