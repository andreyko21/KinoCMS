<template>
  <card-component class="card-dark" title="Галерея картинок">
    <template #tools> </template>
    <template #body>
      <div class="content-block">
        <div class="img-block mb-1">
          <div class="image-wrapper d-inline-block" v-for="image in imgsArray" :key="image.id">
            <div v-if="imgsArray">
              <img :src="image.src" alt="Uploaded Image" v-if="image.src" class="img" />
              <img :src="image.link" alt="Uploaded Image" v-else-if="image.link" class="img" />
              <input
                ref="fileInput"
                type="file"
                class="fileInput"
                accept="image/*"
                @change="onFileChange"
              />
              <button class="btn change-img" type="button" @click="SelectFile(image.id)">
                <span>Змінити</span>
              </button>
              <button
                v-if="imgsArray"
                class="btn del-img"
                type="button"
                @click="DeleteImage(image.id)"
              >
                <span>Видалити</span>
              </button>
            </div>
          </div>
          <div class="image-wrapper d-inline-block">
            <input
              ref="fileInput"
              type="file"
              class="fileInput"
              accept="image/*"
              @change="onFileChange"
              multiple
            />
            <button class="btn add-img" type="button" @click="SelectFile('new')">
              <span v-if="imgsArray">Добавити</span>
            </button>
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
import { GenerateID } from '@/components/baners-page/add-file'
import cardComponent from '@/components/UI/card-component.vue'
export default {
  components: { cardComponent },
  data () {
    return {
      currentImgId: null
    }
  },
  props: {
    imgsArray: {
      type: Array,
      default: () => []
    },
    title: String,
    error: String,
    deleteList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    DeleteImage (id) {
      if (this.imgsArray.find((element) => element.id === id && element.link)) {
        const deleteList = this.deleteList
        deleteList.push(id)
        this.$emit('update:deleteList', deleteList)
      }
      const imgsList = this.imgsArray.filter((element) => element.id !== id)
      this.$emit('update:imgsArray', imgsList)
    },
    SelectFile (id) {
      this.currentImgId = id
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const files = event.target.files
      if (files) {
        const imgsList = this.imgsArray
        if (this.currentImgId !== 'new' && this.currentImgId !== null) {
          const imageSrc = URL.createObjectURL(files[files.length - 1])
          const array = this.imgsArray.map((obj) =>
            obj.id === this.currentImgId ? { ...obj, src: imageSrc } : obj
          )
          this.$emit('update:imgsArray', array)
        } else {
          for (let i = 0; i < files.length; i++) {
            const imageSrc = URL.createObjectURL(files[i])
            const Image = { id: `${GenerateID()}${i}`, src: imageSrc }
            imgsList.push(Image)
          }
          this.$emit('update:imgsArray', imgsList)
        }
      }
      event.target.value = null
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
