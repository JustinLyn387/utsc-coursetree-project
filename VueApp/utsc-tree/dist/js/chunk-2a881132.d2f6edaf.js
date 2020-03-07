(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a881132"],{2677:function(t,e,a){"use strict";var n=a("8654");e["a"]=n["a"]},"42bb":function(t,e,a){"use strict";var n=a("b7fe"),i=a.n(n);i.a},5803:function(t,e,a){},7277:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashPage"},[a("DashboardPage")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"dashboardContainer"},[a("TextSampleModal"),a("v-row",[a("v-col",{staticClass:"leftColumn"},[a("v-row",{staticClass:"rowSeparator"},[a("v-card",{staticClass:"cardStyles"},[a("div",{staticClass:"pageHeader"},[a("h1",[t._v(" - Dashboard - ")]),a("p",{staticClass:"dashSubhead"},[t._v("User overview, manage taken courses, and ...")])])])],1),a("v-row",{staticClass:"rowSeparator"},[a("v-card",{staticClass:"cardStyles"},[a("h2",[t._v(" - IDK - ")])])],1)],1),a("v-col",{staticClass:"rightColumn"},[a("v-row",{staticClass:"rowSeparator"},[a("v-card",{staticClass:"cardStyles"},[a("v-tabs",{attrs:{"background-color":"transparent",color:"primary",grow:""}},[a("v-tab",{on:{click:function(e){return t.switchTab("O")}}},[a("b",[t._v("Overview")])]),a("v-tab",{on:{click:function(e){return t.switchTab("TC")}}},[a("b",[t._v("Taken Courses")])]),a("v-tab",[a("b",[t._v("IDK")])]),a("v-tab",[a("b",[t._v("IDK")])])],1),"Overview"===this.tab?a("v-container",{staticClass:"mainContent"},[a("v-btn",{staticClass:"deleteButton",attrs:{color:"error"}},[t._v("Delete Account")])],1):"Taken"===this.tab?a("v-container",{staticClass:"mainContent"},[a("h2",[t._v("Taken Courses")]),a("p",[t._v("In this section you can view the courses that you have completed thus far in your studies. Additionally, the courses inputted will be used to better display TreeView diagrams and courses remaining to take the desired course. To populate the table simply upload a text file of your transcript.")]),a("v-row",[a("v-col",{staticClass:"infoPopColumn"},[a("font-awesome-icon",{staticClass:"infoIcon",attrs:{icon:["fas","info-circle"]},on:{click:function(e){return t.$modal.show("textSamplePopup")}}})],1),a("v-col",{staticClass:"pb-0"},[a("p",[a("b",[t._v(" Instructions:")]),t._v(" ACORN > Academic History > Complete Academic History > Copy and paste transcript section into a text file"),a("br"),a("b",[t._v("Note:")]),t._v(" You can filter the table by clicking on any of the column names!")])])],1),a("v-file-input",{attrs:{clearable:"","show-size":"",counter:"",accept:"text/*",label:"Upload Transcript Text File ..."}}),a("v-data-table",{attrs:{headers:t.courseHeaders,items:t.courses,"sort-by":"date"}})],1):t._e()],1)],1)],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{staticClass:"textSamplePopup",attrs:{name:"textSamplePopup",transition:"pop-out",width:700,height:350}},[n("v-container",{staticClass:"samplePopupContainer"},[n("v-img",{staticClass:"image",attrs:{src:a("7eb2")}})],1)],1)},l=[],c={name:"TextSampleModal"},u=c,h=(a("c7a8"),a("2877")),p=a("6544"),d=a.n(p),f=a("a523"),v=a("adda"),b=Object(h["a"])(u,o,l,!1,null,"66835530",null),m=b.exports;d()(b,{VContainer:f["a"],VImg:v["a"]});var C={name:"DashboardPage",components:{TextSampleModal:m},data:function(){return{tab:"Overview",courseHeaders:[{text:"Course Code",align:"left",value:"code"},{text:"Course Title",value:"title"},{text:"Completion Date",value:"date"}],courses:[{code:"CSCA08H3",title:"Computer Science",date:"2019 Fall"},{code:"MATA37H3",title:"Calculus",date:"2020 Winter"},{code:"CSCD58H3",title:"Some Computer Science Course",date:"2018 Summer"},{code:"CSCD27H3",title:"Another Computer Science Course",date:"2019 Fall"},{code:"LINA01H3",title:"Linguistics",date:"2018 Summer"},{code:"CSCA08H3",title:"Computer Science",date:"2020 Winter"},{code:"CSCD58H3",title:"Same Computer Science",date:"2020 Winter"},{code:"LINA01H3",title:"More Linguistics",date:"2019 Fall"},{code:"CSCA08H3",title:"Computer Science",date:"2018 Summer"}]}},methods:{switchTab:function(t){"O"===t?this.tab="Overview":"TC"===t&&(this.tab="Taken")}}},y=C,g=(a("d69b"),a("8336")),S=a("b0af"),w=a("62ad"),V=a("8fea"),O=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("13d5"),a("fb6a"),a("a434"),a("b0c0"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("284c")),x=a("2fa7"),_=a("bf2d"),D=(a("5803"),a("2677")),T=a("cc20"),$=a("80d2"),A=a("d9bd");function j(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?j(a,!0).forEach((function(e){Object(x["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var P=D["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:function(){return[]},validator:function(t){return"object"===Object(_["a"])(t)||Array.isArray(t)}}},computed:{classes:function(){return k({},D["a"].options.computed.classes.call(this),{"v-file-input":!0})},counterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){return t+e.size}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object($["w"])(e,1024===this.base))},internalArrayValue:function(){return Array.isArray(this.internalValue)?this.internalValue:Object($["F"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var a=t.truncateText(e.name);return t.showSize?"".concat(a," (").concat(Object($["w"])(e.size,1024===t.base),")"):a})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(A["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object($["l"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,a){return t.$createElement(T["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(a,1),t.internalValue=e}}},[e])})):[]},genInput:function(){var t=D["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.counterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:a,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection},on:{click:function(){return t.$refs.input.click()}}},e)},onInput:function(t){var e=Object(O["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),I=a("0fd9"),z=a("71a3"),H=a("fe57"),M=Object(h["a"])(y,r,s,!1,null,"6d9490ba",null),E=M.exports;d()(M,{VBtn:g["a"],VCard:S["a"],VCol:w["a"],VContainer:f["a"],VDataTable:V["a"],VFileInput:P,VRow:I["a"],VTab:z["a"],VTabs:H["a"]});var L={name:"Dashboard",components:{DashboardPage:E}},N=L,B=(a("42bb"),Object(h["a"])(N,n,i,!1,null,"20ffe42a",null));e["default"]=B.exports},"7eb2":function(t,e,a){t.exports=a.p+"img/SampleTranscript.3b3fde0f.png"},8990:function(t,e,a){},b7fe:function(t,e,a){},c3c7:function(t,e,a){},c7a8:function(t,e,a){"use strict";var n=a("8990"),i=a.n(n);i.a},d69b:function(t,e,a){"use strict";var n=a("c3c7"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-2a881132.d2f6edaf.js.map