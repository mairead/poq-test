import Image from "next/image";
import { Product } from "../types/Product";
import styles from "./ProductItem.module.scss";
import StyledCheckbox from "./StyledCheckbox";

type Props = {
  productItem: Product;
};

// TODO Product object requires suitable alt text for images
// TODO Promotion badge has poor colour contrast - WCAG failure
// TODO Promotion badge text/name is too small to be readable - WCAG failure
// TODO Better Responsive behaviour - column max width defined by image max-width
export default function ProductItem({ productItem }: Props) {
  return (
    <>
      <div className={styles.image_container}>
        <Image
          src={productItem.imageUrl}
          layout="fill"
          alt="this needs alt"
          objectFit="contain"
        />
        <StyledCheckbox productId={String(productItem.productId)} />
        {productItem.promotionBadge && (
          <div className={styles.promotion_wrapper}>
            <p className={styles.promotion_text}>
              {productItem.promotionBadge}
            </p>
          </div>
        )}
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{productItem.name}</p>
        <p className={styles.price}>£{productItem.price}</p>
        <p className={styles.price_was}>£{productItem.priceWas}</p>
      </div>
    </>
  );
}
