<template>
  <div>
    <img src="~assets/img/checkBtn/checkmark.svg"
         alt=""
         v-show="!isCheck">
    <img src="~assets/img/checkBtn/checkmark (1).svg"
         alt=""
         v-show="isCheck">
  </div>
</template>

<script>

export default {
  name: 'CheckButtom',
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  }
}

</script>
<style  scoped>
img {
  widows: 100%;
  width: 100%;
  border: 1px solid #aaa;
  background-color: pink;
  border-radius: 50%;
}
</style>
