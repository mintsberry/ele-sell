<template>
  <div class="rating-select" v-if="ratings">
    <div class="rating-type border-1px" >
      <span class="block positive" :class="{ active: selectType === 2}" @click="select(2)">
        {{desc.all}}
        <span class="count">
          {{ratings.length}}
        </span>
      </span>
      <span class="block positive" :class="{ active: selectType === 0}" @click="select(0)">
        {{desc.positive}}
        <span class="count">
          {{positivesContent.length}}
        </span>
      </span>
      <span class="block negative" :class="{ active: selectType === 1}" @click="select(1)">
        {{desc.negative}}
        <span class="count">
          {{negativesContent.length}}
        </span>
      </span>
    </div>
    <div class="switch" @click="toggleContent">
      <span class="icon-check_circle" :class="{'on':onlyContent}"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
  
  export default {

    components: {
    },

    props: {
      ratings: {
        type: Array,
        default() {
        
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: true
      },
      desc: {
        type: Object,
        default(){
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    },

    data () {
      return {
      };
    },

    computed: {
      positivesContent(){
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE;
        })
      },
      negativesContent(){
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE;
        }) 
      }
    },

    methods: {
      select(type){
        this.$emit('selected',type);
      },
      toggleContent(){
        this.$emit('only-content');
      }
    },

}
</script>
<style lang='stylus' scoped>
  @import '../../assets/stylus/mixin.stylus'
  .rating-select
    .rating-type
      padding 18px 0
      margin 0 18px
      border-1px (rgba(7,17,27,0.1))
      font-size 0
      .block
        display inline-block
        padding 8px 12px
        margin-right 8px
        border-radius 1px
        font-size 12px
        color rgb(77,85,93)
        &.active
          color #fff
        .count
          font-size 8px
          line-height 16px
          margin-left 2px
        &.positive
          background rgba(0,160,220,0.2)
          &.active
            background rgb(0,160,220)
        &.negative
          background rgba(77,85,93,0.2)
          &.active
            background rgb(77,85,93)
    .switch
      padding 12px 18px
      line-height 24px
      border-bottom 1px solid rgba(7,17,27,0.1)
      color rgb(147,154,159)
      font-size 0
      .icon-check_circle
        vertical-align middle
        margin-right 4px
        font-size 24px
        &.on
          color: #00c850
      .text
        vertical-align middle
        font-size 12px

</style>