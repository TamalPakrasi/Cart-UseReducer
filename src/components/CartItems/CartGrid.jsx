import React from "react";
import { CartItem } from "../index.js";

function CartGrid({ cartItems, dispatch }) {
  return (
    <div
      className={`flex-1 overflow-y-auto px-10 my-5 ${
        cartItems.length === 0 ? "flex-center" : ""
      }`}
    >
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-7">
          {cartItems.map(({ id, ...item }) => (
            <CartItem
              key={id}
              id={id}
              dispatch={dispatch}
              {...item}
            />
          ))}
        </div>
      ) : (
        <div className="text-center font-medium text-gray-900 text-lg">
          No items in cart
        </div>
      )}
    </div>
  );
}

export default CartGrid;
