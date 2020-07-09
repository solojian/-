<template>
    <div id="tab" @load="TabLoad">
        <h3 :class="{activity:currentIndex == 1}" @click="currentIndex=1">左</h3>
        <h3 :class="{activity:currentIndex == 2}" @click="currentIndex=2">中</h3>
        <h3 :class="{activity:currentIndex == 3}" @click="currentIndex=3">右</h3>
    </div>
</template>
<script>
export default {
  name: "Tab",
  data () {
    return {
        currentIndex:1
    }
  },
  methods: {
      TabLoad() {
          console.log('d')
          this.$emit('loadTab')
      }
  }
}
</script>
<style lang="css" scoped>
    #tab {
        /* position: sticky;
        top: 60px; */
        display: flex;
    }
    #tab h3 {
        flex: 1;
        text-align: center;
    }
    #tab h3.activity {
        color: yellowgreen;
    }
</style>
