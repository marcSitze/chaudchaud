import { StrapiImage } from "./Image";

export type Product = {
  id: number | string;
  name: string;
  description: string;
  price: number | string;
  size: string;
  color: string[];
  stock: string | number;
  gender: string;
  images: {
    data: StrapiImage[]
  };
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}