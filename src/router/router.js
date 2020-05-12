import Vue from 'vue'
import VueRouter from "vue-router"
import test1 from "@/components/test1.vue"
import test2 from "@/components/test2.vue"

Vue.use(VueRouter)

const routes = [
    { path: '/test1', component: test1 },
    { path: '/test2', component: test2 }
]

const router = new VueRouter({
    routes: routes
})

export default router