import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { app, database } from "../../../firebase";
import { IPayment } from "../../types/payment";

const COLLECTION_NAME = "payments"

const dbInstance = collection(database, COLLECTION_NAME);

export const createPayment = async (payment: IPayment) => {
  const response = await addDoc(dbInstance, payment);
  console.log("response: ", response.id);
  const document = await getPayment(response.id)
  return document;
};

export async function getPayment(ID: string) {
  const singleProduct = doc(database, COLLECTION_NAME, ID)
  const response = await getDoc(singleProduct)
  console.log({ ...response.data(), id: response.id })
  return { ...response.data(), id: response.id }
}