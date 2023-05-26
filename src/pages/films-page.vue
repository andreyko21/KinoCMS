<template>
  <list-films :param="'<='" title="Список поточних фільмів"></list-films>
  <list-films :param="'>'" title="Список фільмів, які покажуть незабаром"></list-films>
</template>
<script>
import listFilms from '@/components/films-page/list-films.vue'
export default {
  components: { listFilms },
  data () {
    return {
      show: true
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
