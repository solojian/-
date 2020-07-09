<template>
    <div class="list" ref="list">
      <div class="content" ref="cc">
        <Thumbnail :item='item'  v-for="(item,index) in list" :key="index" @toImgLoad='toImgLoad' />
      </div>
    </div>
</template>
<script>
import Thumbnail from './Thumbnail'
import BScroll from 'better-scroll'
import {debounce} from '../../utils/utils'
export default {
  name: "ImgList",
  data () {
    return {
      scroll:null
    }
  },
  props: {
      list:Array,
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.list,{
      click: true,
      probeType:3
    })
    console.log(this.$refs.list.clientHeight)
    console.log(this.scroll.scrollerHeight)
  },
  methods: {
    toImgLoad() {
      debounce(this.scroll.refresh(),300)
      console.log('i refresh')
    }
  },
  components: {
      Thumbnail
  }
}
</script>
<style lang="css" scoped>
 .content {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
 }
 .list {
   height: 410px;
   overflow: hidden;
 }
</style>