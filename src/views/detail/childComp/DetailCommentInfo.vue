<template>
  <div v-if="Object.keys(commentInfo).length !== 0"
       class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar"
           alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
    </div>
    <div class="info-other">
      <span class="date">{{commentInfo.created | showDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="info-imgs">
      <img :src="item"
           alt=""
           v-for="(item,index) in commentInfo.images"
           :key="index">
    </div>
  </div>
</template>

<script>
import { formatDate } from 'commonjs/formatDate.js'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
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

  filters: {
    showDate (value) {
      // 1.将时间戳转换为date对象
      const date = new Date(value * 1000)
      // 2.将date格式化
      return formatDate(date, 'yyyy-MM-dd')
    }
  }

}

</script>
<style  scoped>
.comment-info {
  border-top: 4px solid #eee;
}
.info-header {
  display: flex;
  height: 44px;
  border-bottom: 4px solid #eee;
}
.header-title {
  margin-left: 5px;
  padding-top: 11px;
}
.header-more {
  position: relative;
  padding-top: 11px;
  left: 65%;
}
.info-user {
  position: relative;
  top: 70%;
}
.info-user img {
  padding: 5px;
  height: 13%;
  width: 13%;
  border-radius: 50%;
}
.info-user span {
  margin-left: 5px;
  position: relative;
  bottom: 15px;
}
.info-detail p {
  font-size: 14px;
  color: #778899;
  margin-left: 15px;
}

.info-other span {
  margin-left: 15px;
  color: gray;
  font-size: 14px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-left: 10px;
  padding: 5px;
}
.info-imgs {
  border-bottom: 2px solid #eee;
}
</style>
