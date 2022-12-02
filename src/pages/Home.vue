<template>
  <div>
    <swiper></swiper>
    <van-grid clickable :column-num="2">
      <van-grid-item icon="coupon-o" text="新闻资讯" :to="{ name: 'news_list' }" />
      <van-grid-item icon="share" text="图片分享" :to="{ name: 'photo_list' }" />
      <van-grid-item icon="shop-o" text="商品购买" :to="{ name: 'category' }" />
      <van-grid-item icon="home-o" text="开发中..." url="/" />
      <van-grid-item icon="home-o" text="开发中..." url="/" />
      <van-grid-item icon="home-o" text="开发中..." url="/" />
    </van-grid>
  </div>
</template>

<script>
import swiper from "@/components/swiper";

export default {
  name: "Home",
  components: {swiper}
}
</script>

<style scoped lang='less'>
</style>
