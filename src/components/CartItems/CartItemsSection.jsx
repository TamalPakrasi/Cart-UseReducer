import React from "react";
import { CartGrid } from "../index.js";

function CartItemsSection() {
  return (
    <div className="flex-col-center gap-10 py-5 h-full w-[30%] fixed flex-grow-1 top-0 left-0 bg-gray-300 border-r-2 border-gray-700">
      <h2 className="text-3xl text-gray-900 font-bold text-center">Cart</h2>
      <CartGrid />
      <div className="absolute bg-white py-5 bottom-0 w-full left-0 z-5 text-red-500 font-semibold text-xl text-center border-t-1 border-black">
        Total Price: $2000.99
      </div>
    </div>
  );
}

export default CartItemsSection;
