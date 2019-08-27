<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart">
        <transition name="icon">
          <span class="inner icon-remove_circle_outline"></span>
        </transition>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script>
  export default {
    components: {},

    props:[
      'food'
    ],

    data () {
      return {
      };
    },

    computed: {

    },

    created(){
    },

    methods: {
      addCart(event){
        if (!this.food.count){
          this.$set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('drop', event)
      },
      decreaseCart(){
        if(this.food.count) {
          this.food.count--;
        }
      }
    }
  }

</script>
<style lang='stylus' scoped>
  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      .inner
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0,160,220)
        transform rotate(0)
      &.move-enter-active, 
      &.move-leave-active
          transition all 0.5s ease
          .inner
            transition all 0.5s ease
      &.move-enter,
      &.move-leave-to
        opacity 0
        transform translate3d(24px,0,0)
        .inner
          transform rotate(180deg)
    .cart-count 
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147,153,159)
    .cart-add
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0,160,220)
</style>