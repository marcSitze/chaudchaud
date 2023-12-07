import { StrapiType } from "types";

export type Image = {
  name?: string;
  url: string;
}

export type StrapiImage = StrapiType<Image>