<template>
  <div>
    <NavBar class="car">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <CartList></CartList>
    <CartBottomBuy />
  </div>
</template>
  
  <script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComp/CartList.vue'
import CartBottomBuy from './childComp/CartBottomBuy.vue'
export default {
  name: 'Cart',
  props: [''],
  data () {
    return {

    };
  },
  components: {
    NavBar,
    CartList,
    CartBottomBuy
  },
  computed: {
    cartLength () {
      return this.$store.state.cartList.length
    }
  }

}

  </script>
  <style  scoped>
.car {
  background-color: #ff1493;
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>