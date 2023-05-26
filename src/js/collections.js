import { getAuth } from 'firebase/auth'
import { getFirestore, doc, collection } from 'firebase/firestore'

import { firebase } from '@/main'
const DataBase = getFirestore(firebase)
const auth = getAuth(firebase)

const usersCollectionRef = collection(DataBase, 'users')
const userDocRef = doc(usersCollectionRef, auth.currentUser.uid)
const bannersCollectionRef = collection(userDocRef, 'banners')
const bannerDocRef = doc(bannersCollectionRef, 'banner')
export const mainTopRef = collection(bannerDocRef, 'MainTop')
export const mainNewsPromotions = collection(bannerDocRef, 'MainNewsPromotions')
export const backgroundBanner = collection(bannerDocRef, 'BackgroundBanner')
export const filmsCollectionRef = collection(userDocRef, 'films')
const filmsEnDocRef = doc(filmsCollectionRef, 'En')
const filmsUaDocRef = doc(filmsCollectionRef, 'Ua')
export const filmsUaCollectionRef = collection(filmsUaDocRef, 'films')
export const filmsEnCollectionRef = collection(filmsEnDocRef, 'films')

const cinemasCollectionRef = collection(userDocRef, 'cinemas')
const cinemasUaDocRef = doc(cinemasCollectionRef, 'Ua')
const cinemasEnDocRef = doc(cinemasCollectionRef, 'En')
export const cinemasUaCollectionRef = collection(cinemasUaDocRef, 'cinemas')
export const cinemasEnCollectionRef = collection(cinemasEnDocRef, 'cinemas')
