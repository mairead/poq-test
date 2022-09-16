import { useRef } from "react";
import styles from "./StyledCheckbox.module.scss";

type Props = {
  productId: string;
};

// TODO do we want this to be triggered on whole LI or just checkbox?
export default function StyledCheckbox({ productId }: Props) {
  // handle toggle state which marks active/inactive with controlled input
  const inputCheckbox = useRef<HTMLInputElement>(null);

  const onSelectProduct = (e: React.FormEvent<HTMLInputElement>) => {
    // add value of productId to array of selectedProducts
    // toggle select
    console.log(e);

    //  dispatch({ type: ACTIONS.ADD_PRODUCT });
    //  dispatch({ type: ACTIONS.REMOVE_PRODUCT });
  };

  return (
    <>
      <input
        id={productId}
        className={styles.input}
        ref={inputCheckbox}
        type="checkbox"
        onChange={onSelectProduct}
      />
      <label htmlFor={productId}>
        <span className="visually-hidden">{productId}</span>
      </label>
    </>
  );
}
