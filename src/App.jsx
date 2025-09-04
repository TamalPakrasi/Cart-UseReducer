import React, { useReducer } from "react";
import { AllItemsSection, CartItemsSection } from "./components";
import { cartReducer } from "./utils/cartReducer.js";

function App() {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <>
      <AllItemsSection
        dispatch={dispatch}
      />
      <CartItemsSection
        cartItems={cartItems}
        dispatch={dispatch}
      />
    </>
  );
}

export default App;
