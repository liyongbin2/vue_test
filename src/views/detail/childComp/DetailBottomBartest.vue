<template>
  <div class="bottom-bar">
    <div class="left">
      <!--
       <div>
        <img src="~assets/img/detailBottomNavBar/旺旺.svg"
             alt="">
        <div class="BNVtitle">客服</div>
      </div>
      <div>
        <img src="~assets/img/detailBottomNavBar/店铺.svg"
             alt="">
        <div class="BNVtitle">客服</div>
      </div>
      <div>
        <img src="~assets/img/detailBottomNavBar/favor.svg"
             alt="">
        <div class="BNVtitle">客服</div>
     
      </div>
    -->
      <div v-for="(item,indexl) in ImgAndTitle.left"
           :key="indexl"
           :class="isActive"
           @click="btnClick(indexl)">
        <img :src="item.imgsrc"
             alt=""
             v-show="isShow">
        <img :src="item.imgsrc1"
             v-show="!isShow"
             alt="">
        <div class="BNVtitle">{{item.title}}</div>
      </div>
    </div>
    <div class="right">
      <div v-for="(i,indexr) in ImgAndTitle.right"
           :key="indexr"
           class="rLeft">
        <img :src="i.imgsrc"
             alt=""
             v-show="!isShow">
        <img :src="i.imgsrc1"
             v-show="isShow"
             alt="">
        <div class="BNVtitle">{{i.title}}</div>
      </div>
      <div class="buy">
        <div class="BNVtitle">购买</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailBottomBartest',
  props: [''],
  data () {
    return {
      ImgAndTitle: {
        left: [
          {
            imgsrc: require('assets/img/detailBottomNavBar/旺旺.svg'),
            imgsrc1: require('assets/img/detailBottomNavBar/旺旺-fill.svg'),
            title: '客服'
          },
          {
            imgsrc: require('assets/img/detailBottomNavBar/店铺.svg'),
            imgsrc1: require('assets/img/detailBottomNavBar/店铺-fill.svg'),
            title: '店铺'
          },
          {
            imgsrc: require('assets/img/detailBottomNavBar/favor.svg'),
            imgsrc1: require('assets/img/detailBottomNavBar/favor_fill.svg'),
            title: '收藏'
          }
        ],
        right: [
          {
            imgsrc: require('assets/img/detailBottomNavBar/购物车添加.svg'),
            imgsrc1: require('assets/img/detailBottomNavBar/购物车-fill.svg'),
            title: '添加购物车'
          }
        ]

      },
      isActive: false,
      isShow: false
    }

  },
  methods: {
    btnClick (index) {
      console.log(index)
      return this.isShow = !this.isShow
    }
  },
}

</script>
<style  scoped>
.bottom-bar {
  position: fixed;
  height: 49px;
  background-color: white;
  display: flex;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
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
  text-align: center;
  border-right: 1px solid #eee;
}
.right {
  display: flex;
  flex: 1;
  text-align: center;
}
.rLeft {
  /**  background-color: #ffa54f; */
}
.buy {
  text-align: center;

  background-color: #ff69b4;
  color: white;
}
.buy div {
  position: relative;
  top: 13.3px;
  font-size: 20px;
}
</style>
