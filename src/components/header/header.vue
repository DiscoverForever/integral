<template>
  <div class="header">
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="swipe in swipeList" track-by="$index" class="swipe-item">
        <img :src="swipe" width="100%">
      </mt-swipe-item>
    </mt-swipe>
    <div class="header-title">
      <span class="icon-location"></span>
      <v-search class="search"></v-search>
      <div class="menu" @click="toggleMenu">
        <span class="icon-list2"></span><span class="menu-text">菜单</span>
      </div>
    </div>
  </div>
</template>
<script>
  import search from 'components/search/search';

  export default {
    data() {
      return {
        swipeList: []
      };
    },
    created() {
      this.swipeList = ['http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/active0.jpg', 'http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/active3.jpg', 'http://httyjftest.clpsgroup.com.cn/jfh-proj/static/images/active6.jpg'];
    },
    components: {
      'v-search': search
    },
    methods: {
      toggleMenu() {
        this.$dispatch('menu.toggle', true);
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    position: relative
    width: 100%
    height: 1.72rem
    .swipe
      width: 100%
      height: 1.72rem
      .swipe-item
        img
          display: block
      .swipe-indicators
        left: 85%;
    .header-title
      display: flex
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 0.4rem
      opacity: 0.5
      font-size: 0
      .search
        flex: 1
      .icon-location
        display: block
        flex: 0 0 0.12rem
        width: 0.12rem
        height: 0.15rem
        padding: 0.125rem 0.05rem
        font-size: 0.15rem
        line-height: 0.15rem
        color: #fff
      .menu
        color: #fff
        .icon-list2
          display: block
          flex: 0 0 0.12rem
          font-size: 0.15rem
          line-height: 0.15rem
          padding: 0.08rem
        .menu-text
          display: block
          text-align: center
          font-size: 0.1rem
          line-height: 0.1rem

</style>
