import { getDocs } from 'firebase/firestore'
import addImgCard from '@/components/baners-page/card-img.vue'
import { AddFilesToDataBase, DeleteFilesToDataBase } from '@/js/updateDataBase'
import { GenerateID, collectionRef } from '@/components/baners-page/add-file'
import OnMainTop from '@/components/baners-page/onMainTop/onMainTop.vue'
import card from '@/components/UI/card-component.vue'
import ImgCard from '../img-card.vue'
import { Delete } from '@/js/cards'
export default {
  data () {
    return {
      itemsList: [{ id: null }],
      removeList: [],
      isLoading: false,
      id: 0
    }
  },
  components: {
    addImgCard,
    OnMainTop,
    card,
    ImgCard
  },
  props: {
    title: {
      type: String
    }
  },
  created () {
    this.UpdateLIst()
  },
  methods: {
    SelectFiles (id) {
      this.$refs.inputGroupFile.click()
      this.id = id
    },
    CreateData (event) {
      const files = event.target.files
      const index = this.itemsList.length - 1
      if (this.id === null && files.length > 0) {
        for (let i = files.length - 1; i >= 0; i--) {
          const file = files[i]
          if (
            !this.itemsList.find(
              (item) => item.name === file.name && item.size === file.size
            )
          ) {
            console.log(file)
            this.itemsList.splice(index, 0, {
              id: `${GenerateID()}${i}`,
              src: URL.createObjectURL(file),
              name: file.name,
              size: file.size
            })
          }
        }
      } else if (files.length === 1) {
        const index = this.itemsList.findIndex(
          (element) => element.id === this.id
        )
        if (index !== -1 && index !== this.itemsList.length - 1) {
          if (
            !this.itemsList.find(
              (item) =>
                item.name === files[0].name && item.size === files[0].size
            )
          ) {
            this.itemsList.splice(index, 1, {
              src: URL.createObjectURL(files[0]),
              urls: null,
              text: null,
              id: this.id,
              name: files[0].name,
              size: files[0].size
            })
          }
        }
      }
      this.$refs.inputGroupFile.value = ''
    },
    ChangeText (text, id) {
      const index = this.itemsList.findIndex((element) => element.id === id)
      this.itemsList[index].text = text
    },
    ChangeURL (urls, id) {
      const index = this.itemsList.findIndex((element) => element.id === id)
      this.itemsList[index].urls = urls
    },
    DeleteElement (id) {
      Delete(this.itemsList, id, this.removeList)
    },
    UpdateDataBase () {
      DeleteFilesToDataBase(this.removeList)
      AddFilesToDataBase(this.itemsList)
      this.removeList = []
    },
    async UpdateLIst () {
      this.isLoading = true
      try {
        this.itemsList = [{ src: null, urls: null, text: null, id: null }]
        const querySnapshot = await getDocs(collectionRef)
        querySnapshot.forEach((doc) => {
          const newItem = {
            text: doc.data().text,
            urls: doc.data().urls,
            link: doc.data().link,
            name: doc.data().name,
            size: doc.data().size,
            src: null,
            id: doc.id
          }

          const existingItemIndex = this.itemsList.findIndex(
            (item) => item.id === newItem.id
          )
          if (existingItemIndex === -1) {
            this.itemsList.splice(this.itemsList.length - 1, 0, newItem)
          } else {
            this.itemsList[existingItemIndex] = newItem
          }
        })

        this.itemsList.sort((a, b) => {
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
      this.isLoading = false
    }
  }
}
