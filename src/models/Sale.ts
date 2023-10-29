import Product from "./Product";
import Customer from "./Customer";

interface Sale {
  id: number;
  saleTime: Date;
  product: Product;
  unitPrice: number;
  customer: Customer;
  warehouse: string;
}

export default Sale;