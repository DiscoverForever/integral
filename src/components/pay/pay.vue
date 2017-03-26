<template>
  <div class="pay">
    <div class="username-wrapper border-1px">
      <span class="text">用户名</span>
      <span class="phone-num">155000000</span>
    </div>
    <div class="gold-pay-wrapper">
      <span class="text">金币支付</span>
      <span class="gold-price">29.96金币</span>
      <i class="icon-ctrl arrow"></i>
    </div>
    <div class="btn-pay-wrapper">
      <button class="btn-pay">立即支付</button>
    </div>
  </div>
</template>
<script>
	export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .pay
    .username-wrapper
      height: 0.44rem
      padding: 0 0.1rem
      border-top: 0.1rem solid #f2f2f2
      border-1px(rgba(7, 17, 27, 0.1))
      background: #fff
      .text
        display: block
        float: left
        height: 0.44rem
        line-height: 0.44rem
      .phone-num
        display: block
        float: right
        height: 0.44rem
        line-height: 0.44rem
        color: #666666
    .gold-pay-wrapper
      position: relative
      height: 0.44rem
      padding: 0 0.1rem
      background: #fff
      .text
        display: block
        float: left
        height: 0.44rem
        line-height: 0.44rem
      .gold-price
        display: block
        float: right
        margin-right: 0.13rem
        height: 0.44rem
        line-height: 0.44rem
        color: #666666
      .arrow
        position: absolute
        display: block
        top: 0.14rem
        right: 0.07rem
        font-weight: 700
        color: #666666
        transform: rotate(90deg)
    .btn-pay-wrapper
      height: 0.44rem
      padding: 0.34rem 0.1rem
      text-align: center
      .btn-pay
        width: 100%
        height: 0.45rem
        border: none
        border-radius: 0.05rem
        font-size: 0.17rem
        color: #fff
        background: #f53530
</style>
