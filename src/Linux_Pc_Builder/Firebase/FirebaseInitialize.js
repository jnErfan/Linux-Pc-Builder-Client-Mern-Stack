import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";

const FirebaseInitialize = () => {
    initializeApp(firebaseConfig);
};

export default FirebaseInitialize;