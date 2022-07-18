import React, { useContext } from "react";

// context
import { productsContext } from "../context/ProductContextProvider";

// components
import Product from "./shared/Product";

// styles
import styles from "./Store.module.css"

const Store = () => {
  const products = useContext(productsContext);

  return (
    <div className={styles.container}>
      {products.map((item) => (<Product key={item.id} productData={item} />))}
    </div>
  );
};

export default Store;
