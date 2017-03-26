<template>
  <div class="back" @click="goBack">
    <i class="icon-ctrl"></i>
  </div>
</template>
<script>
  export default {
    methods: {
      goBack() {
        window.history.back();
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .back
    position: fixed
    top: 0.1rem
    left: 0.1rem
    width: 0.25rem
    height: 0.25rem
    background: rgba(0, 0, 0, 0.4)
    border-radius: 50%
    text-align: center
    transform: rotate(-90deg)
    .icon-ctrl
      display: inline-block
      width: 0.25rem
      height: 0.2rem
      padding-top: 0.05rem
      font-size: 0.25rem
      color: #fff
</style>
