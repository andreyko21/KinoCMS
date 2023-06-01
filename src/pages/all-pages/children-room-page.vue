<template>
  <card :title="title" :isLoading="isLoading">
    <template #tools>
      <div>
        <checkbox-component v-model="checkedPage"></checkbox-component>
      </div>
      <language-component v-model:languages="languages" :error="v$.languages"></language-component>
    </template>
    <template #body>
      <children-room-form v-model="currentLanguage.data"> </children-room-form>
      <button type="button" @click="Reset" class="btn btn-xs btn-warning col fileinput-button">
        <span>Скинути зміни</span>
      </button>
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
import { pagesEnCollectionRef, pagesUaCollectionRef } from '@/js/collections.js'
import LanguageComponent from '@/components/language-component.vue'
import card from '@/components/UI/card-component.vue'
import toastr from 'toastr'
import { DateTime } from 'luxon'
import ChildrenRoomForm from '@/components/all-pages/children-room-form.vue'
export default {
  components: { card, LanguageComponent, checkboxComponent, ChildrenRoomForm },
  setup () {
    const v$ = useVuelidate()
    return { v$ }
  },
  data () {
    return {
      name: 'Children_room',
      checkedPage: true,
      cloudFirestore: new CloudFirestore(),
      cloudStorage: new CloudStorage(),
      languages: [
        {
          id: 0,
          name: 'Українська',
          abbreviation: 'Ua',
          collection: pagesUaCollectionRef,
          checked: false,
          data: {
            name: '',
            description: '',
            mainImg: {},
            galleryImg: [],
            seo: {},
            deleteImgList: []
          }
        },
        {
          id: 1,
          name: 'Англійська',
          abbreviation: 'En',
          collection: pagesEnCollectionRef,
          checked: true,
          data: {
            name: '',
            description: '',
            mainImg: {},
            galleryImg: [],
            seo: {},
            deleteImgList: []
          }
        }
      ],
      title: 'Дитяча кімната',
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
                description: { required },
                mainImg: { required },
                galleryImg: { required }
              }
            }
          ]
          self.languages.forEach((item, index) => {
            if (index > 0) {
              validatonsArray.push({
                data: {
                  name: { required },
                  description: { required },
                  mainImg: { required },
                  galleryImg: { required }
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
      return this.name
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
      this.cloudFirestore.getDocument(language.collection, this.name).then((document) => {
        if (document) {
          this.checkedPage = document.checkedPage
          Object.assign(language.data, document)
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
        mainImg: data.mainImg,
        galleryImg: data.galleryImg,
        seo: data.seo,
        datePublication: DateTime.now().toFormat('dd.LL.yyyy')
      }
      await this.cloudFirestore.AddDocument(collection, this.id, docData)
    },
    async Reset () {
      this.isLoading = true
      await this.GetFile(this.currentLanguage)
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
