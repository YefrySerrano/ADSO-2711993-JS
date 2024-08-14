import { initializeApp } from "firebase/app";
import { getAuth , GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCog8FM3_ehCrCNFZistriDFoUIVP6baIc",
    authDomain: "indumentariadeportiva-8f646.firebaseapp.com",
    projectId: "indumentariadeportiva-8f646",
    storageBucket: "indumentariadeportiva-8f646.appspot.com",
    messagingSenderId: "619952994361",
    appId: "1:619952994361:web:95478fc4a75b880e27b5e8"
  };
  

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GithubAuthProvider();

export {auth,provider}