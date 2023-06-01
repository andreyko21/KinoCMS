<template>
  <form action="">
    <input-component
      label="Назва"
      id="name"
      type="text"
      placeholder="Кафе бар"
      v-model="name"
      :error="v$.name.$error ? 'Поле є обовязковим' : ''"
    />
    <textarea-component
      class="mt-3"
      label="Опис"
      id="description"
      type="textarea"
      placeholder="Введіть опис"
      v-model="description"
      :error="v$.description.$error ? 'Поле є обовязковим' : ''"
    />
    <img-component
      v-model:imgObject="mainImg"
      v-model:deleteList="deleteImgList"
      :class="{ 'is-invalid': v$.mainImg.$error }"
      class="mt-3"
      title="Головна картинка"
      :error="v$.mainImg.$error ? 'Виберіть картинку' : ''"
    ></img-component>
    <imgs-component
      v-model:imgsArray="galleryImg"
      v-model:deleteList="deleteImgList"
      :class="{ 'is-invalid': v$.galleryImg.$error }"
      class="mt-3"
      title="Галерея картинок"
      :error="v$.galleryImg.$error ? 'Виберіть картинку' : ''"
    ></imgs-component>
    <seo-component v-model="seo"></seo-component>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import textareaComponent from '@/components/UI/textarea-component.vue'
import inputComponent from '../UI/input-component.vue'
import imgComponent from '@/components/UI/img-component.vue'
import imgsComponent from '@/components/UI/imgs-component.vue'
import SeoComponent from '../seo-component.vue'
import { watch, ref, watchEffect } from 'vue'
export default {
  components: { inputComponent, textareaComponent, imgComponent, imgsComponent, SeoComponent },
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        newsName: '',
        newsDescription: '',
        mainImg: {},
        galleryImg: [],
        seo: {},
        deleteImgList: []
      })
    }
  },
  setup (props, { emit }) {
    const v$ = useVuelidate()
    const name = ref(props.modelValue.name)
    const description = ref(props.modelValue.description)
    const mainImg = ref(props.modelValue.mainImg)
    const galleryImg = ref(props.modelValue.galleryImg)
    const seo = ref(props.modelValue.seo)
    const deleteImgList = ref(props.modelValue.deleteImgList)

    const updateModel = () => {
      emit('update:modelValue', {
        name: name.value ? name.value : '',
        description: description.value ? description.value : '',
        mainImg: mainImg.value ? mainImg.value : {},
        galleryImg: galleryImg.value ? galleryImg.value : [],
        seo: seo.value ? seo.value : {},
        deleteImgList: deleteImgList.value ? deleteImgList.value : []
      })
    }

    watchEffect(() => {
      name.value = props.modelValue.name
      description.value = props.modelValue.description
      mainImg.value = props.modelValue.mainImg
      galleryImg.value = props.modelValue.galleryImg
      seo.value = props.modelValue.seo
      deleteImgList.value = props.modelValue.deleteImgList
    })

    watch([name, description, mainImg, galleryImg, seo, deleteImgList], updateModel)

    return {
      v$,
      name,
      description,
      mainImg,
      galleryImg,
      seo,
      deleteImgList
    }
  },
  validations () {
    return {
      name: { required, $lazy: true },
      description: { required, $lazy: true },
      mainImg: { required, $lazy: true },
      galleryImg: { required, $lazy: true }
    }
  }
}
</script>

<style scoped>
.is-invalid {
  border: 1px solid red;
  border-radius: 5px;
}
</style>
