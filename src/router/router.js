import Vue from 'vue'
import VueRouter from "vue-router"
import BootstrapVue from 'bootstrap-vue'
import Home from '@/components/Home.vue'
import test1 from "@/components/test1.vue"
import test2 from "@/components/test2.vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', component: Home },

  { path: '/test1', component: test1 },
  { path: '/test2', component: test2 }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router