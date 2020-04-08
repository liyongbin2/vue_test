<template>
  <div class="cart-item">
    <div class="item-select">
      <CheckButtom class="checkBtn"
                   :isCheck="this.product.isChechk"
                   @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="product.image"
           alt="">
    </div>
    <div class="content">
      <div class="title">
        <p>{{product.title}}</p>
      </div>
      <div class="desc">{{product.desc}}</div>
      <div class="price">
        <div class="realPrice">￥{{product.price}}</div>
        <div class="count">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButtom from 'components/common/checkButtom/CheckButtom.vue'
export default {
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },

  components: {
    CheckButtom
  },
  methods: {
    checkClick () {
      this.product.isChechk = !this.product.isChechk
    }
  },
}

</script>
<style  scoped>
.cart-item {
  height: 18.75%;
  width: 100%;
  display: flex;
  padding: 8px;
  border-bottom: 2px solid #eee;
}
.item-select {
  text-align: center;
  margin-right: 10px;
  padding-top: 5%;
  width: 16px;
}

.item-img {
  padding-left: 5px;
  padding-right: 15px;
}
.item-img img {
  height: 60px;
  width: 60px;
  border-radius: 10px;
}
.content {
  width: 60%;
}
.title {
  width: 100%;
}
.title p {
  margin-top: 0;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.desc {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  color: gray;
  position: relative;
  bottom: 10px;
}
.price {
  position: relative;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
}
.realPrice {
  color: red;
}
</style>
