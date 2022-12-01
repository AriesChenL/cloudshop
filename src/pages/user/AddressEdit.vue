<template>
  <van-address-edit
      ref="addinfo"
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      :address-info="defaultValue"
  />
</template>

<script>
import {areaList} from '@vant/area-data';

export default {
  name: "AddressEdit",
  data() {
    return {
      areaList,
      searchResult: [],
      defaultValue: {}
    };
  },
  methods: {
    onSave() {
      var newAddInfo = this.$refs.addinfo.data;
      if (this.$route.params.isadd) {
        //添加
        this.$store.commit('address/setAddress', {
          name: newAddInfo.name,
          tel: newAddInfo.tel,
          address: newAddInfo.province + newAddInfo.county + newAddInfo.addressDetail,
          id: this.$store.getters["address/getMaxId"] + 1
        })
      } else {
        //修改
        this.$store.commit('address/updateAddress', {
          name: newAddInfo.name,
          tel: newAddInfo.tel,
          address: newAddInfo.province + newAddInfo.county + newAddInfo.addressDetail,
          id: newAddInfo.id
        })
      }
      console.log(newAddInfo)
      this.$router.go(-1)
    },
    onDelete() {
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  mounted() {
    this.defaultValue = this.$store.getters["address/getAddList"][this.$route.params.id - 1]
  }
}
</script>

<style scoped lang='less'>

</style>
