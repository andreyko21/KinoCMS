<template>
    <div>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <router-link to="/" class="brand-link">
                <span class="brand-text font-weight-light">KinoCMS</span>
            </router-link>
            <div class="sidebar">
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column"
                        data-accordion="false">
                        <div class="nav-item" v-for="category in categories" :key="category.url">
                            <li v-if="!category.pages.length">
                                <router-link :class="{ 'active': $route.path === category.url }" :to="category.url"
                                    class="nav-link">
                                    <i class="nav-icon" :class="category.icon"></i>
                                    <p>
                                        {{ category.name }}
                                    </p>
                                    <i v-if="category.pages.length" class="right fas fa-angle-left"></i>
                                </router-link>
                            </li>
                            <li class="nav-item" v-else @click="menuOpen">
                                <router-link :class="{ 'active': $route.path === category.url }" :to="category.url"
                                    class="nav-link">
                                    <i class="nav-icon" :class="category.icon"></i>
                                    <p>
                                        {{ category.name }}
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </router-link>
                                <ul class="nav nav-treeview" >
                                    <li class="nav-item" v-for="page in category.pages" :key="page.url">
                                        <a href="#" class="nav-link" :class="{ 'active': $route.path === page.url }">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>{{ page.name }}</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </aside>
    </div>
</template>
<script>
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'

export default {
  data () {
    return {
      categories: [
        {
          url: '/', name: 'Статистика', icon: 'far fa-chart-bar', pages: []
        },
        { url: '/Banners&Sliders', name: 'Банери/Слайдери', icon: 'far far fa-image', pages: [] },
        { url: '/Films', name: 'Фільми', icon: 'far fas fa-film', pages: [] },
        { url: '/Cinemas', name: 'Кінотеатри', icon: 'fas fa-archway', pages: [] },
        { url: '/News', name: 'Новини', icon: 'fas fa-newspaper', pages: [] },
        { url: '/Promotions', name: 'Акції', icon: 'fas fa-percentage', pages: [] },
        { url: '/AllPages', name: 'Сторінки', icon: 'fas fa-window-restore', pages: [{ url: '/AllPages', name: 'Всі сторінки' }, { url: '', name: 'Головна сторінка' }, { url: '', name: 'Про кінотеатр' }, { url: '', name: 'Кафе-бар' }, { url: '', name: 'VIP-зал' }, { url: '', name: 'Реклама' }, { url: '', name: 'Дитяча кімната' }, { url: '', name: 'Контакти' }] },
        { url: '/Users', name: 'Користувачі', icon: 'fas fa-users', pages: [] },
        { url: '/Mailings', name: 'Розсилки', icon: 'fas fa-paper-plane', pages: [] }
      ]
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped></style>
