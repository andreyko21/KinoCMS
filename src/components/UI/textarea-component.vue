<template>
  <div>
    <label v-if="label" :for="'textarea-' + id">{{ label }}</label>
    <textarea
      :id="'textarea-' + id"
      class="form-control"
      :class="{ 'is-invalid': error }"
      rows="3"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    >
    </textarea>
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'textarea-component',
  props: {
    id: String,
    label: String,
    placeholder: String,
    modelValue: String,
    error: String
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style>

</style>
