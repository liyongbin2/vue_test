<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo"
           alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">

        <table>
          <tr v-for="(item, index) in shop.score"
              :key="index">
            <td>{{item.name}}</td>
            <td class="score"
                :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better"
                :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>

      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value
      return (value / 10000).toFixed(1) + '万'
    }
  }

}

</script>
<style scoped>
.shop-info {
  padding-top: 5px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  padding-left: 5px;
}
.shop-top img {
  width: 50px;
  height: 50px;
  border: 1px solid gainsboro;
  border-radius: 50%;
}
.title {
  font-size: 20px;
  margin-left: 15px;
  position: relative;
  top: -20px;
  color: darkgrey;
}
.shop-middle {
  display: flex;
}
.shop-middle-left {
  padding-top: 10px;
  display: flex;
  width: 50%;
  border-right: 2px solid gainsboro;
}
.info-sells {
  text-align: center;
  flex: 0.8;
}
.sells-count {
  font-size: 25px;
}
.sells-text {
  margin-top: 6px;
}
.info-goods {
  text-align: center;
}
.goods-count {
  font-size: 25px;
}
.goods-text {
  margin-top: 6px;
}
.shop-middle-right {
  margin-left: 15%;
}
.score {
  padding-left: 10px;
}
.score-better {
  color: red;
}
.better {
  background-color: forestgreen;
  color: #eee;
}
.better-more {
  background-color: red;
  color: #eee;
}
.shop-bottom {
  position: relative;
  left: 25%;
  margin-top: 10px;
  width: 50%;
}
.enter-shop {
  text-align: center;
  font-size: 20px;
  background-color: hsl(209, 64%, 84%);
  border: 2px solid #b9ddff;
  border-radius: 15px;
  color: rgb(32, 31, 31);
}
</style>
