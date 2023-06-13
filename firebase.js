// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB68lzsEb1_h00-_gw-VO1ZHhUc6LsRUM8",
    authDomain: "fb-clone-yt-c62f2.firebaseapp.com",
    projectId: "fb-clone-yt-c62f2",
    storageBucket: "fb-clone-yt-c62f2.appspot.com",
    messagingSenderId: "748537841433",
    appId: "1:748537841433:web:9fe27798de797690386788"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };