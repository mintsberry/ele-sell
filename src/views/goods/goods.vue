<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" v-for="(item, index) in goods" :class="{ 'current' : currentIndex === index }" :key="index" @click="selectMenu(index, $event)">
          <span class="text border-1px">
            <span v-show="item.type > 0" class="icon"></span>
            <Activitiesicon v-if="item.type > 0" :size=3 :type="item.type"></Activitiesicon>
            <span>{{item.name}}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li class="food-list food-list-hook" v-for="(item,index) in goods" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item border-1px" v-for="(food, index) in item.foods" :key="index">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">
                  {{food.description}}
                </p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  const ERR_OK = 0;
  import Activitiesicon from '../../components/activitiesIcon/Activitiesicon'
  import BScroll from 'better-scroll'
  export default {
    components: {
      Activitiesicon
    },
    
    props:[
      'seller',

    ],

    data () {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        foodsScroll: {},
        currentIndex: 0
      };
    },

    computed: {
    },

    watch:{
      scrollY(){
        for (let i = 0; i < this.listHeight.length; i++){
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)){     
            return this.currentIndex = i;
          }
        
        }
        return this.currentIndex = 0;
      }
    },

    created(){
      this.$axios.get('/api/goods').then(response=>{
        let result = response.data;
        if (result.errno === ERR_OK){
          this.goods = result.data;
          this.$nextTick(()=>{
            this._initScroll();
            this._calculateHeight();
          })
        }
      })
    },

    methods: {
      selectMenu(index, event){
        let foodsList = this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");
        let el = foodsList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      _initScroll(){       
        this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          probeType: 3
        });
        this.foodsScroll.on('scroll',pos => {
          this.scrollY = Math.abs(Math.round(pos.y));
        })
      },
      _calculateHeight(){
        let foodsList = this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodsList.length; i++){
          let item = foodsList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      
    }
  }

</script>

<style lang='stylus' scoped>
  @import '../../assets/stylus/mixin.stylus';
  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      text-align: center;
      .menu-item
        display table
        height 54px
        width 56px
        line-height 14px
        padding 0 12px
        &.current
          z-index 10
          background #fff
          font-weight 700
          transform scale(1.1)
          transition: width,height .3s ease;
          .text
            border-none() 
        .icon
          margin-right 2px
        .text
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7,17,27,0.1))
          font-size 12px
    .foods-wrapper
      flex 1
      .title
        padding-left 14px
        height 26px
        line-height 26px
        border-left 2px solid #d9dde1
        font-size 12px
        color rgb(147,153,159)
        background #f3f5f7
      .food-item
        display flex
        margin 16px
        padding-bottom 16px
        border-1px(rgba(7,17,27,0.1))
        &:last-child
          border-none()
          margin-bottom 0
        .icon
          flex 0 0 57px
          margin: auto 10px auto 0px;
        .content
          flex 1
          .name
            margin 2px 0 6px 0
            height 14px
            line-height 14px
            font-size 14px
            color rgb(7,17,27)
          .desc,
          .extra
            line-height 18px
            font-size 10px
            color rgb(147,153,159)
          .desc
            line-height 12px
            margin-bottom 2px
          .extra
            .count
              margin-right 12px
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
</style>