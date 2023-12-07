import Product from "components/Product";
import {useGetProducts} from "hooks";
import rStyles from './Responsive.module.css';
import styles from './Styles.module.css';

const Shop = () => {

  const { data: products = [] } = useGetProducts()

  return (
    <div>
      <div className={`${styles.container} ${rStyles.container} flex flex-wrap`}>
        {products.map((product) => (
          <Product product={{...product.attributes, id: product.id}} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
