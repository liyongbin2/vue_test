export default {
  /** addCart (state, payload) {
     // payload新添加的商品
     // 当又有添加的新商品时，查找cartList里面是否已经添加过了
     let oldproduct = state.cartList.find(item => item.iid === payload.iid)
     if (oldproduct) {
       oldproduct.count += 1
     } else {
       payload.count = 1
       state.cartList.push(payload)
     }
   } */
  AddCount (state, payload) {
    payload.count++
  },
  addToCart (state, payload) {
    state.cartList.push(payload)
  }
}
