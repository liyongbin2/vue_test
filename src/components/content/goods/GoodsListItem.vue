<template>
  <div class="goods-list-item"
       @click="itemclick">
    <img v-lazy="shouImage"
         alt=""
         @load="imgLoad">
    <div class="goodsinfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    };
  },
  methods: {
    //获取图片数据是否加载
    imgLoad () {
      /**
       * $bus事件总线，通过$emit发送一个事件给$bus，
       * 在home.vue里面监听这个事件总线，如果已经得
       * 知这些图片加载完，则发送这个事件给home.vue
       * 的this.$bus.$on(),然后告诉它这个时候可以进
       * 行刷新高度了，也就是使用scroll.refresh()方
       * 法。
       * this.$bus.$emit('ItemImgLoad')
      */

      // 监听home图片加载完成或者detail加载完成发送对应的ItemImgLoad事件
      /**
      方法1：
       if (this.$route.path.indexOf('/home')) {
        this.$bus.$emit('homeItemImgLoad')
      } else if (this.$route.path.indexOf('/detail')) {
        this.$bus.$emit('detailItemImgLoad')
      }
       */
      /**
      方法2：在Home.vue组件中通过this.$bus.$off('ItemImgLoad', 函数)来
      取消对home的全局事件监听，意思就是只有使用home这个组件时才监听ItemImgLoad
      事件。如果没有函数，直接this.$bus.$off('ItemImgLoad')会取消这个监听事件，
      所以需要使用函数来定点取消。home组件中在data里面定义一个存放函数的变量，在
      mounted中保存这个函数，然后再this.$bus.$off('ItemImgLoad', 函数)来取消。
       */
      /**
      方法3：混入mixin
      在commonjs里面抽离了重复代码，就是方法二中所需要的代码
      然后再不同的需要使用的组件中导入使用即可，在要用的组件中添加
      mixin: [itemListenerMixin](itemListenerMixin已经在commonjs中导出)
       */
      this.$bus.$emit('ItemImgLoad')

    },
    itemclick () {
      this.$router.push('./detail/' + this.goodsItem.iid)
      // 对象方式
      // this.$router.push({
      //   path: '/detail',
      //   querry: {
      //     iid: this.goodsItem.iid
      //   }
      // })
    }
  },
  computed: {
    shouImage () {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },

}

</script>
<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  /* margin-top: 20px */
  width: 48%;
  position: relative;
}
.goods-list-item img {
  width: 100%;
  border-radius: 0.1rem;
}
.goodsinfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsinfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsinfo .price {
  color: red;
  margin-right: 20px;
}
.goodsinfo .collect {
  position: relative;
}
.goodsinfo .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/星级.svg") 0 0/14px 14px;
}
</style>