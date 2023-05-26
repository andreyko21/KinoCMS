import OnMainTop from '@/components/baners-page/onMainTop/onMainTop.vue'
import card from '@/components/UI/card-component.vue'
import listImg from '@/components/list-img/list-img.vue'
import { Firebase } from '@/js/firebase'
import { CloudFirestore } from '@/js/cloudFirestore'

export default {
  data () {
    return {
      isLoading: false,
      functionality: true,
      saveListImgTriger: true,
      updateListImgTriger: true,
      setTime: '5с',
      firebase: new Firebase(),
      cloudFirestore: new CloudFirestore()
    }
  },
  components: {
    OnMainTop,
    card,
    listImg
  },
  props: {
    title: {
      type: String
    },
    eText: {
      type: Boolean,
      default: false
    },
    eUrls: {
      type: Boolean,
      default: false
    },
    eTime: {
      type: Boolean,
      default: false
    },
    eFunctionality: {
      type: Boolean,
      default: false
    },
    fileFolderPath: {
      type: String
    },
    collectionRef: {
      type: Object
    },
    eOne: {
      type: Boolean,
      default: false
    },
    sizeImg: {
      type: String,
      default: '1000x190'
    }
  },
  created () {
    this.GetParameters()
  },
  computed: {
    Options () {
      const ress = {}
      if (this.eFunctionality) {
        ress.functionality = this.functionality
        console.log(this.functionality)
      }
      if (this.eTime) {
        ress.setTime = this.setTime
      }
      return ress
    }
  },
  methods: {
    async UpdateList () {
      this.updateListImgTriger = !this.updateListImgTriger
      this.GetParameters()
    },
    async GetParameters () {
      const document = await this.cloudFirestore.GetDocument(this.collectionRef, 'params')
      this.functionality = document.functionality
      this.setTime = document.setTime
    },
    async Save () {
      this.saveListImgTriger = !this.saveListImgTriger
      this.firebase.SetParameters(this.collectionRef, this.Options)
    },
    changeLoading (value) {
      this.isLoading = value
    }
  }
}
