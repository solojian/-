<template>
  <div id="ours">
      <div class="header">
       <Tab v-show="isShow"/>
      </div>
     <section class="content" ref="content">
                <ul class="list-group">
                    <li class="list-group-item">me1</li>
                    <li class="list-group-item">me2</li>
                    <li class="list-group-item">me3</li>
                    <li class="list-group-item">me4</li>
                    <li class="list-group-item">me5</li>
                    <li class="list-group-item">me6</li>
                    <li class="list-group-item">me7</li>
                    <li class="list-group-item">me8</li>
                    <li class="list-group-item">me9</li>
                    <li class="list-group-item">
                      <Tab @loadTab='loadTab' ref="tab"/>
                    </li>
                    <li class="list-group-item">me11</li>
                    <li class="list-group-item">me12</li>
                    <li class="list-group-item">me13</li>
                    <li class="list-group-item">me14</li>
                    <li class="list-group-item">me15</li>
                    <li class="list-group-item">me16</li>
                    <li class="list-group-item">me17</li>
                    <li class="list-group-item">me18</li>
                    <li class="list-group-item">me19</li>
                    <li class="list-group-item">me20</li>
                    <li class="list-group-item">me21</li>
                    <li class="list-group-item">me22</li>
                    <li class="list-group-item">me23</li>
                    <li class="list-group-item">me24</li>
                    <li class="list-group-item">me25</li>
                    <li class="list-group-item">me26</li>
                    <li class="list-group-item">me27</li>
                    <li class="list-group-item">me28</li>
                    <li class="list-group-item">me29</li>
                    <li class="list-group-item">me30</li>
                    <li class="list-group-item">me31</li>
                </ul>
                
            </section>
  </div>
    
</template>
<script>
import BScroll from 'better-scroll'
import Tab from '../components/content/Tab'
export default {
  name: "Ours",
  data () {
    return {
      scroll: null,
      isShow:false,
      tabOffsetTop:0
    }
  },
  components: {
    Tab
  },
  
  mounted() {
    // axios.get('http://localhost:3000/api/queryStudents?studentName=张三').then(res => {
    //   console.log(res.data)
    // })
    this.scroll = new BScroll(this.$refs.content,{
      probeType:3
    })
      this.scroll.on('scroll',position => {
        this.isShow = (-position.y) > 380
      })
    // this.$on('loadTab',() => {
    
    // })
    // console.log(this.scroll)
  },
  methods: {
    loadTab() {
        this.tabOffsetTop = this.$refs.tab.$el.tabOffsetTop
      console.log(this.tabOffsetTop)
    }
  }
}
</script>
<style lang="css" scoped>
 .content {
        height: 70vh;
        overflow: hidden;
        position: relative;
    }
    .header {
      position: absolute;
      z-index: 3;
      background-color: #fff;
      width: 100%;
    }
    .list li:after {
        content: 'no';
        width: 10px;
        height: 100vw;

    }
</style>