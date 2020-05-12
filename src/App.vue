<template>
  <div id="app">
    <div id="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <a class="navbar-brand" href="/">iikannjinologo</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="ナビゲーションの切替">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/test1">ページ１へ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/test2">ページ２へ</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
