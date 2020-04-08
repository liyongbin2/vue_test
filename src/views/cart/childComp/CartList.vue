<template>
  <div class="cart-list">
    <Scroll class="content"
            ref="scroll">
      <CartListItem v-for="(item,index) in cartList"
                    :key="index"
                    :product="item" />
    </Scroll>

  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {
  name: 'CartList',
  props: [''],
  data () {
    return {

    }
  },
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  },
  components: {
    Scroll,
    CartListItem
  },
  activated () {
    // 加入新的商品后要刷新
    this.$refs.scroll.refresh()
  },
}

</script>
<style  scoped>
.cart-list {
  margin-top: 44px;
  height: 85vh;
}
.content {
  overflow: hidden;
  height: 100%;
  top: 44px;
}
</style>
