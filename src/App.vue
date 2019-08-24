<template>
  <div id="app">
    <e-header></e-header>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">评论</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import header from './views/header/header'
  export default {
    components: {
      'e-header': header
    }
  }
</script>
<style lang="stylus">
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      border-bottom 1px solid rgba(7,17,27,0.1)
      .tab-item
        flex: 1
        text-align center
        display block
        font-size 14px
        color rgb(77,85,93)
        &.active
          color rgb(240,20,20)
</style>
