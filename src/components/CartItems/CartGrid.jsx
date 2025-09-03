import React from "react";
import { CartItem } from "../index.js";

function CartGrid() {
  return (
    <div className="flex-1 overflow-y-auto px-10 py-5">
      <div className="grid grid-cols-1 gap-7">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default CartGrid;
