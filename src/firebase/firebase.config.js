import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBicMMa3UvI0NvlofFDcUBP9X96fKboYo",
  authDomain: "bcons-app-7fbb3.firebaseapp.com",
  projectId: "bcons-app-7fbb3",
  storageBucket: "bcons-app-7fbb3.appspot.com",
  messagingSenderId: "677774245629",
  appId: "1:677774245629:web:1ed281fbad8b75b5f70894",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
