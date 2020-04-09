<template>
  <div class="profile">
    <NavBar class="nav">
      <div slot="center">我的</div>
    </NavBar>
    <div class="top">
      <div class="userImg">
        <img src="../../assets/img/星级.svg"
             alt="">
        <div>
          <p class="pet-name">个人昵称</p>
          <p class="self-introduction">个人简介4545456165165165165165151651651</p>
        </div>
      </div>
      <div class="setting">
        <van-icon name="setting-o"
                  size="30" /><br>设置
      </div>
      <div class="history">
        <div>商品关注<br>0</div>
        <div>店铺关注<br>0</div>
        <div>喜欢的内容<br>0</div>
        <div>浏览记录<br>0</div>
      </div>
    </div>

    <div class="order">
      <div class="my-order">
        <span>我的订单</span>
        <i class="allOrder">查看全部订单></i>
      </div>
      <div class="order-serve">
        <div class="pay">
          <van-icon name="balance-pay"
                    size="30" /><br>待付款
        </div>
        <div class="deliver-goods">
          <van-icon name="home-o"
                    size="30" /><br>待发货
        </div>
        <div class="take-goods">
          <van-icon name="logistics"
                    size="30" /><br>待收货
        </div>
        <div class="comment">
          <van-icon name="edit"
                    size="30" /><br>评论
        </div>
        <div class="after-sale">
          <van-icon name="after-sale"
                    size="30" /><br>退货|退款
        </div>
      </div>
    </div>
    <div class="bottom-cart">
      这里放一些其他功能，比如客服啥啥啥的
      <van-icon name="setting-o"
                size="40" />

    </div>
  </div>
</template>
  
  <script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'Profile',
  props: [''],
  data () {
    return {

    };
  },
  components: {
    NavBar
  }

}

  </script>
  <style scoped>
.profile {
  background-color: #d3d3d3;
  height: 92vh;
}
.nav {
  background-color: #ff1493;
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.userImg {
  margin-top: 44px;
  display: flex;
}
.userImg img {
  padding: 10px;
  height: 50px;
  width: 50px;
}
.pet-name {
  font-size: 15px;
}
.setting {
  position: absolute;
  top: 59px;
  right: 20px;
  font-size: 13px;
  text-align: center;
}
.self-introduction {
  font-size: 12px;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
}
.history {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.order {
  font-size: 13px;
  position: relative;
  left: 5px;
  top: 5px;
  background-color: white;
  border: 2px solid #d3d3d3;
  border-radius: 10px;
  width: 95%;
}
.my-order {
  position: relative;
  display: flex;
  justify-content: space-between;
  right: 6px;
  padding: 10px;
  width: 95%;
  border-bottom: 2px solid #d3d3d3;
}
.allOrder {
  position: relative;
  right: 10px;
}
.order-serve {
  margin-top: 15px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.bottom-cart {
  overflow: hidden;
  font-size: 13px;
  position: relative;
  left: 5px;
  top: 5px;
  background-color: white;
  border: 2px solid #d3d3d3;
  border-radius: 10px;
  width: 95%;
  height: 44vh;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
</style>