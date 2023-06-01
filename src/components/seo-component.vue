<template>
  <card-component title="SEO блок" class="mt-3">
    <template #tools></template>
    <template #body>
      <input-component
        label="URL"
        id="SEOURL"
        type="text"
        placeholder="URL..."
        v-model="localLink"
      />
      <input-component
        class="mt-3"
        label="Title"
        id="SEOTitle"
        type="text"
        placeholder="Title..."
        v-model="localTitle"
      />
      <input-component
        class="mt-3"
        label="Keywords"
        id="SEOKeywords"
        type="text"
        placeholder="Keywords..."
        v-model="localKeywords"
      />
      <input-component
        class="mt-3"
        label="Description"
        id="SEODescription"
        type="text"
        placeholder="Description..."
        v-model="localDescription"
      />
    </template>
  </card-component>
</template>

<script>
import cardComponent from '@/components/UI/card-component.vue'
import inputComponent from '@/components/UI/input-component.vue'
import { watch, ref, watchEffect } from 'vue'
export default {
  name: 'seo-component',
  components: {
    cardComponent,
    inputComponent
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({ link: '', title: '', keywords: '', description: '' })
    }
  },
  setup (props, { emit }) {
    const localLink = ref(props.modelValue.link)
    const localTitle = ref(props.modelValue.title)
    const localKeywords = ref(props.modelValue.keywords)
    const localDescription = ref(props.modelValue.description)

    const updateModel = () => {
      emit('update:modelValue', {
        link: localLink.value ? localLink.value : '',
        title: localTitle.value ? localTitle.value : '',
        keywords: localKeywords.value ? localKeywords.value : '',
        description: localDescription.value ? localDescription.value : ''
      })
    }

    watchEffect(() => {
      localLink.value = props.modelValue.link
      localTitle.value = props.modelValue.title
      localKeywords.value = props.modelValue.keywords
      localDescription.value = props.modelValue.description
    })

    watch([localLink, localTitle, localKeywords, localDescription], updateModel)

    return {
      localLink,
      localTitle,
      localKeywords,
      localDescription
    }
  }
}
</script>

<style></style>
