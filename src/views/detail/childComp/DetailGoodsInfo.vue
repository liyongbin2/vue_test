<template>
  <div class="goods-info"
       v-if="Object.keys(detailInfo).length !==0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img :src="item"
           alt=""
           v-for="(item,index) in detailInfo.detailImage[0].list"
           :key="index"
           @load="imgLoad">
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad () {
      // 让事件只发出去一次，因为图片很多，将加载出来的图片个数进行累加再判断图片个数是不是和数据里面存放图片的数组长度相等，如果相等就发出事件imageLoad
      // 也就是只让其回调一次
      if (++this.counter === this.imagesLength) {
        this.$emit('imageLoad')
      }
    }
  },

  watch: {
    // 监听detailInfo的变化，用最新的数据长度赋值给imagesLength（也就是将图片个数总数赋值给imagesLength）
    detailInfo () {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }

}

</script>
<style scoped>
.goods-info {
  padding-top: 5px;
  background-color: white;
  margin-left: 10px;
}
.desc {
  margin-top: 15px;
  font-size: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(15, 15, 15);
}
.info-key {
  margin-left: 10px;
  margin-top: 15px;
  font-size: 20px;
}
.info-list {
  margin-top: 10px;
}
.info-list img {
  width: 100%;
}
</style>
