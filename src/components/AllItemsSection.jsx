import React from "react";
import { ItemsGrid } from ".";

function AllItemsSection() {
  return (
    <div className="flex-col-center gap-10 py-15">
      <h2 className="text-3xl text-gray-900 font-bold text-center">Items</h2>
      <ItemsGrid />
    </div>
  );
}

export default AllItemsSection;
