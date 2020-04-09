<template>
  <div class="category">
    <NavBar class="category-navbar">
      <div slot="center">分类</div>
    </NavBar>
    <div class="category-list">
      <ul>
        <li v-for="(item,index) in categoryList"
            :key="index"
            @click="liClick(index)">
          <div>{{item}}</div>
        </li>
      </ul>
    </div>
    <div class="category-content"></div>
  </div>

</template>
  
  <script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'Category',
  props: [''],
  data () {
    return {
      categoryList: ['热门', '热门', '热门', '热门', '热门', '热门', '热门', '热门']
    }
  },
  methods: {
    liClick (index) {
      console.log(index)
    }
  },
  components: {
    NavBar
  }
}


  </script>
  <style scoped>
.category {
  display: flex;
  height: 100vh;
}
.category-navbar {
  background-color: #ff1493;
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.category-list {
  flex: 1;
  margin-top: 44px;
  text-align: center;
}
.category-list li {
  width: 100%;
  border: 1px solid #eee;
  padding-top: 15px;
  position: relative;
}
.category-list li div {
  position: relative;
  bottom: 8.5px;
}
.category-content {
  flex: 2.5;
}
</style>