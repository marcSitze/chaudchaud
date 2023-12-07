import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { app, database } from "../../../firebase";

const COLLECTION_NAME = "products"

const dbInstance = collection(database, COLLECTION_NAME);

export const createProduct = async (form: any) => {
  const response = await addDoc(dbInstance, form);
  console.log("response: ", response);
  return response;
};

export const getProducts = async () => {
  const response = await getDocs(dbInstance);
  // console.log();
  return response.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
};

export const getProduct = async (ID: string) => {
  const singleProduct = doc(database, COLLECTION_NAME, ID)
  const response = await getDoc(singleProduct)
  console.log({ ...response.data(), id: response.id })
  return { ...response.data(), id: response.id }
}