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
          <RatingSelected :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings" @only-content="toggleContent" @selected="selected"></RatingSelected>
          <div class="rating-wrapper  border-1px">
            <ul v-if="food.ratings && food.ratings.length !== 0">
              <li v-show="needShow(rating.rateType,rating.text)" class="rating-item" v-for="(rating, index) in food.ratings" :key="index">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" :src="rating.avatar" width="12" height="12"  alt="">
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <span :class="{ 'icon-thumb_up': rating.rateType === 0,'icon-thumb_down': rating.rateType === 1 }">
                  </span>
                  {{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-if="food.ratings && !food.ratings.length">
              暂无评价
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  const ALL = 2;
  import BScroll from 'better-scroll'
  import CartController from '../../components/cartcontroller/CartController'
  import Split from '../../components/split/Split.vue'
  import RatingSelected from '../../components/ratingSelected/RatingSelected.vue'
  import {formatDate} from '../../assets/js/date'
  export default {
    components: {
      CartController,
      Split,
      RatingSelected
    },

    props: {
      'food': {
        type: Object
      }
    },

    data () {
      return {
        showFlag: false,
        scroll: null,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },

    computed: {
      
    },

    methods: {
      show() {
        this.showFlag = true;
        this.selectType = ALL,
        this.onlyContent = true,
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
      toggleContent(){
        this.onlyContent = !this.onlyContent
      },
      selected(type){
        this.selectType = type;
      },
      addFirst() {
        if (!this.food.count || this.food.count === 0){
          this.$set(this.food, 'count', 1);
        }
      },
      needShow(type, text) {
        if (this.onlyContent && !text){
          return false;
        }
        if (this.selectType == ALL){
          return true;
        } else {
          return type === this.selectType;
        }
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date,'yyyy-MM-dd hh:mm');
      }
    }
  }
</script>
<style lang='stylus' scoped> 
  @import '../../assets/stylus/mixin.stylus'

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
    .rating
      padding-top 14px
      .title
        line-height 14px
        margin-left 18px
        font-size 14px
        color rgb(7, 17, 27)
    .rating-wrapper
      padding 0 18px
      .rating-item
        position relative
        padding 16px 0
        border-1px(rgba(7,17,27,.1))
        .user 
          position absolute
          right 0
          top 16px
          font-size 0
          line-height 12px
          .name 
            display inline-block
            margin-right 6px
            vertical-align top
            font-size 10px
            color rgb(147,153,159)
          .avater
            border-radius 50%
        .time
          margin-bottom 6px
          line-height 12px
          font-size 10px
          color rgb(147,153,159)
        .text
          line-height 16px
          font-size 12px
          color rgb(7,17,27)
          .icon-thumb_up,
          .icon-thumb_down
            margin-right 4px
            line-height 16px
            font-size 12px
          .icon-thumb_up
            color rgb(0,160,220)
          .icon-thumb_down
            color rgb(147,153,159)
      .no-rating
        padding 16px 0
        font-size 12px
        color rgb(147,153,159)


</style>