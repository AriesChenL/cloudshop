<template>
  <div>
    <van-nav-bar
        :title="$route.meta.title"
        @click-left="goBack"
    >
      <span slot="left" v-show="showBack">< 返回</span>
    </van-nav-bar>

    <transition name="van-slide-left">
      <router-view>

      </router-view>
    </transition>

    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar";

export default {
  name: 'App',
  data() {
    return {
      showBack: false
    }
  },
  components: {
    tabbar,
  },
  created() {
    this.showBack = this.$route.path !== '/home'
  },
  watch: {
    '$route.path'(newVal) {
      this.showBack = newVal !== '/home'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    // checkLogin() {
    //   this.$indicator.open({
    //     text: '加载中'
    //   })
    //   this.$http.get('user').then(res => {
    //     if (res.data.code === 1) {
    //       this.$store.commit('user/setUser', res.data.data)
    //     }
    //     this.$indicator.close()
    //   })
    // }

  },
}
</script>

<style lang="less">


</style>
