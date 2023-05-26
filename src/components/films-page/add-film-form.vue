<template>
  <form action="" @submit.prevent="Save">
    <input-component
      label="Назва фільма"
      id="filmName"
      type="text"
      placeholder="Введіть назву фільма"
      v-model="filmName"
      :error="v$.filmName.$error ? 'Поле є обовязковим' : ''"
    />
    <input-component
      class="mt-3"
      label="Дата виходу"
      id="releaseDate"
      type="date"
      placeholder="Введіть дату виходу"
      v-model="releaseDate"
      :error="v$.releaseDate.$error ? 'Поле є обовязковим' : ''"
    />
    <textarea-component
      class="mt-3"
      label="Опис"
      id="filmDescription"
      type="textarea"
      placeholder="Введіть опис фільма"
      v-model="filmDescription"
      :error="v$.filmDescription.$error ? 'Поле є обовязковим' : ''"
    />
    <img-component
      v-model="mainPicture"
      :class="{ 'is-invalid': v$.mainPicture.$error }"
      class="mt-3"
      @deleteMainPicture="delImage"
    ></img-component>
    <p v-if="v$.mainPicture.$error" class="error-message">Виберіть картинку</p>
    <imgs-component
      v-model="gallary"
      :class="{ 'is-invalid': v$.gallary.$error }"
      class="mt-3"
      @newImage="addImage"
      @delImage="delImage"
      @changeImage="changeImage"
    ></imgs-component>
    <p v-if="v$.gallary.$error" class="error-message">Виберіть картинку</p>
    <input-component
      class="mt-3"
      label="Силка на трейлер"
      id="trailerLink"
      type="text"
      placeholder="Введіть силку на трейлер в youtube..."
      v-model="trailerLink"
      :error="v$.trailerLink.$error ? 'Поле є обовязковим' : ''"
    />
    <div class="form-group mt-3 ml-1">
      <p><strong>Тип фільма</strong></p>
      <div class="row" :class="{ 'is-invalid': v$.typeFilm.$error }">
        <checkbox-component v-model="typeFilm['3D']" id="3D" label="3D"></checkbox-component>
        <checkbox-component v-model="typeFilm['2D']" id="2D" label="2D"></checkbox-component>
        <checkbox-component v-model="typeFilm.IMAX" id="IMAX" label="IMAX"></checkbox-component>
      </div>
      <p v-if="v$.typeFilm.$error" class="error-message">Виберіть тип фільма</p>
    </div>
    <seo-component v-model="SEO"></seo-component>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import inputComponent from '@/components/UI/input-component.vue'
import textareaComponent from '@/components/UI/textarea-component.vue'
import imgComponent from '@/components/UI/img-component.vue'
import imgsComponent from '@/components/UI/imgs-component.vue'
import checkboxComponent from '@/components/UI/checkbox-component.vue'
import SeoComponent from '@/components/seo-component.vue'
import { CloudStorage } from '@/js/cloudStorage'
import { CloudFirestore } from '@/js/cloudFirestore'
import toastr from 'toastr'
export default {
  components: {
    inputComponent,
    imgComponent,
    imgsComponent,
    checkboxComponent,
    SeoComponent,
    textareaComponent
  },
  setup () {
    const v$ = useVuelidate()
    return { v$ }
  },
  data () {
    return {
      filmName: '',
      releaseDate: '',
      filmDescription: '',
      mainPicture: {},
      gallary: [],
      trailerLink: '',
      typeFilm: {
        '3D': false,
        '2D': false,
        IMAX: false
      },
      SEO: {
        link: '',
        title: '',
        keywords: '',
        description: ''
      },
      ListDeleteImages: [],
      cloudFirestore: new CloudFirestore(),
      cloudStorage: new CloudStorage()
    }
  },
  props: {
    language: String,
    collectionRef: Object,
    id: String,
    saveTriger: Boolean
  },
  mounted () {
    this.GetFilm()
  },
  validations () {
    return {
      filmName: { required, $lazy: true },
      releaseDate: { required, $lazy: true },
      filmDescription: { required, $lazy: true },
      mainPicture: { required, $lazy: true },
      gallary: { required, $lazy: true },
      trailerLink: { required, $lazy: true },
      typeFilm: {
        required (value) {
          return Object.values(value).some((v) => v)
        },
        $lazy: true
      }
    }
  },
  computed: {
    fileFolderPath () {
      return `films/${this.language}/${this.id}`
    }
  },
  methods: {
    addImage (newImage) {
      this.gallary.push(newImage)
    },
    delImage (value) {
      this.ListDeleteImages.push(value)
    },
    changeImage (newImage) {
      this.gallary = this.gallary.map((image) => (image.id === newImage.id ? newImage : image))
    },
    GetFilm () {
      this.ListDeleteImages = []
      this.cloudFirestore
        .getDocument(this.collectionRef, this.$route.params.id)
        .then((document) => {
          if (document) {
            Object.assign(this.$data, document)
          }
        })
    },
    async Save () {
      try {
        this.$emit('isLoading', true)
        if (this.ListDeleteImages) {
          for (let i = 0; i < this.ListDeleteImages.length; i++) {
            this.cloudStorage.DeleteFileInFirebaseStorage(
              this.fileFolderPath,
              this.ListDeleteImages[i]
            )
          }
          this.ListDeleteImages = []
        }
        if (await this.v$.$validate()) {
          if (this.mainPicture.src) {
            this.mainPicture.link = await this.cloudStorage.UploadFile(
              this.fileFolderPath,
              this.mainPicture
            )
            this.saveListImgTriger = !this.saveListImgTriger
            delete this.mainPicture.src
          } else {
            delete this.mainPicture
          }
          if (this.gallary.length) {
            for (let i = 0; i < this.gallary.length; i++) {
              if (this.gallary[i].src) {
                this.gallary[i].link = await this.cloudStorage.UploadFile(
                  this.fileFolderPath,
                  this.gallary[i]
                )
                delete this.gallary[i].src
              }
            }
          }
          const docData = {
            fileName: this.id,
            filmName: this.filmName,
            releaseDate: this.releaseDate,
            filmDescription: this.filmDescription,
            typeFilm: this.typeFilm,
            SEO: this.SEO,
            gallary: this.gallary,
            mainPicture: this.mainPicture,
            trailerLink: this.trailerLink
          }
          this.cloudFirestore.AddDocument(this.collectionRef, this.id, docData)
        }
        console.log('save')
        toastr.success(this.language)
        this.$emit('isLoading', false)
      } catch (error) {
        const errorMessages = {
          unknown: 'Сталася невідома помилка при збереженні даних.'
        }
        this.$emit('erorr', true)
        const errorMessage = errorMessages[error.code] || 'Не вдалося зберегти дані.'
        throw new Error(errorMessage)
      }
    }
  },
  watch: {
    saveTriger () {
      this.Save()
    }
  }
}
</script>

<style>
.error-message {
  color: red;
  font-size: 0.8em;
  margin-top: 0.2em;
}

.is-invalid {
  border: 1px solid red;
  border-radius: 5px;
}
</style>
