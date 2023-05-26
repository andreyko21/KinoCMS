<template>
  <card :title="title" :isLoading="isLoading">
    <template #tools>
      <button type="button" class="btn btn-tool" @click="UpdateLIst">
        <i class="fas fa-sync-alt"></i>
      </button>
    </template>

    <template #body>
      <div class="grid-cards">
        <img-card
          :elementData="item"
          v-for="item in itemsList"
          :key="item.id"
          @SelectFiles="SelectFiles"
          @DeleteElement="DeleteElement"
          @ChangeURL="ChangeURL"
          @ChangeText="ChangeText"
        ></img-card>
      </div>
      <div class="custom-file position-absolute w-0 h-0">
        <input
          type="file"
          class="custom-file-input"
          ref="inputGroupFile"
          multiple
          @change="CreateData"
        />
      </div>
    </template>

    <template #footer>
      <span
        class="btn btn-xs btn-success col fileinput-button"
        @click="UpdateDataBase()"
      >
        <span>Зберегти</span>
      </span>
    </template>
  </card>
</template>

<script src="./bannerInBackground.js" lang="js"></script>

<style>
.imgCard {
  width: 100%;
  height: 100%;
}

.grid-cards {
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
