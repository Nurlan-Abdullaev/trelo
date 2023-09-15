import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAjF-bHJuPenTiJWErPdiF5rZd7jKEfDA",
  authDomain: "trelo-1c2af.firebaseapp.com",
  databaseURL: "https://trelo-1c2af-default-rtdb.firebaseio.com",
  projectId: "trelo-1c2af",
  storageBucket: "trelo-1c2af.appspot.com",
  messagingSenderId: "637039875571",
  appId: "1:637039875571:web:7ca4b189669800cb3e2e86",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
