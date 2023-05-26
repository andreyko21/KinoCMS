<template>
  <on-main-top title="На головній верх" fileFolderPath="banner/MainTop/" :collectionRef="mainTopRef" eTime eText eUrls eFunctionality></on-main-top>
  <on-main-top title="Наскрізний банер на задньому фоні" fileFolderPath="banner/BackgroundBanner/" sizeImg="2000x3000" :collectionRef="backgroundBanner" eFunctionality eOne></on-main-top>
  <on-main-top title="На головній Новини Акції" fileFolderPath="banner/MainNewsPromotions/" :collectionRef="mainNewsPromotions" eTime eUrls eFunctionality></on-main-top>
</template>
<script>
import onMainTop from '@/components/baners-page/onMainTop/onMainTop.vue'
import { mainTopRef, mainNewsPromotions, backgroundBanner, mainTopDocRef, mainNewsPromotionsDocRef } from '@/js/collections'
export default {
  components: { onMainTop },
  data () {
    return {
      mainTopRef,
      mainNewsPromotions,
      backgroundBanner,
      mainTopDocRef,
      mainNewsPromotionsDocRef
    }
  }
}
</script>
<style lang="scss" scoped>
.imgCard {
  width: 100%;
  height: 100%;
}

.all-carts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  overflow: hidden;
}

.custom-file {
  max-width: 0px;
  max-height: 0px;
}
</style>
