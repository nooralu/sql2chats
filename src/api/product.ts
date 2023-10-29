import axios from "./request.ts";
import Product from "../models/Product.ts";

async function fetchAllProducts(): Promise<Product[]> {
  const response = await axios.get("/products/all");
  return response.data;
}

async function createProduct(product: Exclude<Product, "id">): Promise<Product> {
  const response = await axios.post("/products/create", product);
  return response.data;
}

async function deleteProduct(id: number): Promise<void> {
  await axios.delete(`/products/${id}`);
}

async function updateProduct(product: Product): Promise<Product> {
  const response = await axios.put(`/products/update`, product);
  return response.data;
}

export {fetchAllProducts, createProduct, deleteProduct, updateProduct}