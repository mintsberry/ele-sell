<template>
  <div class="shopcart">
    <div class="content" @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{ 'highlight' : totalCount> 0}">
            <i class="icon-shopping_cart" :class="{ 'highlight' : totalCount > 0}" ></i>
          </div>
          <div class="num" v-if=" totalCount > 0">{{totalCount}}</div>
        </div>
        <div class="price">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>

      </div>
      <div class="content-right" @click.stop="pay">
        <div class="pay" :class="payClass">
          {{payDesc}}
        </div>
      </div>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <div class="title">购物车</div>
          <span class="empty" @click='empty'>清空</span>
        </div>
        <div class="list-content" ref="listContent">
          <ul>
            <li class="food" v-for="(food, index) in selectFoods" :key="index">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>￥{{food.price * food. count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <CartController :food="food"></CartController>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="hideList"></div>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import CartController from '../../components/cartcontroller/CartController'
  export default {
    components: {
      CartController
    },

    props:{
      'deliveryPrice': {
        type: Number,
        default: 0
      },
      'minPrice':{
        type: Number,
        default: 0
      },
      'selectFoods':{
        type: Array
      }

    },

    data () {
      return {
        fold: true,
        scroll: null
      }
    },

    computed: {
        totalPrice(){
          return this.selectFoods.reduce((total, item) => {
            total += parseFloat(item.price) * parseFloat(item.count);
            return total
          },0) ;
        },
        totalCount(){
          let count = 0;
          this.selectFoods.forEach(element => {
            count += element.count;
          });
          return count;
        },
        payDesc() {
          if (this.totalPrice === 0) {
            return `￥${this.minPrice}元起送`
          } else if (this.totalPrice < this.minPrice) {
            return `还差￥${this.minPrice - this.totalPrice}元起送`
          } else {
            return '结算';
          }
        },
        payClass(){
          if (this.totalPrice < this.minPrice) {
            return "not-enough"
          } else {
            return 'enough';
          }
        },
        listShow(){
          if (!this.totalCount){
            this.fold = true;
            return false;
          }
          let show = !this.fold;
          if (show){
            this.$nextTick(()=>{
              if (!this.scroll){
                this.scroll = new BScroll(this.$refs.listContent,{
                  click: true
                });
              } else {
                this.scroll.refresh();
              }
            });
          }
          return show;
        }
    },

    methods: {
      toggleList(){
        if (!this.totalCount){
          return ;
        } else {
          this.fold = !this.fold;
        }
      },
      empty(){
        this.selectFoods.forEach((food)=>{
          food.count = 0;
        })
      },
      hideList(){
        this.fold = true;
      },
      pay(){
        if (this.totalPrice < this.minPrice){
          return ;
        } 
        window.alert(`支付${this.totalPrice}`);
      }
    }
  }

</script>
<style lang='stylus' scoped>
  @import '../../assets/stylus/mixin.stylus';
  .shopcart
    position fixed
    left: 0
    bottom 0
    z-index 50
    width 100%
    height 48px
    .content
      display flex
      background #141d27
      color rgba(255,255,255,0.4)
      .content-left
        flex 1
        .logo-wrapper
          display inline-block
          position relative
          top -10px
          margin 0 12px
          padding 6px
          width 56px
          height 56px 
          box-sizing border-box
          vertical-align top
          border-radius 50%
          background #141d27
          .logo
            width 100%
            height 100%
            border-radius 50%
            background #2b343c
            text-align center
            &.highlight
              background rgb(0,160,220)
            .icon-shopping_cart
              line-height 44px
              font-size 24px
              color #80858a
              &.highlight
                color #fff
          .num 
            position absolute
            top 0
            right 0
            width 24px
            height 16px
            line-height 16px
            text-align center
            border-radius 16px
            font-size 9px
            font-weight 700
            color #ffffff
            background rgb(240,20,20)
            box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
        .price
          display inline-block
          vertical-align top
          margin-top 12px
          line-height 24px
          padding-right 12px
          box-sizing border-box
          border-right 1px solid rgba(255,255,255,0.1)
          color rgba(255,255,255,0.4)
          font-size 16px
          font-weight 700
        .desc
          display inline-block
          vertical-align top
          margin 12px 0 0 12px
          line-height 24px
          font-size 10px
          color rgba(255,255,255,0.4)
      .content-right
        flex 0 0 105px
        width 105px
        .pay
          height 48px
          line-height 48px
          text-align center
          font-size 12px
          font-weight 700
          &.not-enough
            background #2b333b
          &.enough
            background #00b43c
            color: #fff
    .shopcart-list
      position absolute
      left: 0
      top 0
      z-index: -1
      width 100%
      transform: translate3d(0,-100%,0)
      &.fold-enter-active,
      &.fold-leave-active
        transition all 0.5s
      &.fold-enter,
      &.fold-leave-to
        transform: translate3d(0,0,0)
      .list-header
        height 40px
        line-height 40px
        padding 0 18px
        background #f3f5f7
        border-bottom 1px solid rgba(7,17,27,0.1)
        .title
          float left
          font-size 14px
          color rgb(7,17,27)
        .empty
          float right
          font-size 12px
          color rgb(0,160,220)
      .list-content
        padding 0 18px
        max-height 210px
        overflow hidden
        background #fff
        .food
          position relative
          padding 12px 0
          box-sizing border-box
          border-1px(rgba(7,17,27,0.1))
          .name
            line-height 24px
            font-size 14px
            color rgb(7,17,27)
          .price
            position absolute
            right 90px
            bottom 12px
            line-height 24px  
            font-size 14px
            font-weight 700
            color rgb(240,20,20)
          .cartcontrol-wrapper
            position absolute
            right 0
            bottom 6px
    .list-mask
      position fixed
      top 0;
      left 0;
      width 100%
      height 100%
      z-index -40
      opacity 1
      background rgba(7,17,27,.6)
      backdrop-filter blur(10px)
      &.fade-enter-active,
      &.fade-leave-active,
        transition all 1s ease
      &.fade-enter,
      &.fade-leave-to
        opacity 0
        background rgba(7,17,27,0)
</style>