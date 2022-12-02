<template>
  <div class="box">
    <div class="container">
      <div class="address" @click="choiseAddress">
        <h4>{{ address.name }}</h4>
        <h5>{{ address.tel }}</h5>
        <span>{{ address.address }}</span>
      </div>
      <div class="panel">
        <div class="goods">
          <van-card
              :num="this.num"
              price="14999.9"
              desc="19代i9"
              title="高性能笔记本"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          />
        </div>
        <div class="express">
          <h4>配送服务</h4>
          <h5>顺丰速递</h5><br>
          <span>工作日、栓休日遇节假日均可送货</span>
        </div>
        <div class="detail"><h4>给商家留言</h4><input v-model="otherInfo" type="text" placeholder="备注信息"/></div>
      </div>
    </div>
    <van-submit-bar :price="this.num*1499900.9" button-text="提交订单" @submit="submitOrder" button-color="#26a2ff"/>
  </div>
</template>

<script>
export default {
  name: "OrderCreate",
  data() {
    return {
      num: 0,
      otherInfo: '',
      address: this.$store.getters["address/getDefaultAddress"]
    }
  },
  created() {
    if (this.$store.getters["address/getMaxId"]<0){
      alert('请添加收货地址，再来下单')
      this.$router.push({name: 'address'})
    }else {
      this.num = this.$route.params.value
    }
  },

  methods: {
    getDateTime(value) {
      let time = new Date(value);
      let year = time.getFullYear() + '/';
      let month = (time.getMonth() + 1);
      let date = time.getDate();
      let hour = time.getHours();
      let minute = time.getMinutes();
      let second = time.getSeconds();
      month = month < 10 ? '0' + month + '/' : month + '/';
      date = date < 10 ? '0' + date : date;
      hour = hour < 10 ? '0' + hour + ":" : hour + ":";
      minute = minute < 10 ? '0' + minute : minute + ":";
      second = second < 10 ? '0' + second : second;
      let str = String(year) + String(month) + String(date) + ' ' + String(hour) + String(minute) + String(second);
      return str;
    },
    getPayNum() {
      return this.$store.getters["shopcart/getCarCountNum"]
    },
    getAddress(id) {
      return this.$store.getters["address/getAddList"][id]
    },
    submitOrder() {
      this.$store.commit('order/setOrder', {
        id: this.$store.getters["order/getMaxId"] + 1,
        createTime: this.getDateTime(Date.now()),
        isPay: '未支付',
        isDel: '删除订单',
        num: this.num,
        payPrice: 0,
        otherInfo: this.otherInfo,
        address: this.address
      })
      this.$store.commit('shopcart/reduceCarCountNumByNum', this.getPayNum())
      this.$router.push('/order/list')
    },
    choiseAddress(){
      this.$router.push({name: 'address'})
    }
  }
}
</script>

<style scoped lang='less'>
.box {
  padding: 20px;

  .container {
    //background-color: pink;

    .address {
      padding: 10px;
      border: #28a2ff 2px solid;
      border-radius: 20px;

      h4 {
        margin: 0;
        padding: 0;
      }
    }

    .panel {
      margin-top: 20px;

      .goods {
        border: #28a2ff 2px solid;
        border-radius: 20px;

        padding: 10px;
      }

      .express {
        border: #28a2ff 2px solid;
        border-radius: 20px;
        padding: 0 10px 10px;
        margin-top: 10px;

        h4 {

          display: inline-block;
        }

        h5 {
          float: right;
          display: inline-block;
        }

        span {
          color: grey;
          font-size: 14px;
        }
      }

      .detail {
        padding: 10px;
        padding-top: 0;
        margin-top: 10px;
        border: #28a2ff 2px solid;
        border-radius: 20px;

        input {
          text-indent: 1em;
          width: 80%;
          height: 50px;
          color: grey;

          border-radius: 10px;
          border: 1px grey solid;
        }
      }
    }
  }
}
</style>
