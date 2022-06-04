import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB1sHz6GjkDqTvCDZ5qLWRBqWkzSQMGCGQ',
  authDomain: 'burguer-queen-92a8e.firebaseapp.com',
  projectId: 'burguer-queen-92a8e',
  storageBucket: 'burguer-queen-92a8e.appspot.com',
  messagingSenderId: '472669828428',
  appId: '1:472669828428:web:6c335d4eefbb05d7488be9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export async function userExist(uid) {
  const docRef = doc(db, 'users', uid);
  const res = await getDoc(docRef);
  console.log(res);
  return res.exists();
}

export async function registerNewUser(uid, name, rol, phone, email, password) {
  try {
    const userCollection = collection(db, 'users');
    console.log(uid);
    console.log(name);
    console.log(rol);
    console.log(phone);
    console.log(email);
    console.log(password);
    await setDoc(doc(userCollection, uid), {
      uid,
      name,
      rol,
      phone,
      email,
      password,
    });
  } catch (e) {
    console.log('Usuario no guardado', e);
  }
}

export async function getEmploye() {
  let data = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}
