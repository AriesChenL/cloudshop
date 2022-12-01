<template>
  <div class="login">
    <div class="mui-content">

      <van-form @submit="login">
        <van-field
            v-model="loginForm.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="loginForm.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" color="linear-gradient(100deg, #f6f4ef, #28a2ff, #f6f4ef)">登录</van-button>
        </div>
      </van-form>

      <div class="content-padded">
        <div class="link-area"><a @click="register">还没有账号？前往注册</a></div>
      </div>
    </div>
  </div>

</template>

<script>
import {Dialog} from 'vant';

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      if (!(this.loginForm.username === 'test' && this.loginForm.password === '123456')) {
        Dialog({message: '用户名或密码错误'});
      } else {
        // 登录成功
        this.$store.commit('user/setUser', {
          "id": 1,
          "username": this.loginForm.username
        })
        this.$auth.setAuthorization(this.loginForm.username)
        this.$router.replace({name: 'user'})
        Dialog({message: '登录成功'});
      }
    },
    register() {
      this.$router.push({name: 'register'})
    }
  }

}
</script>

<style scoped lang='less'>
.content-padded {
  text-align: center;
}

</style>
