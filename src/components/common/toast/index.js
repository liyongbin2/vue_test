import Toast from './Toast'

const obj = {}
obj.install = function (Vue) {
  // console.log('一开始就执行了install', Vue)
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 2.new方式根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()
  // 3. 将组件对象手动挂载到某一个元素里面
  toast.$mount(document.createElement('div'))
  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  // 1-4步的作用是将Toast组件上的html页面挂载到需要用到$toast的页面上
  Vue.prototype.$toast = toast
}
export default obj

//Vue.use(toast),使用use方法会执行install