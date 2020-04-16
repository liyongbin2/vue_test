<template>
  <div>
    <NavBar class="NavBar">
      <div slot="left"
           class="backimg"
           @click="backclick">
        <img src="~assets/img/back.svg"
             alt="">
      </div>
      <div slot="center"
           class="title">
        <div v-for="(item,index) in titles"
             :key="index"
             class="title-item"
             :class="{active: index === currentIndex}"
             @click="titleclick(index)">{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
// 网络请求
export default {
  name: 'DetailNavBar',
  props: [''],
  created () {
    // 保存存入的iid
    this.iid = this.$route.params.iid
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    };
  },

  components: {
    NavBar
  },
  methods: {
    titleclick (index) {
      //两个都可以
      // console.log(index)
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backclick () {
      // this.$router.back()
      this.$router.go(-1)
    }
  },

}

</script>
<style scoped>
.title {
  display: flex;
}

.title-item {
  flex: 1;
}

.backimg {
  height: 44px;
}

.backimg img {
  padding: 6px;
  margin-left: 10px;
  width: 34px;
  height: 34px;
}

.active {
  color: red;
}
</style>