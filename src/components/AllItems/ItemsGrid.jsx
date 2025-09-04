import { useEffect, useState } from "react";
import { fetchAllItems } from "../../services/API.service.js";
import { ItemCard } from "../index.js";

function ItemsGrid({ ...props }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchAllItems()
      .then((items) => setItems(items))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <div className="text-gray-900 font-semibold text-center tetx-xl">
      Loading...
    </div>
  ) : items.length > 0 ? (
    <div className="grid grid-cols-2 gap-7 px-10">
      {items.map(({ id, ...item }) => (
        <ItemCard key={id} id={id} {...props} {...item} />
      ))}
    </div>
  ) : (
    <div className="text-gray-900 text-xl text-center font-bold">No Items</div>
  );
}

export default ItemsGrid;
