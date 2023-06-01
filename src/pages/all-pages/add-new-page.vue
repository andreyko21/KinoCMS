<template>
  <card :title="title" :isLoading="isLoading">
    <template #tools>
      <div>
        <checkbox-component v-model="checkedPage"></checkbox-component>
      </div>
      <language-component v-model:languages="languages" :error="v$.languages"></language-component>
    </template>
    <template #body>
      <add-promotions-form v-model="currentLanguage.data"> </add-promotions-form>
      <button type="submit" @click="Save" class="btn btn-xs btn-success col fileinput-button">
        <span>Зберегти</span>
      </button>
    </template>
  </card>
</template>

<script>
import checkboxComponent from '@/components/UI/checkbox-component.vue'
import { CloudFirestore } from '@/js/cloudFirestore'
import { CloudStorage } from '@/js/cloudStorage'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { promotionsEnCollectionRef, promotionsUaCollectionRef } from '@/js/collections.js'
import addPromotionsForm from '@/components/promotions-page/add-promotions-form.vue'
import LanguageComponent from '@/components/language-component.vue'
import { GenerateID } from '@/components/baners-page/add-file'
import card from '@/components/UI/card-component.vue'
import toastr from 'toastr'
export default {
  components: { card, addPromotionsForm, LanguageComponent, checkboxComponent },
  setup () {
    const v$ = useVuelidate()
    return { v$ }
  },
  data () {
    return {
      name: 'Pages',
      checkedPage: true,
      cloudFirestore: new CloudFirestore(),
      cloudStorage: new CloudStorage(),
      languages: [
        {
          id: 0,
          name: 'Українська',
          abbreviation: 'Ua',
          collection: promotionsUaCollectionRef,
          checked: false,
          data: {
            name: '',
            datePublication: '',
            description: '',
            mainImg: {},
            galleryImg: [],
            videoLink: '',
            seo: {},
            deleteImgList: []
          }
        },
        {
          id: 1,
          name: 'Англійська',
          abbreviation: 'En',
          collection: promotionsEnCollectionRef,
          checked: true,
          data: {
            name: '',
            datePublication: '',
            description: '',
            mainImg: {},
            galleryImg: [],
            videoLink: '',
            seo: {},
            deleteImgList: []
          }
        }
      ],
      title: 'Створення акції',
      isLoading: false
    }
  },
  validations () {
    const self = this
    return {
      languages: [
        ...(() => {
          const validatonsArray = [
            {
              data: {
                name: { required },
                datePublication: { required },
                description: { required },
                mainImg: { required },
                galleryImg: { required },
                videoLink: { required }
              }
            }
          ]
          self.languages.forEach((item, index) => {
            if (index > 0) {
              validatonsArray.push({
                data: {
                  name: { required },
                  datePublication: { required },
                  description: { required },
                  mainImg: { required },
                  galleryImg: { required },
                  videoLink: { required }
                }
              })
            }
          })
          return validatonsArray
        })()
      ]
    }
  },
  computed: {
    currentLanguage () {
      const current = this.languages.find((language) => language.checked === true)
      return current || {}
    },
    id () {
      if (this.$route.params[`${this.name}Id`] !== `New_${this.name}`) {
        return this.$route.params[`${this.name}Id`]
      } else {
        return GenerateID()
      }
    }
  },
  async created () {
    this.isLoading = true
    await this.GetFile(this.languages[0])
    await this.GetFile(this.languages[1])
    this.isLoading = false
  },
  methods: {
    GetFile (language) {
      this.cloudFirestore
        .getDocument(language.collection, this.$route.params[`${this.name}Id`])
        .then((document) => {
          if (document) {
            this.checkedPage = document.checkedPage
            Object.assign(language.data, document)
          } else if (this.$route.params[`${this.name}Id`] !== `New_${this.name}`) {
            this.$router.push(`/${this.name}`)
          }
        })
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
        checkedPage: this.checkedPage,
        fileName: this.id,
        name: data.name,
        description: data.description,
        datePublication: data.datePublication,
        mainImg: data.mainImg,
        galleryImg: data.galleryImg,
        videoLink: data.videoLink,
        seo: data.seo
      }
      await this.cloudFirestore.AddDocument(collection, this.id, docData)
    },
    async Reset () {
      this.isLoading = true
      await this.GetElement(this.currentLanguage)
      toastr.success('Дані успішно скинуто')
      this.isLoading = false
    },
    async Save () {
      this.isLoading = true
      if (await this.v$.$validate()) {
        for (let i = 0; i < this.languages.length; i++) {
          await this.DeleteFirebaseImages(
            this.languages[i].data.deleteImgList,
            `${this.name}/${this.languages[i].abbreviation}/${this.id}`
          )
          this.languages[i].data.deleteImgList = []

          await this.AddFirebaseImage(
            this.languages[i].data.mainImg,
            `${this.name}/${this.languages[i].abbreviation}/${this.id}`
          )
          await this.AddFirebaseImages(
            this.languages[i].data.galleryImg,
            `${this.name}/${this.languages[i].abbreviation}/${this.id}`
          )

          await this.AddFirebaseData(this.languages[i].data, this.languages[i].collection)
        }
        toastr.success('Дані успішно збережено')
      } else {
        toastr.warning('Введіть всі дані')
      }
      this.isLoading = false
    }
  }
}
</script>

<style>
</style>
