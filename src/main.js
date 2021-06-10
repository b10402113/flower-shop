import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/styles/global.scss'
// 動態加載rem基準值
import 'amfe-flexible'
// import vant
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
