<template>
  <div class="fire">
    <ul class="nav nav-pills">
      <li role="presentation" class="active">
        <button class='btn btn-default' @click="aClick">a</button>
        <!-- :to={path:'/fire/a',query:{name:'me',age:12,time:'3s'}} -->
      </li>
      <li role="presentation">
        <router-link :to='"/fire/b/"+id'>b</router-link>
      </li>
    </ul>
    <router-view/>
   
  </div>
</template>
<script>
export default {
  name: "Fire",
  data () {
    return {
     id:'someone'
    }
  },
  methods: {
    aClick() {
      this.$router.push({
        path:'/fire/a',
        query: {
          name:'hie',
          age:39,
          life:'3s'
        }
      })
    }
  }
 
}
</script>
<style lang="css" scoped>
  .nav {
    display: flex;
    justify-content: space-around;
  }
  .nav li {
    text-align: center;
    width: 48%;
    height: 45px;
  }
  .btn-default {
    width: 100%;
  }
</style>