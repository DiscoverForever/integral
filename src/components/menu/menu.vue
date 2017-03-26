<template>
  <div class="menu-wrapper" v-show="visiable" @click="closeMenu">
    <div class="menu">
      <span class="triangle"></span>
      <ul class="menu-list">
        <li class="menu-item border-1px" @click.stop="menuSelect(0)">我的消息</li>
        <li class="menu-item border-1px" @click.stop="menuSelect(1)">我的收藏</li>
        <li class="menu-item border-1px" @click.stop="menuSelect(2)">我的订单</li>
        <li class="menu-item border-1px" @click.stop="menuSelect(3)">个人中心</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      visiable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeMenu() {
        this.$dispatch('menu.toggle', false);
      },
      menuSelect(menuType) {
          console.log(menuType);
          switch (menuType) {
            case 0:
              break;
            case 1:
              this.$router.go({name: 'myCollection'});
              break;
            case 2:
              break;
            case 3:
                console.log('3');
                console.log(this.$router);
                this.$router.go({name: 'mine'});
              break;
            default:
              break;
          }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .menu-wrapper
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.3)
    z-index: 100
    .menu
      float: right
      width: 1rem
      font-size: 0
      color: #000
      text-align: center
      margin: 0.32rem 0.1rem 0 0
      .menu-list
        border-radius: 0.04rem
        background: #fff
        .menu-item
          width: 100%
          height: 0.3rem
          line-height: 0.3rem
          font-size: 0.12rem
          border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border-bottom: 0
      .triangle
        display: block
        width: 0
        height: 0
        border-left: 0.1rem solid transparent
        border-right: 0.1rem solid transparent
        border-bottom: 0.1rem solid white
        margin-bottom: -0.01rem
        margin-left: 0.75rem
</style>
