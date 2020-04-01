<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"></DetailNavBar>
    <Scroll class="content">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,idex) in topImages"
                          :key="idex">
          <a :href="item.link">
            <img :src="item"
                 alt="">
          </a>
        </el-carousel-item>
      </el-carousel>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shopInfo" />
    </Scroll>

  </div>
</template>

<script>
import DetailNavBar from './childComp/DetailNavBar.vue'
import DetailBaseInfo from './childComp/DetailBaseInfo.vue'
import DetailShopInfo from './childComp/DetailShopInfo.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
//网络请求模块
import { getDetail, Goods, Shop } from 'network/detail.js'
export default {
  name: 'Detail',
  props: [''],
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {}
    };
  },
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  created () {
    //保存iid
    this.iid = this.$route.params.iid

    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result
      // 获取顶部轮播图数据源
      this.topImages = data.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 商家信息
      this.shopInfo = new Shop(data.shopInfo)
    })
  },

}

</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  /**这里一定要加height: 100vh,这样内容才会显示出来 */
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  overflow: visible;
  position: absolute;
  top: 44px;
  bottom: 49px;
}

a img {
  width: 100%;
}
</style>