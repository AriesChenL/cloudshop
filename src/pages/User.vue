<template>
  <!-- 已登录 -->
  <div v-if="isLogin">
    <div class="member">
      <div class="header-con">
        <div class="user-info">
          <div class="avatar-con">
            <div class="avatar">
              <img src="../assets/images/avatar_default.png" class="image-info">
            </div>
          </div>
          <div class="person-con">
            <span>{{ username }}</span>
          </div>
        </div>
      </div>
    </div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media">
        <div class="mui-navigate-right">
          <van-cell icon="passed" title="我的订单" is-link :to="{ name: 'order_list' }" />
        </div>
      </li>
      <li class="mui-table-view-cell mui-media">
        <div class="mui-navigate-right">
          <van-cell icon="location-o" title="收货地址" is-link :to="{ name: 'address' }" />
        </div>
      </li>
      <li class="pan-logout">
        <van-button round type="info" @click="logout" size="large" color="linear-gradient(90deg, #ffd787, #28a2ff)">退出登录</van-button>
      </li>
    </ul>
  </div>
  <!-- 未登录 -->
  <div v-else>
    <div class="member">
      <div class="header-con">
        <router-link :to="{ name: 'login' }" class="mui-navigate-right">
          <div class="user-info">
            <!-- 用户信息 -->
            <div class="avatar-con">
              <div class="avatar">
                <img src="../assets/images/avatar_default.png" class="image-info">
              </div>
            </div>
            <div class="person-con">
              <span>登录 / 注册</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import {Dialog} from 'vant';

export default {
  name: "User",
  computed: {
    ...mapState({
      username: state => state.user.username
    }),
    ...mapGetters('user', {isLogin: 'isLogin'})
  },
  methods:{
    logout () {
      this.$store.commit('user/logout')
      this.$auth.setAuthorization('')
      Dialog({message: '退出成功'});
    }
  }
}
</script>

<style scoped lang='less'>

.pan-logout{
  padding-top: 20px;
}

.mui-table-view .mui-media, .mui-table-view .mui-media-body{
  line-height: 42px;
}
.mui-table-view-cell:after{
  left: 0px;
}

.member {
  margin-bottom: 15px;

  .header-con {
    padding: 10px;
    background-color: #fff;

    .user-info {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 120px;
      background: linear-gradient(90deg, #28a2ff, #ffd787);
      box-shadow: 0 0.1rem 0.25rem #f8e3c6;

      .avatar-con {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);

        .avatar {
          width: 60px;
          height: 60px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 15);
          border: 1px solid hsla(0, 0%, 100%, .4);
          border-radius: 50% 50%;

          .image-info {
            width: 100%;
            height: 100%;
          }
        }
      }

      .person-con {
        position: absolute;
        left: 90px;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
      }
    }
  }
}
</style>
