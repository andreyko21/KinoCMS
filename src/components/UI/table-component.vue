<!-- @format -->

<template>
  <table class="table table-sm">
    <thead>
      <tr>
        <th v-for="item in table.thead" :key="item">{{ item }}</th>
      </tr>
    </thead>
    <tbody v-if="modelValue.length">
      <tr v-for="item in modelValue" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.dateCreate }}</td>
        <td>
          <button type="button" @click="OpenHall(item.id)">Редагувати</button>
          <button @click="DeleteElementListHalls(item.id)" v-if="modelValue.length > 1">
            Видалити
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script></script>

<style></style>
