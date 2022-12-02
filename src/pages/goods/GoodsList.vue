<template>
  <div class="box">
    <div class="little-box" v-for="item in 21">
      <router-link :to="{name: 'goods_info', params: {id: 1}}">
        <img :src="Img">
        <h4>13代i7笔记本</h4>
        <i>￥ 14999.9</i>
        <span>剩余10件</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Img from '@/assets/images/macbookpro.png'

export default {
  name: "GoodsList",
  data(){
    return{
      Img
    }
  },
}
</script>

<style scoped lang='less'>
.box{
  padding: 10px 20px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #f6f4ef;

  .little-box{
    padding: 10px;
    margin-bottom: 20px;
    border: #39a9ed 1px solid;
    background-color: #c5ddf6;
    border-radius: 10px;
    width: 40%;
    height: 170px;
    text-align: center;

    position: relative;

    img{
      width: 90%;
      border-radius: 10px;
    }

    i{
      font-style: normal;
      font-size: 14px;
      position: absolute;
      left: 10%;
      bottom: 10%;
      color: red;
    }

    span{
      float: right;
      position: absolute;
      right: 10%;
      bottom: 10%;
      color: grey;
      font-size: 12px;
    }
  }
}
</style>
