import axios from "axios";

export async function GetProducts() {
  const res = await axios.get(
    "https://www.allbirds.com/products.json?limit=150"
  );

  if (res.status === "error") {
    throw new Error(res.data);
  }
  return res.data.products;
}
