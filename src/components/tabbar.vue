<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" :to="{name:'home'}">首页</van-tabbar-item>
      <van-tabbar-item icon="bag-o" :to="{name: 'category'}">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" badge="5" :to="{name: 'shopcart'}">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" :to="{name: 'user'}">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: "tabbar",
  data() {
    return {
      active: 0
    }
  },
  watch:{
    '$route.path'(newVal) {
      if (newVal.indexOf('home') !== -1){
        this.active = 0
      }else if (newVal.indexOf('category') !== -1){
        this.active = 1
      }else if (newVal.indexOf('shopcart') !== -1){
        this.active = 2
      }else if (newVal.indexOf('user') !== -1){
        this.active = 3
      }
    }

  }
}
</script>

<style scoped lang='scss'>

</style>
