import { API_URL } from './_common';
import type { Product, ProductData } from './products.type';

export const getProducts = () => ({
  queryKey: ['getProducts'],
  queryFn: async () => {
    const response = await fetch(`${API_URL}/products`);
    const data: ProductData = await response.json();
    return data;
  },
});

export const getProductById = (id: number) => ({
  queryKey: ['getProductById', id],
  queryFn: async () => {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data: Product = await response.json();
    return data;
  },
});
