<template>
  <van-address-edit
      ref="addinfo"
      :area-list="areaList"
      show-postal
      :show-delete="isShowDel"
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
      defaultValue: {},
      isShowDel: !(this.$route.params.isadd)
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
          id: this.$store.getters["address/getMaxId"] + 1,
        })
        if (newAddInfo.isDefault){
          this.$store.commit('address/setDefaultAddressId', this.$store.getters["address/getMaxId"])
        }
      } else {
        // 修改
        this.$store.commit('address/updateAddress', {
          name: newAddInfo.name,
          tel: newAddInfo.tel,
          address: newAddInfo.province + newAddInfo.county + newAddInfo.addressDetail,
          id: newAddInfo.id
        })
        // if (newAddInfo.isDefault){
        //   this.$store.commit('address/setDefaultAddressId', newAddInfo.id)
        // }
      }
      console.log(newAddInfo)
      this.$router.go(-1)
    },
    onDelete() {
      this.$store.commit('address/removeAddress', this.$refs.addinfo.data.id)
      this.$router.replace({name: 'address'})
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
    this.defaultValue = this.$store.getters["address/getAddList"][this.$route.params.id]
    console.log(this.defaultValue)
  }
}
</script>

<style scoped lang='less'>

</style>
