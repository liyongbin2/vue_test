export default {
  addCart (context, payload) {
    return new Promise((resolve, reject) => {
      // payload新添加的商品
      // 当又有添加的新商品时，查找cartList里面是否已经添加过了
      let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldproduct) {
        // oldproduct.count += 1
        context.commit('AddCount', oldproduct)
        resolve('商品数量+1')
      } else {
        payload.count = 1
        payload.isChechk = false
        // state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加新的商品')
      }
      reject('错误')
    })
  }
}