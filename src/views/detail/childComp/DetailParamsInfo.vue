<template>
  <div class="param-info"
       v-if="Object.keys(goodsparam).length !== 0">
    <table>
      <tr v-for="(tr_cm,idx_tr) in goodsparam.sizes[0]"
          :key="idx_tr">
        <td v-for="(td_cm, idx_td) in tr_cm"
            :key="idx_td">{{td_cm}}</td>
      </tr>
    </table>
    <table class="info-size">
      <tr v-for="(tr, index_tr) in  goodsparam.infos"
          :key="index_tr">
        <td>{{tr.key}}</td>
        <td class="tr_value">{{tr.value}}</td>
      </tr>
    </table>
    <div class="info-img"
         v-if="Object.keys(goodsparam.image).length !== 0">
      <img src="goodsparam.image"
           alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailParamsInfo',
  props: {
    goodsparam: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {

    }
  }

}

</script>
<style scoped>
.param-info {
  width: 100%;
}
table {
  width: 100%;
}
table td {
  border-bottom: 1px solid #eee;
  color: #696969;
}
.tr_value {
  color: #ff69b4;
}
</style>
