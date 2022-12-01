<template>
  <div>
    <van-form @submit="register">
      <van-field
          v-model="regForm.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="regForm.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="regForm.repassword"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请再次填写密码' }]"
      />
      <van-field
          v-model="regForm.email"
          type="mail"
          name="邮箱"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" color="linear-gradient(100deg, #f6f4ef, #28a2ff, #f6f4ef)">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {Dialog} from 'vant';

export default {
  name: "Register",
  data() {
    return {
      regForm: {
        username: '',
        password: '',
        repassword: '',
        email: ''
      }
    }
  },
  methods: {
    register() {
      if (this.regForm.password !== this.regForm.repassword) {
        Dialog({message: '密码两次输入不一致'});
      }else {
        this.$store.commit('user/setUser', {
          "username": this.regForm.username
        })
        Dialog({message: '注册成功'});
        this.$router.replace({name: 'user'})
      }
    }

  }
}
</script>

<style scoped lang='less'>

</style>
