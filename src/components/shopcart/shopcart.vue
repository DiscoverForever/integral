<template>
  <div class="shopcart">
    <img src="shopcart.png" alt="购物车">
    <div class="total-price">
      <span class="icon-gold-coin"></span>
      <span class="goods-price">{{count*price}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      'count': {
        type: Number,
        default: 0
      },
      'price': {
        type: Number,
        default: 0
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shopcart
    position: absolute
    bottom: 0.16rem
    left: 5%
    width: 1.15rem
    height: 0.44rem
    border-radius: 0.4rem
    background: rgba(0, 0, 0, 0.7)
    img
      display: inline-block
      position: absolute
      top: 0
      left: 0
      width: 0.5rem
      height: 0.5rem
      margin: -0.02rem 0 0 0rem
      background: #fff
      border-radius: 50%
    .total-price
      width: 1.15rem
      height: 0.44rem
      font-size: 0
      .icon-gold-coin
        float: left
        width: 0.15rem
        height: 0.15rem
        margin-left: 0.6rem
        margin-top: 0.13rem
        background: url("gold_coin.png")
        background-size: 0.15rem 0.15rem
      .goods-price
        float: right
        font-size: 0.18rem
        padding-top: 0.133rem
        margin-right: 0.2rem
        color: #fff
</style>
