<template>
  <form action="">
    <input-component
      label="Номер телефона"
      id="telephone1"
      type="text"
      placeholder="Введіть номер телефона"
      v-model="telephone[0]"
      :error="v$.telephone[0].$error ? 'Поле є обовязковим' : ''"
    />
    <input-component
      label="Номер телефона"
      class="mt-3"
      id="telephone2"
      type="text"
      placeholder="Введіть номер телефона"
      v-model="telephone[1]"
      :error="v$.telephone[1].$error ? 'Поле є обовязковим' : ''"
    />
    <textarea-component
      class="mt-3"
      label="SEO текст"
      id="SEOText"
      type="textarea"
      placeholder="Введіть SEO текст"
      v-model="seoText"
    />
    <seo-component v-model="seo"></seo-component>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import textareaComponent from '@/components/UI/textarea-component.vue'
import inputComponent from '@/components/UI/input-component.vue'
import SeoComponent from '@/components/seo-component.vue'
import { watch, ref, watchEffect } from 'vue'
export default {
  components: { inputComponent, textareaComponent, SeoComponent },
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        telephone: { 0: '', 1: '' },
        seoText: '',
        seo: {}
      })
    }
  },
  setup (props, { emit }) {
    const v$ = useVuelidate()
    const telephone = ref(props.modelValue.telephone)
    const seoText = ref(props.modelValue.seoText)
    const seo = ref(props.modelValue.seo)

    const updateModel = () => {
      emit('update:modelValue', {
        telephone: telephone.value ? telephone.value : {},
        seoText: seoText.value ? seoText.value : '',
        seo: seo.value ? seo.value : {}
      })
    }

    watchEffect(() => {
      telephone.value = props.modelValue.telephone
      seoText.value = props.modelValue.seoText
      seo.value = props.modelValue.seo
    })

    watch([telephone, seoText, seo], updateModel)

    return {
      v$,
      telephone,
      seoText,
      seo
    }
  },
  validations () {
    return {
      telephone: {
        0: { required, $lazy: true },
        1: { required, $lazy: true }
      }
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
