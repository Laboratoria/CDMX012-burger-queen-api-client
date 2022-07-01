import { signOut } from 'firebase/auth'
import { auth, db } from './firebase-keys'
import { deleteDoc, doc } from 'firebase/firestore'

export const exit = () => signOut(auth)

export const deleteStaff = async(uid) => {
  await deleteDoc(doc(db, 'User', uid))
  return console.log('borrado pasiempre')
}
