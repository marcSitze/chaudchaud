import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { app, database } from "../../firebase";

const COLLECTION_NAME = "orders"

const dbInstance = collection(database, COLLECTION_NAME);

export const createOrder = async (form: any) => {
  const response = await addDoc(dbInstance, form);
  console.log("response: ", response);
  return response;
};
