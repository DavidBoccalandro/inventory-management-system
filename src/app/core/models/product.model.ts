export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  supplier: string;
  price: number;
  stock: number;
  unit: string;
  minStock: number;
  imageUrl?: string;
}
