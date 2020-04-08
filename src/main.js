import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import store from './store'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'

import toast from 'components/common/toast/index.js'
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)
// 使用图片懒加载，原来img :src=路径就要改成v-lazy: 路径
Vue.use(LazyLoad)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
