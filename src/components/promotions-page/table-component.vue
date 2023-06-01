
<template>
  <card-component>
    <template #tools>
      <button type="button" class="btn btn-tool" @click="UpdateLIst">
        <i class="fas fa-sync-alt"></i>
      </button>
      <button @click="NewElement()" class="button-list"><i class="fas fa-plus-circle"></i></button>
    </template>
    <template #body>
      <table class="table table-sm">
        <thead>
          <tr>
            <th v-for="headElement in modelValue.thead" :key="headElement">
              {{ headElement }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bodyElement in modelValue.tbody" :key="bodyElement.id">
            <td class="list-line">{{ bodyElement.name }}</td>
            <td>{{ bodyElement.datePublication }}</td>
            <td>{{ bodyElement.checkedPage === true ? 'Вкл' : 'Викл' }}</td>
            <td>
              <button @click="EditElement(bodyElement.fileName)" class="button-list">
                <i class="fas fa-pencil-alt"></i></button
              ><button @click="DeleteElement(bodyElement.fileName)" class="button-list">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table> </template
  ></card-component>
</template>
<script>
import cardComponent from '@/components/UI/card-component.vue'
export default {
  components: { cardComponent },
  props: {
    modelValue: Object,
    part: {
      type: String,
      default: 'News'
    }
  },
  methods: {
    DeleteElement (id) {
      this.$emit('delete', id)
    },
    UpdateLIst () {
      this.$emit('updateList')
    },
    EditElement (id) {
      this.$router.push(`/${this.part}/${id}`)
    },
    NewElement () {
      this.$router.push(`/${this.part}/New_${this.part}`)
    }
  }
}
</script>

<style scoped lang="scss">
.button-list {
  background: none;
  border: none;
}
.list-line {
  overflow: hidden !important;
  max-width: 200px;
}
</style>
