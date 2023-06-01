<template>
  <div class="btn-group btn-group-toggle">
    <label
      v-for="language in languages"
      :key="language.id"
      class="btn btn-secondary"
      :class="{
        active: language.checked,
        error: error[language.id].$errors.length
      }"
    >
      <input
        type="radio"
        name="options"
        :id="language.name"
        autocomplete="off"
        @click="changeLanguage(language.id)"
      />
      {{ language.name }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    error: Object,
    languages: {
      type: Array,
      default: () => [{ id: 0, name: '', abbreviation: '', checked: false }]
    }
  },
  methods: {
    changeLanguage (selectedLanguage) {
      for (const element of this.languages) {
        if (element.id === selectedLanguage) {
          element.checked = true
        } else if (element.checked === true) {
          element.checked = false
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.error {
  background-color: red;
  &.active {
    background-color: rgb(114, 23, 0) !important;
  }
}
</style>
