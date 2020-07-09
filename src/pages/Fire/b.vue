<template>
  <div id="ofb">
    <header class="header">
      <div class="d">豆</div>
      <div class="info">
        <h2>douban APP</h2>
        <p>read your book movie life</p>
      </div>
      <div class="btn-green">
        ''
        <span> open app </span>
      </div>
    </header>
    <b-guide/>
  </div>
</template>
<script>
import BGuide from './BGuide'
export default {
  name: "b",
  data () {
    return {
     
    }
  },
  components: {
    BGuide
  }
}
</script>
<style lang="css" scoped>
  .header {
    background-color: #f7f7f7;
    display: flex;
    box-sizing: border-box;
    padding: 9px;
    align-items: center;
  }
  .d {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    background-color:#42bd56;
    color: white;
    font-size: 28px;
    text-align: center;
    line-height: 38px;
  }
  .info {
    flex: 1;
    margin-left: 3px;
  }
  .info h2 {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    margin: 0;
  }
  .info p {
    height: 16px;
    line-height: 16px;
    font-size: 12px;
  }
  .btn-green span {
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    text-align: center;
    background-color: #42bd56;
    border-radius: 8px;
    color: white;

  }

</style>