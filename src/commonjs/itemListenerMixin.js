import { debounce } from 'commonjs/utils.js'
export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh)
    debounce(this.$refs.scroll.refresh, 50)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('ItemImgLoad', this.itemImgListener)
    // console.log('------')
  },
  deactivated () {
    this.$bus.$off('ItemImgLoad', this.itemImgListener)
  }
}