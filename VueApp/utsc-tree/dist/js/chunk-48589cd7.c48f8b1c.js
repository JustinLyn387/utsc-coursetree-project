(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48589cd7"],{"0160":function(e,t,r){},"297c":function(e,t,r){"use strict";r("a9e3");var i=r("2b0e"),s=r("37c6");t["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("acd8"),r("c7cd"),r("159b");var i=r("2fa7"),s=(r("6ece"),r("0789")),n=r("a9ad"),a=r("fe6c"),o=r("a452"),l=r("7560"),c=r("80d2"),d=r("58df");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=Object(d["a"])(n["a"],Object(a["b"])(["absolute","fixed","top","bottom"]),o["a"],l["a"]),v=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(c["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(c["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(i["a"])(e,this.$vuetify.rtl?"right":"left",Object(c["g"])(this.normalizedValue,"%")),Object(i["a"])(e,"width",Object(c["g"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return h({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?s["d"]:s["e"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(c["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(c["r"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),r=t.width;this.internalValue=e.offsetX/r*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(c["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t["a"]=v},"615b":function(e,t,r){},"6ece":function(e,t,r){},"8ce9":function(e,t,r){},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return l}));var i=r("b0af"),s=r("80d2"),n=Object(s["i"])("v-card__actions"),a=Object(s["i"])("v-card__subtitle"),o=Object(s["i"])("v-card__text"),l=Object(s["i"])("v-card__title");i["a"]},a2f9:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NewsFeedbackPage")},s=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"mainContainer"},[r("v-row",{staticClass:"mainRow"},[r("v-col",{staticClass:"newsCol"},[r("v-row",{staticClass:"newsSubRows"},[r("v-card",{staticClass:"newsCard"},[r("v-row",{staticClass:"innerNewsRows"},[r("h2",[e._v("Leave Feedback")]),r("p",[e._v("If you have any feedback or feature requests, let us know by clicking the button and filling out the form!")]),r("v-btn",{attrs:{color:"green accent-3"}},[e._v("Feedback Form")])],1)],1)],1),r("v-row",{staticClass:"newsSubRows"},[r("v-card",{staticClass:"newsCard"},[r("v-row",{staticClass:"innerNewsRows"},[r("v-col",[r("h2",[e._v("Developer Messages")]),r("v-row",{staticClass:"newsFeed"},[r("v-list",{staticClass:"feedList",attrs:{"two-line":""}},[r("v-list-item-group",[e._l(e.newsItems,(function(t,i){return[r("v-list-item",{key:t.title},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.title)}}),r("v-list-item-subtitle",{staticClass:"text--primary",domProps:{textContent:e._s(t.info)}}),r("v-list-item-subtitle",{domProps:{textContent:e._s(t.date)}})],1)],1),i+1<e.newsItems.length?r("v-divider",{key:i}):e._e()]}))],2)],1)],1)],1)],1)],1)],1)],1),r("v-col",{staticClass:"timelineCol"},[r("h2",[e._v("Updates & Releases")]),r("v-timeline",e._l(e.releaseItems.slice().reverse(),(function(t,i){return r("v-timeline-item",{key:i,attrs:{color:t.color,"fill-dot":"",right:t.side,small:t.size},scopedSlots:e._u([{key:"opposite",fn:function(){return[r("span",[e._v(e._s(t.date))])]},proxy:!0}],null,!0)},[r("v-card",[r("v-card-title",{class:t.color},[r("h3",[e._v(e._s(t.title))])]),r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"10"}},[e._v(" "+e._s(t.message)+" ")])],1)],1)],1)],1)})),1)],1)],1)],1)},a=[],o=(r("26e9"),{name:"NewsFeedbackPage",data:function(){return{side:!0,releaseItems:[{side:!1,size:!1,color:"green",title:"Test 1: Launch",message:"Test 1 Body",date:"Jan 12/2020"},{side:!0,size:!0,color:"primary",title:"Test 2: New Features",message:"Test 2 Body",date:"Feb 22/2020"},{side:!1,size:!1,color:"red",title:"Test 3: Bug Fix",message:"Test 3 Body",date:"March 23/2020"},{side:!0,size:!0,color:"red",title:"Test 4: Bug Fix",message:"Test 4 Body",date:"June 23/2020"},{side:!1,size:!1,color:"primary",title:"Test 5: New Features",message:"Test 5 Body",date:"November 23/2020"},{side:!0,size:!0,color:"red",title:"Test 6: Bug Fix",message:"Test 6 Body",date:"December 25/2020"}],newsItems:[{title:"Message 1: A",info:"Test 1 Body",date:"January 12/2020"},{title:"Message 2: B",info:"Test 2 Body",date:"February 12/2020"},{title:"Message 3: C",info:"Test  Body",date:"March 12/2020"},{title:"Message 4: D",info:"Test 4 Body",date:"April 12/2020"},{title:"Message 5: E",info:"Test 5 Body",date:"May 12/2020"},{title:"Message 6: F",info:"Test 6 Body",date:"June 12/2020"},{title:"Message 7: G",info:"Test 7 Body",date:"July 12/2020"},{title:"Message 8: H",info:"Test 8 Body",date:"July 12/2020"},{title:"Message 9: I",info:"Test 9 Body",date:"July 12/2020"},{title:"Message 10: J",info:"Test 10 Body",date:"July 12/2020"},{title:"Message 11: K",info:"Test 11 Body",date:"July 12/2020"},{title:"Message 12: L",info:"Test 12 Body",date:"July 12/2020"},{title:"Message 13: M",info:"Test 13 Body",date:"July 12/2020"}]}},filters:{reverse:function(e){return e.reverse()}}}),l=o,c=(r("cc2b"),r("2877")),d=r("6544"),u=r.n(d),h=r("8336"),f=r("b0af"),v=r("99d9"),p=r("62ad"),m=r("a523"),g=r("ce7e"),b=r("8860"),y=r("da13"),O=r("5d23"),_=r("1baa"),w=r("0fd9"),B=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),j=(r("0160"),r("58df")),C=r("7560");function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(r,!0).forEach((function(t){Object(B["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=Object(j["a"])(C["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return k({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),T=(r("c96a"),r("9d26")),$=r("a9ad");function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(r,!0).forEach((function(t){Object(B["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=Object(j["a"])($["a"],C["a"]),x=V.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(T["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var e=this.setBackgroundColor(this.color);return this.$createElement("div",E({staticClass:"v-timeline-item__inner-dot"},e),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:E({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}}),z=Object(c["a"])(l,n,a,!1,null,"4af4a646",null),I=z.exports;u()(z,{VBtn:h["a"],VCard:f["a"],VCardTitle:v["d"],VCol:p["a"],VContainer:m["a"],VDivider:g["a"],VList:b["a"],VListItem:y["a"],VListItemContent:O["a"],VListItemGroup:_["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VRow:w["a"],VTimeline:D,VTimelineItem:x});var F={name:"News",components:{NewsFeedbackPage:I}},M=F,L=Object(c["a"])(M,i,s,!1,null,"f86d89c0",null);t["default"]=L.exports},b0af:function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("0481"),r("4160"),r("4069"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b");var i=r("2fa7"),s=(r("615b"),r("10d2")),n=r("297c"),a=r("1c87"),o=r("58df");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=Object(o["a"])(n["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return c({"v-card":!0},a["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},s["a"].options.computed.classes.call(this))},styles:function(){var e=c({},s["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=n["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,i=t.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},cc2b:function(e,t,r){"use strict";var i=r("d398"),s=r.n(i);s.a},ce7e:function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var i=r("2fa7"),s=(r("8ce9"),r("7560"));function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:a({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:a({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},d398:function(e,t,r){}}]);
//# sourceMappingURL=chunk-48589cd7.c48f8b1c.js.map