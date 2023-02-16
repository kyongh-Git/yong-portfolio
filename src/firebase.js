// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYMcO3bwJDSPJ_ez3TbUfuTQfa814poIA",
  authDomain: "yong-portfolio.firebaseapp.com",
  projectId: "yong-portfolio",
  storageBucket: "yong-portfolio.appspot.com",
  messagingSenderId: "589233921741",
  appId: "1:589233921741:web:ef51fc27a33f4770865384",
  measurementId: "G-G7ST3BRHTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;