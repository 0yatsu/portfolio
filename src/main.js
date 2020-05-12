import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import test1 from './components/test1.vue'
import router from './router/router.js'
import App from './App.vue'

// Vue.use(VueRouter)

Vue.config.productionTip = false

// 2. ルートをいくつか定義します
// 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
// このコンポーネントは実際の `Vue.extend()`、
// またはコンポーネントオプションのオブジェクトでも構いません。
// ネストされたルートに関しては後で説明します
// const routes = [
//   { path: '/', component: HelloWorld },
//   { path: '/test1', component: test1 }
// ]

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
// 追加のオプションをここで指定できますが、
// この例ではシンプルにしましょう
// const router = new VueRouter({
//   routes // `routes: routes` の短縮表記
// })


// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')