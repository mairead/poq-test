import { rest } from "msw";

const mockProductsResponse = [
  {
    productId: 100024698,
    name: "Rose Gold Shimmer Clutch Bag",
    description:
      "• Shimmer finish\n• Pleat design\n• Magnetic closure\n• Inner pocket\n• Detachable chain strap",
    price: 9.09,
    priceWas: 12.99,
    available: "TRUE",
    quantity: 96,
    lowOnStock: "FALSE",
    promotionBadge: "30% OFF",
    imageUrl: "https://i8.amplience.net/i/Quiz/00100024698_XM?w=1024",
  },
  {
    productId: 100024699,
    name: "Blue Jewel Clutch Bag",
    description:
      "• Jewel finish\n• Silver colour frame\n• Clip closure\n• Detachable chain strap\n• Synthetic",
    price: 9.99,
    priceWas: 18.99,
    available: "TRUE",
    quantity: 3,
    lowOnStock: "FALSE",
    promotionBadge: "47% OFF",
    imageUrl: "https://i8.amplience.net/i/Quiz/00100024699_XM?w=1024",
  },
  {
    productId: 100024700,
    name: "White Quilted Bag",
    description:
      "• Quilted effect\n• Chain strap\n• Magnetic closure\n• Inner zip closure\n• Synthetic",
    price: 9.99,
    priceWas: 22.99,
    available: "FALSE",
    quantity: 0,
    lowOnStock: "TRUE",
    promotionBadge: "57% OFF",
    imageUrl: "https://i8.amplience.net/i/Quiz/00100024700_XM?w=1024",
  },
];

const productsPath = `https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e`;

export const getProductsHandler = rest.get(
  productsPath,
  async (req, res, ctx) => res(ctx.json(mockProductsResponse)),
);

export const handlers = [getProductsHandler];
