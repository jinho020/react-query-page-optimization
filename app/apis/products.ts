import type { Product, ProductData } from './products.type';

const API_URL = 'https://dummyjson.com';

export const getProducts = () => ({
  queryKey: ['getProducts'],
  queryFn: async () => {
    const response = await fetch(`${API_URL}/products`);
    const data: ProductData = await response.json();
    return data;
  },
});

export const getProductById = (id: number) => ({
  queryKey: ['getProducts'],
  queryFn: async () => {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data: Product = await response.json();
    return data;
  },
});
