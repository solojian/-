<template>
    
       
            <div class="img">
                <img :src="baseUrl+item" alt="fire" @load='loadImg'>
                <div class="caption">
                    <p>we are not funfy !!!</p>
                </div>
            </div>


</template>
<script>
export default {
  name: "Thumbnail",
  data () {
    return {
        baseUrl:'http://localhost:3000/public/'
    }
  },
  props: {
      item:String
  },
  methods: {
      loadImg() {
          this.$emit('toImgLoad')
      }
  }
}
</script>
<style lang="css" scoped>
    .img {
        width: 48%;
        height: 206px;
        text-align: center;
    }
    .img img {
        width: 100%;
        height: 190px;
    }
</style>