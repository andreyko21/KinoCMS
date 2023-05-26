<template>
  <card :title="title" :isLoading="isLoading">
    <template #tools>
      <select class="form-control" v-model="setTime" v-if="eTime">
        <option>5с</option>
        <option>10с</option>
        <option>15с</option>
        <option>20с</option>
        <option>25с</option>
      </select>
        <input
          type="checkbox"
          v-model="functionality"
          v-if="eFunctionality"
        />
      <button type="button" class="btn" @click="UpdateList">
        <i class="fas fa-sync-alt"></i>
      </button>
    </template>

    <template #body>
      <list-img
        :eOne="eOne"
        :sizeImg="sizeImg"
        :eText="eText"
        :eUrls="eUrls"
        :collectionRef="collectionRef"
        :fileFolderPath="fileFolderPath"
        :saveListImgTriger="saveListImgTriger"
        :updateListImgTriger="updateListImgTriger"
        @isLoading="changeLoading"
      ></list-img>
    </template>

    <template #footer>
      <span class="btn btn-xs btn-success col fileinput-button" @click="Save">
        <span>Зберегти</span>
      </span>
    </template>
  </card>
</template>

<script src="./onMainTop.js" lang="js"></script>

<style>
.imgCard {
  width: 100%;
  height: 100%;
}

.custom-switch {
  display: inline;
}

.custom-file {
  max-width: 0px;
  max-height: 0px;
}

</style>
