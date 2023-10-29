import Product from "./Product";
import Supplier from "./Supplier";

interface Purchase {
  id: number;
  purchaseDate: Date;
  product: Product;
  quantity: number;
  unitPrice: number;
  supplier: Supplier;
}

export default Purchase;