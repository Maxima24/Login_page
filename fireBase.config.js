const firebaseConfig = {
    apiKey: "AIzaSyC13tfHuAYIwH_1tQVf3i6ekvEXNUJ7Bk4",
    authDomain: "blog-platform-536a8.firebaseapp.com",
    projectId: "blog-platform-536a8",
    storageBucket: "blog-platform-536a8.appspot.com",
    messagingSenderId: "110020481660",
    appId: "1:110020481660:web:177344716687066043eff9",
    // measurementId: "G-MBK2NZDZVE"
}
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export {   auth, getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } ;
export default app;