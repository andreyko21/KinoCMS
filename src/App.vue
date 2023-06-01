<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>
<script>
import 'overlayscrollbars/overlayscrollbars.css'
import { OverlayScrollbars } from 'overlayscrollbars'

export default {
  mounted () {
    OverlayScrollbars(document.body, {})
  }
}
</script>
<style>
.wrapper {
  overflow: hidden;
}
</style>
