export default {
  data () {
    return {
      fullscreenClass: 'fa-expand-arrows-alt'
    }
  },
  methods: {
    onToggleMenuSidebar () {
      const body = document.querySelector('body')
      body.classList.toggle('sidebar-collapse')
    },
    ToggleFullScreen () {
      if (document.fullscreenElement) {
        document.exitFullscreen()
        this.fullscreenClass = 'fa-expand-arrows-alt'
      } else {
        document.documentElement.requestFullscreen()
        this.fullscreenClass = 'fa-compress-arrows-alt'
      }
    }
  }
}
