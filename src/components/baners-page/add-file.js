import { getAuth } from 'firebase/auth'

import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'

import { firebase } from '@/main'

export function GenerateID () {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()
  return `${year}${month}${day}${hour}${minute}${second}`
}

export function Remove (ID, Arr) {
  if ((ID !== null || ID !== undefined) && Arr.length > 1) {
    const index = Arr.findIndex((element) => element.id === ID)
    if (index !== -1) {
      this.itemsList.splice(index, 1)
    }
  }
}
const DataBase = getFirestore(firebase)
const auth = getAuth(firebase)

const usersCollectionRef = collection(DataBase, 'users')
const userDocRef = doc(usersCollectionRef, auth.currentUser.uid)
const bannersCollectionRef = collection(userDocRef, 'banners')
const bannerDocRef = doc(bannersCollectionRef, 'banner')
export const collectionRef = collection(bannerDocRef, 'MainTop')

export async function GetAllDocInCollection () {
  const querySnapshot = await getDocs(collectionRef)
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data())
  })
}

export async function GetDocument (collectionName, documentName) {
  try {
    const docRef = doc(DataBase, collectionName, documentName)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
    } else {
      console.log('No such document!')
    }
  } catch (error) {
    console.error(error)
  }
}
