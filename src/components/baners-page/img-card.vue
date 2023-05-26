<template>
  <card class="card-dark" :footer="false">
    <template #tools>
      <button
        type="button"
        class="btn btn-tool"
        @click="DeleteElement"
        :class="{ opacity: elementData.id === null }"
        :disabled="elementData.id === null"
      >
        <i class="fas fa-times"></i>
      </button>
    </template>
    <template #body>
      <div class="content-block">
        <div class="img-block mb-1">
          <div class="image-wrapper">
            <img
              class="img"
              v-lazy="currentImage"
              :key="currentImage"
              alt="altText"
              @error="handleImageError"
            />
          </div>
          <button class="btn btn-absolute" @click="SelectFiles" type="button">
            <span v-if="!elementData.link && !elementData.src">Добавити {{ this.sizeImg }}</span>
            <span v-else>Змінити {{ this.sizeImg }}</span>
          </button>
        </div>
        <div class="inputs-block">
          <div
            class="input-group mb-1"
            v-if="urls && elementData.id"
          >
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-link"></i></span>
            </div>
            <input
              type="text"
              class="form-control"
              :value="elementData.urls"
              @input="ChangeURL"
              placeholder="URL"
            />
          </div>
          <div
            class="input-group mb-1"
            v-if="text && elementData.id"
          >
            <div class="input-group-prepend">
              <span class="input-group-text"
                ><i class="fas fa-comment"></i
              ></span>
            </div>
            <input
              type="text"
              class="form-control"
              :value="elementData.text"
              @input="ChangeText"
              placeholder="Text"
            />
          </div>
        </div>
      </div>
    </template>

    <template #footer> </template>
  </card>
</template>

<script>
import card from '../UI/card-component.vue'
export default {
  data () {
    return {
      error: false,
      width: '2000px',
      height: `${2000 / 3000}`
    }
  },
  props: {
    elementData: Object,
    text: {
      type: Boolean,
      default: false
    },
    urls: {
      type: Boolean,
      default: false
    },
    sizeImg: {
      type: String,
      default: '1000x190'
    }
  },
  components: {
    card
  },
  computed: {
    currentImage () {
      if (!this.error && this.elementData.src) {
        return this.elementData.src
      } else if (!this.error && this.elementData.link) {
        return this.elementData.link
      } else {
        return require('@/assets/img/default.svg')
      }
    },
    widthImg () {
      return this.sizeImg.split('x')[0] + 'px'
    },
    heightImg () {
      return (this.sizeImg.split('x')[1] / this.sizeImg.split('x')[0] * 100) + '%'
    }
  },
  methods: {
    handleImageError () {
      this.error = true
    },
    DeleteElement () {
      this.$emit('DeleteElement', this.elementData.id)
    },
    SelectFiles () {
      this.$emit('SelectFiles', this.elementData.id)
    },
    ChangeURL (event) {
      this.$emit('ChangeURL', event.target.value, this.elementData.id)
    },
    ChangeText (event) {
      this.$emit('ChangeText', event.target.value, this.elementData.id)
    }
  }
}
</script>

<style scoped lang="scss">
.opacity {
  opacity: 0;
  cursor: default;
}
.content-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .img-block {
    position: relative;
    .image-wrapper {
      width: 100%;
      max-width: v-bind(widthImg);
      height: 0;
      padding-bottom: v-bind(heightImg);
      position: relative;
    }
    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .btn-absolute {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      opacity: 0;
      color: #fff;
      &:hover {
        opacity: 1;
        background: rgba($color: #000000, $alpha: 0.5);
      }
    }
  }
}
</style>
