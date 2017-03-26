<template>
  <div class="start-wrapper">
    <img class="star" src="star_full.png" alt="星标">
    <img class="star" src="star_full.png" alt="星标">
    <img class="star" src="star_full.png" alt="星标">
    <img class="star" src="star_full.png" alt="星标">
    <img class="star" src="star_full.png" alt="星标">
  </div>
</template>
<script>
	export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .start-wrapper
    display: inline-block
    height: 0.16rem
    font-size: 0
    .star
      display: inline-block
      float: left
      width: 0.16rem
      height: 0.16rem
      margin-left: 0.05rem
      &:first-child
        margin-left: 0
</style>
