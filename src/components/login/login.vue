<template>
  <div class="login">
    <div class="username-wrapper border-1px">
      <span class="text">手机号</span>
      <input class="username" type="number" placeholder="请输入手机号码" v-model="username">
    </div>
    <div class="password-wrapper">
      <span class="text">密码</span>
      <input class="password" type="password" placeholder="请输入登录密码" v-model="password" @keyup.enter="login">
    </div>
    <div class="btn-login-wrapper" @click="login">
      <button class="btn-login">登录</button>
    </div>
    <div class="footer">
      <span class="forget-password">忘记密码</span>
      <span class="register">注册</span>
    </div>
  </div>
</template>
<script>
  import app from 'common/js/app';
  import {setStorage} from 'common/js/util';
  import {Toast} from 'mint-ui';
  const ERR_OK = '0'; // 错误码
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (!this.username) {
          Toast({
            message: '请输入用户名!',
            position: 'bottom',
            duration: 1500
          });
          return;
        } else if (!this.password) {
          Toast({
            message: '请输入密码!',
            position: 'bottom',
            duration: 1500
          });
          return;
        }
        let param = {
          param: {
            cellphoneNo: this.username,
            loginPassword: window.hex_md5(this.password)
          }
        };
        this.$http.post(app.url.login, param).then((response) => {
          response = response.body;
        if (response.errCode === ERR_OK) {
          console.log('login success');
          let token = {
            token: response.data
          };
          setStorage('token', token);
          this.$router.go({name: 'home'});
        } else {
          Toast({
            message: '用户名或密码错误!',
            position: 'bottom',
            duration: 1500
          });
        }
      })
        ;
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .login
    padding-top: 0.15rem
    .username-wrapper
      font-size: 0
      border-1px(rgba(7, 17, 27, 0.1))
      background: #fff
      text-decoration underline
      .text
        display: block
        float: left
        width: 20%
        height: 0.45rem
        line-height: 0.45rem
        font-size: 0.16rem
        text-align: center
      .username
        display: block
        float: left
        width: 80%
        height: 0.45rem
        line-height: 0.15rem
        font-size: 0.16rem
    .password-wrapper
      font-size: 0
      background: #fff
      .text
        display: block
        float: left
        width: 20%
        height: 0.45rem
        line-height: 0.45rem
        font-size: 0.16rem
        text-align: center
      .password
        display: block
        float: block
        width: 80%
        height: 0.45rem
        line-height: 0.15rem
        font-size: 0.16rem
    .btn-login-wrapper
      height: 0.45rem
      padding: 0.1rem 0.15rem
      .btn-login
        display: block
        width: 100%
        height: 0.45rem
        text-align: center
        font-size: 0.16rem
        color: #fff
        background: #ff2c2c
        border: 0
        border-radius: 0.03rem
    .footer
      font-size: 0
      padding: 0 0.15rem
      .forget-password
        display: inline-block
        float: left
        font-size: 0.16rem
        color: #34ADFF
      .register
        display: inline-block
        float: right
        color: #34ADFF
        font-size: 0.16rem

</style>
