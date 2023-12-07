import { useQuery } from "react-query";
import { GET_PRODUCT } from "../constants/dataProviderTypes";
import productDataProvider from "../api/product";
import { Product } from "../types/products";
import { IReturnType, StrapiType } from "../types";

const useGetProduct = (id: string): IReturnType<StrapiType<Product>> => {

  const { data, isLoading, isFetching } = useQuery(
    ["products", GET_PRODUCT],
    () => productDataProvider.getProduct(id)
  );

  return {
    data: data?.data,
    isLoading,
    isFetching
  };
};

export default useGetProduct;