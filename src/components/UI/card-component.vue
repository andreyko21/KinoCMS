<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-tools">
        <slot name="tools"></slot>
      </div>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <slot name="footer" v-if="footer"></slot>
    <div v-if="isLoading" class="overlay">
      <i class="fas fa-2x fa-sync-alt fa-spin"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.card-tools {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
