<template>
    <Header></Header>
    <MenuSidebar></MenuSidebar>
    <div class="content-wrapper">
            <section class="content p-3">
                <div class="container-fluid">
                    <router-view />
                </div>
            </section>
        </div>
    <Footer></Footer>
</template>

<script>

import Header from './header/header-component.vue'
import MenuSidebar from './menu-sidebar/menu-sidebar.vue'
import Footer from './footer/footer-component.vue'
export default {
  components: {
    Header,
    MenuSidebar,
    Footer
  }
}
</script>

<style>

</style>
