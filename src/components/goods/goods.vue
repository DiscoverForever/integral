<template>
  <div class="preferential-goods">
    <div class="title-wrapper">
      <span class="title">特惠商品</span>
    </div>
    <div class="goods-wrapper">
      <ul class="goods">
        <li v-for="good in goods" class="goods-item" @click.stop="goGoodDetail($index)">
          <div class="good-left">
            <img :src="good.goods_details">
          </div>
          <div class="good-right">
            <div class="good-name-wraper">
              <h1 class="good-name" v-html="good.goods_name"></h1>
            </div>
            <span class="good-address">{{good.store_address}}</span>
            <div class="good-price">
              <span class="new-price"><span class="new-price-text">{{good.goods_price}}</span>金币</span>
              <span class="old-price">原价{{good.store_price}}金币</span>
            </div>
            <span class="sell-count">销量{{good.count}}件</span>
          </div>
          <div class="good-shopcart">
            <img src="shopcart.png">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {setStorage} from 'common/js/util';
  export default {
    props: {
      'goods': {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      goGoodDetail(index) {
        this.showGoodDetail = true;
        let params = {
          param: {
            flag: String(this.goods[index].flag),
            count: String(this.goods[index].count),
            goodsName: String(this.goods[index].goods_name),
            goodsPrice: String(this.goods[index].goods_price),
            goods_details: String(this.goods[index].goods_details),
            goods_id: String(this.goods[index].id),
            storeAddress: String(this.goods[index].store_address),
            storePrice: String(this.goods[index].store_price),
//            token: String(getStorage('token').token),
            token: '',
            userType: String(this.goods[index].userType)
          }
        };
        setStorage('goods_good', params);
//        let params = {
//          flag: String(this.goods[index].flag),
//          count: String(this.goods[index].count),
//          goods_id: String(this.goods[index].id),
//          goodsPrice: String(this.goods[index].goods_price),
//          storePrice: String(this.goods[index].store_price),
//          storeAddress: String(this.goods[index].store_address),
//          userType: String(this.goods[index].userType)
//        };
        this.$router.go({name: 'goodDetail', params: params});
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .preferential-goods
    .title-wrapper
      height: 0.19rem
      background: #F2F2F2
      overflow: hidden
      font-size: 0
      padding: 0.1rem 0.08rem
      .title
        width: 100%
        font-size: 0.15rem
        line-height: 0.15rem
        padding-left: 0.08rem
        border-left: 1px solid red
    .goods-wrapper
      .goods
        .goods-item
          position: relative
          display: flex
          height: 1rem
          padding: 0.12rem
          border-1px(rgba(7, 17, 27, 0.1))
          .good-left
            flex: 0 0 0.96rem
            width: 0.96rem
            height: 100%
            overflow: hidden
            img
              width: 0.96rem
              height: 0.97rem
          .good-right
            flex: 1
            padding-left: 0.09rem
            .good-name-wraper
              height: 0.45rem
              .good-name
                width: 2.44rem
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis
                font-size: 0.14rem
            .good-address
              display: block
              font-size: 0.13rem
              line-height: 0.13rem
              margin-bottom: 0.06rem
            .good-price
              font-size: 0
              margin-bottom: 0.06rem
              .new-price
                font-size: 0.12rem
                color: #ff2c2c
                height: 0.16rem
                line-height: 0.16rem
                .new-price-text
                  font-size: 0.16rem
              .old-price
                font-size: 0.12rem
                color: #666
                text-decoration: line-through
                margin-left: 0.08rem
            .sell-count
              display: block
              font-size: 0.12rem
          .good-shopcart
            position: absolute
            right: 0.1rem
            bottom: 0.2rem
            width: 0.25rem
            height: 0.25rem
            img
              display: block
              width: 0.25rem
              height: 0.25rem

</style>
