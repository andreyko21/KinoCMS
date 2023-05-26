<template>
  <card-component class="card-dark" :title="title" :isLoading="isLoading">
    <template #tools> <button class="button-add" @click="OpenHall('New_Hall')"><i class="fas fa-plus-circle"></i></button></template>
    <template #body>
        <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Назва</th>
                      <th>Дата створення</th>
                      <th style="width: 250px">Управління</th>
                    </tr>
                  </thead>
                  <tbody v-if="modelValue.length">
                    <tr v-for="item in modelValue" :key="item.id">
                      <td>{{ item.name }}</td>
                      <td>
                        {{ item.dateCreate }}
                      </td>
                      <td><button type="button" @click="OpenHall(item.id)">Редагувати</button><button @click="DeleteElementListHalls(item.id)" v-if="modelValue.length > 1">Видалити</button></td>
                    </tr>
                  </tbody>
                </table>
    </template>
  </card-component>
</template>

<script>
import cardComponent from '../UI/card-component.vue'
export default {
  components: { cardComponent },
  data () {
    return {
      title: 'Список залів',
      isLoading: false
    }
  },
  props: {
    modelValue: {
      type: Object
    }
  },
  methods: {
    OpenHall (id) {
      this.$emit('open', id)
    },
    DeleteElementListHalls (id) {
      this.$emit('deleteHall', id)
    }
  }
}
</script>

<style scoped lang="scss">
.button-add{
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  .fa-plus-circle{
    color: green;
  }
}
</style>
