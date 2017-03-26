<template>
  <div class="store-detail">
    <div class="store-pic-wrapper">
      <img src="" alt="">
    </div>
    <div class="store-info">
      <div class="store-title border-1px">
        <div class="store-name-wrapper">
          <span class="store-name">测试</span>
          <span class="store-type">手机数码</span>
        </div>
        <div class="store-score-wrapper">
          <v-star></v-star>
          <span class="store-score">0分</span>
        </div>
        <div class="collection-toggle">取消收藏</div>
      </div>
      <div class="store-phone">
        <span class="text">电话：</span>
        <i class="icon-phone"></i>
      </div>
      <div class="store-address">
        <span class="text">地址：</span>
        <i class="icon-location"></i>
      </div>
      <div class="store-desc">
        <h1 class="store-desc-title">店铺信息:</h1>
      </div>
      <div class="goods-wrapper">
        <h1 class="goods-title">全部商品:</h1>
      </div>
    </div>
  </div>
</template>
<script>
  import star from 'components/star/star';
  export default {
    components: {
      'v-star': star
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .store-detail
    .store-pic-wrapper
      img
        width: 3.75rem
        height: 3.75rem
    .store-info
      .store-title
        position: relative
        height: 0.43rem
        padding: 0.15rem 0.1rem 0.1rem 0.1rem
        background: #fff
        border-1px(rgba(7, 17, 27, 0.1))
        .store-name-wrapper
          height: 0.25rem
          font-size: 0
          .store-name
            line-height: 0.25rem
            font-size: 0.16rem
          .store-type
            line-height: 0.25rem
            padding-left: 0.1rem
            font-size: 0.16rem
        .store-score-wrapper
          height: 0.16rem
          .store-score
            color: #ffbf79
        .collection-toggle
          position: absolute
          top: 0.3rem
          right: 0.1rem
          color: #f53530
      .store-phone
        height: 0.47rem
        line-height: 0.47rem
        padding-left: 0.1rem
        background: #fff
        border-1px(rgba(7, 17, 27, 0.1))
        .icon-phone
          float: right
          margin: 0.155rem
          color: #f53530
        .text
          color: #8f8f94
      .store-address
        height: 0.47rem
        line-height: 0.47rem
        padding-left: 0.1rem
        background: #fff
        border-1px(rgba(7, 17, 27, 0.1))
        .icon-location
          float: right
          margin: 0.155rem
          color: #f53530
        .text
          color: #8f8f94
      .store-desc
        .store-desc-title
          height: 0.38rem
          line-height: 0.38rem
          padding-left: 0.1rem
          background: #f2f2f2
      .goods-wrapper
        border-top: 0.2rem solid #fff
        .goods-title
          height: 0.38rem
          line-height: 0.38rem
          padding-left: 0.1rem
          background: #f2f2f2
</style>
