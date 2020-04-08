<template>
  <div class="bottom-bar">
    <div class="left">
      <div>
        <img src="~assets/img/detailBottomNavBar/旺旺.svg"
             alt="">
        <div class="BNVtitle">客服</div>
      </div>
      <div>
        <img src="~assets/img/detailBottomNavBar/店铺.svg"
             alt="">
        <div class="BNVtitle">店铺</div>
      </div>
      <div>
        <img src="~assets/img/detailBottomNavBar/favor.svg"
             alt="">
        <div class="BNVtitle">收藏</div>
      </div>
    </div>
    <div class="right">
      <div class="rLeft"
           @click="addToCart">
        <img src="~assets/img/detailBottomNavBar/购物车添加.svg"
             alt="">
        <div class="BNVtitle">我的购物车</div>
      </div>
      <div class="buy">
        <div class="BNVtitle">购买</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'DetailBottomBar',
  props: [''],
  data () {
    return {

    }
  },
  methods: {
    addToCart () {
      this.$emit('addToCart')
    }
  },
}

</script>
<style scoped>
.bottom-bar {
  position: relative;
  bottom: 49px;
  height: 49px;
  background-color: white;
  display: flex;
  width: 100%;
  text-align: center;
}
.bottom-bar div {
  width: 100%;
}
img {
  padding: 6px;
  margin-left: 3.75px;
  width: 25px;
  height: 25px;
}
.BNVtitle {
  position: relative;
  top: -8px;
  font-size: 12px;
}
.left {
  display: flex;
  flex: 1;

  border-right: 1px solid #eee;
}
.right {
  display: flex;
  flex: 1;
}
.rLeft {
  background-color: #ffd700;
}
.buy {
  background-color: #ff69b4;
  color: white;
}
.buy div {
  position: relative;
  top: 13.3px;
  font-size: 20px;
}
</style>
