<template>
  <div>
    <label v-if="label" :for="'input-' + id">{{ label }}</label>
    <input
      :id="'input-' + id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      class="form-control"
      :class="{ 'is-invalid': error }"
    />
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'input-component',
  props: {
    id: String,
    label: String,
    type: String,
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

<style scoped>
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
