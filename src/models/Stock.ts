import Product from "./Product";
import Warehouse from "./Warehouse";

interface Stock {
  id: number;
  product: Product;
  warehouse: Warehouse;
  quantity: number;
  purchasingPrice: number;
}

export default Stock;