<template>
  <div class="pullrefresh" v-el:pullrefresh>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul class="list">
        <li class="item" v-for="item in list" track-by="$index">
          <span class="text border-1px">{{item}}</span>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  export default {
    data() {
      return {
        list: []
      };
    },
    created() {
      this.list = [1, 2, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods: {
      loadTop() {

      },
      loadBottom() {

      },
      allLoaded() {

      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .pullrefresh
    width: 80px
    background: red
    overflow: hidden
    height: 500px
    .list
      .item
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
</style>
