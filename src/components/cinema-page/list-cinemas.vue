<template>
  <card-component class="card-dark" :title="title" :isLoading="isLoading">
    <template #tools> <button class="button-add" @click="OpenCinema('New_Cinema')"><i class="fas fa-plus-circle"></i></button></template>
    <template #body>
  <div class="list d-inline-block">
  <div v-for="cinema in cinemasList" class="d-inline-block" :key="cinema.id">
    <div class="item">
     <div class="image-wrapper">
      <button class="btn change-img" type="button" @click="OpenCinema(cinema.fileName)">
                <span>Змінити</span>
              </button>
      <button
                class="btn del-img"
                type="button"
                @click="Delete(cinema.fileName)"
              >
                <span>Видалити</span>
              </button>
    <img class="img" :src="cinema.logoImg.link" alt="film.imgAlt" />
  </div>
    <p>{{ cinema.name }}</p>
  </div>
  </div>
</div>
<modal-component v-model="showWarning" :id="deleteCinemaName" @delete="DeleteCinema"></modal-component>
</template>
  </card-component>
  </template>

<script>
import { cinemasEnCollectionRef, cinemasUaCollectionRef } from '@/js/collections.js'
import cardComponent from '../UI/card-component.vue'
import { CloudStorage } from '@/js/cloudStorage'
import { CloudFirestore } from '@/js/cloudFirestore'
import ModalComponent from '@/pages/modal-component.vue'
export default {
  components: {
    cardComponent,
    ModalComponent
  },
  data () {
    return {
      isLoading: false,
      cinemasList: [],
      cloudFirestore: new CloudFirestore(),
      cloudStorage: new CloudStorage(),
      deleteCinemaName: '',
      showWarning: false
    }
  },
  props: {
    param: String,
    title: String
  },
  created () {
    this.GetCinemas()
  },
  methods: {
    OpenCinema (id) {
      this.$router.push(`Cinemas/${id}`)
    },
    Delete (cinemaFileName) {
      this.deleteCinemaName = cinemaFileName
      this.showWarning = true
    },
    async DeleteCinema (cinemaFileName) {
      this.isLoading = true
      this.deleteCinemaName = cinemaFileName
      console.log(cinemaFileName)
      this.showWarning = true
      await this.cloudStorage.DeleteFolderInFirebaseStorage(`cinemas/En/${cinemaFileName}`)
      await this.cloudStorage.DeleteFolderInFirebaseStorage(`cinemas/Ua/${cinemaFileName}`)
      await this.cloudFirestore.DeleteDocument(cinemasEnCollectionRef, cinemaFileName)
      await this.cloudFirestore.DeleteDocument(cinemasUaCollectionRef, cinemaFileName)
      this.GetCinemas()
      this.isLoading = false
    },
    async GetCinemas () {
      try {
        const result = await this.cloudFirestore.GetAllDocuments(cinemasEnCollectionRef)
        this.cinemasList = result.docs.map(doc => doc.data())
      } catch (error) {
        console.error('Error getting documents: ', error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.button-add{
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  .fa-plus-circle{
    color: green;
  }
}
.list{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  .image-wrapper {
  background: gray;

  .change-img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  opacity: 0;
  color: #fff;
  &:hover {
    opacity: 1;
    background: rgba($color: #000000, $alpha: 0.5);
  }
}
  .del-img {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  opacity: 0;
  color: rgb(0, 0, 0);
  &:hover {
    opacity: 1;
    background: rgba($color: #fc6c6c, $alpha: 0.5);
  }
}
}
}

.item{
  width: 100%;
  max-width: 200px;
  height: 0;
  padding-bottom: 200px;
  position: relative;
}

.img{
  width: 200px;
  height: 200px;
}
</style>
