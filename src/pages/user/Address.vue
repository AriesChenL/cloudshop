<template>
  <div class="box">
    <van-notice-bar
        left-icon="volume-o"
        text="修改地址前请先打钩选择。修改地址前请先打钩选择。"
    />
    <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text=""
        @add="onAdd"
        @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  name: "Address",
  data() {
    return {
      chosenAddressId: this.$store.getters["address/getDefaultAddressId"],
      list: [],
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log('add num:'+this.$route.params.value)
    to.params.num = this.$route.params.value
    next()
  },
  watch:{
    chosenAddressId(newId){
      this.$store.commit('address/setDefaultAddressId', newId)
    },
  },
  mounted() {
    this.list = this.getAddList()
  },

  methods: {
    onEdit() {
      this.$router.push({name: 'address_edit', params: {id: this.chosenAddressId}})
    },
    onAdd() {
      this.$router.push({name: 'address_edit', params: {isadd: true}})
    },
    getAddList() {
      return this.$store.getters["address/getAddList"]
    }
  }
}
</script>

<style scoped lang='less'>
:deep(.van-address-list__bottom) {
  .van-address-list__add {
    background-color: #28a2ff;
    border: #28a2ff;
  }
}

.van-address-item__tag {
  background-color: #39a9ed;
}

</style>
