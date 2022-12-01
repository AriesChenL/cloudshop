<template>
<div class="box">
  <div class="goods-img">
    <img :src="img">
  </div>
  <div class="detail">
    <h4>{{goods.name}}</h4>
    <i><span>价格：</span>￥{{goods.price}}</i>
    <p v-for="(item, index) in goods.detail" :key="index">{{item}}</p>
    <span><h4>商品评价</h4>{{goods.commit}}</span>
  </div>
  <div class="buy-area">
    <h3>购买数量</h3>
    <van-stepper v-model="value" />
  </div>

  <van-goods-action class="foot">
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon icon="shop-o" text="店铺" />
    <van-goods-action-button @click="addShopcart" color="#99CCFF" type="warning" text="加入购物车" />
    <van-goods-action-button @click="buy" color="#9966FF" type="danger" text="立即购买" />
  </van-goods-action>
</div>
</template>


<script>
import img from '@/assets/images/macbookpro.png'

export default {
  name: "GoodsInfo",
  data() {
    return {
      img,
      goods:{
        id: this.id,
        name: 'macbookpro',
        price: '14999.9',
        detail: ['型号：MKGP3CH/A', '网络传输：Wi-Fi连接', '蓝牙版本：蓝牙5.0-5.1' ,'音效系统：内置麦克风内置麦克风'],
        commit: '买来用做PS和Pr等，性能非常强大，外观非常好看，很轻很薄，界面颜色很好看，很流畅，视网膜屏幕很不错，很舒适，比一般的IPS屏幕好很多，散热很好',
      },
      value: 1,
    }
  },
  props: ['id'],
  created() {
  },
  components: {
  },
  methods: {
    addShopcart() {
      this.$store.commit('shopcart/addCarCountNum')
      this.$store.commit('shopcart/addCarCountNumByNum', this.value-1)
    },

    buy() {
      // this.$store.commit('shopcart/setBuy', {id: this.$props.id, count: this.value})
      this.$router.push({name: 'order_create', params:{value: this.value}})
    }

  }
}
</script>

<style scoped lang='less'>
.box{
  padding: 20px;
  padding-bottom: 150px;
  //background-color: pink;

  .goods-img{
    img{
      width: 100%;
      margin: 0 auto;
    }
  }

  .detail{
    padding: 10px;
    h4{
      font-size: 20px;
    }

    i{
      font-style: normal;
      color: red;
      span{
        color: black;
      }
    }

    p{
      color: darkgray;
      font-size: 12px;
    }

    >span{
      font-size: 15px;
      font-family: 楷体;
      h4{
        font-size: 17px;
      }
    }


  }


  .foot{
    margin-bottom: 50px;
  }
}
</style>
