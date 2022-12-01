<template>
  <div v-if="isZone" class="zone-tip"><div>您的购物车空空如也~~</div></div>
  <div class="box" v-else>
    <div class="item">
      <van-card
          :num="num"
          :price="14999.9"
          desc="19代i9"
          title="高性能笔记本"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">打折</van-tag>
          <van-tag plain type="danger">优惠</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" @click="reduceCount">-</van-button>
          <van-button size="mini" @click="addCount">+</van-button>
        </template>
      </van-card>
    </div>
    <div class="foot">
      <span>已勾选{{ num }}件，共计<i>{{ num * 14999.9 }}</i>元。</span>
      <button @click="goPay">去结算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shopcart",
  data() {
    return {
      goodslist: [],
      isZone: false
    }
  },
  computed: {
    num() {
      return this.$store.getters["shopcart/getCarCountNum"]
    }
  },
  mounted() {
    if (this.$store.getters["shopcart/getCarCountNum"]===0){
      this.isZone = true
    }
  },

  methods: {
    goPay() {
      this.$router.push({name: 'order_create', params:{value: this.num}})
    },
    addCount() {
      this.$store.commit('shopcart/addCarCountNum')
    },
    reduceCount() {
      if (this.num !== 0) {
        this.$store.commit('shopcart/reduceCarCountNum')
      }
    }
  }


}
</script>

<style scoped lang='less'>
:deep(.van-card__footer) {
  .van-button--mini {
    width: 30px;
  }
}

.zone-tip{
  margin: 100px 100px;
}

.box {
  padding-bottom: 50px;

  .item {
    position: relative;

    input {
      position: absolute;
      left: 10px;
      z-index: 2;
    }
  }

  .foot {
    margin-bottom: 20px;
    margin-top: 20px;

    span {
      color: darkgray;
      padding: 20px;

      i {
        color: red;
      }
    }

    button {
      width: 100px;
      height: 30px;
      outline: none;
      border: 1px #3bafd2 solid;
      border-radius: 10px
    }
  }
}
</style>
