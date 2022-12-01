<template>
  <div class="box">
    <h3>miui14更新机型名单</h3>
    <span>发表时间：2022年12月1日</span>
    <span>点击：666次</span>
    <hr>
    <p>小米官方已经正式宣布小米 13 系列 & MIUI 14 新品发布会正式定档 12 月 1 日（周四）晚七点，到时小米13及小米13 Pro以及MIUI14新系统将会正式推出与大家见面。MIUI 14 将随小米 13/Pro 系列新旗舰一同正式亮相，同时小米 13 也将成为 MIUI 14 的首发机型。</p>
    <p>除了小米 13 系列，还有多款小米手机已经在适配测试中了，比如小米 12/11 系列和红米 K50/K40 系列等机型，这些机型已经能在代码库中检索到相应的 MIUI 14 版本。</p>
    <p>据不完全整理，除了小米13，目前已经进行MIUI 14首批测试的机型包括：</p>
    <p>小米12S系列、小米12系列、小米11系列、小米Civi 1S/2系列、Redmi K60/K50/K40系列、Redmi Note 12/11系列、小米MIX 4等。</p>
  </div>
</template>

<script>
export default {
  name: "NewsInfo"
}
</script>

<style scoped lang='less'>
.box{
  padding: 20px 30px;

  h3{
    margin: 0 0 10px 20%;
  }
  span{
    margin-top: 10px;
    color: darkgray;
    font-size: 12px;

    &:nth-child(3n){
      margin-left: 60px;
    }
  }

  p{
    text-indent: 2em;
    font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;
    color: rgba(51, 51, 51, 0.66);
  }
}
</style>
