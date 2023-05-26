import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  getMetadata,
  listAll
} from 'firebase/storage'
import { firebase } from '@/main'

const storage = getStorage(firebase)

export class CloudStorage {
  async UploadFile (folderPath, file) {
    try {
      const fileRef = ref(storage, `${folderPath}/${file.id}`)
      const response = await fetch(file.src)
      const data = await response.blob()
      await uploadBytes(fileRef, data)
      const downloadUrl = await getDownloadURL(fileRef)
      return downloadUrl
    } catch (error) {
      console.error(error)
      const errorMessages = {
        'storage/unauthorized': "Користувач не має права доступу до об'єкта.",
        'storage/canceled': 'Користувач скасував завантаження.',
        'storage/unknown': 'Сталася невідома помилка під час завантаження.'
      }
      const errorMessage =
        errorMessages[error.code] || 'Не вдалося завантажити файл.'
      throw new Error(errorMessage)
    }
  }

  async DeleteFileInFirebaseStorage (folderPath, fileName) {
    try {
      const fileRef = ref(storage, `${folderPath}/${fileName}`)
      await deleteObject(fileRef)
    } catch (error) {
      const errorMessages = {
        'storage/object-not-found':
          'Цей файл не знайдено. Можливо він вже був видалений.',
        'storage/unauthorized': 'Ви не маєте доступу до цього файлу.',
        'storage/canceled': 'Операцію видалення скасовано.',
        'storage/unknown': 'Сталася невідома помилка при видаленні файлу.'
      }
      const errorMessage =
        errorMessages[error.code] || 'Не вдалося видалити файл зі сховища.'
      throw new Error(errorMessage)
    }
  }

  async DeleteFolderInFirebaseStorage (folderPath) {
    const errorMessages = {
      'storage/object-not-found':
        'Цей файл не знайдено. Можливо він вже був видалений.',
      'storage/unauthorized': 'Ви не маєте доступу до цього файлу.',
      'storage/canceled': 'Операцію видалення скасовано.',
      'storage/unknown': 'Сталася невідома помилка при видаленні файлу.'
    }

    try {
      const folderRef = ref(storage, folderPath)
      const result = await listAll(folderRef)

      const deletePromises = result.items.map(async fileRef => {
        try {
          await deleteObject(fileRef)
        } catch (error) {
          console.error('Error deleting file:', error)
          const errorMessage = errorMessages[error.code] || 'Не вдалося видалити файл зі сховища.'
          throw new Error(errorMessage)
        }
      })

      // Add recursive call for each subdirectory.
      const subdirectoryPromises = result.prefixes.map(async subdirectoryRef => {
        try {
          await this.DeleteFolderInFirebaseStorage(subdirectoryRef.fullPath)
        } catch (error) {
          console.error('Error deleting subdirectory:', error)
          const errorMessage = errorMessages[error.code] || 'Сталася невідома помилка при видаленні папки.'
          throw new Error(errorMessage)
        }
      })

      await Promise.all([...deletePromises, ...subdirectoryPromises])
    } catch (error) {
      const errorMessage = errorMessages[error.code] || 'Сталася невідома помилка при видаленні папки.'
      throw new Error(errorMessage)
    }
  }

  async GetMetadataFile (folderPath, fileName) {
    try {
      const fileRef = ref(storage, `${folderPath}/${fileName}`)
      getMetadata(fileRef).then((metadata) => {})
    } catch (error) {
      const errorMessages = {
        'storage/object-not-found': 'Файл не знайдено. Метадані',
        'storage/unauthorized': 'Ви не маєте доступу до цього файлу.',
        'storage/canceled': 'Операцію скасовано.',
        'storage/unknown':
          'Сталася невідома помилка при виклику метаданих файла.'
      }
      const errorMessage =
        errorMessages[error.code] || 'Не вдалося викликати метадані файла.'
      throw new Error(errorMessage)
    }
  }

  async GetListAll (folderPath) {
    try {
      const listRef = ref(storage, folderPath)
      const result = await listAll(listRef)
      result.prefixes.forEach((folderRef) => {
        // Do something with the folder reference
      })
      result.items.forEach((itemRef) => {
        // Do something with the item reference
      })
      return result
    } catch (error) {
      console.error(error)
      const errorMessages = {
        'storage/object-not-found': 'Об`єкт не знайдено',
        'storage/unauthorized': 'Користувач не має права доступу до об`єкта',
        'storage/canceled': 'Користувач скасував операцію',
        'storage/unknown': 'Сталася невідома помилка'
      }
      const errorMessage =
        errorMessages[error.code] || 'Сталася помилка при завантаженні списку'
      throw new Error(errorMessage)
    }
  }
  /*
  async GetList (folderPath) {
    const listRef = ref(storage, folderPath)
    const firstPage = await list(listRef, { maxResults: 100 })

    if (firstPage.nextPageToken) {
      const secondPage = await list(listRef, {
        maxResults: 100,
        pageToken: firstPage.nextPageToken
      })
    }
  }
*/
}
