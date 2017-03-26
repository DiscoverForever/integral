<template>
  <div class="home" v-el:home>
    <div class="app-content">
      <v-header></v-header>
      <div class="module">
        <ul class="module-list">
          <li v-for="module in moduleList" class="module-item">
            <img :src="module.moduleImg">
            <span class="module-name">{{module.moduleName}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="discount-store">
          <div class="title-wrapper">
            <h1 class="title">特惠商铺</h1>
          </div>
          <div class="store-wrapper" v-el:store-wrapper>
            <ul class="store-list" v-el:store-list>
              <li v-for="item in data.storeList" class="store-item">
                <img :src="item.portrait">
                <span class="store-name">{{item.store_name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="new-activity">
          <div class="title-wrapper">
            <span class="title">最新活动</span>
            <span class="more">更多</span>
          </div>
          <div class="activity-pics-wrapper">
            <ul class="pic-list">
              <li v-for="pic in activityPicList" track-by="$index" class="pic">
                <img :src="pic">
              </li>
            </ul>
          </div>
        </div>
        <v-goods :goods="goods"></v-goods>
      </div>
    </div>
    <div class="loading-wrapper">
      <i class="icon-spinner4 loading" v-show="loadingShow"></i>
      <i class="arrow" :class="{'icon-arrow-down':down,'icon-arrow-up':!down}" v-show="!loadingShow"></i>
    </div>
    <v-shopcart></v-shopcart>
    <v-menu :visiable="showMenu"></v-menu>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import header from 'components/header/header';
  import goods from 'components/goods/goods';
  import shopcart from 'components/shopcart/shopcart';
  import menu from 'components/menu/menu';
  import app from 'common/js/app';

  export default {
    data() {
      return {
        data: {},
        goods: [],
        popupVisible: true,
        loadingShow: false,
        down: true,
        showMenu: false,
        refreshType: 0, // 0:下拉刷新 1:上拉加载
        activityPicList: ['http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/active3.jpg', 'http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/active6.jpg'],
        moduleList: [
          {
            'moduleName': '我的积分',
            'moduleImg': 'http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/index_icon1.png'
          },
          {
            'moduleName': '积分商城',
            'moduleImg': 'http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/index_icon2.png'
          },
          {
            'moduleName': '积分活动',
            'moduleImg': 'http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/index_icon3.png'
          },
          {
            'moduleName': '本周特惠',
            'moduleImg': 'http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/index_icon4.png'
          },
          {
            'moduleName': '增值服务',
            'moduleImg': 'http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/index_icon5.png'
          }
        ]
      };
    },
    created() {
      this.getStorePics();
      this.getGoods();
    },
    components: {
      'v-header': header,
      'v-goods': goods,
      'v-shopcart': shopcart,
      'v-menu': menu
    },
    methods: {
      /**
       * 初始化滚动
       */
      _initAppScroll() {
        if (!this.appScroll) {
          this.appScroll = new BScroll(this.$els.home, {
            click: true,
            probeType: 3
          });
        } else {
          this.appScroll.refresh();
        }
//        this.appScroll.on('scroll', (pos) => {
//          if (pos.y === 30) {
//            console.log(pos.y);
//            this.down = false;
//          }
//        });
        // 下拉刷新
        this.appScroll.on('touchend', (pos) => {
//          if (pos.y > 30) {
//            console.log(pos.y);
//            this.down = false;
//          }
          if (pos.y > 50) { // 拖动50px触发
            console.log(pos.y);
            this.loadingShow = true;
            this.$els.home.style.marginTop = 50 + 'px'; // 下拉悬停到top 50px
            this.downRefresh();
            setTimeout(() => {
              this.loadingShow = false;
              this.down = true;
              this.$els.home.style.marginTop = 0; // 下拉悬停归位
            }, 1500);
          }
        });
        // 上拉加载
        this.appScroll.on('scrollEnd', (pos) => {
          this.upLoadMore();
        });
      },
      /**
       * 初始化滚动
       */
      _initStoreScroll() {
        if (this.data.storeList) {
          if (!this.storeListScroll) {
            this.storeListScroll = new BScroll(this.$els.storeWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            });
            console.log('init');
          } else {
            this.storeListScroll.refresh();
            console.log('refresh');
          }
        }
      },
      /**
       * 获取商品
       */
      getGoods() {
        console.log('获取商品');
        let param = {
          param: {
            pageNo: this.goods.length / 10,
            token: ''
          }
        };
        if (this.refreshType === 0) {
          param.pageNo = 0;
        }
        this.$http.post(app.url.getStoreGood, param).then((response) => {
          response = response.body;
          if (this.refreshType === 0) {
            this.goods = response.data;
          } else if (this.refreshType === 1) {
            response.data.forEach((item) => {
              this.goods.push(item);
            });
          }
          this.$nextTick(() => {
            this._initAppScroll();
//            this._initStoreScroll();
          });
        });
      },
      /**
       * 获取特惠商铺
       */
      getStorePics() {
        let param = {
          param: {
            token: ''
          }
        };
        this.$http.post(app.url.getStorePrefe, param).then((response) => {
          response = response.body;
          this.data = response.data;
          this.$els.storeList.style.width = 140 * this.data.storeList.length + 'px';
          this.$nextTick(() => {
//            this._initAppScroll();
            this._initStoreScroll();
          });
        });
      },
      /**
       * 下拉刷新
       */
      downRefresh() {
        console.log('下拉刷新');
        this.refreshType = 0; // 下拉刷新标识
        this.getGoods();
        this.getStorePics();
      },
      /**
       * 上拉加载
       */
      upLoadMore() {
        this.refreshType = 1; // 上拉加载标识
//        this.getGoods();
//        this.appScroll.refresh();
//        this.appScroll._resize();
      }
    },
    events: {
      'menu.toggle'(type) {
        this.showMenu = type;
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .home
    overflow: hidden
    height: 6.67rem
    .app-content
      background: #fff
      .module
        height: 0.70225rem
        padding: 0.13775rem 0.1rem 0rem 0.1rem
        background: #fff
        .module-list
          display: flex
          height: 0.70225rem
          overflow-x: scroll
          overflow-y: hidden
          white-space: nowrap
          &::-webkit-scrollbar
            display: none
          .module-item
            display: block
            flex: 1
            height: 100%
            font-size: 0
            margin-right: 0.1rem
            text-align: center
            &:last-child
              margin-right: 0
            .module-name
              display: block
              text-align: center
              font-size: 0.12rem
              margin-top: 0.05rem
            img
              width: 0.4rem
              padding-left: 0.015rem
              margin: 0 !important
      .content
        width: 100%
        .discount-store
          .title-wrapper
            width: 100%
            height: 0.19rem
            background: #F2F2F2
            overflow: hidden
            padding: 0.1rem 0.08rem
            .title
              display: block
              font-size: 0.15rem
              line-height: 0.15rem
              padding-left: 0.08rem
              border-left: 1px solid red
          .store-wrapper
            width: 100%
            overflow: hidden
            white-space: nowrap
            background: #fff
            .store-list
              .store-item
                display: inline-block
                width: 1.16rem
                padding: 8px 0
                text-align: center
                font-size: 0
                img
                  width: 0.8rem
                  height: 0.8rem
                .store-name
                  display: block
                  text-align: center
                  font-size: 0.15rem
                  margin-top: 0.04rem
        .new-activity
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
            .more
              font-size: 0.15rem
              float: right
              color: #666

          .activity-pics-wrapper
            padding: 0.1rem 0.1rem 0.16rem 0.1rem
            .pic
              margin-bottom: 0.08rem
              img
                display: block
                width: 100%
                height: 1.16rem
    .loading-wrapper
      position: fixed
      z-index: -1
      top: 0
      left: 0
      width: 100%
      height: 1rem
      background: rgba(7, 17, 27, 0.1)
      .loading
        position: absolute
        top: 0
        left: 50%
        margin-left: - 0.15rem
        font-size: 0.3rem
        &.icon-spinner4
          animation: rotate 3s linear 0s infinite;
          @keyframes rotate
            from
              transform: rotate(0deg)
            to
              transform: rotate(360deg)
      .arrow
        position: absolute
        top: 0
        left: 50%
        margin-left: - 0.15rem
        font-size: 0.3rem
        transition: all 0.5s
</style>
