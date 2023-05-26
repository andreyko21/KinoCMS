import { getDocs } from 'firebase/firestore'
import { GenerateID } from '@/components/baners-page/add-file'
import { CloudFirestore } from './cloudFirestore'
import { CloudStorage } from './cloudStorage'

const cloudFirestore = new CloudFirestore()
const cloudStorage = new CloudStorage()

export class Firebase {
  Delete (Arr, id, removArr, eOne) {
    if (eOne === true) {
      removArr.push(id)
      Arr.splice(0, 1, { id: null })
    } else if (id > 0 && Arr.length > 1) {
      const index = Arr.findIndex((element) => element.id === id)
      if (index !== -1) {
        if (Arr[index].link !== null) {
          removArr.push(id)
        }
        Arr.splice(index, 1)
      }
    }
  }

  AddImageFile (event, Arr, id, eOne) {
    const files = event.target.files
    const index = Arr.length - 1
    if (id === null && files.length > 0) {
      if (eOne === true) {
        const file = files[files.length - 1]
        Arr.splice(index, 1, {
          id: `${GenerateID()}${0}`,
          src: URL.createObjectURL(file)
        })
      } else {
        for (let i = files.length - 1; i >= 0; i--) {
          const file = files[i]
          Arr.splice(index, 0, {
            id: `${GenerateID()}${i}`,
            src: URL.createObjectURL(file)
          })
        }
      }
    } else if (files.length === 1) {
      const index = Arr.findIndex((element) => element.id === id)
      if (index !== -1 && index !== Arr.length) {
        Arr.splice(index, 1, {
          src: URL.createObjectURL(files[0]),
          id: id
        })
      }
    }
  }

  async UpdateData (Arr, collectionRef, isLoading) {
    isLoading = true
    try {
      Arr = [{ id: null }]
      const querySnapshot = await getDocs(collectionRef)
      querySnapshot.forEach((doc) => {
        const newItem = {
          link: doc.data().link,
          id: doc.id,
          urls: doc.data().urls,
          text: doc.data().text
        }
        const existingItemIndex = Arr.findIndex(
          (item) => item.id === newItem.id
        )
        if (existingItemIndex === -1) {
          Arr.splice(Arr.length - 1, 0, newItem)
        } else {
          Arr[existingItemIndex] = newItem
        }
      })

      Arr.sort((a, b) => {
        if (a.id !== null && b.id !== null) {
          return a.id - b.id
        } else if (a.id === null && b.id !== null) {
          return 1
        } else if (a.id !== null && b.id === null) {
          return -1
        } else {
          return 0
        }
      })
    } catch (error) {
      console.log(error)
    }
    isLoading = false
  }

  async SetParameters (collectionRef, options) {
    if (options) {
      const docData = {}
      for (const key in options) {
        docData[key] = options[key]
      }
      cloudFirestore.AddDocument(collectionRef, 'params', docData)
    }
  }

  async AddImg (dataSend, collectionRef, eText, eUrls) {
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
        await cloudFirestore.AddDocument(collectionRef, dataSend[i], docData)
      }
    }
  }

  async DeleteFilesToDataBase (arrFiles, fileFolderPath, dataCollectionRef) {
    if (arrFiles.length) {
      for (let i = 0; i < arrFiles.length; i++) {
        cloudStorage.DeleteFileInFirebaseStorage(fileFolderPath, arrFiles[i])
        cloudFirestore.DeleteDocument(dataCollectionRef, arrFiles[i])
      }
    }
  }

  async AddFilesToDataBase (files, folderPath, dataCollectionRef, eText, eUrls) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      if (file.id != null && file.src != null) {
        file.link = await cloudStorage.UploadFile(folderPath, file)
      }
    }
    cloudFirestore.AddImgDocument(files, dataCollectionRef, eText, eUrls)
  }
}
