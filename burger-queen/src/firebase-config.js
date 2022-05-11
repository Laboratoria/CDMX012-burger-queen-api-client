import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrdhuRleDT6LKiHWSvc2QarcZxw71ZVME",
    authDomain: "burger-queen-388e6.firebaseapp.com",
    projectId: "burger-queen-388e6",
    storageBucket: "burger-queen-388e6.appspot.com",
    messagingSenderId: "264562226969",
    appId: "1:264562226969:web:6a7e8af41d14dc24477788"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);