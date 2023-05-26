import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/toastr/toastr.min.js'
import 'admin-lte/plugins/toastr/toastr.min.css'
import VueLazyload from 'vue-lazyload'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const app = createApp(App)

firebase.initializeApp({
  apiKey: 'AIzaSyCaEi1HjUdnkg7txAc4MJvt6LZAYcFhPaM',
  authDomain: 'kinocms-4ad3a.firebaseapp.com',
  databaseURL:
      'https://kinocms-4ad3a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'kinocms-4ad3a',
  storageBucket: 'kinocms-4ad3a.appspot.com',
  messagingSenderId: '529405933858',
  appId: '1:529405933858:web:da80fcd81d3ab9e24c4d7b',
  measurementId: 'G-4MW3M9QGKP'
})

app.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/img/default.svg'),
  loading: require('@/assets/img/default.svg'),
  attempt: 1,
  lazyComponent: true
}).use(store).use(router).mount('#app')
