<template>
  <card-component class="card-dark" :title="title">
    <template #tools>
      <button
        type="button"
        @click="deleteImage"
        class="btn btn-tool"
        v-show="modelValue.src || modelValue.link"
      >
        <i class="fas fa-times"></i>
      </button>
    </template>
    <template #body>
      <div class="content-block">
        <div class="img-block mb-1">
          <div class="image-wrapper">
            <img
              :src="modelValue.src"
              alt="Uploaded Image"
              v-if="modelValue && modelValue.src"
              class="img"
            />
            <img
              :src="modelValue.link"
              alt="Uploaded Image"
              v-else-if="modelValue && modelValue.link"
              class="img"
            />
            <input
              ref="fileInput"
              type="file"
              class="fileInput"
              accept="image/*"
              @change="onFileChange"
            />
            <button class="btn add-img" type="button" @click="selectFile">
              <span v-if="!modelValue">Добавити</span>
              <span v-else>Змінити</span>
            </button>
          </div>
        </div>
      </div>
    </template>
  </card-component>
</template>

<script></script>

<style scoped lang="scss">
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
</style>
