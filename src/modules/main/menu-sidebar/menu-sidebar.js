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
        { url: '/AllPages', name: 'Сторінки', icon: 'fas fa-window-restore', pages: [{ url: '/AllPages', name: 'Всі сторінки' }, { url: '', name: 'Головна сторінка' }, { url: '', name: 'Про кінотеатр' }, { url: '', name: 'Кафе-бар' }, { url: '', name: 'VIP-зал' }, { url: '', name: 'Реклама' }, { url: '', name: 'Дитяча кімната' }, { url: '', name: 'Контакти' }], open: false },
        { url: '/Users', name: 'Користувачі', icon: 'fas fa-users', pages: [] },
        { url: '/Mailings', name: 'Розсилки', icon: 'fas fa-paper-plane', pages: [] }
      ]
    }
  },
  mounted () {

  }
}
