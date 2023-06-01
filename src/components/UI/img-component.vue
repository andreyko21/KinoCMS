<template>
  <card-component class="card-dark" :title="title">
    <template #tools> </template>
    <template #body>
      <div class="content-block">
        <div class="img-block mb-1">
          <div class="image-wrapper">
            <img
              :src="imgObject.src"
              alt="Uploaded Image"
              v-if="imgObject && imgObject.src"
              class="img"
            />
            <img
              :src="imgObject.link"
              alt="Uploaded Image"
              v-else-if="imgObject && imgObject.link"
              class="img"
            />
            <input
              ref="fileInput"
              type="file"
              class="fileInput"
              accept="image/*"
              @change="onFileChange"
            />
            <button
              v-if="imgObject.src || imgObject.link"
              class="btn change-img"
              type="button"
              @click="SelectFile()"
            >
              Змінити
            </button>
            <button
              v-if="imgObject.src || imgObject.link"
              class="btn del-img"
              type="button"
              @click="DeleteImage()"
            >
              Видалити
            </button>
            <button v-else class="btn add-img" type="button" @click="SelectFile()">Добавити</button>
          </div>
        </div>
      </div>
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </template>
  </card-component>
</template>

<script>
import cardComponent from '@/components/UI/card-component.vue'
import { GenerateID } from '../baners-page/add-file'
export default {
  components: { cardComponent },
  props: {
    imgObject: {
      type: Object,
      default: () => ({ id: 1, src: '', link: '' })
    },
    title: String,
    error: String,
    deleteList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    DeleteImage () {
      if (this.imgObject.link != null) {
        const newDeleteList = this.deleteList
        newDeleteList.push(this.imgObject.id)
        this.$emit('update:deleteList', newDeleteList)
      }
      this.$emit('update:imgObject', {})
    },
    SelectFile () {
      this.$refs.fileInput.click()
    },
    onFileChange (e) {
      const file = e.target.files[0]
      if (file) {
        const imageSrc = URL.createObjectURL(file)
        const Image = { id: this.imgObject.id ? this.imgObject.id : GenerateID(), src: imageSrc }
        this.$emit('update:imgObject', Image)
        this.$refs.fileInput.value = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.gallary {
  display: grid;
  grid-template-columns: repeat(v-bind(gridRows), 1fr);
  gap: 10px;
}
.image-wrapper {
  width: 100%;
  max-width: 200px;
  height: 0;
  padding-bottom: 200px;
  position: relative;
}

.fileInput {
  position: absolute;
  max-width: 0;
}

.add-img {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  color: #fff;
  &:hover {
    opacity: 1;
    background: rgba($color: #000000, $alpha: 0.5);
  }
}

.change-img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  opacity: 0;
  color: #fff;
  &:hover {
    opacity: 1;
    background: rgba($color: #000000, $alpha: 0.5);
  }
}
.del-img {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  opacity: 0;
  color: rgb(0, 0, 0);
  &:hover {
    opacity: 1;
    background: rgba($color: #fc6c6c, $alpha: 0.5);
  }
}

.image-wrapper {
  background: gray;
}
.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.error-message {
  color: red;
  font-size: 0.8em;
  margin-top: 0.2em;
}
</style>
