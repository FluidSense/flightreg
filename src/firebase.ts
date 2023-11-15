import firebase from "firebase/compat/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const app = firebase.initializeApp(firebaseConfig);
export const configuredFirebase = firebase;
const db = getFirestore(app);

export async function getFlights() {
  const fligthsRef = collection(db, "flights");
  const q = query(fligthsRef, orderBy("departure", "desc"));
  return await getDocs(q);
}
