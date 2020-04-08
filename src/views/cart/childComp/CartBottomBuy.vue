<template>
  <div class="CBT">
    <div class="buy-left">
      <div class="select-all">
        <CheckButtom class="check"
                     :isCheck="isSelectAll"
                     @click.native="selctAllClick" />
        <span>全选</span>
      </div>
      <div class="total">
        合计：{{totalPrice}}
      </div>
    </div>
    <div class="buy-right"
         @click="calcClick">
      <p>去结算({{selectGoods}})</p>
    </div>
  </div>
</template>

<script>
import CheckButtom from 'components/common/checkButtom/CheckButtom.vue'
export default {
  name: 'CartBottomBuy',
  props: [''],
  data () {
    return {
    }
  },
  components: {
    CheckButtom
  },
  computed: {
    /**
    计算总价格的方法：
    一：通过过滤的方法，toFixed(2)表示保留几位小数
       totalPrice () {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.isChechk
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    二：遍历方法
    tototalText () {
      let sum = 0
      for (let item = 0; item < this.$store.state.cartList.length; item++) {
        if (this.$store.state.cartList[item].isChechk) {
          sum = sum + this.$store.state.cartList[item].price * this.$store.state.cartList[item].count
        }
      }
      return '￥' + sum.toFixed(2)
    }
  }*/
    totalPrice () {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.isChechk
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    /**
    去结算的商品总和：
    selectGoods，计算所购商品的总数，如果商品1买了3件，商品2买了1件，就显示：去结算(4)
    selectGoods () {
      return this.$store.state.cartList.filter(item => {
        return item.isChechk
      }).reduce((preValue, item) => {
        return preValue + item.count
      }, 0)
    },
    selectGoodsTest，计算所购商品的总数，如果商品1买了3件，商品2买了1件，就显示：去结算(2)
      selectGoodsTest () {
      return this.$store.state.cartList.filter(item => item.isChechk).length
    }
     */
    selectGoods () {
      return this.$store.state.cartList.filter(item => {
        return item.isChechk
      }).reduce((preValue, item) => {
        return preValue + item.count
      }, 0)
    },
    selectGoodsTest () {
      return this.$store.state.cartList.filter(item => item.isChechk).length
    },
    /**
    全选功能：优选方法三，前面的连个都要全部遍历完数组，优化不好
    方法一 通过过滤将isChechk的值过滤出来，然后判断长度，如果存在值为false的，length扣有长度，通过数值取反返回就是false
    isSelectAll (){
      if(this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.filter(item => !item.isChechk).length)
      }
    方法二 通过遍历查找是否存在isChechk值为false，如果有就直接返回false，否则返回true
     isSelectAll () {
       if(this.$store.state.cartList.length === 0) return false
       else{
           let select = false
      for (let item = 0; item < this.$store.state.cartList.length; item++) {
        if (!this.$store.state.cartList[item].isChechk) {
          select = false
        } else {
          select = true
        }
      }
      return select
    }
       }
    
    方法三 通过find方法查找是否存在isChechk值为false，如果有就直接返回false
    isSelectAll () {
      return !this.$store.state.cartList.find(item => !item.isChechk)
    }
     */
    isSelectAll () {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.isChechk)
    }
  },
  methods: {
    selctAllClick () {
      if (this.isSelectAll) {
        // console.log(this.$store.state.cartList.forEach(item => item.isChechk = true))
        this.$store.state.cartList.forEach(item => item.isChechk = false)

      } else {
        this.$store.state.cartList.forEach(item => item.isChechk = true)
      }
    },
    calcClick () {
      this.$toast.show('请选择要购买的商品', 1500)
    }

  }
}

</script>
<style  scoped>
.CBT {
  position: relative;
  bottom: 49px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.buy-left {
  display: flex;
  padding-left: 6px;
  flex: 2;
  background-color: #eeeeee;
}
.select-all {
  flex: 1.5;
  display: flex;
}
.check {
  width: 20%;
  padding-top: 8.5px;
}
.select-all span {
  font-size: 15px;
  padding-top: 13%;
  margin-left: 5%;
}
.total {
  flex: 2;
  padding-top: 5%;
  width: 60px;
  font-size: 15px;
}
.buy-right {
  text-align: center;
  width: 100%;
  flex: 1;
  color: white;
  background-color: #ff6a6a;
}
.buy-right p {
  font-size: 15px;
}
</style>
