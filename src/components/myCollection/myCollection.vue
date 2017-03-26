<template>
  <div class="my-collection">
    <div class="tab">
      <span class="tab-item" :class="{'on':flag===1}" @click="select(1)">商品</span>
      <span class="tab-item" :class="{'on':flag===2}" @click="select(2)">店铺</span>
    </div>
    <ul class="my-collection-list">
      <li class="goods-collection border-1px" v-show="flag === 1" v-for="good in goodList">
        <div class="good-left">
          <img :src="good.goods_path">
        </div>
        <div class="good-right">
          <div class="good-name-wraper">
            <h1 class="good-name" v-html="good.goods_name"></h1>
          </div>
          <span class="good-address">{{good.store_address}}</span>
          <div class="good-price">
            <span class="new-price"><span class="new-price-text">{{good.store_price}}</span>金币</span>
            <span class="old-price">原价{{good.goods_gold_price}}金币</span>
          </div>
          <span class="sell-count">销量{{good.good_count}}</span>
        </div>
        <div class="good-shopcart">
          <img src="shopcart.png">
        </div>
      </li>
      <li class="store-collection border-1px" v-for="store in storeList" v-show="flag === 2">
        <div class="my-collection-left">
          <img :src="store.logopath" alt="商品">
        </div>
        <div class="my-collection-right">
          <div class="store-name">{{store.store_name}}</div>
          <div class="star-wrapper">
            <v-star class="star"></v-star>
            <span class="store-score">0分</span>
          </div>
          <div class="store-type">{{store.className}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import app from 'common/js/app';
  import {getStorage} from 'common/js/util';
  import star from 'components/star/star';
  const ERR_NO = '0';
  export default {
    data() {
      return {
        flag: 1,
        goodList: [],
        storeList: []
      };
    },
    components: {
        'v-star': star
    },
    created() {
      this.getCollection();
    },
    methods: {
        getCollection() {
          let params = {
            param: {
              token: getStorage('token').token,
              flag: this.flag
            }
          };
          this.$http.post(app.url.getMyCollectionList, params).then((response) => {
            response = response.body;
            console.log(response);
            if (response.errCode === ERR_NO) {
              if (this.flag === 1) {
                this.goodList = response.data.List_Info;
              } else if (this.flag === 2) {
                this.storeList = response.data.List_Info;
              }
            }
          });
        },
        select(type) {
            this.flag = type;
            this.getCollection();
        }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .my-collection
    .tab
      height: 0.48rem
      font-size: 0
      padding: 0 0.1rem
      background: #fff
      .tab-item
        display: inline-block
        height: 0.48rem
        width: 50%
        line-height: 0.48rem
        text-align: center
        font-size: 0.16rem
        &.on
          color: #ff2c2c
          border-bottom: 1px solid #ff2c2c
    .my-collection-list
      margin-top: 1px
      .goods-collection
        position: relative
        display: flex
        height: 1rem
        padding: 0.12rem
        background: #fff
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
      .store-collection
        display: flex
        height: 0.975rem
        padding: 0.125rem 0.1rem 0.1rem 0.1rem
        overflow: hidden
        background: #fff
        border-1px(rgba(7, 17, 27, 0.1))
        .my-collection-left
          flex: 0 0 0.95rem
          width: 0.95rem
          img
            width: 0.95rem
            height: 0.95rem
        .my-collection-right
          padding-left: 0.25rem
          .store-name
            padding-top: 0.05rem
            padding-bottom: 0.15rem
          .star-wrapper
            padding-bottom: 0.17rem
            .store-score
              vertical-align: top
              color: #ff9e05

          .store-type
            font-size: 0.15
            color: #ff2c2c
</style>
