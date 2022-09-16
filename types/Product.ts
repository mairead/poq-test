export type Product = {
  productId: number;
  name: string;
  description: string;
  price: number; // isCurrency - requires currency type
  priceWas: number; // isCurrency - requires currency type
  available: "TRUE"; // cast to boolean
  quantity: number;
  lowOnStock: "FALSE"; // cast to descriptive string
  promotionBadge: string;
  imageUrl: string;
};
