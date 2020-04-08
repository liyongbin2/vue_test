import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import state from './state'
// 安装插件
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
  state,
  // mutations唯一的目的是修改state中的状态，所以不要在里面添加一些方法或者流程，所以应该放在action里面
  mutations,
  actions
})

// 挂载Vue实例

export default store