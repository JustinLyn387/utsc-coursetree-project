(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-086636d4"],{"04df":function(t,e,r){"use strict";var a=r("4223"),n=r.n(a);n.a},"297c":function(t,e,r){"use strict";r("a9e3");var a=r("2b0e"),n=r("37c6");e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(n["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("acd8"),r("c7cd"),r("159b");var a=r("2fa7"),n=(r("6ece"),r("0789")),i=r("a9ad"),s=r("fe6c"),o=r("a452"),c=r("7560"),l=r("80d2"),u=r("58df");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=Object(u["a"])(i["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),o["a"],c["a"]),p=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(a["a"])(t,this.$vuetify.rtl?"right":"left",Object(l["g"])(this.normalizedValue,"%")),Object(a["a"])(t,"width",Object(l["g"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return h({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?n["d"]:n["e"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(l["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(l["s"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(a["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e["a"]=p},4223:function(t,e,r){},5798:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"infoPage"},[r("h1",[t._v("Quick Links & Information")]),r("InfoPage")],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"infoContainer",attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:"leftColumn"},[r("v-row",[r("v-container",{staticClass:"quickCard"},[r("v-card",{staticClass:"card"},[r("h2",{staticClass:"linkHeader"},[t._v(" - Quick Links -")]),r("h3",{staticClass:"linkSubHeader"},[t._v("Courses")]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.acorn.utoronto.ca",target:"_blank"}},[t._v("ACORN")])]),r("li",[r("a",{attrs:{href:"https://www.utsc.utoronto.ca/home/",target:"_blank"}},[t._v("UTSC Home")])]),r("li",[r("a",{attrs:{href:"https://utsc.calendar.utoronto.ca",target:"_blank"}},[t._v("UTSC Calendar")])])]),r("h3",{staticClass:"linkSubHeader"},[t._v("Schedules")]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.utsc.utoronto.ca/registrar/examination-schedule",target:"_blank"}},[t._v("Exam Schedules")])]),r("li",[r("a",{attrs:{href:"https://www.utsc.utoronto.ca/regoffice/timetable/timetable.php",target:"_blank"}},[t._v("Course Timetable")])]),r("li",[r("a",{attrs:{href:"https://www.utsc.utoronto.ca/registrar/dates-and-deadlines",target:"_blank"}},[t._v("Dates & Deadlines")])])]),r("h3",{staticClass:"linkSubHeader"},[t._v("Academics")]),r("ul",[r("li",[r("a",{attrs:{href:"https://idpz.utorauth.utoronto.ca/idp/profile/SAML2/Redirect/SSO;jsessionid=EDDE3B46C59D5DF90611387C8058AEA6?execution=e1s1",target:"_blank"}},[t._v("Quercus")])]),r("li",[r("a",{attrs:{href:"https://idpz.utorauth.utoronto.ca/idp/profile/SAML2/Redirect/SSO?execution=e2s1",target:"_blank"}},[t._v("WebOption")])]),r("li",[r("a",{attrs:{href:"https://utsc-utoronto-csm.symplicity.com/students/?signin_tab=0&signin_tab=0",target:"_blank"}},[t._v("CSM")])])]),r("h3",{staticClass:"linkSubHeader"},[t._v("Services")]),r("ul",[r("li",[r("a",{attrs:{href:"https://intranet.utsc.utoronto.ca/home.php?login=1",target:"_blank"}},[t._v("Intranet")])]),r("li",[r("a",{attrs:{href:"https://weblogin.utoronto.ca/index.cgi",target:"_blank"}},[t._v("WebMail")])]),r("li",[r("a",{attrs:{href:"https://www.utsc.utoronto.ca/regoffice/eservice/student/index.php",target:"_blank"}},[t._v("eService")])])])])],1)],1)],1),r("v-divider",{attrs:{vertical:""}}),r("v-col",{staticClass:"rightColumn"},[r("v-row",[r("v-col",[r("h3",[t._v("UTSC Quick Info")]),r("GoogleMaps")],1),r("v-col",{staticClass:"rightInfoCol"},[r("h3",{staticClass:"pt-4"},[t._v("Address & Contact Information")]),r("div",{staticClass:"utscInfo"},[r("p",[r("b",[t._v("Address: ")]),t._v("1265 Military Trail, Scarborough, ON M1C 1A4 "),r("br"),r("b",[t._v("Phone: ")]),t._v("(416) 287-8872 "),r("br"),r("b",[t._v("Campus Police (EMERGENCY!): ")]),t._v("(416) 978-2222 "),r("br"),r("b",[t._v("Campus Police (General): ")]),t._v("(416) 287-7398")])]),r("h3",[t._v("Campus Map & Parking Info")]),r("v-row",{staticClass:"utscList"},[r("a",{attrs:{href:"https://www.utsc.utoronto.ca/home/sites/utsc.utoronto.ca.home/files/docs/UTSC_Campus_Map_2015.pdf",target:"_blank"}},[t._v("Campus Map")])]),r("v-row",{staticClass:"utscList"},[r("a",{attrs:{href:"https://www.utsc.utoronto.ca/parking/dailyvisitor-parking-rates",target:"_blank"}},[t._v("Parking Information")])]),r("h3",{staticClass:"mediaSection"},[t._v("Social Media")]),r("a",{staticClass:"twitterIcon",attrs:{href:"https://twitter.com/UTSC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"],size:"2x"}})],1),r("a",{staticClass:"facebookIcon",attrs:{href:"https://www.facebook.com/UofTScarborough/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","facebook-square"],size:"2x"}})],1),r("a",{staticClass:"instagramIcon",attrs:{href:"https://www.instagram.com/utsc/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","instagram"],size:"2x"}})],1),r("a",{staticClass:"linkedinIcon",attrs:{href:"https://www.linkedin.com/school/university-of-toronto/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"],size:"2x"}})],1)],1)],1),r("v-row",[r("v-col",[r("h3",[t._v("Contacts")]),r("v-container",{staticClass:"contactCard"},[r("ContactCards")],1)],1)],1)],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return r("v-col",{key:e.title,attrs:{cols:e.flex}},[r("v-card",[r("v-card-title",{staticClass:"display-1 text--primary",domProps:{textContent:t._s(e.title)}}),r("v-card-subtitle",{domProps:{textContent:t._s(e.subtitle)}}),r("v-card-text",{staticClass:"text--primary",attrs:{id:"lineBreak"},domProps:{textContent:t._s(e.info)}}),r("v-card-actions",[r("v-btn",{attrs:{text:"",color:"deep-purple accent -4",href:e.link,target:"_blank"}},[t._v(" "+t._s(e.website)+" ")])],1)],1)],1)})),1)],1)},c=[],l={name:"ContactCards",data:function(){return{cards:[{title:"Registrars Office",subtitle:"For registration, financial needs, exams, graduation, petitions, TCards, and more.",info:"Location: Highland Hall (Main Floor)\nHours:\tMonday & Tuesday: 9:30-4:30\n\t\tWednesday: 10:00-4:00 & 5:00-6:45\n\t\tThursday: 9:30-4:30\n\t\tFriday: 9:30-3:00\n\nTelephone: (416) 287-7001\nEmail: Done through registrar website",website:"Visit Website",link:"https://www.utsc.utoronto.ca/registrar",flex:6},{title:"Admissions",subtitle:"For information on programs, applications, housing, finances, and campus tours.",info:"Location: Highland Hall (Main Floor)\nHours:\tMonday & Tuesday: 9:30-4:30\n\t\tWednesday: 10:00-4:00 & 5:00-6:45\n\t\tThursday: 9:30-4:30\n\t\tFriday: 9:30-3:00\n\nTelephone: (416) 287-7529\nEmail: utsc.admissions@utoronto.ca",website:"Visit Website",link:"https://www.utsc.utoronto.ca/admissions",flex:6}]}}},u=l,d=(r("04df"),r("2877")),h=r("6544"),f=r.n(h),p=r("8336"),b=r("b0af"),v=r("99d9"),g=r("62ad"),m=r("a523"),_=r("0fd9"),C=Object(d["a"])(u,o,c,!1,null,"1f0048f8",null),w=C.exports;f()(C,{VBtn:p["a"],VCard:b["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:g["a"],VContainer:m["a"],VRow:_["a"]});var y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:14}},t._l(t.markers,(function(e,a){return r("gmap-marker",{key:a,attrs:{position:e.position},on:{click:function(r){t.center=e.position}}})})),1)],1)},k=[],O={name:"GoogleMaps",data:function(){return{center:{lat:43.784796,lng:-79.186773},markers:[{position:{lat:43.784796,lng:-79.186773}}],places:[],currentPlace:null}}},j=O,S=Object(d["a"])(j,y,k,!1,null,"480bd905",null),P=S.exports;f()(S,{VContainer:m["a"]});var B={name:"InfoPage",components:{GoogleMaps:P,ContactCards:w}},x=B,E=(r("eb9d"),r("ce7e")),V=Object(d["a"])(x,i,s,!1,null,"1aa72042",null),z=V.exports;f()(V,{VCard:b["a"],VCol:g["a"],VContainer:m["a"],VDivider:E["a"],VRow:_["a"]});var $={name:"Information",components:{InfoPage:z}},D=$,T=(r("919b"),Object(d["a"])(D,a,n,!1,null,"e84eb4c0",null));e["default"]=T.exports;f()(T,{VContainer:m["a"]})},"615b":function(t,e,r){},"6ece":function(t,e,r){},"7c19":function(t,e,r){},"8ce9":function(t,e,r){},"919b":function(t,e,r){"use strict";var a=r("7c19"),n=r.n(a);n.a},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return c}));var a=r("b0af"),n=r("80d2"),i=Object(n["j"])("v-card__actions"),s=Object(n["j"])("v-card__subtitle"),o=Object(n["j"])("v-card__text"),c=Object(n["j"])("v-card__title");a["a"]},b0af:function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("0481"),r("4160"),r("4069"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b");var a=r("2fa7"),n=(r("615b"),r("10d2")),i=r("297c"),s=r("1c87"),o=r("58df");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(o["a"])(i["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return l({"v-card":!0},s["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},n["a"].options.computed.classes.call(this))},styles:function(){var t=l({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},b5a5:function(t,e,r){},ce7e:function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var a=r("2fa7"),n=(r("8ce9"),r("7560"));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:s({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:s({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},eb9d:function(t,e,r){"use strict";var a=r("b5a5"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-086636d4.fde7173f.js.map