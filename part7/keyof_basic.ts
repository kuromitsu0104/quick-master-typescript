{
  interface Product {
    name: string;
    price: number;
  }

  type ProductKeys = keyof Product;
  // type ProductKeys = "name" | "price"
}