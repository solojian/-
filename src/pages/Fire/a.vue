<template>
     <img-list :list='list' />
</template>
<script>
import ImgList from '../../components/content/ImgList'
import request from '../../network/request'
export default {
  name: "a",
  data () {
    return {
         list:['imgs/p2376357258.jpg',
            'imgs/p2383889214.jpg',
            'imgs/p2383889218.jpg',
            'imgs/p2383889246.jpg',
            'imgs/p2385598099.jpg',
            'imgs/p2387119518.jpg'
            ]
    }
  }, 
  components: {
    ImgList
  },
  // mounted () {
  //   request({url:'/public/imgs'}).then((res) => {
  //     console.log(res)
  //   })
  // }
}
</script>
<style lang="css" scoped>
</style>