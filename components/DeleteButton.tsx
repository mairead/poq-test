import { useContext } from "react";
import { SelectedProductsContext } from "../context/selectedProductsContext";
import styles from "./DeleteButton.module.scss";

export default function DeleteButton() {
  const { state } = useContext(SelectedProductsContext);

  const noOfProducts = state.selectedProducts.length;

  const pluralize = (count: number, noun: string, suffix = "s") =>
    `${noun}${count !== 1 ? suffix : ""}`;

  const buttonText = `Remove ${noOfProducts} selected  ${pluralize(
    noOfProducts,
    "product",
  )}`;
  return (
    <div className={styles.container}>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
}
