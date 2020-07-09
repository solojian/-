<template>
     <div class="app-content">
      <ul class="guide">
        <li v-for="(item,index) in applist" :key="index">
          <h2>{{item.title}}</h2>
          <span>{{item.tagging}}</span>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: "BGuide",
  data () {
    return {
         applist:[
        {
        title:'FIN',
        tagging: 'more moive in here'
        },
         {
        title:'OOK',
        tagging: 'all we can read'
        },
         {
        title:'ABO',
        tagging: 'just so so'
        },
         {
        title:'END',
        tagging: 'no one know it'
        },
         {
        title:'PLE',
        tagging: 'but not me'
        }, {
        title:'ALL',
        tagging: 'git u hello'
        },
      ]
    }
  }
}
</script>
<style lang="css" scoped>
    .app-content {
        width: 100%;
    }
    .guide {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 ;
        padding: 0;
    }
    .guide li {
        width:33%;
        height: 79px;
        text-align: center;
        list-style: none;
    }
    .guide li h2 {
        color: #2384E8;
        font-size: 22px;
        height: 25px;
        line-height: 25px;
    }
    .guide li:nth-child(2) h2 {color: #7A6ADB;}
    .guide li:nth-child(3) h2 {color: #9F7860;}
    .guide li:nth-child(4) h2 {color: #2AB8CC;}
    .guide li:nth-child(5) h2 {color: #F48F2E;}
    .guide li:nth-child(6) h2 {color: #42BD56;}
    
    .guide li span {
        display: inline-block;
        color: #818181;
        font-size: 14px;
        height: 16px;
        line-height: 16px;
    }
</style>