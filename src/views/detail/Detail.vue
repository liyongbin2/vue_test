<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"
                  @titleClick="titleClick"
                  ref="nav"></DetailNavBar>
    <Scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="contentscroll">
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
      <DetailParamsInfo :goodsparam="goodsparam"
                        ref="params" />
      <DetailCommentInfo :commentInfo="commentInfo"
                         ref="comment" />
      <GoodsList :goods="recommend"
                 ref="recommend"></GoodsList>
    </Scroll>
    <BackTop v-show="isShowBackTop"
             @click.native="backClick" />
    <DetailBottomBar @addToCart="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from './childComp/DetailNavBar.vue'
import DetailBaseInfo from './childComp/DetailBaseInfo.vue'
import DetailShopInfo from './childComp/DetailShopInfo.vue'
import DetailGoodsInfo from './childComp/DetailGoodsInfo.vue'
import DetailParamsInfo from './childComp/DetailParamsInfo.vue'
import DetailCommentInfo from './childComp/DetailCommentInfo.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailBottomBar from './childComp/DetailBottomBar.vue'
import BackTop from 'components/content/backTop/BackTop.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
//网络请求模块
import { getDetail, getRecommend, Goods, Shop, GoodsParam } from 'network/detail.js'

// import { debounce } from 'commonjs/utils.js'
import { itemListenerMixin } from 'commonjs/itemListenerMixin.js'
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
      goodsparam: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      isShowBackTop: false
    };
  },
  mixins: [itemListenerMixin],
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
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
      // 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

    })
    // 请求推荐数据
    getRecommend().then(res => {
      console.log(res)
      this.recommend = res.data.list
    })
    /***
    this.$nextTick会在dom节点渲染完后回调，所以在这里实现点击参数等内容进行跳转，
    但是，只是最新数据的dom节点渲染完后会回调，如果图片没有加载完成，一样会获取到一个错误的高度
    因为图片加载会比较慢。
        this.$nextTick(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(-this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(-this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop)
          console.log(this.themeTopYs)
        })
     */
  },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh()
      // 在图片加载完成后获取高度,防止调用太频繁，使用防抖函数，
      // +44的原因是在NavBar中的高度影响，不加的话位置会获取低了44
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
      console.log(this.themeTopYs)
    },
    titleClick (index) {
      console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)

    },
    contentscroll (position) {
      this.isShowBackTop = position.y < -1000
      // 获取滚动y的高度
      const positionY = -position.y
      let length = this.themeTopYs.length
      // 将获取到positionY和themeTopYs[]中的高度比较
      // this.$refs.nav.currentIndex !== index && ((index < this.themeTopYs.length - 1 && positionY > this.themeTopYs[index] && positionY <= this.themeTopYs[index + 1]) || (index === this.themeTopYs.length - 1 && positionY > this.themeTopYs[index]))
      for (let index = 0; index < length; index++) {
        // if (this.$refs.nav.currentIndex !== index && (index < length - 1 && positionY > this.themeTopYs[index] && positionY < this.themeTopYs[index + 1]) || (index === length - 1 && positionY > this.themeTopYs[index])) {
        //   // console.log(this.themeTopYs[index])
        //   this.$refs.nav.currentIndex = index
        // }
        if (positionY > this.themeTopYs[index]) {
          this.$refs.nav.currentIndex = index
        }
      }

    },
    backClick () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    addToCart () {
      // 获取商品信息，购物车需要的东西
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // 将商品添加到购物车，vuex
      /**这种方法也可以将商品信息存入到vuex，但是不建议这么做，应该使用mutations
      this.$store.cartList.push(product)
       */
      /**这个是对vuex中的mutations请求的方式
       this.$store.commit('addCart', product)
       */
      // 这个是对vuex中actions请求的方式
      this.$store.dispatch('addCart', product).then(res => {
        // console.log(res)
        this.$toast.show(res, 1500)
      })

    }
  },
  mounted () {
    // const refresh = debounce(this.$refs.scroll.refresh)
    // this.$bus.$on('detailItemImgLoad', () => {
    //   refresh()
    // })
  },
  /**
  在create(){}里面也不行，会获取不到$el.offsetTop，会显示undefin，因为dom节点和数据都没渲染
  点击跳转第一种方式
  updated () {
    // 在保证所有节点渲染完成后才能拿到y的高度，这样就可以完成联动功能了，这里可以实现
    this.themeTopYs = []
    this.themeTopYs.push(0)
    this.themeTopYs.push(-this.$refs.params.$el.offsetTop)
    this.themeTopYs.push(-this.$refs.comment.$el.offsetTop)
    this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop)
    console.log(this.themeTopYs)
    
  }
   */


}

</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  /**这里一定要加height: 100vh,这样内容才可以滚动 */
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
  height: calc(100% - 49px);
  top: 44px;
  bottom: 49px;
}
a img {
  height: auto;
  width: 100%;
}
</style>