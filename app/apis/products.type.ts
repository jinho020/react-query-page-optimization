type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Review = {
  rating: number;
  comment: string;
  date: string; // ISO 8601 string
  reviewerName: string;
  reviewerEmail: string;
};

type Meta = {
  createdAt: string; // ISO 8601 string
  updatedAt: string; // ISO 8601 string
  barcode: string;
  qrCode: string; // URL string
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[]; // URL strings
  thumbnail: string; // URL string
};

export type ProductData = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
