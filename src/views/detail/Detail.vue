<template>
  <div>
    {{iid}}
  </div>
</template>

<script>

  export default {
    name:'Detail',
    props:[''],
    data () {
      return {
          iid: null
      };
    },
    created() {
        this.iid = this.$route.params.iid
        // console.log(this.iid)
    },

  }

</script>
<style lang='' scoped>

</style>