<template>
  <card :title="title" :isLoading="isLoading">
    <template #tools>
      <button
        class="btn btn-block btn-secondary"
        v-if="CurrentComponent.name == 'add-hall-form'"
        @click="SetCurrentComponent()"
      >
        Повернутися до створення кінотеатра
      </button>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          v-for="language in languages"
          :key="language.id"
          class="btn btn-secondary"
          :class="{
            active: language.checked,
            'is-invalid':
              v$.languages[language.value].$error || v$.changeHall[language.value].$error
          }"
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
        <component
          :is="CurrentComponent"
          :hallData="changeHall[currentLanguage.value]"
          @resetHall="ResetHall"
          @resetCinema="ResetCinema"
          @saveHall="SaveHall"
          @hallData="HallUpdate"
          v-model="currentLanguage.data"
          @open="OpenHall"
          @deleteHall="DeleteHall"
        ></component>
      </form>
    </template>
    <template #footer> </template>
  </card>
</template>

<script>
import { cinemasUaCollectionRef, cinemasEnCollectionRef } from '@/js/collections.js'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { CloudFirestore } from '@/js/cloudFirestore'
import card from '@/components/UI/card-component.vue'
import AddCinemaForm from '@/components/cinema-page/add-cinema-form.vue'
import { CloudStorage } from '@/js/cloudStorage'
import AddHallForm from '@/components/cinema-page/add-hall-form.vue'
import { GenerateID } from '@/components/baners-page/add-file'
import toastr from 'toastr'
import { markRaw } from 'vue'
import { DateTime } from 'luxon'

