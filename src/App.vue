<template>
  <div id="app">
    <e-header :seller="seller"></e-header>
    <div class="tab border-1px">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">评论</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>
<script>
import header from "./views/header/header";
const ERR_OK = 0;
export default {
  components: {
    "e-header": header
  },
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$axios.get("/api/seller").then(response => {
      let result = response.data;
      if (result.errno === ERR_OK) {
        this.seller = result.data;
      }
    });
  }
};
</script>
<style lang="stylus">
@import './assets/stylus/mixin.stylus';

#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-1px(rgba(7, 17, 27, 0.1));

    .tab-item {
      flex: 1;
      text-align: center;
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
