import { CartItem } from "./cart"
import { IContact } from "./contact"
import { IPayment } from "./payment";

export type Order = {
  id: string;
  cart: CartItem[];
  contact: IContact;
  payment: IPayment;
  createdAt: Date;
}