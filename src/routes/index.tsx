import { createBrowserRouter, } from "react-router-dom";
import Root from "./Root";
import VisualizationPage from "../pages/VisualizationPage";
import ProductPage from "../pages/ProductPage";
import PurchasePage from "../pages/PurchasePage";
import StockPage from "../pages/StockPage";
import SalePage from "../pages/SalePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProductPage />
      },
      {
        path: "product",
        element: <ProductPage />
      },
      {
        path: "stock",
        element: <StockPage />
      },
      {
        path: "purchase",
        element: <PurchasePage />
      },
      {
        path: "sale",
        element: <SalePage />
      },
      {
        path: "visualization",
        element: <VisualizationPage />,
      },
    ],
  },
]);

export default router;