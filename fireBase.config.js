// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJSlr-6x_htWmRPXyX4x5aluQp40Tv5KQ",
    authDomain: "test-for-maxima.firebaseapp.com",
    projectId: "test-for-maxima",
    storageBucket: "test-for-maxima.firebasestorage.app",
    messagingSenderId: "926582861523",
    appId: "1:926582861523:web:ecbcff2b1efe5bbf9aae26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
