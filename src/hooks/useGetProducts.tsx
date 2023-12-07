import { useQuery } from "react-query";
import { GET_PRODUCTS } from "../constants/dataProviderTypes";
import productDataProvider from "../api/product";
import { Product } from "../types/products";
import { IReturnType, StrapiType } from "../types";

const useGetProducts = (): IReturnType<StrapiType<Product>[]> => {

  const { data, isLoading, isFetching } = useQuery(
    ["products", GET_PRODUCTS],
    () => productDataProvider.getProducts()
  );

  return {
    data: data?.data,
    isLoading,
    isFetching
  };
};

export default useGetProducts;