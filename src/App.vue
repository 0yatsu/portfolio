<template>
  <div id="app">
    <!-- <slide right :closeOnNavigation="true" width="2000">
      <router-link to="/" class="">Home</router-link>
      <router-link to="/about" class="">About</router-link>
      <router-link to="/skills" class="">Skills</router-link>
      <router-link to="/works" class="">Works</router-link>
      <router-link to="/contact" class="">Contact</router-link>
    </slide>
    <div id="page-wrap"></div>
    -->
    <!-- <div class="btn-group-toggle float-right" data-toggle="buttons">
      <label class="btn btn-info active">
        <input type="checkbox">
      </label>
    </div> -->
    <div class="col-12">
      <!-- <label for="nav-input">{{ checked }}</label> -->
      <div id="nav-drawer" name="navdrawer" class="float-right">
        <!-- ハンバーガーメニュー -->
        <input id="nav-input" v-model="checked" type="checkbox" class="invisible">
        <label id="baricon" for="nav-input">
          MENU
          <font-awesome-icon icon="bars" class="baricon fa-3x p-2" />
        </label>
        
        <!-- メニュー展開時背景 -->
        <label id="nav-overlay" for="nav-input"></label>

        <div id="nav-content">
          <label class="text-right col-12" id="xicon" for="nav-input">
            <font-awesome-icon icon="times" class="fa-2x mt-2" />
          </label>

          <div class="">
            <ul class="navbar-nav">
              <li class="nav-item active text-center py-2" v-on:click="navclose()">
                <router-link to="/" class="nav-link">
                  <label class="" id="navmenu" for="nav-input">Home</label>
                </router-link>
              </li>

              <li class="nav-item active text-center py-2" v-on:click="navclose()">
                <router-link to="/about" class="nav-link">
                  <label id="navmenu" for="nav-input">About</label>
                </router-link>
              </li>

              <li class="nav-item active text-center py-2" v-on:click="navclose()">
                <router-link to="/skills" class="nav-link">
                  <label id="navmenu" for="nav-input">Skills</label>
                </router-link>
              </li>

              <li class="nav-item active text-center py-2" v-on:click="navclose()">
                <router-link to="/works" class="nav-link">
                  <label id="navmenu" for="nav-input">Works</label>
                </router-link>
              </li>

              <li class="nav-item active text-center py-2" v-on:click="navclose()">
                <router-link to="/contact" class="nav-link">
                  <label id="navmenu" for="nav-input">Contact</label>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
   
    <!-- <div id="navbar">
      <nav class="navbar navbar-expand navbar-light w-100">
        <ul class="navbar-nav">
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
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div> -->
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
    <div class="">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

//import { isOpen } from '@/assets/sass/main.scss'

export default {
  name: 'App',
  components: {
  },
    data() {
    return {
      checked: false,
      // navinput: {
      //   type: Boolean,
      //   default: false,
      // }
    }
  },
  methods: {
    navclose: function () {
      console.log('click!!!')
      this.$data.checked = false;
    },
  },
}
</script>