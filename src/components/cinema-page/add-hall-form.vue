<template>
  <div>
    <input-component
      label="Назва зала"
      id="hallName"
      type="text"
      placeholder="Введіть назву зала"
      v-model="localName"
      :error="v$.localName.$error ? 'Поле є обовязковим' : ''"
    />
    <textarea-component
      class="mt-3"
      label="Опис"
      id="hallDescription"
      type="textarea"
      placeholder="Введіть опис зала"
      v-model="localDescription"
      :error="v$.localDescription.$error ? 'Поле є обовязковим' : ''"
    />
    <img-component
      v-model="localSchemeHallImg"
      :class="{ 'is-invalid': v$.localSchemeHallImg.$error }"
      class="mt-3"
      @deleteMainPicture="delImage"
      title="Схема зала"
    ></img-component>
    <p v-if="v$.localSchemeHallImg.$error" class="error-message">
      Виберіть картинку
    </p>
    <img-component
      v-model="localTopBannerImg"
      :class="{ 'is-invalid': v$.localTopBannerImg.$error }"
      class="mt-3"
      @deleteMainPicture="delImage"
      title="Верхній банер"
    ></img-component>
    <p v-if="v$.localTopBannerImg.$error" class="error-message">
      Виберіть картинку
    </p>
    <imgs-component
      v-model="localGalleryImg"
      :class="{ 'is-invalid': v$.localGalleryImg.$error }"
      class="mt-3"
      @newImage="addImage"
      @delImage="delImage"
      @changeImage="changeImage"
    ></imgs-component>
    <p v-if="v$.localGalleryImg.$error" class="error-message">
      Виберіть картинку
    </p>
    <seo-component v-model="localSEO"></seo-component>
    <button type="button" @click="$emit('resetHall', hallData.id)" class="btn btn-xs btn-warning col fileinput-button">
      <span>Скинути зміни</span>
    </button>
    <button type="button" @click="Save" class="btn btn-xs btn-success col fileinput-button">
      <span>Зберегти</span>
    </button>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import inputComponent from '@/components/UI/input-component.vue'
import textareaComponent from '../UI/textarea-component.vue'
import { watch, ref, watchEffect } from 'vue'
import seoComponent from '../seo-component.vue'
import ImgComponent from '../UI/img-component.vue'
import imgsComponent from '../UI/imgs-component.vue'

export default {
  name: 'add-hall-form',
  components: {
    inputComponent,
    seoComponent,
    textareaComponent,
    ImgComponent,
    imgsComponent
  },
  props: {
    hallData: {
      type: Object,
      default: () => ({ id: 'New_Hall', name: '', dateCreate: '', description: '', schemeHallImg: {}, topBannerImg: {}, listDeleteImages: [], galleryImg: [], seo: {} })
    }
  },
  setup (props, { emit }) {
    const v$ = useVuelidate()
    const localId = ref(props.hallData.id)
    const localName = ref(props.hallData.name)
    const localDescription = ref(
      props.hallData.description
    )
    const localSchemeHallImg = ref(
      props.hallData.schemeHallImg
    )
    const localTopBannerImg = ref(
      props.hallData.topBannerImg
    )
    const localGalleryImg = ref(
      props.hallData.galleryImg
    )
    const localSEO = ref(props.hallData.seo)
    const localListDeleteImages = ref(
      props.hallData.listDeleteImages
    )

    const updateModel = () => {
      emit('hallData', {
        id: localId.value,
        name: localName.value,
        description: localDescription.value,
        schemeHallImg: localSchemeHallImg.value,
        topBannerImg: localTopBannerImg.value,
        galleryImg: localGalleryImg.value,
        seo: localSEO.value,
        listDeleteImages: localListDeleteImages.value
      })
    }

    watchEffect(() => {
      localId.value = props.hallData.id
      localName.value = props.hallData.name
      localDescription.value =
        props.hallData.description
      localSchemeHallImg.value =
        props.hallData.schemeHallImg
      localTopBannerImg.value =
        props.hallData.topBannerImg
      localGalleryImg.value =
        props.hallData.galleryImg
      localSEO.value = props.hallData.seo
      localListDeleteImages.value =
        props.hallData.listDeleteImages || []
    })

    watch(
      [
        localId,
        localName,
        localDescription,
        localSchemeHallImg,
        localTopBannerImg,
        localTopBannerImg,
        localGalleryImg,
        localSEO,
        localListDeleteImages
      ],
      updateModel
    )

    return {
      v$,
      localId,
      localName,
      localDescription,
      localSchemeHallImg,
      localTopBannerImg,
      localGalleryImg,
      localSEO,
      localListDeleteImages
    }
  },
  validations () {
    return {
      localName: { required, $lazy: true },
      localDescription: { required, $lazy: true },
      localSchemeHallImg: { required, $lazy: true },
      localTopBannerImg: { required, $lazy: true },
      localGalleryImg: { required, $lazy: true }
    }
  },
  methods: {
    addImage (newImage) {
      this.localGalleryImg.push(newImage)
    },
    delImage (value) {
      console.log('del')
      if (this.localListDeleteImages && this.localListDeleteImages.length) {
        this.localListDeleteImages.push(value)
      } else {
        this.localListDeleteImages = []
        this.localListDeleteImages.push(value)
      }
    },
    changeImage (newImage) {
      this.localGalleryImg = this.localGalleryImg.map((image) =>
        image.id === newImage.id ? newImage : image
      )
    },
    async Save () {
      this.$emit('saveHall', this.localId)
      await this.v$.$validate()
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
