import ProductItem from "@components/ProductItem";
import { Product } from "../types/Product";
import styles from "./ProductList.module.scss";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <main>
      <ul className={styles.list}>
        {products.map((productItem: Product) => (
          <li key={productItem.productId} className={styles.item}>
            <ProductItem productItem={productItem} />
          </li>
        ))}
      </ul>
    </main>
  );
}
