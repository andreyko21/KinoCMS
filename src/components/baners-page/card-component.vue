<template>
    <div class="card card-gray-dark mt-lg-3">
        <div class="card-header">

            <div class="card-tools">
                <button type="button" class="btn btn-tool" @click="UpdateLIst">
                    <i class="fas fa-sync-alt"></i>
                </button>
            </div>
        </div>
        <div class="card-body all-carts">
            <addImgCard :elementImgCard="item" @setText="SetText" @setUrl="SetUrl" @chooseFiles="chooseFiles"
                @RemoveImg="RemoveImg" v-for="item in itemsList" :key="item.id" class="imgCard">
            </addImgCard>
            <div class="custom-file position-absolute w-0 h-0">
                <input type="file" class="custom-file-input" ref="inputGroupFile" multiple @change="onFileChange">
            </div>
        </div>

        <span class="btn  btn-xs btn-success col fileinput-button" @click="UpdateDataBase()">
            <span v-if="isLoading">
                Загрузка...
            </span>
            <span v-else>Зберегти</span>
        </span>

    </div>
</template>

<script>
import { getDocs } from 'firebase/firestore'
import addImgCard from '@/components/baners-page/card-img.vue'
import { AddFilesToDataBase, DeleteFilesToDataBase } from '@/js/updateDataBase'
import { GenerateID, collectionRef } from '@/components/baners-page/add-file'
import { currentUser } from '@/main'

export default {
  data () {
    return {
      itemsList: [{ src: null, urls: null, text: null, id: null }],
      removeList: [],
      id: 0,
      isLoading: false
    }
  },
  components: {
    addImgCard
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
    chooseFiles (id) {
      this.$refs.inputGroupFile.click()
      this.id = id
      console.log(currentUser)
    },
    onFileChange (event) {
      const files = event.target.files
      const index = this.itemsList.length - 1
      if ((this.id === null && files.length > 0)) {
        for (let i = files.length - 1; i >= 0; i--) {
          const file = files[i]
          if (!this.itemsList.find(item => item.name === file.name && item.size === file.size)) {
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
        const index = this.itemsList.findIndex(element => element.id === this.id)
        if (index !== -1 && index !== this.itemsList.length - 1) {
          if (!this.itemsList.find(item => item.name === files[0].name && item.size === files[0].size)) {
            this.itemsList.splice(index, 1, { src: URL.createObjectURL(files[0]), urls: null, text: null, id: this.id, name: files[0].name, size: files[0].size })
          }
        }
      }
      this.$refs.inputGroupFile.value = ''
    },
    RemoveImg (id) {
      if ((id !== null || id !== undefined) && this.itemsList.length > 1) {
        const index = this.itemsList.findIndex((element) => element.id === id)
        if (index !== -1) {
          if (this.itemsList[index].link !== null) {
            this.removeList.push(id)
            console.log(this.removeList)
            console.log(id)
          }
          this.itemsList.splice(index, 1)
          console.log(this.itemsList)
        }
      }
    },
    SetText (text, id) {
      const index = this.itemsList.findIndex(element => element.id === id)
      this.itemsList[index].text = text
    },
    SetUrl (urls, id) {
      const index = this.itemsList.findIndex(element => element.id === id)
      this.itemsList[index].urls = urls
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

          const existingItemIndex = this.itemsList.findIndex((item) => item.id === newItem.id)
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
      console.log('isLoading after:', this.isLoading)
    }
  }
}
</script>

<style>
.imgCard {
    width: 100%;
    height: 100%;
}

.all-carts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    overflow: hidden;
}

.custom-file {
    max-width: 0px;
    max-height: 0px;
}
</style>
