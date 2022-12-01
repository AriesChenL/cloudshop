<template>
  <div class="box">
    <van-tabs v-model="active" color="#a8afff">
      <van-tab title="全部图片">
        <div class="one-photo-grid" v-for="item in 21" @click="goDetail">
          <div class="detail">
            <p>万象双环，化繁为简，呈现纯粹致美的几何秩序感，所到之处，备受瞩目。亦如慧眼明眸，洞悉万象，开启影像新生。</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="手机图片">
        <div class="one-photo-grid" v-for="item in 21" @click="goDetail">
          <div class="detail">
            <p>万象双环，化繁为简，呈现纯粹致美的几何秩序感，所到之处，备受瞩目。亦如慧眼明眸，洞悉万象，开启影像新生。</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="电脑图片">
        <div class="one-photo-grid" v-for="item in 21" @click="goDetail">
          <div class="detail">
            <p>万象双环，化繁为简，呈现纯粹致美的几何秩序感，所到之处，备受瞩目。亦如慧眼明眸，洞悉万象，开启影像新生。</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="键盘图片">
        <div class="one-photo-grid" v-for="item in 21" @click="goDetail">
          <div class="detail">
            <p>万象双环，化繁为简，呈现纯粹致美的几何秩序感，所到之处，备受瞩目。亦如慧眼明眸，洞悉万象，开启影像新生。</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "PhotoList",
  data() {
    return {
      active: 0,
    };
  },
  methods:{
    goDetail(){
      this.$router.push({name: 'photo_show'})
    }
  }
}
</script>

<style scoped lang='less'>
.box{
  .one-photo-grid{
    border: 1px black solid;
    margin: 10px 20px 20px;
    height: 300px;
    position: relative;
    background: url("http://43.138.107.193:83/huawei.png");
    background-size: cover;

    .detail{
      position: absolute;
      bottom: 0;
      height: 40%;
      width: 100%;
      background-color: #F4F2EEFF;
      filter: opacity(60%);

      p{
        font-size: 14px;
        margin: 20px;
      }
    }
  }
}
</style>
