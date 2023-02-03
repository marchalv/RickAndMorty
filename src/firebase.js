// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8MPFhYNFv0xj4AMNg5E_h0muK7Vky_VE",
    authDomain: "rickandmorty-710aa.firebaseapp.com",
    projectId: "rickandmorty-710aa",
    storageBucket: "rickandmorty-710aa.appspot.com",
    messagingSenderId: "716009089892",
    appId: "1:716009089892:web:4cfb9de06c67f24d00a871",
    measurementId: "G-EVGF2GPPBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};