<template>
  <table-component
    title="Список новин"
    :isLoading="isLoading"
    v-model="table"
    @delete="Delete"
    @updateList="UpdateLIst"
  ></table-component>
  <modal-component v-model="showWarning" :id="deleteElement" @delete="DeleteFile"></modal-component>
</template>

<script>
import { newsEnCollectionRef, newsUaCollectionRef } from '@/js/collections.js'
import tableComponent from './table-component.vue'
import { CloudFirestore } from '@/js/cloudFirestore'
import { CloudStorage } from '@/js/cloudStorage'
import ModalComponent from '@/pages/modal-component.vue'
export default {
  components: {
    tableComponent,
    ModalComponent
  },
  data () {
    return {
      isLoading: false,
      cloudFirestore: new CloudFirestore(),
      cloudStorage: new CloudStorage(),
      deleteElement: '',
      showWarning: false,
      table: {
        thead: ['Назва', 'Дата створення', 'Статус', 'Управління'],
        tbody: []
      }
    }
  },
  created () {
    this.GetList()
  },
  methods: {
    Delete (id) {
      this.deleteElement = id
      this.showWarning = true
    },
    UpdateLIst () {
      this.GetList()
    },
    async DeleteFile (fileName) {
      this.isLoading = true
      this.deleteElement = fileName
      console.log(fileName)
      this.showWarning = true
      await this.cloudStorage.DeleteFolderInFirebaseStorage(`News/En/${fileName}`)
      await this.cloudStorage.DeleteFolderInFirebaseStorage(`News/Ua/${fileName}`)
      await this.cloudFirestore.DeleteDocument(newsEnCollectionRef, fileName)
      await this.cloudFirestore.DeleteDocument(newsUaCollectionRef, fileName)
      this.GetList()
      this.isLoading = false
    },
    async GetList () {
      try {
        this.isLoading = true
        const result = await this.cloudFirestore.GetAllDocuments(newsEnCollectionRef)
        this.table.tbody = result.docs.map((doc) => doc.data())
        this.isLoading = false
      } catch (error) {
        console.error('Error getting documents: ', error)
      }
    }
  }
}
</script>

<style></style>
