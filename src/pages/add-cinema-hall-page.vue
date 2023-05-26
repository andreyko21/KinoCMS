<template>
  <card :title="title" :isLoading="isLoading">
    <template #tools>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          v-for="language in languages"
          :key="language.id"
          class="btn btn-secondary"
          :class="{ active: language.checked, 'is-invalid': v$.languages[language.value].$error }"
        >
          <input
            type="radio"
            name="options"
            :id="language.name"
            autocomplete="off"
            @click="changeLanguage(language)"
          />
          {{ language.name }}
        </label>
      </div>
    </template>
    <template #body>
      <form action="" @submit.prevent="Save">
      <add-hall-form v-model="currentLanguage.data"></add-hall-form>
      <button type="button" @click="ResetData()" v-if="$route.params.hallId !== 'New_Hall'" class="btn btn-xs btn-warning col fileinput-button">
      <span>Скинути зміни</span>
    </button>
      <button type="submit" class="btn btn-xs btn-success col fileinput-button">
      <span>Зберегти</span>
    </button>
    </form>
    </template>
    <template #footer>
    </template>
  </card>
</template>

<script>

import { setSharedData } from '@/components/cinema-page/cinema-bus'
import { cinemasUaCollectionRef, cinemasEnCollectionRef } from '@/js/collections.js'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { CloudFirestore } from '@/js/cloudFirestore'
import card from '@/components/UI/card-component.vue'
import addHallForm from '@/components/cinema-page/add-hall-form.vue'
import { CloudStorage } from '@/js/cloudStorage'
import { GenerateID } from '@/components/baners-page/add-file'
import toastr from 'toastr'

export default {
  components: {
    card,
    addHallForm
  },
  setup () {
    const v$ = useVuelidate()
    return { v$ }
  },
  data () {
    return {
      cloudFirestore: new CloudFirestore(),
      cloudStorage: new CloudStorage(),
      title: 'Зал',
      isLoading: false,
      languages: {
        Ua: {
          name: 'Українська',
          value: 'Ua',
          checked: false,
          collection: cinemasUaCollectionRef,
          data: {
            name: '',
            description: '',
            schemeHallImg: {},
            topBannerImg: {},
            galleryImg: [],
            seo: {},
            listDeleteImages: []
          }
        },
        En: {
          name: 'Англійська',
          value: 'En',
          checked: true,
          collection: cinemasEnCollectionRef,
          data: {
            name: '',
            description: '',
            schemeHallImg: {},
            topBannerImg: {},
            galleryImg: [],
            seo: {},
            listDeleteImages: []
          }
        }
      }
    }
  },
  validations: {
    languages: {
      Ua: {
        data: {
          name: { required },
          description: { required },
          schemeHallImg: { required },
          topBannerImg: { required },
          galleryImg: { required }
        }
      },
      En: {
        data: {
          name: { required },
          description: { required },
          schemeHallImg: { required },
          topBannerImg: { required },
          galleryImg: { required }
        }
      }
    }
  },
  computed: {
    currentLanguage () {
      if (this.languages.Ua.checked === true) {
        return this.languages.Ua
      } else {
        return this.languages.En
      }
    },
    id () {
      if (this.$route.params.hallId !== 'New_Hall') {
        return this.$route.params.hallId
      } else {
        return GenerateID()
      }
    }
  },
  created () {
    this.GetHall(this.languages.Ua)
    this.GetHall(this.languages.En)
  },
  methods: {
    GetHall (language) {
      this.cloudFirestore.getDocument(language.collection, this.$route.params.hallId).then((document) => {
        if (document) {
          Object.assign(language.data, document)
        } else if (this.$route.params.hallId !== 'New_Hall') {
          this.$router.push('/Cinemas')
        }
      })
    },
    changeLanguage (selectedLanguage) {
      if (this.languages.Ua.name === selectedLanguage.name) {
        this.languages.Ua.checked = true
        this.languages.En.checked = false
      } else {
        this.languages.Ua.checked = false
        this.languages.En.checked = true
      }
    },
    async DeleteFirebaseImages (listDeleteImages, path) {
      if (listDeleteImages !== undefined && listDeleteImages.length > 0) {
        for (const imageName of listDeleteImages) {
          await this.cloudStorage.DeleteFileInFirebaseStorage(path, imageName)
        }
        this.listDeleteImages = []
      }
    },
    async AddFirebaseImage (image, path) {
      if (image.src) {
        image.link = await this.cloudStorage.UploadFile(path, image)
        delete image.src
      } else {
        image = {}
      }
    },
    async AddFirebaseImages (imageList, path) {
      if (imageList && imageList.length) {
        for (let i = 0; i < imageList.length; i++) {
          const image = imageList[i]
          if (image.src) {
            image.link = await this.cloudStorage.UploadFile(path, image)
            delete image.src
          }
        }
      }
    },
    async  AddFirebaseData (data, collection) {
      const docData = await {
        fileName: this.id,
        name: data.name,
        description: data.description,
        logoImg: data.logoImg,
        topBannerImg: data.topBannerImg,
        galleryImg: data.galleryImg,
        listHalls: [],
        seo: data.seo
      }
      await this.cloudFirestore.AddDocument(collection, this.id, docData)
    },
    async ResetData () {
      this.isLoading = true
      await this.GetCinema(this.currentLanguage)
      toastr.success('Дані успішно скинуто')
      this.isLoading = false
    },
    async Save () {
      this.isLoading = true
      const data = { name: 'robert' }
      setSharedData(data)
      if (await this.v$.$validate()) {
        console.log('OK')
      }
      this.isLoading = false
    }
  }
}
</script>

<style scoped lang="scss">
.is-invalid {
  border: 1px solid rgb(129, 0, 0);
  border-radius: 5px;
  background: red;
  &.active{
    border: 1px solid rgb(173, 0, 0) !important;
    background: rgb(114, 6, 6) !important;
  }
}
</style>
