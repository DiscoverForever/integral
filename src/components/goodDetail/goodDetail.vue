<template>
  <div class="good-detail">
    <div class="good-pic-wrapper">
      <mt-swipe :auto="4000" class="swipe">
        <mt-swipe-item v-for="swipe in goodDetail.goods_details" track-by="$index" class="swipe-item">
          <img :src="swipe" width="100%">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="good-desc-wrapper">
      <h1 class="good-name" v-html="goodDetail.goods_name"></h1>
      <div class="store-desc">
        <span class="store-sell-count">月销量({{good.count}})件</span>
        <span class="store-address">{{good.storeAddress}}</span>
      </div>
      <div class="gold-wrapper">
        <span class="price">{{good.goodsPrice}}金币</span>
        <span class="old-price">{{good.goodsPrice}}金币</span>
        <span class="store-integral">{{goodDetail.store_integral_price}}通用店铺积分</span>
      </div>
    </div>
    <div class="good-specification-wrapper">
      <div class="title">
        <h1 class="text">选择规格:</h1>
      </div>
      <div class="good-select border-1px" @click="toggleSpecifications">
        <span class="text">请选择</span>
        <span class="text">尺码</span>
        <span class="text">颜色</span>
        <span class="icon-ctrl" :class="{'rotate':showSpecifications}"></span>
      </div>
      <div class="good-specification" v-for="specification in specifications" v-show="showSpecifications"
           transition="flod">
        <div class="spec-name">{{specification.spec_Name}}</div>
        <ul class="spec-opations">
          <li class="spec-opation" :class="{'highlight': isHighlight(opation.value)}"
              v-for="opation in specification.spec_Value" @click="selectSpecOpation(opation.value)">
            {{opation.value}}
          </li>
        </ul>
      </div>
      <div class="good-buy-count border-1px">
        <span class="text">购买数量</span>
        <div class="count-ctrl">
          <span class="icon-plus" @click="add"></span>
          <span class="count">{{goodCount}}</span>
          <span class="icon-minus" @click="remove"></span>
        </div>
      </div>
      <div class="good-ratings border-1px">
        <div class="title">
          <v-star></v-star>
          <span class="good-score">0分</span>
          <span class="icon-ctrl"></span>
          <span class="good-rating-count">0条评论</span>
        </div>
      </div>
      <div class="good-info">
        <h1 class="title">商品详情:</h1>
        <div class="good-pics">
          <img :src="pic" v-for="pic in goodDetail.goods_details" width="100%" alt="商品图片">
        </div>
      </div>
    </div>
    <div class="good-detail-footer">
      <div class="collection-wrapper">
        <span class="icon-heart"></span>
        <span class="text">收藏</span>
      </div>
      <div class="shopcart-wrapper">
        <img src="shopcart.png" alt="购物车">
        <span class="text">购物车</span>
      </div>
      <div class="add-shopcart">加入购物车</div>
      <div class="buy-now">立即购买</div>
    </div>
    <v-back></v-back>
  </div>
