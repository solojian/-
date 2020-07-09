<template>
    <div id="cpp">
        <div class="header">
            <h2>we are not sourece</h2>
            <div class="title">
                 <div class="title_item" v-for="(item,index) in title" :key="index"
            :class="{active: $route.path.indexOf(title[index]) !== -1}" @click="activeC(index)">
                {{item}}
            </div>
            </div>
           
        </div>
 
            <keep-alive>
                <router-view/>
            </keep-alive>
   
       <Toast ref="toast"></Toast>
       <button class="btn btn-primary" @click="toastC">toast</button>
    </div>
</template>
<script>
import Toast from './components/common/toast/Toast'

export default {
  name: "App",
  data () {
    return {
        title: ['ours','file','fire'],
        currentIndex: 0
    }
  },

  methods: {
      toastC() {
          this.$refs.toast.show('we',1000)
      },
      activeC(index) {
          this.currentIndex = index
          this.$router.replace('/'+this.title[index])
      }
  },
  components: {
      Toast
  }
}
</script>
<style lang="css" scoped>
    #cpp {
        overflow: hidden;
        height: 100vh;
    }
    .header h2 {
       text-align: center;
    }
   
    .title {
        display: flex;
    }
    .title_item {
        flex: 1;
        text-align: center;
    }
     .title_item.active {
         color: chartreuse;
     }
     .btn-primary {
         width: 79%;
         position: absolute;
         bottom: 0;
         left: 50%;
        transform: translateX(-50%);         
     }
</style>