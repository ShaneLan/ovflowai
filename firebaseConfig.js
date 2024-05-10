import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyCf_Sw4OByvrXdmVpyT9rlfI7AqFGDH-60",
  authDomain: "ovflowai.firebaseapp.com",
  projectId: "ovflowai",
  storageBucket: "ovflowai.appspot.com",
  messagingSenderId: "362208467929",
  appId: "1:362208467929:web:027a7e6bb64e709c9457c8",
  measurementId: "G-VRH9M24953"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
