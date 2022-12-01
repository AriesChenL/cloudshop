<template>
  <div class="box">
    <div class="new" v-for="item in 21">
      <router-link :to="{ name: 'news_show'}">
        <img :src="img">
        <div class="right">
          <h4>miui14更新机型名单</h4>
          <span>发表时间：2022年12月1日</span>
          <span>点击：666次</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import img from '@/assets/miui.png'

export default {
  name: "NewsList",
  data() {
    return {
      img
    }
  }
}
</script>

<style scoped lang='less'>
.box {
  .new {
    background: rgb(232, 229, 229);
    padding: 20px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 80px;
    }

    img {
      width: 60px;
      border-radius: 20px;
      display: inline-block;
    }

    .right {
      display: inline-block;
      padding-left: 20px;

      h4 {
        margin-top: 0;
        font-size: 14px;
      }

      span {
        font-size: 12px;
        color: darkgray;
      }
    }
  }
}
</style>
