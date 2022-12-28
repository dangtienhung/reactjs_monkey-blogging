// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCJRR_Mv87kJSjxdSz6l0eOGEZtdK_PK9I",
	authDomain: "monkey-blogging-2b525.firebaseapp.com",
	projectId: "monkey-blogging-2b525",
	storageBucket: "monkey-blogging-2b525.appspot.com",
	messagingSenderId: "46333114052",
	appId: "1:46333114052:web:31b93f71ee5969c85bfb91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
