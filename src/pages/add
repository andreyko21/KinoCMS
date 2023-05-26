<template>
  <card :title="title" :isLoading="isLoading">
    <template #tools>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          v-for="language in languages"
          :key="language.id"
          class="btn btn-secondary"
          :class="{ active: language.checked }"
        >
          <input
            type="radio"
            name="options"
            :id="language.id"
            autocomplete="off"
            @change="changeCheckbox"
          />
          {{ language.name }}
        </label>
      </div>
    </template>
    <template #body>
     <addFilmC v-show="currenLanguage === 'Ua'" language="Ua" :collectionRef="collection('Ua')" :id="id" @isLoading="changeLoadingUa" :saveTriger="saveTriger" @erorr="changeErorrUa"></addFilmC>
     <addFilmC v-show="currenLanguage === 'En'" language="En" :collectionRef="collection('En')" :id="id" @isLoading="changeLoadingEn" :saveTriger="saveTriger" @erorr="changeErorrEn"></addFilmC>
     <button @click="Save" class="btn btn-xs btn-success col fileinput-button">
      <span>Зберегти</span>
    </button>
    </template>
    <template #footer>
      <span class="btn btn-xs btn-success col fileinput-button" @click="Save">
        <span>Зберегти</span>
      </span>
    </template></card
  >
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { CloudFirestore } from '@/js/cloudFirestore'
import { doc, collection } from 'firebase/firestore'
import { filmsCollectionRef } from '@/js/collections'
import { GenerateID } from '@/components/baners-page/add-file'
import card from '@/components/UI/card-component.vue'
import addFilmC from '@/components/films-page/add-film-form.vue'
export default {
  setup () {
    const v$ = useVuelidate()
    return { v$ }
  },
  data () {
    return {
      id: null,
      isLoadingUa: false,
      isLoadingEn: false,
      erorrUa: false,
      erorrEn: false,
      formValidate: false,
      saveTriger: false,
      uaValidate: false,
      enValidate: false,
      title: 'Фільм',
      languages: [
        { id: 0, name: 'Українська', value: 'Ua', checked: false },
        { id: 1, name: 'Англійська', value: 'En', checked: true }
      ],
      cloudFirestore: new CloudFirestore()
    }
  },
  created () {
    this.GetFilm()
  },
  components: {
    card,
    addFilmC
  },
  computed: {
    isLoading () {
      if (this.isLoadingEn === true || this.isLoadingUa === true) {
        return true
      } else {
        return false
      }
    },
    error () {
      if (this.erorrUa === false && this.erorrEn === false) {
        return false
      } else {
        return true
      }
    },
    curentIndex () {
      if (this.languages[0].checked === true) {
        return 0
      } else {
        return 1
      }
    },
    currenLanguage () {
      if (this.languages[0].checked === true) {
        return this.languages[0].value
      } else {
        return this.languages[1].value
      }
    },
    collectionRef () {
      const filmLanguageDocRef = doc(filmsCollectionRef, this.currenLanguage)
      const filmsRef = collection(filmLanguageDocRef, 'films')
      return filmsRef
    }
  },
  methods: {
    changeValidateStatus (value, field) {
      if (field === this.uaValidate) {
        this.uaValidate = value
      } else {
        this.enValidate = value
      }
    },
    changeErorrUa (value) {
      this.erorrUa = value
    },
    changeErorrEn (value) {
      this.erorrEn = value
    },
    changeLoadingUa (value) {
      this.isLoadingUa = value
    },
    changeLoadingEn (value) {
      this.isLoadingEn = value
    },
    collection (language) {
      const filmLanguageDocRef = doc(filmsCollectionRef, language)
      const filmsRef = collection(filmLanguageDocRef, 'films')
      return filmsRef
    },
    GetFilm () {
      this.cloudFirestore.getDocument(this.collection('En'), this.$route.params.id).then((document) => {
        if (document) {
          this.id = this.$route.params.id
        } else {
          this.cloudFirestore.getDocument(this.collection('Ua'), this.$route.params.id).then((document) => {
            if (document) {
              this.id = this.$route.params.id
            } else {
              this.$router.push('New_Film')
              this.id = GenerateID()
            }
          })
        }
      })
    },
    changeCheckbox () {
      if (this.languages[0].checked === true) {
        this.languages[0].checked = false
        this.languages[1].checked = true
      } else {
        this.languages[1].checked = false
        this.languages[0].checked = true
      }
    },
    async Save () {
      if (await this.v$.$validate()) {
        this.saveTriger = !this.saveTriger
      }
    }
  }
}
</script>

<style></style>
