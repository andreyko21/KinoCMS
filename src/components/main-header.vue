<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" v-for="link in links" :key="link.url">
        <router-link :to="link.url" class="nav-link" :class="{ active: $route.path === link.url }">
          <i :class="link.icon"></i>{{ link.name }}</router-link
        >
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click="Logout">Вийти<i class="fas fa-sign-out-alt"></i></a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { createApp } from 'vue'
import { getAuth } from 'firebase/auth'
import router from '../router'
const app = createApp({})

app.config.globalProperties.$auth = getAuth()

export default {
  setup () {
    const Logout = async () => {
      await getAuth().signOut()
      router.push({ name: 'login' })
    }

    return {
      Logout
    }
  },
  data () {
    return {
      links: [{ url: '/Profile', name: 'Мій кабінет', icon: 'fas fa-user-circle' }]
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-link.login {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
