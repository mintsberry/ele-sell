<template>
  <span class="icon" :class="[iconType, classMap[type]]"></span>
</template>

<script>
  export default {
    components: {},

    props:[
      'type',
      'size'
    ],

    data () {
      return {
        classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      };
    },

    computed: {
      iconType(){
        return 'icon-' + this.size
      }
    },

    methods: {}
  }

</script>
<style lang='stylus' scoped>
  .icon
    display inline-block
    vertical-align middle
    width 12px
    height 12px
    margin-right 4px
    background-size 12px
    background-repeat no-repeat
    &.icon-1
      &.decrease
        background-image url('decrease_1@2x.png')
      &.discount
        background-image url('discount_1@2x.png')
      &.guarantee
        background-image url('guarantee_1@2x.png')
      &.invoice
        background-image url('invoice_1@2x.png')
      &.special
        background-image url('special_1@2x.png')
    &.icon-2
      &.decrease
        background-image url('decrease_2@2x.png')
      &.discount
        background-image url('discount_2@2x.png')
      &.guarantee
        background-image url('guarantee_2@2x.png')
      &.invoice
        background-image url('invoice_2@2x.png')
      &.special
        background-image url('special_2@2x.png')
    &.icon-3
      &.decrease
        background-image url('decrease_3@2x.png')
      &.discount
        background-image url('discount_3@2x.png')
      &.guarantee
        background-image url('guarantee_3@2x.png')
      &.invoice
        background-image url('invoice_3@2x.png')
      &.special
        background-image url('special_3@2x.png')
    &.icon-4
      &.decrease
        background-image url('decrease_4@2x.png')
      &.discount
        background-image url('discount_4@2x.png')
      &.guarantee
        background-image url('guarantee_4@2x.png')
      &.invoice
        background-image url('invoice_4@2x.png')
      &.special
        background-image url('special_4@2x.png')
</style>