<template>
  <card-component title="Кінотеатр" class="card-dark mt-3">
    <template #tools></template>
    <template #body>
      <input-component
        label="Назва кінотеатра"
        :id="id + 'name'"
        type="text"
        placeholder="Введіть назву кінотеатра..."
        v-model="name"
      />
      <textarea-component
        class="mt-3"
        label="Адреса"
        :id="id + 'address'"
        type="textarea"
        placeholder="Введіть адресу"
        v-model="address"
      />
      <input-component
        label="Координати"
        :id="id + 'coordinates'"
        type="text"
        placeholder="Координати"
        v-model="coordinates"
      />
      <img-component
        v-model:imgObject="logoImg"
        v-model:deleteList="deleteImgList"
        :class="{ 'is-invalid': false }"
        class="mt-3"
        title="Логотип"
      ></img-component>
    </template>
  </card-component>
</template>

<script>
import imgComponent from '@/components/UI/img-component.vue'
import cardComponent from '@/components/UI/card-component.vue'
import inputComponent from '@/components/UI/input-component.vue'
import { watch, ref, watchEffect } from 'vue'
import TextareaComponent from '@/components/UI/textarea-component.vue'
export default {
  name: 'cinema-component',
  components: {
    cardComponent,
    inputComponent,
    TextareaComponent,
    imgComponent
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        id: 0,
        name: '',
        address: '',
        coordinates: '',
        logoImg: {},
        deleteImgList: []
      })
    }
  },
  setup (props, { emit }) {
    const id = ref(props.modelValue.id)
    const name = ref(props.modelValue.name)
    const address = ref(props.modelValue.address)
    const coordinates = ref(props.modelValue.coordinates)
    const logoImg = ref(props.modelValue.logoImg)
    const deleteImgList = ref(props.modelValue.deleteImgList)

    const updateModel = () => {
      emit('update:modelValue', {
        id: id.value ? id.value : '',
        name: name.value ? name.value : '',
        address: address.value ? address.value : '',
        coordinates: coordinates.value ? coordinates.value : '',
        logoImg: logoImg.value ? logoImg.value : {},
        deleteImgList: deleteImgList.value ? deleteImgList.value : []
      })
    }

    watchEffect(() => {
      id.value = props.modelValue.id
      name.value = props.modelValue.name
      address.value = props.modelValue.address
      coordinates.value = props.modelValue.coordinates
      logoImg.value = props.modelValue.logoImg
      deleteImgList.value = props.modelValue.deleteImgList
    })

    watch([id, name, address, coordinates, logoImg, deleteImgList], updateModel)

    return {
      id,
      name,
      address,
      coordinates,
      logoImg,
      deleteImgList
    }
  }
}
</script>

<style></style>
