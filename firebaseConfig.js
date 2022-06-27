import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAyw_k-HuoyLQGiHtYqVN7okFhVx-ILCL8",
    authDomain: "wordle-with-numbers.firebaseapp.com",
    projectId: "wordle-with-numbers",
    storageBucket: "wordle-with-numbers.appspot.com",
    messagingSenderId: "663940585526",
    appId: "1:663940585526:web:bd74e8a97fe5c5378ae097",
    measurementId: "G-Q8ZY665EJT"
};

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)