import Vue from 'vue'
import router from './router/router.js'
require('@/assets/sass/main.scss')
// import VueLoading from 'vue-loading-template'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { Slide } from 'vue-burger-menu'
import App from './App.vue'

library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.use(VueLoading, /** options **/)
// Vue.component('slide', Slide);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')