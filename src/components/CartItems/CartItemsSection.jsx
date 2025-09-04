import React from "react";
import { CartGrid } from "../index.js";

function CartItemsSection({ cartItems }) {
  return (
    <div className="flex-col-center pt-5 h-full w-[30%] fixed flex-grow-1 top-0 left-0 bg-gray-300 border-r-2 border-gray-700">
      <h2 className="text-3xl text-gray-900 font-bold text-center">Cart</h2>
      <CartGrid cartItems={cartItems} />
      <div className="bg-white py-5 bottom-0 w-full left-0 z-5 text-red-500 font-semibold text-xl border-t-1 border-black ps-10">
        <div>
          Total Price: $
          {(cartItems.length > 0
            ? cartItems.reduce(
                (acc, curr) => acc + Number(curr.price) * curr.quantity,
                0
              )
            : 0
          ).toFixed(2)}
        </div>
        <div>Total Items: {cartItems.length}</div>
      </div>
    </div>
  );
}

export default CartItemsSection;
