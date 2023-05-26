import firebase from '@/main'
import { getAuth } from 'firebase/auth'

export default function authMiddleware ({ to, next }) {
  const auth = getAuth(firebase)
  let alreadyCalled = false

  auth.onAuthStateChanged((user) => {
    if (!user && to.path !== '/Login' && !alreadyCalled) {
      alreadyCalled = true
      next('/Login')
    } else if (!alreadyCalled) {
      alreadyCalled = true
      next()
    }
  })
}
