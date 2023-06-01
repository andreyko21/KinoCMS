<template>
  <div>
    <input-component
      label="Назва кінотеатра"
      id="cinemaName"
      type="text"
      placeholder="Введіть назву кінотеатра"
      v-model="localName"
      :error="v$.localName.$error ? 'Поле є обовязковим' : ''"
    />
    <textarea-component
      class="mt-3"
      label="Опис"
      id="cinemaDescription"
      type="textarea"
      placeholder="Введіть опис кінотеатра"
      v-model="localDescription"
      :error="v$.localDescription.$error ? 'Поле є обовязковим' : ''"
    />
    <textarea-component
      class="mt-3"
      label="Умови"
      id="cinemaCondition"
      type="textarea"
      placeholder="Введіть умови кінотеатра"
      v-model="localCondition"
      :error="v$.localCondition.$error ? 'Поле є обовязковим' : ''"
    />
    <img-component
      v-model:imgObject="localLogoImg"
      :class="{ 'is-invalid': v$.localLogoImg.$error }"
      class="mt-3"
      v-model:deleteList="localListDeleteImages"
      title="Логотип"
    ></img-component>
    <p v-if="v$.localLogoImg.$error" class="error-message">Виберіть картинку</p>
    <img-component
      v-model:imgObject="localTopBannerImg"
      :class="{ 'is-invalid': v$.localTopBannerImg.$error }"
      class="mt-3"
      v-model:deleteList="localListDeleteImages"
      title="Верхній банер"
    ></img-component>
    <p v-if="v$.localTopBannerImg.$error" class="error-message">Виберіть картинку</p>
    <imgs-component
      v-model:imgsArray="localGalleryImg"
      :class="{ 'is-invalid': v$.localGalleryImg.$error }"
      class="mt-3"
      v-model:deleteList="localListDeleteImages"
    ></imgs-component>
    <p v-if="v$.localGalleryImg.$error" class="error-message">Виберіть картинку</p>
    <list-halls v-model="localListHalls" @deleteHall="DeleteHall" @open="OpenHall"></list-halls>
    <seo-component v-model="localSEO"></seo-component>
    <button
      type="button"
      @click="$emit('resetCinema')"
      v-if="$route.params.cinemaId !== 'New_Cinema'"
      class="btn btn-xs btn-warning col fileinput-button"
    >
      <span>Скинути зміни</span>
    </button>
    <button type="submit" @click="Save" class="btn btn-xs btn-success col fileinput-button">
      <span>Зберегти</span>
    </button>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import inputComponent from '@/components/UI/input-component.vue'
import textareaComponent from '../UI/textarea-component.vue'
import seoComponent from '../seo-component.vue'
import { watch, ref, watchEffect } from 'vue'
import ImgComponent from '../UI/img-component.vue'
import imgsComponent from '../UI/imgs-component.vue'
import ListHalls from './list-halls.vue'
export default {
  name: 'add-cinema-form',
  components: {
    inputComponent,
    seoComponent,
    textareaComponent,
    ImgComponent,
    imgsComponent,
    ListHalls
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({ gallery: [] })
    }
  },
  setup (props, { emit }) {
    try {
      const v$ = useVuelidate()
      const localName = ref(props.modelValue.name)
      const localDescription = ref(props.modelValue.description)
      const localCondition = ref(props.modelValue.condition)
      const localLogoImg = ref(props.modelValue.logoImg)
      const localTopBannerImg = ref(props.modelValue.topBannerImg)
      const localGalleryImg = ref(props.modelValue.galleryImg)
      const localListHalls = ref(props.modelValue.listHalls)
      const localSEO = ref(props.modelValue.seo)
      const localListDeleteImages = ref(props.modelValue.listDeleteImages)

      const updateModel = () => {
        emit('update:modelValue', {
          name: localName.value,
          description: localDescription.value,
          condition: localCondition.value,
          logoImg: localLogoImg.value,
          topBannerImg: localTopBannerImg.value,
          galleryImg: localGalleryImg.value,
          listHalls: localListHalls.value,
          seo: localSEO.value,
          listDeleteImages: localListDeleteImages.value
        })
      }

      watchEffect(() => {
        localName.value = props.modelValue.name
        localDescription.value = props.modelValue.description
        localCondition.value = props.modelValue.condition
        localLogoImg.value = props.modelValue.logoImg
        localTopBannerImg.value = props.modelValue.topBannerImg
        localGalleryImg.value = props.modelValue.galleryImg
        localListHalls.value = props.modelValue.listHalls
        localSEO.value = props.modelValue.seo
        localListDeleteImages.value = props.modelValue.listDeleteImages
      })

      watch(
        [
          localName,
          localDescription,
          localCondition,
          localLogoImg,
          localTopBannerImg,
          localTopBannerImg,
          localGalleryImg,
          localListHalls,
          localSEO,
          localListDeleteImages
        ],
        updateModel
      )

      return {
        v$,
        localName,
        localDescription,
        localCondition,
        localLogoImg,
        localTopBannerImg,
        localGalleryImg,
        localListHalls,
        localSEO,
        localListDeleteImages
      }
    } catch (error) {
      console.error(error)
    }
  },
  validations () {
    return {
      localName: { required, $lazy: true },
      localDescription: { required, $lazy: true },
      localCondition: { required, $lazy: true },
      localLogoImg: { required, $lazy: true },
      localTopBannerImg: { required, $lazy: true },
      localGalleryImg: { required, $lazy: true }
    }
  },
  methods: {
    DeleteHall (id) {
      this.$emit('deleteHall', id)
    },
    OpenHall (id) {
      this.$emit('open', id)
    },
    Save () {
      this.v$.$validate()
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
