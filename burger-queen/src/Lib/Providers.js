import { signOut } from 'firebase/auth'
import { auth, db } from './firebase-keys'
import { deleteDoc, doc } from 'firebase/firestore'

export const exit = () => signOut(auth)

export const deleteStaff = async(id) => {
  await deleteDoc(doc(db, 'User', id))
  return console.log('hi')
}
