import { useEffect, useState } from "react";
import Head from "next/head";
import { Product } from "types/Product";
import Header from "@components/Header";
import DeleteButton from "@components/DeleteButton";
import ErrorMsg from "@components/ErrorMsg";
import ProductList from "@components/ProductList";
import getProducts from "@services/getProducts";
import { SelectedProductsProvider } from "@context/selectedProductsContext";
// import deleteProducts from "@services/deleteProducts";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    const productResponse = await getProducts();
    if (productResponse.error) {
      setErrorMsg(productResponse.error);
    } else {
      setProducts(productResponse.data);
    }
  };

  // onDelete - send array of selectedIds to remove from API

  return (
    <>
      <Head>
        <title>Image uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="POQ - Product List" />
      <SelectedProductsProvider>
        {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
        <DeleteButton />
        <ProductList products={products} />
      </SelectedProductsProvider>
    </>
  );
}
