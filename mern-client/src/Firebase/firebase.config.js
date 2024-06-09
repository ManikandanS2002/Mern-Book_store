// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPJwawA7_WoB82vJw_byjv2DXJMlj9uKw",
  authDomain: "mern-book-inventory-6d1b3.firebaseapp.com",
  projectId: "mern-book-inventory-6d1b3",
  storageBucket: "mern-book-inventory-6d1b3.appspot.com",
  messagingSenderId: "252828606945",
  appId: "1:252828606945:web:fa898017a919470f5972a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;