<template>
  <div class="col-12" id="works">
    <h1>Works</h1>
    <h4 class="col-12">制作物</h4>

    <div class="row">
      <div class="col-12 px-3">
        ポートフォリオサイト
        <div class="col-12 text-center py-2">
          <img class="aboutimg" src="../static/portfolio.png"/>
        </div>

        <div class="col-12">
          <ul>
            <li>
              ポートフォリオサイトが欲しくなったので作成
            </li>
            <li>
              使用技術:Vue.js、Bootstrap
            </li>
            <li>
              <label>
                <font-awesome-icon icon="github" class="githubicon fa-3x p-2" />
                <a href="https://github.com/0yatsu/portfolio" target="_blank" rel="noopener noreferrer">Githubリポジトリ</a>
              </label>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="col-12 px-3">
        WEBチャットアプリ
        <div class="col-12 text-center py-2">
          <img class="aboutimg" src="../static/atchat.png"/>
        </div>

        <div class="col-12">
          <ul>
            <li>
              とある企業のオンラインスキルアップ課題として作成
            </li>
            <li>
              使用技術:Vue.js、Bootstrap、Websocket
            </li>
            <li>
              <label>
                <font-awesome-icon icon="github" class="githubicon fa-3x p-2" />
                <a href="https://github.com/0yatsu/online-skillup" target="_blank" rel="noopener noreferrer">Githubリポジトリ</a><br>
                <a href="https://online-skillup-0yatsu.herokuapp.com/" target="_blank" rel="noopener noreferrer">atChat</a>
              </label>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="col-12 px-3">
        2Dアクションゲーム
        <div class="col-12 text-center py-2">
          <img class="aboutimg" src="../static/2daction.png"/>
        </div>

        <div class="col-12">
          <ul>
            <li>
              YouTubeでゲーム開発をやっている動画を見て自分でもやりたくなったので作成
            </li>
            <li>
              使用技術:Unity、C#、WebGL
            </li>
            <li>
              現在このページで遊べるように勉強中
              <!-- <unity
                src="public\unitybuild\Build\public.json"
                unityLoader="public\unitybuild\Build\UnityLoader.js">
              </unity> -->
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- <div class="row">
      <div class="col-6">
        sukusyotoka
      </div>
      <div class="col-6">
        setumei
      </div>
    </div> -->

  </div>
</template>

<script>
// import unity from 'vue-unity-webgl'

export default {
  components: {
    // unity
  },
  data() {
    return {
      // gameWidth: window.innerWidth,
      // gameHeight: window.innerHeight * 0.96 - 134 // 134はヘッダー等の値
      // navinput: {
      //   type: Boolean,
      //   default: false,
      // }
    }
  },

}
</script>