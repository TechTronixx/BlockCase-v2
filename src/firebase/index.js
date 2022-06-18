import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBqvzqU_IhdWF3sdcMT6yAfUfFZY_miyw",
  authDomain: "blk-react.firebaseapp.com",
  projectId: "blk-react",
  storageBucket: "blk-react.appspot.com",
  messagingSenderId: "733554450983",
  appId: "1:733554450983:web:9c6a8eb8c26d16e53fe402",
  measurementId: "G-YRC20WWDXE",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
