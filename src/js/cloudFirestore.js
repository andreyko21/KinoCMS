import {
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  deleteField,
  getDoc,
  getDocs,
  query
} from 'firebase/firestore'

export class CloudFirestore {
  async AddImgDocument (dataSend, collectionRef, eText, eUrls) {
    for (let i = 0; i < dataSend.length; i++) {
      const item = dataSend[i]
      if (item.id != null) {
        const docData = {
          link: item.link ? item.link : ''
        }
        if (eText) {
          docData.text = item.text ? item.text : ''
        }
        if (eUrls) {
          docData.urls = item.urls ? item.urls : ''
        }
        await setDoc(doc(collectionRef, dataSend[i].id), docData)
      }
    }
  }

  async AddDocument (collectionRef, fileName, data) {
    await setDoc(doc(collectionRef, fileName), data)
  }

  async DeleteDocument (collection, id) {
    try {
      await deleteDoc(doc(collection, id))
    } catch (error) {
      const errorMessages = {}
      const errorMessage =
        errorMessages[error.code] || 'Не вдалося видалити файл зі сховища.'
      throw new Error(errorMessage)
    }
  }

  async DeleteFieldFromDocument (docRef) {
    try {
      await updateDoc(docRef, { capital: deleteField() })
    } catch (error) {
      const errorMessages = {
        unknown: 'Сталася невідома помилка при видаленні поля з документа.'
      }
      const errorMessage =
        errorMessages[error.code] || 'Не вдалося видалити поле з документа.'
      throw new Error(errorMessage)
    }
  }

  async getDocument (collection, docName) {
    try {
      const docRef = doc(collection, docName)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        return null
      }
    } catch (error) {
      console.error('Error getting document:', error)
    }
  }

  async GetFilteredDocuments (collectionRef, where) {
    const q = query(collectionRef, where)
    try {
      const querySnapshot = await getDocs(q)
      return querySnapshot
    } catch (error) {
      const errorMessages = {
        'permission-denied': 'Відмовлено в доступі до колекції.',
        'invalid-argument': 'Переданий недійсний аргумент.',
        unknown: 'Сталася невідома помилка під час отримання даних з колекції.'
      }
      const errorMessage = errorMessages[error.code] || 'Не вдалося отримати документи з колекції.'
      throw new Error(errorMessage)
    }
  }

  async GetAllDocuments (collectionRef) {
    try {
      const querySnapshot = await getDocs(collectionRef)
      return querySnapshot
    } catch (error) {
      const errorMessages = {
        'permission-denied': 'Відмовлено в доступі до колекції.',
        'invalid-argument': 'Переданий недійсний аргумент.',
        unknown: 'Сталася невідома помилка під час отримання даних з колекції.'
      }
      const errorMessage = errorMessages[error.code] || 'Не вдалося отримати документи з колекції.'
      throw new Error(errorMessage)
    }
  }
}
