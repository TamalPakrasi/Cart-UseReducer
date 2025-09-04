import React from "react";
import { ItemsGrid } from "..";

function AllItemsSection({ ...props }) {
  return (
    <div className="flex-col-center gap-10 py-15 flex-grow-1 w-[70%] float-end bg-gray-300">
      <h2 className="text-3xl text-gray-900 font-bold text-center">Items</h2>
      <ItemsGrid {...props} />
    </div>
  );
}

export default AllItemsSection;
