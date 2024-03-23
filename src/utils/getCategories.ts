import { TProductMapped } from "./types";

export const getCategories = (products: TProductMapped[]) => {
  const res = new Set<string>();
  products.forEach((product) => {
    res.add(product.category);
  });
  return Array.from(res);
};
