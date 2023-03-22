export interface Product {
  id?: string;
  name: string;
  icon: string;
  price: number;
  promo?: 'new' | 'limited';
  description: string;
}
