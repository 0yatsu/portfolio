<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills" class="nav-link">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/works" class="nav-link">Works</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </li>
      </ul>
    </nav>
    <!-- 
    <button @click="toggle" type="button" class="btn btn-secondary float-right">
      <font-awesome-icon icon="bars" />
    </button>
    <Drawer @close="toggle" align="right" :closeable="true">
      <div v-if="open">
        <ul class="">
          <li class="">
            <router-link to="/">Home</router-link>
          </li>
          <li class="">
            <router-link to="/test1">Test1</router-link>
          </li>
          <li class="">
            <router-link to="/test2">Test2</router-link>
          </li>
        </ul>
      </div>
    </Drawer>
     -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import { VueLoading } from 'vue-loading-template'
import Drawer from "vue-simple-drawer"

export default {
  name: 'App',
  components: {
    // VueLoading
    Drawer,
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>