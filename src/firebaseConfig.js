import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdPyBe9zG7XtvX6HaSVmPpeAu5JdQWvDE",
  authDomain: "ecommerce-b83e2.firebaseapp.com",
  projectId: "ecommerce-b83e2",
  storageBucket: "ecommerce-b83e2.appspot.com",
  messagingSenderId: "824357437738",
  appId: "1:824357437738:web:d2a7b4ded3d29eec1c9e53",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
