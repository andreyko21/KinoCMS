<template>
  <form action="">
    <div v-for="item in cinemaList" :key="item.id">
      <cinema-component v-model="cinemaList[item.id]"> </cinema-component>
    </div>
    <seo-component v-model="seo"></seo-component>
  </form>
</template>

<script>
import CinemaComponent from '@/components/all-pages/contacts/cinema-component.vue'
import SeoComponent from '../../seo-component.vue'
import { watch, ref, watchEffect } from 'vue'
export default {
  components: { SeoComponent, CinemaComponent },
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        cinemaList: [
          { id: 1, name: '', address: '', coordinates: '', logoImg: '', deleteImgList: [] }
        ],
        seo: {},
        deleteImgList: []
      })
    }
  },
  setup (props, { emit }) {
    const cinemaList = ref(props.modelValue.cinema)
    const seo = ref(props.modelValue.seo)
    const deleteImgList = ref(props.modelValue.deleteImgList)

    const updateModel = () => {
      emit('update:modelValue', {
        cinemaList: cinemaList.value ? cinemaList.value : [],
        seo: seo.value ? seo.value : {},
        deleteImgList: deleteImgList.value ? deleteImgList.value : []
      })
    }

    watchEffect(() => {
      cinemaList.value = props.modelValue.cinemaList
      seo.value = props.modelValue.seo
      deleteImgList.value = props.modelValue.deleteImgList
    })

    watch([cinemaList, seo, deleteImgList], updateModel)

    return {
      cinemaList,
      seo,
      deleteImgList
    }
  },
  methods: {
    curentCinemaComponent () {}
  }
}
</script>

<style scoped>
.is-invalid {
  border: 1px solid red;
  border-radius: 5px;
}
</style>
