# ele-sell

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### 工具

[Css样式重置](https://meyerweb.com/eric/tools/css/reset/)  
[SVG转换Fonts](https://icomoon.io/)
[emmet](https://docs.emmet.io/)


### 页面效果实现

#### Stick footers布局
![](https://github.com/mintsberry/img-folder/blob/master/ele-sell/overlay.jpg)
```html
<div v-show="detailShow" class="detail">
  <div class="detail-wrapper clearfix">
    <div class="detail-main">
     
    </div>
  </div>
  <div class="detail-close">
      <i class="icon-close"></i>
  </div>
</div>
```
```css
.detail
  position fixed
  z-index 100
  top 0
  left 0
  width 100%
  height 100%
  overflow auto
  .detail-wrapper
    min-height 100%
    width 100%
  .clearfix
    display: inline-block
    &:after
      display: block
      height 0
      line-height 0
      visibility hidden
      content: '.'
  .detail-close
    position relative
    width 32px
    height 32px
    margin -64px auto 9px auto 
    clear both
    font-size 32px
```

#### 小球动画

```html
<div class="ball-container">
  <div  v-for="(ball, index) in balls" :key="index">
    <transition name="drop"
    @before-enter="beforeEnter"
    @enter = "enter"
    @after-enter="afterEnter"
    >
      <div class="ball" v-show="ball.show">
        <div class="inner inner-hook"></div>
      </div>
    </transition>
  </div>
</div>
```
```css
.ball-container
  .ball
    position fixed
    left 32px
    bottom 22px
    z-index 200
    transition all 0.5s cubic-bezier(0,-0.63,1,.3) 
    .inner
      width 16px
      height 16px
      border-radius 50%
      background rgb(0,160,220)
      transition: all 0.5s cubic-bezier(0, 0, 0, 0);
```
```js
methods: {
  drop(el){
    this.balls.some(ball => {
      if (!ball.show){
        ball.el = el;
        ball.show = true;
        this.dropballs.push(ball);
        return true;
      }
    })
  },
  beforeEnter(el){
        const ball = this.dropballs[this.dropballs.length - 1]
        let x = ball.el.clientX - 32;
        let y = -(window.innerHeight - 22 - ball.el.clientY);
        el.style.display = '';
        el.style.transform = el.style.webkitTransform = `translate3d(0,${y}px,0)`;
        let inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.transform = inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
        console.log(inner)

      },
  enter(el,done){
    el.offsetWidth;
    el.style.transform = el.style.webkitTransform = `translate3d(0,0,0)`;
    let inner = el.getElementsByClassName('inner-hook')[0];
    inner.style.transform = inner.style.webkitTransform = `translate3d(0,0,0)`;
    el.addEventListener('transitionend', done);
  },
  afterEnter(el){
    let ball = this.dropballs.shift();
    if (ball){
      ball.show = false;
      el.style = '';
      el.style.display = 'none';
    }
  }
}
```
#### 移动端一像素问题
```
border-1px($color)
  position relative
  &:after
      display block
      position absolute
      left 0
      bottom 0
      width 100%
      border-top 1px solid $color
      content: ' 
```

