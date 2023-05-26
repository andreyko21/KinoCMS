<template>
  <card-component class="card-dark" :title="title">
    <template #tools> <button class="button-add" @click="OpenFilm('New_Film')"><i class="fas fa-plus-circle"></i></button></template>
    <template #body>
  <div class="list d-inline-block">
  <div v-for="film in filmsList" class="d-inline-block" :key="film.id">
    <div class="item ">
     <div class="image-wrapper">
      <button class="btn change-img" type="button" @click="OpenFilm(film.fileName)">
                <span>Змінити</span>
              </button>
      <button
                class="btn del-img"
                type="button"
                @click="Delete(film.fileName)"
              >
                <span>Видалити</span>
              </button>
    <img class="img" :src="film.mainPicture.link" :alt="film.imgAlt" />
  </div>
    <p>{{ film.filmName }}</p>
  </div>
  </div>
</div>
<modal-component v-model="showWarning" :id="deleteFilmName" @delete="DeleteFilm"></modal-component>
</template>
  </card-component>
  </template>

<script>
import cardComponent from '../UI/card-component.vue'
import { where } from 'firebase/firestore'
import { filmsEnCollectionRef, filmsUaCollectionRef } from '@/js/collections'
import { CloudStorage } from '@/js/cloudStorage'
import { CloudFirestore } from '@/js/cloudFirestore'
import { DateTime } from 'luxon'
import ModalComponent from '@/pages/modal-component.vue'
export default {
  components: {
    cardComponent,
    ModalComponent
  },
  data () {
    return {
      filmsList: [],
      cloudFirestore: new CloudFirestore(),
      cloudStorage: new CloudStorage(),
      deleteFilmName: '',
      showWarning: false
    }
  },
  props: {
    param: String,
    title: String
  },
  created () {
    this.GetFilm()
  },
  methods: {
    OpenFilm (id) {
      this.$router.push(`Films/${id}`)
    },
    Delete (id) {
      this.deleteFilmName = id
      this.showWarning = true
    },
    async DeleteFilm (id) {
      this.deleteFilmName = id
      this.showWarning = true
      await this.cloudStorage.DeleteFolderInFirebaseStorage(`films/En/${id}`)
      await this.cloudStorage.DeleteFolderInFirebaseStorage(`films/Ua/${id}`)
      await this.cloudFirestore.DeleteDocument(filmsUaCollectionRef, id)
      await this.cloudFirestore.DeleteDocument(filmsEnCollectionRef, id)
      this.filmsList = this.filmsList.filter(image => image.id !== id)
    },
    async GetFilm () {
      this.ListDeleteImages = []
      try {
        const result = await this.cloudFirestore.GetFilteredDocuments(filmsEnCollectionRef, where('releaseDate', this.param, DateTime.now().toFormat('yyyy-LL-dd')))
        this.filmsList = result.docs.map(doc => doc.data())
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
