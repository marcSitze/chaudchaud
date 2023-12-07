import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Styles.module.css";
import rStyles from './Responsive.module.css'
import img from "assets/shirts/1.jpeg";
import ProductsData from "helpers/productsData";
import { Product } from "types/products";
import { cartContext } from "context/cart/cartContext";
import useGetProduct from "hooks/useGetProduct";

const ProductPage = () => {
  const { addToCart } = useContext(cartContext)
  const router = useRouter();

  const { data: product } = useGetProduct(String(router.query.id))
  // const [product, setProduct] = useState<Product>();
  useEffect(() => {
    const products: Product[] = ProductsData.filter(
      (product) => product.id === Number(router.query.id)
    );
    if (!products.length) {
      router.push("/shop");
    }
    // setProduct(products[0]);
  });
  // console.log("product: ", product);
  return (
    <div className={`${styles.container} ${rStyles.container} mt-8`}>
      <div className="flex items-center flex-wrap">
        <div className={`${styles.col} ${rStyles.col} border`}>
          <div className={`${styles.imageWrapper} w-full flex justify-center`}>
            <Image src={product?.attributes?.image ?? img} alt="image" />
          </div>
          <div className="flex">
            <div className="w-1/5 p-2">
              <Image src={img} alt="product image" />
            </div>
            <div className="w-1/5 p-2">
              <Image src={img} alt="product image" />
            </div>
            <div className="w-1/5 p-2">
              <Image src={img} alt="product image" />
            </div>
            <div className="w-1/5 p-2">
              <Image src={img} alt="product image" />
            </div>
          </div>
        </div>
        <div className={`${styles.col} ${rStyles.col}`}>
          <h3 className="text-3xl font-bold mb-2">
            {product?.attributes?.name ?? "T-shirt"}
          </h3>
          <p className="text-lg mb-4">
            {product?.attributes?.description ??
              `Dainty Name Necklace with Birth Flower, Personalized Name Necklace,
            Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift`}
          </p>
          <h3 className="text-xl mb-4 font-bold">
            {product?.attributes?.price ?? "3000 xaf"} XAF
          </h3>
          <div className="flex items-center mb-4">
            <span className="text-base mr-2">Available in: </span>
            <div className="flex">
              {/* {product?.attributes?.color?.map((color, index) => (
                <span
                  key={index}
                  className={styles.colorBox}
                  style={{ backgroundColor: color }}
                ></span>
              ))} */}

              {/* <span
                className={styles.colorBox}
                style={{ backgroundColor: "blue" }}
              ></span> */}
            </div>
          </div>
          <div className="flex mb-4">
            <div
              className={`${styles.sizeCircle} flex justify-center items-center`}
            >
              XS
            </div>
            <div
              className={`${styles.sizeCircle} flex justify-center items-center`}
            >
              S
            </div>
            <div
              className={`${styles.sizeCircle} flex justify-center items-center`}
            >
              M
            </div>
          </div>
          <div>
            <button onClick={() => addToCart(product)}  className={`${styles.btn} ${rStyles.btn} bg-primary rounded-full`}>
              Add to cart
            </button>
            <button className={`${styles.btn} ${rStyles.btn} rounded-full bg-secondary`}>
              Shop now
            </button>
            <Link href={"/shop"}>Continue shopping ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
