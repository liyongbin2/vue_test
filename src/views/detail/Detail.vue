<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"></DetailNavBar>
    <Scroll class="content"
            ref="scroll">
      <el-carousel heigth="144px">
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
      <DetailGoodsInfo :detailInfo="detailInfo"
                       @imageLoad="imageLoad" />
      <DetailParamsInfo :goodsparam="goodsparam" />
    </Scroll>

  </div>
</template>

<script>
import DetailNavBar from './childComp/DetailNavBar.vue'
import DetailBaseInfo from './childComp/DetailBaseInfo.vue'
import DetailShopInfo from './childComp/DetailShopInfo.vue'
import DetailGoodsInfo from './childComp/DetailGoodsInfo.vue'
import DetailParamsInfo from './childComp/DetailParamsInfo.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
//网络请求模块
import { getDetail, Goods, Shop, GoodsParam } from 'network/detail.js'
export default {
  name: 'Detail',
  props: [''],
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      goodsparam: {}
    };
  },
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo
  },
  created () {
    //保存iid
    this.iid = this.$route.params.iid
    //  通过query: this.iid = this.$route.query.iid

    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result
      console.log(res)
      // 获取顶部轮播图数据源
      this.topImages = data.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 商家信息
      this.shopInfo = new Shop(data.shopInfo)
      // 获取详细数据
      this.detailInfo = data.detailInfo
      // 获取产品参数
      this.goodsparam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    })
  },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh()
    }
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
  position: fixed;
  z-index: 9;
  width: 100%;
  background-color: #fff;
}
.content {
  overflow: hidden;
  height: 100%;
  top: 44px;
  bottom: 49px;
}
a img {
  height: auto;
  width: 100%;
}
</style>