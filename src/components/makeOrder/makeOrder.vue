<template>
  <div class="make-order">
    <div class="recipient-wrapper">
      <div class="recipient-person">
        <span>收件人: mac</span>
        <span class="phone-num">18519335090</span>
      </div>
      <div class="recipient-adress">收货地址: 西四环北路</div>
      <div class="arrow">
        <i class="icon-ctrl"></i>
      </div>
    </div>
    <div class="store-info border-1px">
      <h1 class="store-name border-1px">店铺:淘宝</h1>
      <div class="store-good">
        <div class="good-left">
          <img src="" alt="">
        </div>
        <div class="good-right">
          <div class="good-name">新生儿干爽透气纸尿裤尿不湿男女宝宝特惠装L5片*2包四码任选</div>
          <div class="good-footer">
            <span>金币</span>
            <span class="good-count">x1</span>
          </div>
        </div>
      </div>
    </div>
    <div class="freight-wrapper border-1px">
      <span class="text">运费</span>
      <span class="freight">0金币</span>
    </div>
    <div class="buyer-message">
      <span class="text">买家留言</span>
      <input class="message" type="text" class="" placeholder="请输入对本次交易的说明(选填)">
    </div>
    <footer>
      <span class="good-count">共1件,</span>
      <span class="good-price-total-text">合计:</span>
      <span class="gold-price-total">48金币</span>
      <button class="palce-order">提交订单</button>
    </footer>
    <v-back></v-back>
  </div>

</template>
<script>
  import backBar from 'components/backBar/backBar';
  export default {
    components: {
      'v-back': backBar
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .make-order
    .recipient-wrapper
      position: relative
      height: 0.44rem
      background: #fff
      padding: 0.13rem 0.12rem 0 0.12rem
      .recipient-person
        height: 0.14rem
        line-height: 0.14rem
        font-size: 0.14rem
        .phone-num
          float: right
          padding-right: 0.25rem
      .recipient-adress
        padding-top: 0.05rem
        font-size: 0.14rem
      .arrow
        position: absolute
        top: 0.2rem
        right: 0.15rem
        transform: rotate(90deg)
    .store-info
      background: #fff
      margin-top: 0.04rem
      border-1px(rgba(7, 17, 27, 0.1))
      .store-name
        height: 0.38rem
        line-height: 0.38rem
        font-size: 0.16rem
        padding: 0 0.13rem 0 0.13rem
        border-1px(rgba(7, 17, 27, 0.1))

      .store-good
        display: flex
        height: 0.96rem
        padding: 0.12rem 0.1rem
        .good-left
          flex: 0 0 0.97rem
          img
            width: 0.97rem
            height: 0.97rem
        .good-right
          flex: 1
          padding-left: 0.14rem
          .good-name
            height: 0.35rem
          .good-footer
            margin-top: 0.48rem
            height: 0.13rem
            .good-count
              float: right
    .freight-wrapper
      height: 0.38rem
      line-height: 0.38rem
      padding: 0 0.1rem
      background: #fff
      border-1px(rgba(7, 17, 27, 0.1))
      .text
        float: left
      .freight
        float: right
    .buyer-message
      height: 0.38rem
      padding: 0 0.1rem
      font-size: 0
      background: #fff
      .text
        display: inline-block
        height: 0.38rem
        width: 20%
        line-height: 0.38rem
        font-size: 0.16rem
      .message
        display: inline-block
        height: 0.38rem
        width: 80%
        font-size: 0.16rem

    footer
      position: fixed
      bottom: 0
      left: 0
      height: 0.49rem
      width: 100%
      background: #fff
      .good-count
        line-height: 0.49rem
        padding-left: 0.15rem
      .gold-price-total-text
        line-height: 0.49rem
      .gold-price-total
        line-height: 0.49rem
        color: #f5332e
      .palce-order
        width: 1.13rem
        border: none
        float: right
        height: 0.49rem
        line-height: 0.49rem
        font-size: 0.17rem
        color: #fff
        background: #f53530
</style>
