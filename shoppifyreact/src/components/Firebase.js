// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaLZ_7RAR8f6asdLiDIHch1LgGU9xRx5Q",
  authDomain: "shoppify-login.firebaseapp.com",
  projectId: "shoppify-login",
  storageBucket: "shoppify-login.appspot.com",
  messagingSenderId: "168793820105",
  appId: "1:168793820105:web:b47e5fee4f6e1baffe7618"
}; 

//Initialize Firebase
const app = initializeApp(firebaseConfig);

     
    

export const auth = getAuth(app);