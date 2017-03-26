<template>
  <div class="mine">
    <div class="mine-header">
      <div class="avatar-wrapper">
        <img src="avatar.png" :src="data.photo?data.photo:'http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/Avatar.png'" alt="头像">
      </div>
      <h1 class="username">{{data.nickName}}</h1>
      <div class="gold-coin-wrapper">
        <span class="icon-gold-coin"></span>
        <span class="text">我的金币:</span>
        <span class="gold-total">{{data.gold}}</span>
      </div>
    </div>
    <div class="mine-content">
      <ul class="mine-list">
        <li class="mine-item border-1px">
          <img src="my_order.png" alt="">
          <span class="text">我的订单</span>
          <span class="icon-ctrl"></span>
        </li>
        <li class="mine-item border-1px">
          <img src="my_integral.png" alt="">
          <span class="text">我的积分</span>
          <span class="icon-ctrl"></span>
        </li>
        <li class="mine-item border-1px">
          <img src="my_message.png" alt="">
          <span class="text">我的消息</span>
          <span class="icon-ctrl"></span>
        </li>
        <li class="mine-item border-1px">
          <img src="my_collection.png" alt="">
          <span class="text">我的收藏</span>
          <span class="icon-ctrl"></span>
        </li>
        <li class="mine-item border-1px">
          <img src="account_management.png" alt="">
          <span class="text">账户管理</span>
          <span class="icon-ctrl"></span>
        </li>
        <li class="mine-item border-1px">
          <img src="my_more.png" alt="">
          <span class="text">更多</span>
          <span class="icon-ctrl"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import app from 'common/js/app';
  import {getStorage} from 'common/js/util';

  const ERR_OK = '0';
  export default {
    data() {
      return {
          data: {}
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        let param = {
          param: {
            token: getStorage('token')
          }
        };
        this.$http.post(app.url.myCenterGold, param).then((response) => {
            response = response.body;
            if (response.errCode === ERR_OK) {
                this.data = response;
            }
        });
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .mine
    background: #F2F2F2
    .mine-header
      height: 1.42rem
      background: #f5332e
      overflow: hidden
      padding: 0.2rem 0
      text-align: center
      font-size: 0
      .avatar-wrapper
        width: 100%
        height: 0.8rem
        font-size: 0
        text-align: center
        img
          width: 0.76rem
          height: 0.8rem
          line-height: 0.8rem
      .username
        display: block
        height: 0.16rem
        width: 100%
        font-size: 0.16rem
        padding-top: 0.09rem
        text-align: center
        color: #fff
      .gold-coin-wrapper
        display: inline-block
        margin-top: 0.1rem
        width: 1.33rem
        height: 0.27rem
        font-size: 0
        text-align: center
        color: #ffd511
        border-radius: 10px
        border: 1px solid #f98784
        text-align: center
        .icon-gold-coin
          vertical-align: top
          display: inline-block
          width: 0.19rem
          height: 0.14rem
          margin-top: 0.065rem
          background: url('gold_icon.png')
          background-size: 0.19rem 0.14rem
        .text
          vertical-align: top
          display: inline-block
          margin-top: 0.065rem
          font-size: 0.13rem
        .gold-total
          vertical-align: top
          display: inline-block
          margin-top: 0.065rem
          font-size: 0.13rem
    .mine-content
      .mine-list
        .mine-item
          display: flex
          height: 0.44rem
          font-size: 0
          border-1px(rgba(7, 17, 27, 0.1))
          background: #fff
          &:last-child
            margin-top: 0.11rem
          img
            display: block
            flex: 0 0 0.19rem
            width: 0.19rem
            height: 0.19rem
            padding: 0.125rem 0.22rem
          .text
            display: block
            flex: 1
            height: 0.44rem
            font-size: 0.16rem
            line-height: 0.44rem
          .icon-ctrl
            display: block
            height: 0.44rem
            color: #9c9c9c
            padding: 0 0.1rem
            font-size: 0.2rem
            line-height: 0.44rem
            transform: rotate(90deg)

</style>
