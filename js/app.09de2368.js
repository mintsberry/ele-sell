(function(t){function s(s){for(var a,o,r=s[0],l=s[1],c=s[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(s);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(a=!1)}a&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},i={app:0},n=[];function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0825":function(t,s,e){"use strict";var a=e("ab26"),i=e.n(a);i.a},1023:function(t,s,e){},"103a":function(t,s,e){},1204:function(t,s,e){"use strict";var a=e("7fbf"),i=e.n(a);i.a},3835:function(t,s,e){"use strict";var a=e("103a"),i=e.n(a);i.a},"3f87":function(t,s,e){"use strict";var a=e("c44b"),i=e.n(a);i.a},5075:function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),i=(e("bac9"),e("83ff")),n=e("f53b"),o=e("a141"),r=e("9647"),l=e("3b34"),c=e("c25f"),u=e("b92f"),d=e("4ce1"),p=e("36e2"),f=e("6271"),v=e("987a"),h=e("4620"),C=e("e733"),m=e("276e"),_=e("9b33"),g=e("3503"),y=e("ad17"),w=e("f425"),b=e("c61e"),x=e("8db7"),k=e("5763"),S=e("0cf4"),T=e("e53d5"),$=e("995a"),P=e("02ce"),E=e("1cba"),O=e("8199"),F=e("76aa"),j=e("7772"),M=e("1a68"),N=e("f57e"),D=e("c8e9"),H=e("5dc9"),z=e("a46d"),R=e("dbcf"),A=e("803a"),W=e("b505");a["a"].use(i["a"]),a["a"].use(n["a"]),a["a"].use(o["a"]),a["a"].use(r["a"]),a["a"].use(l["a"]),a["a"].use(c["a"]),a["a"].use(u["a"]),a["a"].use(d["a"]),a["a"].use(p["a"]),a["a"].use(f["a"]),a["a"].use(v["a"]),a["a"].use(h["a"]),a["a"].use(C["a"]),a["a"].use(m["a"]),a["a"].use(_["a"]),a["a"].use(g["a"]),a["a"].use(y["a"]),a["a"].use(w["a"]),a["a"].use(b["a"]),a["a"].use(x["a"]),a["a"].use(k["a"]),a["a"].use(S["a"]),a["a"].use(T["a"]),a["a"].use($["a"]),a["a"].use(P["a"]),a["a"].use(E["a"]),a["a"].use(O["a"]),a["a"].use(F["a"]),a["a"].use(j["a"]),a["a"].use(M["a"]),a["a"].use(N["a"]),a["a"].use(D["a"]),a["a"].use(H["a"]),a["a"].use(z["a"]),a["a"].use(R["a"]),a["a"].use(A["a"]),a["a"].use(W["a"]);var L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("e-header",{attrs:{seller:t.seller}}),e("div",{staticClass:"tab border-1px"},[e("router-link",{staticClass:"tab-item",attrs:{to:"/goods"}},[t._v("商品")]),e("router-link",{staticClass:"tab-item",attrs:{to:"/ratings"}},[t._v("评论")]),e("router-link",{staticClass:"tab-item",attrs:{to:"/seller"}},[t._v("商家")])],1),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},Y=[],B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t.seller.supports?e("div",{staticClass:"support"},[e("Activitiesicon",{attrs:{size:1,type:t.seller.supports[0].type}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])],1):t._e()]),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%",alt:""}})]),e("transition",{attrs:{name:"detail"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{score:t.seller.score,size:48}})],1),e("OverlayHeader",{attrs:{text:"优惠信息"}}),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{key:a,staticClass:"support-item"},[e("Activitiesicon",{attrs:{size:2,type:s.type}}),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}),0):t._e(),e("OverlayHeader",{attrs:{text:"商家公告"}}),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])],1)]),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},I=[],J=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.startType},t._l(t.itemClasses,function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})}),0)},X=[],q=5,U="on",G="half",K="off",Q={components:{},props:["size","score"],data:function(){return{}},computed:{startType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*parseFloat(this.score))/2,e=s%1!==0,a=Math.floor(s),i=0;i<a;i++)t.push(U);e&&t.push(G);while(t.length<q)t.push(K);return t}},methods:{}},V=Q,Z=(e("9b6f"),e("28777")),tt=Object(Z["a"])(V,J,X,!1,null,"32a1daab",null),st=tt.exports,et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v(t._s(t.text))]),e("div",{staticClass:"line"})])},at=[],it={components:{},props:["text"],data:function(){return{}},computed:{},methods:{}},nt=it,ot=(e("c54b"),Object(Z["a"])(nt,et,at,!1,null,"6bf4cc38",null)),rt=ot.exports,lt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon",class:[t.iconType,t.classMap[t.type]]})},ct=[],ut={components:{},props:["type","size"],data:function(){return{classMap:["decrease","discount","special","invoice","guarantee"]}},computed:{iconType:function(){return"icon-"+this.size}},methods:{}},dt=ut,pt=(e("d01b"),Object(Z["a"])(dt,lt,ct,!1,null,"846596aa",null)),ft=pt.exports,vt={components:{Star:st,OverlayHeader:rt,Activitiesicon:ft},props:["seller"],data:function(){return{classMap:[],detailShow:!1}},computed:{},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}},ht=vt,Ct=(e("a71c"),Object(Z["a"])(ht,B,I,!1,null,"4fc5bcf9",null)),mt=Ct.exports,_t=0,gt={components:{"e-header":mt},data:function(){return{seller:{}}},created:function(){var t=this;this.$axios.get("/api/seller").then(function(s){var e=s.data;e.errno===_t&&(t.seller=e.data)})}},yt=gt,wt=(e("7faf"),Object(Z["a"])(yt,L,Y,!1,null,null,null)),bt=wt.exports,xt=e("8c4f"),kt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){return t.selectMenu(a,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon"}),s.type>0?e("Activitiesicon",{attrs:{size:3,type:s.type}}):t._e(),e("span",[t._v(t._s(s.name))])],1)])}),0)]),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),e("ul",t._l(s.foods,function(s,a){return e("li",{key:a,staticClass:"food-item border-1px",on:{click:function(e){return t.selectFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon,alt:""}})]),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),e("p",{staticClass:"desc"},[t._v("\n                "+t._s(s.description)+"\n              ")]),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),e("div",{staticClass:"cartcontrol-wrapper"},[e("CartController",{attrs:{food:s},on:{drop:t.drop}})],1)])])}),0)])}),0)]),e("ShopCart",{attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,a){return e("div",{key:a},[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)}),0),e("Food",{ref:"food",attrs:{food:t.selectedFood}})],1)},St=[],Tt=(e("ac6aa"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),t.decreaseCart(s)}}},[e("transition",{attrs:{name:"icon"}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),t.addCart(s)}}})],1)}),$t=[],Pt={components:{},props:["food"],data:function(){return{}},computed:{},created:function(){},methods:{addCart:function(t){this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit("drop",t)},decreaseCart:function(){this.food.count&&this.food.count--}}},Et=Pt,Ot=(e("6608"),Object(Z["a"])(Et,Tt,$t,!1,null,"639fba1a",null)),Ft=Ot.exports,jt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),e("div",{staticClass:"cartcontrol-wrapper"},[e("CartController",{attrs:{food:t.food}})],1),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:t.addFirst}},[t._v("\n          加入购物车\n          ")])])],1),t.food.info?e("Split"):t._e(),t.food.info?e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v("商品信息")]),e("div",{staticClass:"text"},[t._v(t._s(t.food.info))])]):t._e(),e("Split"),e("div",{staticClass:"rating"},[e("div",{staticClass:"title"},[t._v("商品评价")]),e("RatingSelected",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{"only-content":t.toggleContent,selected:t.selected}}),e("div",{staticClass:"rating-wrapper  border-1px"},[t.food.ratings&&0!==t.food.ratings.length?e("ul",t._l(t.food.ratings,function(s,a){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],key:a,staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12",alt:""}})]),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v("\n                "+t._s(s.text)+"\n              ")])])}),0):t._e(),t.food.ratings&&!t.food.ratings.length?e("div",{staticClass:"no-rating"},[t._v("\n            暂无评价\n          ")]):t._e()])],1)],1)])])},Mt=[],Nt=e("ecd2"),Dt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"splite"})},Ht=[],zt={components:{},props:{},data:function(){return{}},computed:{},methods:{}},Rt=zt,At=(e("3f87"),Object(Z["a"])(Rt,Dt,Ht,!1,null,"3b7b1659",null)),Wt=At.exports,Lt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.ratings?e("div",{staticClass:"rating-select"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){return t.select(2)}}},[t._v("\n      "+t._s(t.desc.all)+"\n      "),e("span",{staticClass:"count"},[t._v("\n        "+t._s(t.ratings.length)+"\n      ")])]),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){return t.select(0)}}},[t._v("\n      "+t._s(t.desc.positive)+"\n      "),e("span",{staticClass:"count"},[t._v("\n        "+t._s(t.positivesContent.length)+"\n      ")])]),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){return t.select(1)}}},[t._v("\n      "+t._s(t.desc.negative)+"\n      "),e("span",{staticClass:"count"},[t._v("\n        "+t._s(t.negativesContent.length)+"\n      ")])])]),e("div",{staticClass:"switch",on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle",class:{on:t.onlyContent}}),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])]):t._e()},Yt=[],Bt=(e("c5f63"),0),It=1,Jt=2,Xt={components:{},props:{ratings:{type:Array,default:function(){}},selectType:{type:Number,default:Jt},onlyContent:{type:Boolean,default:!0},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},data:function(){return{}},computed:{positivesContent:function(){return this.ratings.filter(function(t){return t.rateType===Bt})},negativesContent:function(){return this.ratings.filter(function(t){return t.rateType===It})}},methods:{select:function(t){this.$emit("selected",t)},toggleContent:function(){this.$emit("only-content")}}},qt=Xt,Ut=(e("0825"),Object(Z["a"])(qt,Lt,Yt,!1,null,"9f3409e2",null)),Gt=Ut.exports;e("3b2be"),e("a4816");function Kt(t,s){var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var a in/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+a+")").test(s)&&(s=s.replace(RegExp.$1,1==RegExp.$1.length?e[a]:("00"+e[a]).substr((""+e[a]).length)));return s}var Qt=2,Vt={components:{CartController:Ft,Split:Wt,RatingSelected:Gt},props:{food:{type:Object}},data:function(){return{showFlag:!1,scroll:null,selectType:Qt,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},computed:{},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=Qt,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new Nt["a"](t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},toggleContent:function(){this.onlyContent=!this.onlyContent},selected:function(t){this.selectType=t},addFirst:function(){this.food.count&&0!==this.food.count||this.$set(this.food,"count",1)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(this.selectType==Qt||t===this.selectType)}},filters:{formatDate:function(t){var s=new Date(t);return Kt(s,"yyyy-MM-dd hh:mm")}}},Zt=Vt,ts=(e("a6ff"),Object(Z["a"])(Zt,jt,Mt,!1,null,"3ea75914",null)),ss=ts.exports,es=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t.totalCount>0?e("div",{staticClass:"num"},[t._v(t._s(t.totalCount))]):t._e()]),e("div",{staticClass:"price"},[t._v("￥"+t._s(t.totalPrice))]),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n        "+t._s(t.payDesc)+"\n      ")])])]),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("div",{staticClass:"title"},[t._v("购物车")]),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s,a){return e("li",{key:a,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),e("div",{staticClass:"cartcontrol-wrapper"},[e("CartController",{attrs:{food:s}})],1)])}),0)])])]),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},as=[],is={components:{CartController:Ft},props:{deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},selectFoods:{type:Array}},data:function(){return{fold:!0,scroll:null}},computed:{totalPrice:function(){return this.selectFoods.reduce(function(t,s){return t+=parseFloat(s.price)*parseFloat(s.count),t},0)},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥".concat(this.minPrice,"元起送"):this.totalPrice<this.minPrice?"还差￥".concat(this.minPrice-this.totalPrice,"元起送"):"结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new Nt["a"](t.$refs.listContent,{click:!0})}),s}},methods:{toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("支付".concat(this.totalPrice))}}},ns=is,os=(e("b9b1"),Object(Z["a"])(ns,es,as,!1,null,"23f10579",null)),rs=os.exports,ls=0,cs={components:{Activitiesicon:ft,ShopCart:rs,CartController:Ft,Food:ss},props:["seller"],data:function(){return{goods:[],listHeight:[],scrollY:0,foodsScroll:{},currentIndex:0,sellerInfo:this.seller,dropballs:[],selectedFood:{},balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}]}},computed:{selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count>0&&t.push(s)})}),t}},watch:{scrollY:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return this.currentIndex=t}return this.currentIndex=0}},created:function(){var t=this;this.$axios.get("/api/goods").then(function(s){var e=s.data;e.errno===ls&&(t.goods=e.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})},methods:{selectMenu:function(t,s){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),a=e[t];this.foodsScroll.scrollToElement(a,300)},selectFood:function(t,s){this.selectedFood=t,this.$refs.food.show()},drop:function(t){var s=this;this.balls.some(function(e){if(!e.show)return e.el=t,e.show=!0,s.dropballs.push(e),!0})},_initScroll:function(){var t=this;this.meunScroll=new Nt["a"](this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new Nt["a"](this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){var a=t[e];s+=a.clientHeight,this.listHeight.push(s)}},beforeEnter:function(t){var s=this.dropballs[this.dropballs.length-1],e=s.el.clientX-32,a=-(window.innerHeight-22-s.el.clientY);t.style.display="",t.style.transform=t.style.webkitTransform="translate3d(0,".concat(a,"px,0)");var i=t.getElementsByClassName("inner-hook")[0];i.style.transform=i.style.webkitTransform="translate3d(".concat(e,"px,0,0)")},enter:function(t,s){t.offsetWidth,t.style.transform=t.style.webkitTransform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.transform=e.style.webkitTransform="translate3d(0,0,0)",t.addEventListener("transitionend",s)},afterEnter:function(t){var s=this.dropballs.shift();s&&(s.show=!1,t.style="",t.style.display="none")}}},us=cs,ds=(e("1204"),Object(Z["a"])(us,kt,St,!1,null,"2297f2cb",null)),ps=ds.exports,fs=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"title"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"desc border-1px"},[e("Star",{attrs:{size:36,score:t.seller.score}}),e("div",{staticClass:"text"},[t._v(t._s(t.seller.ratingCount))]),e("div",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])]),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),e("Split"),t._m(0),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{key:a,staticClass:"support-item border-1px"},[e("Activitiesicon",{attrs:{size:4,type:s.type}}),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}),0):t._e(),e("Split"),e("div",{staticClass:"pics"},[e("div",{staticClass:"title"},[t._v("商家实景")]),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90",alt:""}})])}),0)])]),e("Split"),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),e("ul",t._l(t.seller.infos,function(s,a){return e("li",{key:a,staticClass:"info-item"},[t._v("\n          "+t._s(s)+"\n        ")])}),0)])],1)])},vs=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bulletin"},[e("div",{staticClass:"title"},[t._v("公告与活动")])])}];function hs(t,s,e){var a=localStorage._seller_;a?(a=JSON.parse(a),a[t]||(a[t]={})):(a={},a[t]={},a[t][s]=e),a[t][s]=e,window.localStorage._seller_=JSON.stringify(a)}function Cs(t,s,e){var a=window.localStorage._seller_;return a?(a=JSON.parse(a)[t],a&&a[s]||e):e}var ms={components:{Star:st,Split:Wt,Activitiesicon:ft},props:{seller:{type:Object}},data:function(){return{classMap:["decrease","discount","special","invoice","guarantee"],favorite:function(){return Cs(1,"favorite",!1)}()}},computed:{favoriteText:function(){return this.favorite?"已收藏":"未收藏"}},watch:{seller:function(){var t=this;if(this.seller.pics){var s=120,e=6,a=(s+e)*this.seller.pics.length-e;this.$refs.picList.style.width=a+"px",this.$nextTick(function(){t.picScroll=new Nt["a"](t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}}},mounted:function(){this.scroll=new Nt["a"](this.$refs.seller,{click:!0})},methods:{toggleFavorite:function(){this.favorite=!this.favorite,hs(1,"favorite",this.favorite)}}},_s=ms,gs=(e("3835"),Object(Z["a"])(_s,fs,vs,!1,null,"62b8fa32",null)),ys=gs.exports,ws=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),e("div",{staticClass:"title"},[t._v("综合评分")]),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("div",{staticClass:"title"},[t._v("服务态度")]),e("Star",{attrs:{size:36,score:t.seller.serviceScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),e("div",{staticClass:"score-wrapper"},[e("div",{staticClass:"title"},[t._v("商品评分")]),e("Star",{attrs:{size:36,score:t.seller.foodScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),e("Split"),e("RatingSelected",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{"only-content":t.toggleContent,selected:t.selected}}),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s,a){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],key:a,staticClass:"rating-item border-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28",alt:""}})]),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),e("div",{staticClass:"star-wrapper"},[e("Star",{attrs:{size:24,score:s.score}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),s.recommend&&s.recommend.length?e("div",{staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._l(s.recommend,function(s,a){return e("span",{key:a,staticClass:"item"},[t._v(t._s(s))])})],2):t._e(),s.recommend&&1!==s.rateType?t._e():e("div",{staticClass:"un-recommend"},[e("span",{staticClass:"icon-thumb_down"})]),e("div",{staticClass:"time"},[t._v("\n              "+t._s(t._f("formatDate")(s.rateTime))+"\n            ")])])])}),0)])],1)])},bs=[],xs=2,ks=0,Ss={components:{Star:st,Split:Wt,RatingSelected:Gt},props:["seller"],data:function(){return{ratings:[],selectType:xs,onlyContent:!0,scroll:scroll}},computed:{},created:function(){var t=this;this.$axios.get("/api/ratings").then(function(s){var e=s.data;e.errno==ks&&(t.ratings=e.data,t.scroll=new Nt["a"](t.$refs.ratings,{click:!0}))})},methods:{toggleContent:function(){this.onlyContent=!this.onlyContent},selected:function(t){this.selectType=t},needShow:function(t,s){return!(this.onlyContent&&!s)&&(this.selectType==xs||t===this.selectType)}},filters:{formatDate:function(t){var s=new Date(t);return Kt(s,"yyyy-MM-dd hh:mm")}}},Ts=Ss,$s=(e("ad97"),Object(Z["a"])(Ts,ws,bs,!1,null,"66180687",null)),Ps=$s.exports;a["a"].use(xt["a"]);var Es=new xt["a"]({mode:"hash",base:"/",linkActiveClass:"active",history:!1,routes:[,{path:"/",redirect:"/goods"},{path:"/goods",name:"goods",component:ps},{path:"/seller",name:"seller",component:ys},{path:"/ratings",name:"ratings",component:Ps}]}),Os=(e("5075"),e("2427")),Fs=e.n(Os),js=e("591a");a["a"].use(js["a"]);var Ms=new js["a"].Store({state:{carts:[{price:10,count:5},{price:10,count:6}]},mutations:{},getters:{getTotalCount:function(t){var s=0;return t.carts.forEach(function(t){s+=t.count}),s}}});a["a"].config.productionTip=!1,a["a"].prototype.$axios=Fs.a,a["a"].prototype.$axios.defaults.baseURL="https://easy-mock.com/mock/5d6a64a6081c747c411d44e0/vue-sell",new a["a"]({router:Es,render:function(t){return t(bt)},store:Ms}).$mount("#app")},"586a":function(t,s,e){},6608:function(t,s,e){"use strict";var a=e("1023"),i=e.n(a);i.a},"7faf":function(t,s,e){"use strict";var a=e("8fba"),i=e.n(a);i.a},"7fbf":function(t,s,e){},"8fba":function(t,s,e){},"94f6":function(t,s,e){},"9b6f":function(t,s,e){"use strict";var a=e("a329"),i=e.n(a);i.a},a329:function(t,s,e){},a6ff:function(t,s,e){"use strict";var a=e("586a"),i=e.n(a);i.a},a71c:function(t,s,e){"use strict";var a=e("e5e7"),i=e.n(a);i.a},ab26:function(t,s,e){},ad97:function(t,s,e){"use strict";var a=e("fa32"),i=e.n(a);i.a},b9b1:function(t,s,e){"use strict";var a=e("ce88"),i=e.n(a);i.a},c44b:function(t,s,e){},c54b:function(t,s,e){"use strict";var a=e("ca14"),i=e.n(a);i.a},ca14:function(t,s,e){},ce88:function(t,s,e){},d01b:function(t,s,e){"use strict";var a=e("94f6"),i=e.n(a);i.a},e5e7:function(t,s,e){},fa32:function(t,s,e){}});
//# sourceMappingURL=app.09de2368.js.map