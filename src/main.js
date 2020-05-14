import Vue from 'vue'
import router from './router/router.js'
require('@/assets/sass/main.scss')
import VueLoading from 'vue-loading-template'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueLoading, /** options **/)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')