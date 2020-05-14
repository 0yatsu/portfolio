import Vue from 'vue'
import VueRouter from "vue-router"
import BootstrapVue from 'bootstrap-vue'
import Home from '@/components/Home.vue'
import About from "@/components/About.vue"
import Skills from "@/components/Skills.vue"
import Works from "@/components/Works.vue"
import Contact from "@/components/Contact.vue"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', component: Home },

  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/works', component: Works },
  { path: '/contact', component: Contact },

]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router