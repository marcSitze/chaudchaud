export type IReturnType<T> = {
  data?: T;
  isLoading?: boolean;
  mutate?: any;
  isSuccess?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isRefetching?: boolean;
  refetch?: any;
  error?: IError | null;
};

export interface IError extends Error {
  body?: any;
}

export type StrapiType<T> = {
  id: number;
  attributes: T
}