export default {
  components: {
    card,
    AddCinemaForm
  },
  setup () {
    const v$ = useVuelidate()
    return { v$ }
  },
  data () {
    return {
      validateLanguages: true,
      hallDeleteList: [],
      hallId: 0,
      changeHall: {},
      cloudFirestore: new CloudFirestore(),
      cloudStorage: new CloudStorage(),
      title: 'Кінотеатр',
      CurrentComponent: markRaw(AddCinemaForm),
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
            condition: '',
            logoImg: {},
            topBannerImg: {},
            galleryImg: [],
            listHalls: [],
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
            condition: '',
            logoImg: {},
            topBannerImg: {},
            galleryImg: [],
            listHalls: [],
            seo: {},
            listDeleteImages: []
          }
        }
      }
    }
  },
  validations: {
    changeHall: {
      Ua: {
        name: { required },
        description: { required },
        schemeHallImg: { required },
        topBannerImg: { required },
        galleryImg: { required }
      },
      En: {
        name: { required },
        description: { required },
        schemeHallImg: { required },
        topBannerImg: { required },
        galleryImg: { required }
      }
    },

    languages: {
      Ua: {
        data: {
          name: { required },
          description: { required },
          condition: { required },
          logoImg: { required },
          listHalls: { required },
          topBannerImg: { required },
          galleryImg: { required }
        }
      },
      En: {
        data: {
          name: { required },
          description: { required },
          condition: { required },
          logoImg: { required },
          listHalls: { required },
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
      if (this.$route.params.cinemaId !== 'New_Cinema') {
        return this.$route.params.cinemaId
      } else {
        return GenerateID()
      }
    }
  },
  created () {
    this.GetCinema(this.languages.Ua)
    this.GetCinema(this.languages.En)
  },
  methods: {
    SetCurrentComponent () {
      this.v$.changeHall.$reset()
      this.CurrentComponent = markRaw(AddCinemaForm)
    },
    async SaveHall (id) {
      if (await this.v$.changeHall.$validate()) {
        this.changeHall.Ua.dateCreate = DateTime.now().toFormat('dd.LL.yyyy')
        this.changeHall.En.dateCreate = DateTime.now().toFormat('dd.LL.yyyy')
        if (this.languages.En.data.listHalls.some((element) => element.id === id)) {
          const index = this.languages.Ua.data.listHalls.findIndex((element) => element.id === id)
          this.languages.Ua.data.listHalls[index] = this.changeHall.Ua
          this.languages.En.data.listHalls[index] = this.changeHall.En
        } else {
          this.languages.Ua.data.listHalls.push(this.changeHall.Ua)
          this.languages.En.data.listHalls.push(this.changeHall.En)
        }
        this.CurrentComponent = markRaw(AddCinemaForm)
        toastr.success('Зал успішно збережено')
      } else {
        toastr.warning('Заповніть всі дані')
      }
    },
    ResetHall (id) {
      this.changeHall[this.currentLanguage.value] = this.languages[
        this.currentLanguage.value
      ].data.listHalls.find((item) => item.id === id)
      toastr.warning('Дані скинуто')
    },
    HallUpdate (data) {
      this.changeHall[this.currentLanguage.value] = data
    },
    DeleteHall (id) {
      console.log(id)
      this.languages.Ua.data.listHalls = this.languages.Ua.data.listHalls.filter(
        (hall) => hall.id !== id
      )
      this.languages.En.data.listHalls = this.languages.En.data.listHalls.filter(
        (hall) => hall.id !== id
      )
      this.hallDeleteList.push(id)
    },
    OpenHall (id) {
      console.log(id)
      if (id !== 'New_Hall') {
        this.changeHall.En = this.languages.En.data.listHalls.find((item) => item.id === id)
        this.changeHall.Ua = this.languages.Ua.data.listHalls.find((item) => item.id === id)
      } else {
        this.changeHall.En = {
          id: GenerateID(),
          name: '',
          description: '',
          schemeHallImg: {},
          topBannerImg: {},
          galleryImg: [],
          seo: {}
        }
        this.changeHall.Ua = {
          id: GenerateID(),
          name: '',
          description: '',
          schemeHallImg: {},
          topBannerImg: {},
          galleryImg: [],
          seo: {}
        }
      }
      this.CurrentComponent = markRaw(AddHallForm)
    },
    GetCinema (language) {
      this.cloudFirestore
        .getDocument(language.collection, this.$route.params.cinemaId)
        .then((document) => {
          if (document) {
            Object.assign(language.data, document)
          } else if (this.$route.params.cinemaId !== 'New_Cinema') {
            this.$router.push('/Cinemas')
          }
        })
    },
    GetHall (language) {
      this.cloudFirestore
        .getDocument(language.collection, this.$route.params.cinemaId)
        .then((document) => {
          if (document) {
            Object.assign(language.data.listHalls, document.listHalls)
          } else if (this.$route.params.cinemaId !== 'New_Cinema') {
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
    async AddFirebaseData (data, collection) {
      const docData = await {
        fileName: this.id,
        name: data.name,
        description: data.description,
        condition: data.condition,
        logoImg: data.logoImg,
        topBannerImg: data.topBannerImg,
        galleryImg: data.galleryImg,
        listHalls: data.listHalls,
        seo: data.seo
      }
      await this.cloudFirestore.AddDocument(collection, this.id, docData)
    },
    async ResetCinema () {
      this.isLoading = true
      await this.GetCinema(this.currentLanguage)
      await this.GetHall(this.languages.Ua)
      await this.GetHall(this.languages.En)
      toastr.success('Дані успішно скинуто')
      this.isLoading = false
    },
    async Save () {
      this.isLoading = true
      if (await this.v$.languages.$validate()) {
        for (const id of this.hallDeleteList) {
          await this.cloudStorage.DeleteFolderInFirebaseStorage(`cinemas/En/${this.id}/${id}`)
          await this.cloudStorage.DeleteFolderInFirebaseStorage(`cinemas/Ua/${this.id}/${id}`)
          this.hallDeleteList = []
        }

        // Видалення картинок
        await this.DeleteFirebaseImages(
          this.languages.Ua.data.listDeleteImages,
          `cinemas/${this.languages.Ua.value}/${this.id}`
        )
        this.languages.Ua.data.listDeleteImages = []

        for (const hall of this.languages.Ua.data.listHalls) {
          await this.DeleteFirebaseImages(
            hall.listDeleteImages,
            `cinemas/${this.languages.Ua.value}/${this.id}/${hall.id}`
          )
          hall.listDeleteImages = []
        }
        // Збереження Укр кінотеатр
        await this.AddFirebaseImage(
          this.languages.Ua.data.logoImg,
          `cinemas/${this.languages.Ua.value}/${this.id}`
        )
        await this.AddFirebaseImage(
          this.languages.Ua.data.topBannerImg,
          `cinemas/${this.languages.Ua.value}/${this.id}`
        )
        await this.AddFirebaseImages(
          this.languages.Ua.data.galleryImg,
          `cinemas/${this.languages.Ua.value}/${this.id}`
        )

        for (const hall of this.languages.Ua.data.listHalls) {
          await this.AddFirebaseImage(
            hall.schemeHallImg,
            `cinemas/${this.languages.Ua.value}/${this.id}/${hall.id}`
          )
        }
        for (const hall of this.languages.Ua.data.listHalls) {
          await this.AddFirebaseImage(
            hall.topBannerImg,
            `cinemas/${this.languages.Ua.value}/${this.id}/${hall.id}`
          )
        }
        for (const hall of this.languages.Ua.data.listHalls) {
          await this.AddFirebaseImages(
            hall.galleryImg,
            `cinemas/${this.languages.Ua.value}/${this.id}/${hall.id}`
          )
        }
        await this.AddFirebaseData(this.languages.Ua.data, cinemasUaCollectionRef)

        // Збереження Анг кінотеатр
        await this.DeleteFirebaseImages(
          this.languages.En.data.listDeleteImages,
          `cinemas/${this.languages.En.value}/${this.id}`
        )
        this.languages.En.data.listDeleteImages = []
        for (const hall of this.languages.Ua.data.listHalls) {
          await this.DeleteFirebaseImages(
            hall.listDeleteImages,
            `cinemas/${this.languages.Ua.value}/${this.id}/${hall.id}`
          )
          hall.listDeleteImages = []
        }

        await this.AddFirebaseImage(
          this.languages.En.data.logoImg,
          `cinemas/${this.languages.En.value}/${this.id}`
        )
        await this.AddFirebaseImage(
          this.languages.En.data.topBannerImg,
          `cinemas/${this.languages.En.value}/${this.id}`
        )
        await this.AddFirebaseImages(
          this.languages.En.data.galleryImg,
          `cinemas/${this.languages.En.value}/${this.id}`
        )

        for (const hall of this.languages.En.data.listHalls) {
          await this.AddFirebaseImage(
            hall.schemeHallImg,
            `cinemas/${this.languages.En.value}/${this.id}/${hall.id}`
          )
        }
        for (const hall of this.languages.En.data.listHalls) {
          await this.AddFirebaseImage(
            hall.topBannerImg,
            `cinemas/${this.languages.En.value}/${this.id}/${hall.id}`
          )
        }
        for (const hall of this.languages.En.data.listHalls) {
          await this.AddFirebaseImages(
            hall.galleryImg,
            `cinemas/${this.languages.En.value}/${this.id}/${hall.id}`
          )
        }
        await this.AddFirebaseData(this.languages.En.data, cinemasEnCollectionRef)
        toastr.success('Дані успішно збережено')
      } else {
        toastr.warning('Введіть всі дані')
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
  &.active {
    border: 1px solid rgb(173, 0, 0) !important;
    background: rgb(114, 6, 6) !important;
  }
}
</style>
