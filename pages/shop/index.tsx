import React from "react";
import styles from './Styles.module.css'
import rStyles from './Responsive.module.css'
import productsData from "../../helpers/productsData";
import Product from "../../components/Product";

const Shop = () => {

  return (
    <div>
      <div className={`${styles.container} ${rStyles.container} flex flex-wrap`}>
        {productsData.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
