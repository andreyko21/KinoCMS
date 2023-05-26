<template>
  <card-component class="card-dark" title="Галерея картинок">
    <template #tools> </template>
    <template #body>
      <div class="content-block">
        <div class="img-block mb-1">
          <div class="image-wrapper d-inline-block" v-for="image in modelValue" :key="image.id">
            <div v-if="modelValue">
              <img :src="image.src" alt="Uploaded Image" v-if="image.src" class="img" />
              <img :src="image.link" alt="Uploaded Image" v-else-if="image.link" class="img" />
              <input
                ref="fileInput"
                type="file"
                class="fileInput"
                accept="image/*"
                @change="onFileChange"
              />
              <button class="btn change-img" type="button" @click="changeFile(image.id)">
                <span>Змінити</span>
              </button>
              <button
                v-if="modelValue"
                class="btn del-img"
                type="button"
                @click="deleteImage(image.id)"
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
            <button class="btn add-img" type="button" @click="selectFile">
              <span v-if="modelValue">Добавити</span>
            </button>
          </div>
        </div>
      </div>
    </template>
  </card-component>
</template>

<script></script>

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
</style>
