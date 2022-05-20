import { signOut } from 'firebase/auth'
import { auth } from './firebase-keys'

export const exit = () => signOut(auth)
