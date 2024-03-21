import { type RouteProps } from "react-router-dom";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CartPage from "../../pages/CartPage/CartPage";

export enum AppRoutes {
  CATALOG = "catalog",
  CART = "cart",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CATALOG]: "/",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <CatalogPage />,
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
