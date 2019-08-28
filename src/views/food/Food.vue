<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" alt="">
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
              <span class="now">￥{{food.price}}</span>
              <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
          <CartController :food="food"></CartController>
          </div>
          <transition name="fade">
            <div class="buy" v-show="!food.count || food.count === 0" @click="addFirst">
            加入购物车
            </div>
          </transition>
        </div>
        <Split v-if="food.info"></Split>
        <div class="info" v-if="food.info">
          <div class="title">商品信息</div>
          <div class="text">{{food.info}}</div>
        </div>
        <Split></Split>
        <div class="rating">
          <div class="title">商品评价</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  import CartController from '../../components/cartcontroller/CartController'
  import Split from '../../components/split/Split.vue'
  export default {
    components: {
      CartController,
      Split
    },

    props: {
      'food': {
        type: Object
      }
    },

    data () {
      return {
        showFlag: false,
        scroll: null
      };
    },

    computed: {
      
    },

    methods: {
      show() {
        this.showFlag = true;
        this.$nextTick(()=>{
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.food,{
              click: true
            })
          } else {
            this.scroll.refresh();
          }
        })
      },
      hide() {
        this.showFlag = false;
      },
      addFirst() {
        if (!this.food.count || this.food.count === 0){
          this.$set(this.food, 'count', 1);
        }
      }
    }
  }
</script>
<style lang='stylus' scoped> 
  .food
    position fixed
    left: 0
    top 0
    bottom 48px
    z-index 30
    width 100%
    background #fff
    &.move-enter-active,
    &.move-leave-active
      transition all 0.2s linear 
    &.move-enter
      transform translateX(100%)
      opacity 0
    &.move-leave-to
      transform translateX(-100%)
      opacity 0
    .image-header
      position relative
      width 100%
      height 0
      padding-top 100%
      img 
        position absolute
        top 0
        left 0
        width 100%
        height 100%
      .back
        position absolute
        top 10px
        left 0
        .icon-arrow_lift
          display block
          padding: 18px
          font-size 20px
          color #fff
    .content
      position relative
      padding 18px
      .title
        line-height 14px
        margin-bottom 8px
        font-size 14px
        font-weight 700
        color rgb(7,17,27)
      .detail
        margin-bottom 18px
        line-height 10px
        height 10px
        font-size 0
        .sell-count,
        .rating
          font-size 10px
          color rgb(147,153,159)
        .sell-count
          margin-right  12px
      .price
        font-weight 7
        line-height 24px
        .now
          margin-right 8px
          font-size 14px
          color rgb(240,20,20)
        .old
          text-decoration line-through
          font-size 10px
          color #999
      .cartcontrol-wrapper
        position absolute
        right 12px
        bottom 12px
      .buy
        position absolute
        right 18px
        bottom 18px
        z-index 10
        height 24px
        line-height 24px
        padding 0 12px
        box-sizing border-box
        border-radius 12px
        font-size 10px
        width 74px
        color #ffffff
        background rgb(0,160,220)
        &.fade-enter-active,
        &.fade-leave-active
          transition all 0.2s ease
        &.fade-enter,
        &.fade-leave-to
          width 0px;
          opacity 0
    .info
      padding 18px
      .title
        line-height 14px
        margin-bottom 6px
        font-size 14px
        color rgb(7, 17, 27)
      .text
        line-height 24px
        padding 0 8px
        font-size 12px
        color rgb(77,85,93)

</style>