export const fetchAllItems = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Failed to Fetch Data");
    }

    const items = await res.json();

    return items;
  } catch (err) {
    console.log(err.message);
  }
};
