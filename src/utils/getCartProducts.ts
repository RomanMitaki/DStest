import { TProductMapped } from "./types";

export const getCartProducts = (products: TProductMapped[]) => {
  return products.filter((product) => product.qty);
};
