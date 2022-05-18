// Import the functions you need from the SDKs you need
import { initializeApp, getAuth, getFirestore } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDf5HKiVEDHKgy9J8wylWyOYvNYS3ygm1c',
  authDomain: 'burger-queen-1c96e.firebaseapp.com',
  projectId: 'burger-queen-1c96e',
  storageBucket: 'burger-queen-1c96e.appspot.com',
  messagingSenderId: '1093225872282',
  appId: '1:1093225872282:web:bf4efb80556ca59b495823'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
