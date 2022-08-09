import React from "react";
import styles from "./ItemsList.module.scss";

function ItemsList({ children }) {
  return <div className={styles.itemslist}>{children}</div>;
}

export default ItemsList;
