<template>
  <div class="my-integral">
    <div class="header">
      <span class="integral">{{data.myIntegralTotal}}</span>
      <span class="icon-double-arrow">积分&nbsp⇆&nbsp金币</span>
      <span class="gold">{{data.myGoldTotal}}</span>
    </div>
    <div class="content">
      <div class="tab-bar-wrapper">
        <span class="tab-item" :class="{'active': selected === 0}" @click="tab(0)">可用</span>
        <span class="tab-item" :class="{'active': selected === 1}" @click="tab(1)">即将到期</span>
        <span class="tab-item" :class="{'active': selected === 2}" @click="tab(2)">已使用</span>
      </div>
      <div class="tab-content">
        <mt-loadmore top-status.sync="topStatus" :top-method="loadTop" :bottom-method="loadBottom"
                     :bottom-all-loaded="hasMore" v-ref:load-more>
          <ul class="integral-list">
            <li class="integral-item border-1px" v-for="item in data.myIntegralList">
              <div class="store-pic">
                <img :src="item.path" alt="店铺Logo">
              </div>
              <div class="integral-info">
                <div class="integral-title">
                  <span class="integral-name">{{item.package_name}}</span>
                  <span class="integral-currency" v-show="item.package_flag === 1">通</span>
                  <span class="integral-special" v-show="item.package_flag === 2">专</span>
                </div>
                <div class="validity-time">有效期至:{{item.integral_end_date}}</div>
                <div class="integral-amount">
                  <span class="gold">{{item.conversionGold}}金币</span>
                  <span class="integral">({{item.integral_balance}}积分)</span>
                </div>
              </div>
            </li>
          </ul>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>
<script>
  import {getStorage} from 'common/js/util';
  import app from 'common/js/app';
  const ERR_NO = '0';
  export default {
    data() {
      return {
        selected: 0,
        data: {}
      };
    },
    created() {
      this.getMyIntegral(this.selected);
    },
    methods: {
      /**
       * 选项卡Tab事件
       * @param type 可用||即将到期||已使用
       */
      tab(type) {
        this.selected = type;
        this.getMyIntegral(this.selected);
      },
      loadTop() {
        setTimeout(() => {
          this.$refs.loadMore.onTopLoaded();
        }, 3000);
        console.log('down');
      },
      loadBottom() {
        console.log('up');
      },
      /**
       * 查询我的积分
       * @param type 积分类型:0 可用 1 即将到期 2 已使用
       */
      getMyIntegral(type) {
        let param = {
          param: {
            isNeedPage: '1',
            pageNo: 1,
            selectFlag: String(type),
            token: getStorage('token').token
          }
        };
        this.$http.post(app.url.getMyIntegral, param).then((response) => {
          response = response.body;
          if (response.errCode === ERR_NO) {
            this.data = response.data;
          }
        });
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .my-integral
    overflow: hidden
    .header
      height: 1.42rem
      width: 100%
      background: #f5332e
      color: #fff
      text-align: center
      font-size: 0
      .integral
        display: inline-block
        padding: 0.5rem 0
        font-size: 0.42rem
      .icon-double-arrow
        display: inline-block
        padding: 0.64rem 0.2rem
        font-size: 0.14rem
        vertical-align: top
      .gold
        display: inline-block
        padding: 0.5rem 0
        font-size: 0.42rem
    .content
      .tab-bar-wrapper
        height: 0.5rem
        font-size: 0
        background: #fff
        .tab-item
          display: inline-block
          width: 33.3333333%
          height: 0.5rem
          line-height: 0.5rem
          font-size: 0.16rem
          text-align: center
          &.active
            color: #F53832
            border-bottom: 0.02rem solid #F53832
      .tab-content
        .mint-loadmore-text
          font-size: 0.12rem
        .integral-list
          .integral-item
            display: flex
            height: 0.96rem
            padding: 0.11rem
            background: #fff
            border-1px(rgba(7, 17, 27, 0.1))
            .store-pic
              flex: 0 0 0.97rem
              padding-right: 0.1rem
              img
                width: 0.97rem
                height: 0.96rem
                font-size: 0.12rem
            .integral-info
              flex: 1
              .integral-title
                height: 0.16rem
                line-height: 0.16rem
                padding:0.1rem 0 0.16rem 0
                font-size: 0
                .integral-name
                  display: inline-block
                  font-size: 0.16rem
                .integral-currency
                  display: inline-block
                  vertical-align: top
                  width: 0.15rem
                  height: 0.15rem
                  margin-left: 0.05rem
                  text-align: center
                  font-size: 0.12rem
                  color: #fff
                  background: #ff9e05
                .integral-special
                  display: inline-block
                  vertical-align: top
                  width: 0.15rem
                  height: 0.15rem
                  margin-left: 0.05rem
                  text-align: center
                  font-size: 0.12rem
                  color: #fff
                  background: #f5332e
              .validity-time
                font-size: 0.12rem
                color: #8f8f94
                padding-bottom: 0.15rem
              .integral-amount
                font-size: 0
                .gold
                  color: #f5332e
                  font-size: 0.16rem
                .integral
                  color: #8f8f94
                  font-size: 0.1rem
</style>