</template>
<script>
  import app from 'common/js/app';
  import star from 'components/star/star';
  import {getStorage} from 'common/js/util';
  import backBar from 'components/backBar/backBar';
  const ERR_NO = '0';
  export default {
    data() {
      return {
        good: {},
        goodDetail: {}, // 商品详情
        specifications: {}, // 商品规格
        showSpecifications: false,
        specOpationList: [], // 已选商品规格列表
        goodCount: 0 // 购买商品数量
      };
    },
    ready() {
      console.log('ready');
      this.getGoodDetails();
    },
    components: {
      'v-star': star,
      'v-back': backBar
    },
    methods: {
      /**
       * 获取商品详情
       */
      getGoodDetails() {
        // 获取商品缓存
        let params = getStorage('goods_good');
        console.log(params);
        this.good = params.param;
        this.$http.post(app.url.getGoodDetails, params).then((response) => {
          response = response.body;
          if (response.errCode === ERR_NO) {
            this.goodDetail = response.data.good_Details;
            this.specifications = response.data.specifications_Details;
          }
        });
      },
      /**
       * 折叠显示规格
       */
      toggleSpecifications() {
        this.showSpecifications = !this.showSpecifications;
        console.log(this.showSpecifications);
      },
      /**
       * 选择规格
       * @param opation 规格
       */
      selectSpecOpation(opation) {
        if (this.specOpationList.length === 0) {
          this.specOpationList.push(opation);
        } else {
          for (let i in this.specOpationList) {
            if (this.specOpationList[i] === opation) {
              this.specOpationList.splice(parseInt(i), 1);
            } else {
              if (parseInt(i) === this.specOpationList.length - 1) {
                console.log('push');
                this.specOpationList.push(opation);
              }
            }
          }
        }
        console.log(this.specOpationList);
      },
      /**
       * 是否高亮
       */
      isHighlight(opation) {
        if (this.specOpationList.length === 0) {
          return false;
        }
        for (let i in this.specOpationList) {
          if (this.specOpationList[i] === opation) {
            return true;
          }
        }
      },
      /**
       * 增加商品数量
       */
      add() {
        this.goodCount++;
      },
      /**
       * 减少商品数量
       */
      remove() {
        if (this.goodCount > 1) {
          this.goodCount--;
        }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .good-detail
    width: 100%
    height: 100%
    font-size: 0
    .good-pic-wrapper
      width: 100%
      height: 3.75rem
      .swipe
        width: 100%
        height: 3.75rem
        .swipe-item
          img
            height: 3.75rem
    .good-desc-wrapper
      padding: 0.07rem 0.1rem 0 0.1rem;
      background: #fff
      .good-name
        height: 0.42rem
        width: 100%
        line-height: 0.22rem
        font-size: 0.16rem
        overflow: hidden
      .store-desc
        font-size: 0
        height: 0.12rem
        padding: 0.1rem 0 0.04rem 0
        .store-sell-count
          display: inline-block
          float: left
          padding-right: 0.12rem
          height: 0.12rem
          line-height: 0.12rem
          font-size: 0.12rem
        .store-address
          display: inline-block
          float: left
          height: 0.12rem
          line-height: 0.12rem
          font-size: 0.12rem
      .gold-wrapper
        height: 0.21rem
        font-size: 0
        color: #bcbcbc
        .price
          display: inline-block
          height: 0.21rem
          line-height: 0.21rem
          padding-right: 0.05rem
          font-size: 0.16rem
          color: #ff2c2c
        .old-price
          display: inline-block
          height: 0.21rem
          line-height: 0.21rem
          font-size: 0.13rem
          text-decoration: line-through
        .store-integral
          display: inline-block
          float: right
          height: 0.21rem
          line-height: 0.21rem
          font-size: 0.12rem
    .good-specification-wrapper
      .title
        background: #f2f2f2
        .text
          height: 0.35rem
          line-height: 0.35rem
          font-size: 0.16rem
          padding: 0 0.1rem
      .good-select
        height: 0.35rem
        padding: 0 0.1rem
        background: #fff
        font-size: 0.16rem
        color: #bcbcbc
        border-1px(rgba(7, 17, 27, 0.1))
        .text
          height: 0.35rem
          line-height: 0.35rem
        .icon-ctrl
          display: inline-block
          padding: 0.09rem 0
          float: right
          font-size: 0.17rem
          font-weight: 700
          color: #bcbcbc
          transform: rotate(90deg)
          &.rotate
            transform: rotate(180deg)
      .good-specification
        font-size: 0
        padding: 0 0.1rem
        background: #fff
        transition: all 0.3s
        &.flod-transition
          opacity: 1
        &.flod-enter, &.flod-leave
          opacity: 0
        .spec-name
          font-size: 0.16rem
          height: 0.38rem
          line-height: 0.38rem
        .spec-opations
          .spec-opation
            display: inline-block
            height: 0.21rem
            line-height: 0.21rem
            font-size: 0.11rem
            margin-left: 0.1rem
            padding: 0 0.08rem
            border: 1px solid #bcbcbc
            border-radius: 2px
            &:first-child
              margin-left: 0
            &.highlight
              border: 1px solid #ff2c2c
              color: #ff2c2c
      .good-buy-count
        position: relative
        height: 0.48rem
        line-height: 0.48rem
        padding: 0 0.1rem
        background: #fff
        border-1px(rgba(7, 17, 27, 0.1))
        .text
          font-size: 0.16rem
        .count-ctrl
          position: absolute
          height: 0.48
          top: 0
          right: 0.1rem
          .icon-plus
            display: inline-block
            text-align: center
            width: 0.35rem
            height: 0.31rem
            margin: 0.075rem 0
            line-height: 0.31rem
            font-size: 0.16rem
            background: #d3d3d3
          .count
            display: inline-block
            height: 0.29rem
            min-width: 0.35rem
            margin: 0.08rem 0.04rem
            line-height: 0.29rem
            border: 0.01rem solid #dadada
            text-align: center
            font-size: 0.16rem
          .icon-minus
            display: inline-block
            text-align: center
            width: 0.35rem
            height: 0.31rem
            margin: 0.075rem 0
            line-height: 0.31rem
            background: #d3d3d3
            font-size: 0.16rem

      .good-ratings
        border-1px(rgba(7, 17, 27, 0.1))
        background: #fff
        .title
          height: 0.47rem
          font-size: 0
          padding: 0 0.1rem
          background: #fff
          .good-score
            display: inline-block
            height: 0.47rem
            line-height: 0.47rem
            font-size: 0.16rem
            margin-left: 0.2rem
            color: #ffbf79
          .good-rating-count
            display: inline-block
            height: 0.47rem
            line-height: 0.47rem
            float: right
            font-size: 0.16rem
          .icon-ctrl
            display: inline-block
            float: right
            font-size: 0.16rem
            margin: 0.155rem 0
            transform: rotate(90deg)
      .good-info
        height: 0.38rem
        line-height: 0.38rem
        font-size: 0.16rem
        background: #f2f2f2
        .title
          padding-left: 0.1rem
    .good-detail-footer
      display: flex
      position: fixed
      bottom: 0
      left: 0
      width: 100%
      height: 0.49rem
      font-size: 0.16rem
      background: #fff
      .collection-wrapper
        flex: 0 0 0.48rem
        width: 0.48rem
        text-align: center
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        .icon-heart
          display: block
          padding-top: 0.1rem
          font-size: 0.2rem
          color: #f53530
        .text
          display: block
          font-size: 0.09rem
      .shopcart-wrapper
        flex: 0 0 0.48rem
        width: 0.48rem
        text-align: center
        font-size: 0
        img
          display: inline-block
          width: 0.2rem
          height: 0.2rem
          padding-top: 0.1rem
        .text
          display: block
          font-size: 0.09rem
      .add-shopcart
        flex: 1
        height: 0.49rem
        line-height: 0.49rem
        text-align: center
        color: #fff
        background: #ff9e05
      .buy-now
        flex: 1
        height: 0.49rem
        line-height: 0.49rem
        text-align: center
        color: #fff
        background: #f53530
</style>
