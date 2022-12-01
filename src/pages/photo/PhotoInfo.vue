<template>
  <div class="box">
    <h4>HUAWEI P50 万象新生</h4>
    <span>发布时间：2022年12月1日</span>
    <span>&nbsp;&nbsp;&nbsp;点击量：999次</span>
    <hr>
    <img src="http://43.138.107.193:83/huawei.png" @click="showShare=!showShare">
    <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
    />
  </div>
</template>

<script>
export default {
  name: "PhotoInfo",
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
    };
  },
}
</script>

<style scoped lang='less'>
.box{
  width: 100%;
  //margin: 0 20px;

  h4{
    text-align: center;
  }

  span{
    padding-left: 20px;
    padding-right: 20px;
    font-size: 12px;
    color: darkgray;
  }

  img{
    width: 100%;
  }

}
</style>
