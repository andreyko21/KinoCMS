<template>
  <div class="grid-cards">
    <img-card
      :text="eText"
      :urls="eUrls"
      :elementData="item"
      :sizeImg="sizeImg"
      v-for="item in itemsList"
      :key="item.id"
      @SelectFiles="SelectFiles"
      @DeleteElement="DeleteElement"
      @ChangeURL="ChangeURL"
      @ChangeText="ChangeText"
    ></img-card>
  </div>
  <div class="custom-file position-absolute w-0 h-0">
    <input
      type="file"
      class="custom-file-input"
      ref="inputGroupFile"
      multiple
      @change="CreateData"
    />
  </div>
</template>

<script>
import { Firebase } from '@/js/firebase'
import imgCard from '../baners-page/img-card.vue'
import { getDocs } from 'firebase/firestore'
export default {
  data () {
    return {
      removeList: [],
      id: 0,
      itemsList: [],
      functionality: true,
      time: 0,
      firebase: new Firebase()
    }
  },
  components: {
    imgCard
  },
  emits: ['isLoading'],
  props: {
    eOne: {
      type: Boolean,
      default: false
    },
    eText: {
      type: Boolean,
      default: false
    },
    eUrls: {
      type: Boolean,
      default: false
    },
    eTime: {
      type: Boolean,
      default: false
    },
    eFunctionality: {
      type: Boolean,
      default: false
    },
    fileFolderPath: {
      type: String
    },
    collectionRef: {
      type: Object
    },
    saveListImgTriger: {
      type: Boolean
    },
    updateListImgTriger: {
      type: Boolean
    },
    sizeImg: {
      type: String,
      default: '1000x190'
    }
  },
  created () {
    this.UpdateList()
  },
  methods: {
    SelectFiles (id) {
      this.$refs.inputGroupFile.click()
      this.id = id
    },
    CreateData (event) {
      this.firebase.AddImageFile(event, this.itemsList, this.id, this.eOne)
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
      this.firebase.Delete(this.itemsList, id, this.removeList, this.eOne)
    },
    async UpdateDataBase () {
      this.$emit('isLoading', true)
      try {
        await this.firebase.DeleteFilesToDataBase(
          this.removeList,
          this.fileFolderPath,
          this.collectionRef
        )
        await this.firebase.AddFilesToDataBase(
          this.itemsList,
          this.fileFolderPath,
          this.collectionRef,
          this.eText,
          this.eUrls
        )
        this.removeList = []
      } catch (error) {
        console.log(error)
      }
      this.$emit('isLoading', false)
    },
    async UpdateList () {
      this.$emit('isLoading', true)
      try {
        if (!this.eOne) {
          this.itemsList = [{ src: null, urls: null, text: null, id: null }]
        }
        const querySnapshot = await getDocs(this.collectionRef)
        querySnapshot.forEach((doc) => {
          if (doc.id !== 'params') {
            const newItem = {
              text: doc.data().text ? doc.data().text : null,
              urls: doc.data().urls ? doc.data().urls : null,
              link: doc.data().link,
              id: doc.id
            }

            const existingItemIndex = this.itemsList.findIndex((item) => item.id === newItem.id)
            if (existingItemIndex === -1) {
              this.itemsList.splice(this.itemsList.length - 1, 0, newItem)
            } else {
              this.itemsList[existingItemIndex] = newItem
            }
          }
        })
        if (this.eOne && this.itemsList.length === 0) {
          this.itemsList = [{ src: null, urls: null, text: null, id: null }]
        }
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
      this.$emit('isLoading', false)
    }
  },
  computed: {
    gridRows () {
      if (this.eOne) {
        return 4
      } else {
        return 4
      }
    }
  },
  watch: {
    updateListImgTriger: function () {
      this.UpdateList()
    },
    saveListImgTriger: function () {
      this.UpdateDataBase()
    }
  }
}
</script>

<style scoped>
.grid-cards {
  display: grid;
  grid-template-columns: repeat(v-bind(gridRows), 1fr);
  gap: 10px;
}
</style>
