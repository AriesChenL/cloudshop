<template>
  <div class="box">
    <div class="top">
      <div class="goods">
        <img src="https://img01.yzcdn.cn/vant/ipad.jpeg">
        <span class="span1">高性能笔记本</span>
        <span class="span2">￥ 14999.9</span>
        <span class="span3">x{{orderInfo.num}}</span>
      </div>
      <div class="otherInfo"><h4>订单备注</h4>{{orderInfo.otherInfo}}</div>
      <div class="express"><h4>快递信息</h4><p>顺丰速递 节假日不休息 支付后预计3天内送达</p></div>
      <div class="address">
        <h4>收件人信息</h4>
        <h5>{{orderInfo.address.name}}&nbsp;</h5>
        <h5>&nbsp;{{orderInfo.address.tel}}</h5>
        <p>{{orderInfo.address.address}}</p>
      </div>
    </div>
    <div class="bottom">
      <div class="priceInfo">
        <div>
          <span>商品金额</span><i>￥{{orderInfo.num*14999.9}}</i>
        </div>
        <div>
          <span>运费</span><i>￥ 0.00</i>
        </div>
        <div>
          <span>总价</span><i>￥{{orderInfo.num*14999.9}}</i>
        </div>
      </div>
      <van-button class="but" type="primary" size="large" color="#28a2ff">去支付</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderShow",
  data(){
    return{
      orderId: this.$route.params.id,
      orderInfo: {},
    }
  },
  created() {
    this.orderInfo = this.$store.getters["order/getAddList"][this.orderId]
    console.log(this.orderInfo)
  }
}
</script>

<style scoped lang='less'>
.box{
  margin: 10px;
  padding: 10px;
  margin-bottom: 50px;

  .top{
    padding: 10px;
    height: 440px;
    border: #28a2ff 1px solid;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .goods{
      position: relative;
      font-size: 13px;
      margin-bottom: 0;

      img{
        width: 100px;
      }
      .span1{
        position: absolute;
        top: 20px;
      }
      .span2{
        position: absolute;
        top: 50px;
      }
      .span3{
        position: absolute;
        right: 20px;
        top: 50px;
      }

    }

    .otherInfo{
      margin-top: 0;
      margin-bottom: 0;
      font-size: 13px;
      h4{
        font-size: 14px;
      }
    }

    .express{
      margin-top: 0;
      margin-bottom: 0;

      h4{
        font-size: 14px;
      }
      p{
        text-indent: 2em;
        font-size: 13px;
      }
    }

    .address{
      margin-top: 0;
      margin-bottom: 0;
      font-size: 13px;
      h4{
        font-size: 14px;
      }
      h5{
        display: inline-block;
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
  .bottom{
    margin-top: 20px;
    padding: 10px;
    border: #28a2ff 1px solid;
    border-radius: 20px;

    .priceInfo{
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      div{
        position: relative;

        i{
          font-style: normal;
          position: absolute;
          right: 30px;
          color: red;
        }
      }
    }

    .but{
      margin-top: 20px;
      border-radius: 30px;
    }
  }
}
</style>
