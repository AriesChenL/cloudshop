<template>
  <div class="box">
    <div class="item" v-for="(item, index) in orderList" :key="index">
      <div class="top">
        <span>{{ item.createTime }}</span>
        <span class="right">
          <span>{{ item.isPay }}</span> |
          <span>{{ item.isDel }}</span>
        </span>
      </div>
      <div class="bottom">
        <img src="https://img01.yzcdn.cn/vant/ipad.jpeg">
        <i>x {{ item.num }}</i>
        <span class="right">
          <span>实付金额：￥</span><i>{{ item.payPrice }}</i>
        </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "OrderList",
  data() {
    return {
      orderList: [],
    }
  },
  computed: {},
  mounted() {
    this.orderList = this.getAllOrderList()
  },
  methods: {
    getAllOrderList() {
      return this.$store.getters["order/getAddList"]
    }
  }
}
</script>

<style scoped lang='less'>
.box {
  background-color: #c5ddf6;
  padding: 10px;
  padding-bottom: 60px;

  .item {
    height: 140px;
    background-color: white;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;

    .top {
      padding-bottom: 10px;
      border-bottom: .5px darkgray solid;
      color: darkgray;
      height: 20px;

      .right {
        float: right;

      }
    }

    .bottom {
      padding-top: 10px;
      position: relative;

      img {
        width: 100px;
        position: absolute;
        left: 10px;
      }

      > i {
        font-style: normal;
        position: absolute;
        left: 100px;
        top: 80px;
      }

      .right {
        position: absolute;
        right: 10px;
        top: 80px;

        i {
          color: red;
        }
      }
    }
  }
}
</style>
