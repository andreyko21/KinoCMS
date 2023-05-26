<template>
  <div class="form-check mx-auto">
    <input
      :id="id"
      name="check"
      class="form-check-input"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label" :for="id" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
