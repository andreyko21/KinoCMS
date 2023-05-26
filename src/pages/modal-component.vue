<template>
  <div class="modal fade" :class="{'show': modelValue}" :style="modalStyle" >
        <div class="modal-dialog">
          <div class="modal-content bg-warning">
            <div class="modal-header">
              <h4 class="modal-title">Ви дійсно хочете видалити фільм?</h4>
              <button type="button" class="close" data-dismiss="modal" @click="Cancel">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-outline-dark" @click="Cancel">Відмінити</button>
              <button type="button" class="btn btn-outline-dark" @click="Delete">Видалити</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
</template>

<script>
export default {
  props: {
    id: String,
    message: String,
    modelValue: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    modalStyle () {
      if (this.modelValue) {
        return { display: 'block', paddingRight: '21px' }
      } else {
        return {}
      }
    }
  },
  methods: {
    Delete () {
      this.$emit('delete', this.id)
      this.$emit('update:modelValue', false)
    },
    Cancel () {
      this.$emit('update:modelValue', false)
    }
  }
}
</script>

<style>

</style>
