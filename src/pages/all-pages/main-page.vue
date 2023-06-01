<template>
  <card :title="title" :isLoading="isLoading">
    <template #tools>
      <div>
        <checkbox-component v-model="checkedPage"></checkbox-component>
      </div>
      <language-component v-model:languages="languages" :error="v$.languages"></language-component>
    </template>
    <template #body>
      <mainForm v-model="currentLanguage.data"> </mainForm>
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
import { pagesUaCollectionRef, pagesEnCollectionRef } from '@/js/collections.js'
import mainForm from '@/components/all-pages/main-page/main-form.vue'
import LanguageComponent from '@/components/language-component.vue'
import card from '@/components/UI/card-component.vue'
import toastr from 'toastr'
import { DateTime } from 'luxon'
export default {
  components: { card, mainForm, LanguageComponent, checkboxComponent },
  setup () {
    const v$ = useVuelidate()
    return { v$ }
  },
  data () {
    return {
      name: 'Main',
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
            telephone: { 0: '', 1: '' },
            seoText: '',
            seo: {}
          }
        },
        {
          id: 1,
          name: 'Англійська',
          abbreviation: 'En',
          collection: pagesEnCollectionRef,
          checked: true,
          data: {
            telephone: { 0: '', 1: '' },
            seoText: '',
            seo: {}
          }
        }
      ],
      title: 'Головна сторінка',
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
                telephone: {
                  0: { required },
                  1: { required }
                }
              }
            }
          ]
          self.languages.forEach((item, index) => {
            if (index > 0) {
              validatonsArray.push({
                data: {
                  telephone: {
                    0: { required },
                    1: { required }
                  }
                }
              })
            }
          })
          return validatonsArray
        })()
      ]
    }
  },
  created () {
    this.GetFile(this.languages[0])
    this.GetFile(this.languages[1])
  },
  computed: {
    currentLanguage () {
      const current = this.languages.find((language) => language.checked === true)
      return current || {}
    },
    id () {
      return 'Main'
    }
  },
  methods: {
    GetFile (language) {
      this.cloudFirestore.getDocument(language.collection, 'Main').then((document) => {
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
        telephone: data.telephone,
        seoText: data.seoText,
        seo: data.seo,
        datePublication: DateTime.now().toFormat('dd.LL.yyyy'),
        name: 'Головна сторінка'
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
