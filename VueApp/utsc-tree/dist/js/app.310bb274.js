(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},s={app:0},r={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-076cdb85":"1d29ce54","chunk-086636d4":"fde7173f","chunk-1a9cc836":"2ad0420a","chunk-5a3d9ef4":"cb963e16","chunk-772c3e6e":"67f8ee3a","chunk-48045110":"5c9bd391","chunk-15638d84":"b827d066","chunk-42469eac":"41adeade","chunk-dc452eb6":"8c71aa83"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-076cdb85":1,"chunk-086636d4":1,"chunk-1a9cc836":1,"chunk-5a3d9ef4":1,"chunk-772c3e6e":1,"chunk-48045110":1,"chunk-15638d84":1,"chunk-42469eac":1,"chunk-dc452eb6":1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-076cdb85":"f59d9f16","chunk-086636d4":"add3b3a4","chunk-1a9cc836":"3763a1bc","chunk-5a3d9ef4":"78503bda","chunk-772c3e6e":"ea38c9d3","chunk-48045110":"e2e32c65","chunk-15638d84":"c010bf3a","chunk-42469eac":"662a7c39","chunk-dc452eb6":"3554dc97"}[e]+".css",r=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[e],p.parentNode.removeChild(p),a(o)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){s[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3759:function(e,t,a){},"3b02":function(e,t,a){"use strict";var n=a("45f6"),s=a.n(n);s.a},"45f6":function(e,t,a){},"4c73":function(e,t,a){"use strict";var n=a("e5d6"),s=a.n(n);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("4160"),a("159b"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("LoginModal"),a("v-app-bar",{attrs:{app:""}},[a("v-img",{staticClass:"logo",attrs:{src:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png","aspect-ratio":"1","max-width":"50","max-height":"50"},on:{click:function(t){return e.$router.push("/")}}}),a("v-toolbar-title",{staticClass:"headline",on:{click:function(t){return e.$router.push("/")}}},[a("span",[e._v("UTSC")]),a("span",{staticClass:"font-weight-light"},[e._v(" CourseTree")])]),a("v-toolbar-items",[a("navbar")],1),a("v-spacer"),a("v-toolbar-items",[this.$store.state.user.loggedIn?a("button",{staticClass:"loginButton"},[e._v(e._s(this.$store.state.user.displayName))]):a("button",{staticClass:"loginButton",on:{click:function(t){return e.openLoginModal()}}},[e._v(e._s(this.$store.state.user.displayName))]),a("v-menu",{attrs:{transition:"slide-y-transition","offset-y":!0,bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticClass:"settingsIcon",attrs:{color:"primary"}},n),[a("font-awesome-icon",{attrs:{icon:["fas","bars"],size:"2x"}})],1)]}}])},[a("v-list",e._l(e.userOptions,(function(t,n){return a("v-list-item",{key:n,on:{click:function(a){return e.executeOptions(t.page)}}},[a("v-list-item-title",{staticClass:"popupMenu"},[e._v(e._s(t.option))])],1)})),1)],1)],1)],1),a("v-content",[a("router-view")],1)],1)},r=[],o=(a("4de4"),a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("ul",[this.$store.state.coursePage?a("li",[a("router-link",{attrs:{exact:"",to:"/courses"}},[e._v("Courses")])],1):e._e(),this.$store.state.treeViewPage?a("li",[a("router-link",{attrs:{exact:"",to:"/treeview"}},[e._v("TreeView")])],1):e._e(),this.$store.state.infoPage?a("li",[a("router-link",{attrs:{exact:"",to:"/information"}},[e._v("Links & Info")])],1):e._e()])])}),i=[],c={name:"NavBar"},u=c,l=(a("ede2"),a("2877")),d=Object(l["a"])(u,o,i,!1,null,"0d857300",null),p=d.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{staticClass:"loginPopup",attrs:{name:"loginPopup",transition:"pop-out",width:400,height:550}},[a("v-container",{staticClass:"popupForm"},[a("form",[e.completeLogin?a("div",[a("h1",[e._v("Hello there,"),a("br"),e._v("welcome back")]),a("div",{staticClass:"mb-4"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"input",attrs:{type:"email",placeholder:"E-mail"},domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}})])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password1,expression:"credentials.password1"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.credentials.password1},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||e.$set(e.credentials,"password1",t.target.value)}}})]),a("div",[this.$store.state.authError.error?a("p",{staticClass:"pt-2"},[e._v(e._s(this.$store.state.authError.message))]):e._e()]),a("div",{class:{"text-center":!this.$store.state.authError.error,textWithError:this.$store.state.authError.error}},[a("v-btn",{attrs:{color:"primary"},on:{click:e.login}},[e._v("Sign In")])],1),a("div",{staticClass:"registerOp"},[a("a",{staticClass:"regText"},[e._v("Don't have an account? ")]),this.$store.state.newUsers?a("a",{on:{click:e.registerUser}},[e._v(" Sign Up!")]):a("a",{staticClass:"text--disabled"},[e._v(" Sign Up!")])])]):a("div",[a("h1",[e._v("Get on board")]),a("div",{staticClass:"mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"input",attrs:{type:"email",placeholder:"E-mail"},domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password1,expression:"credentials.password1"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.credentials.password1},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password1",t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password2,expression:"credentials.password2"}],staticClass:"input",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.credentials.password2},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup(t)},e.checkValidity],input:function(t){t.target.composing||e.$set(e.credentials,"password2",t.target.value)}}})]),a("div",[this.$store.state.authError.error?a("p",{staticClass:"pt-2"},[e._v(e._s(this.$store.state.authError.message))]):a("p")]),a("div",{class:{"text-center":!this.$store.state.authError.error,textWithError:this.$store.state.authError.error}},[e.validCredentials?a("v-btn",{attrs:{color:"primary"},on:{click:e.signup}},[e._v("Sign Up")]):a("v-btn",{attrs:{disabled:""}},[e._v("Sign Up")])],1),a("div",{staticClass:"registerOp"},[a("a",{staticClass:"regText"},[e._v("I already have an account? ")]),a("a",{on:{click:e.registerUser}},[e._v(" Login!")])])])])])],1)},m=[],f=a("8aa5"),v=a.n(f),g={name:"LoginModal",data:function(){return{completeLogin:!0,validCredentials:!1,credentials:{email:"",password1:"",password2:""}}},methods:{registerUser:function(){this.completeLogin=!this.completeLogin,this.$store.commit("resetAuthError")},signup:function(){var e=this;v.a.auth().createUserWithEmailAndPassword(this.credentials.email,this.credentials.password2).then((function(t){e.login(),v.a.firestore().collection("users").doc(t.user.uid).set({uid:t.user.uid,email:t.user.email,createdOn:t.user.metadata.creationTime,lastLogin:t.user.metadata.creationTime})})).catch((function(t){e.$store.state.authError.error=!0,e.$store.state.authError.message=t.message}))},login:function(){var e=this;v.a.auth().signInWithEmailAndPassword(this.credentials.email,this.credentials.password1).then((function(t){e.$modal.hide("loginPopup"),v.a.firestore().collection("users").doc(t.user.uid).update({lastLogin:t.user.metadata.lastSignInTime})})).catch((function(t){e.$store.state.authError.error=!0,e.$store.state.authError.message=t.message}))},checkValidity:function(){this.validCredentials=this.credentials.password1===this.credentials.password2}}},b=g,k=(a("fdcc"),a("6544")),w=a.n(k),y=a("8336"),C=a("a523"),_=Object(l["a"])(b,h,m,!1,null,"de422100",null),P=_.exports;w()(_,{VBtn:y["a"],VContainer:C["a"]});var E={name:"App",components:{LoginModal:P,navbar:p},data:function(){return{allOptions:[{option:"Admin Panel",page:"/admin",access:3},{option:"User Dashboard",page:"/dashboard",access:1},{option:"Feedback & Updates",page:"/feedback",access:0},{option:"About Us",page:"/about",access:0},{option:"Logout",page:"logout",access:1}]}},computed:{userOptions:function(){var e=this;return this.allOptions.filter((function(t){if(t.access<=e.$store.state.user.access)return t}))}},methods:{logout:function(){var e=this;v.a.auth().signOut().then((function(){"home"!==e.$route.name?e.$router.push("/"):location.reload(),e.$store.commit("setUserState",!1)}))},openLoginModal:function(){this.$store.commit("resetAuthError"),this.$modal.show("loginPopup")},executeOptions:function(e){"logout"!==e?this.$router.push(e):this.logout()}}},x=E,$=(a("4c73"),a("7496")),T=a("40dc"),L=a("a75b"),S=a("adda"),U=a("8860"),O=a("da13"),N=a("5d23"),A=a("e449"),V=a("2fa4"),I=a("2a7f"),j=Object(l["a"])(x,s,r,!1,null,"20116a90",null),M=j.exports;w()(j,{VApp:$["a"],VAppBar:T["a"],VBtn:y["a"],VContent:L["a"],VImg:S["a"],VList:U["a"],VListItem:O["a"],VListItemTitle:N["c"],VMenu:A["a"],VSpacer:V["a"],VToolbarItems:I["a"],VToolbarTitle:I["b"]});a("d3b7");var D=a("8c4f"),B=(a("c975"),a("2f62")),F=a("bc3a"),q=a.n(F);n["a"].use(B["a"]);var H=new B["a"].Store({state:{user:{loggedIn:!1,access:0,displayName:""},authError:{error:!1,message:""},coursePage:!1,treeViewPage:!1,infoPage:!1,newUsers:!1,alreadyLoaded:!1,devMessages:[],releaseNotes:[],userComments:[]},mutations:{loadedData:function(e){e.alreadyLoaded=!e.alreadyLoaded},postMessage:function(e,t){e.devMessages.push(t)},publishNote:function(e,t){e.releaseNotes.push(t)},loadMessages:function(e,t){e.devMessages=t},loadNotes:function(e,t){e.releaseNotes=t},loadComments:function(e,t){e.userComments=t},setUserState:function(e,t){t?(e.user.loggedIn=!0,e.user.displayName=t.email.substring(0,t.email.indexOf("@")),t.getIdTokenResult().then((function(t){t.claims.admin?e.user.access=3:t.claims.flagged?e.user.access=1:e.user.access=2}))):(e.user.loggedIn=!1,e.user.access=0,e.user.displayName="Login")},resetAuthError:function(e){e.authError.error=!1,e.authError.message=""},updatePageLocks:function(e,t){e[t.id]=t.status}},actions:{loadStore:function(e){if(!e.state.alreadyLoaded)return new Promise((function(t,a){q.a.get("http://127.0.0.1:5000/DataRetrieval/dataLoad").then((function(a){e.commit("loadMessages",a.data[1]),e.commit("loadNotes",a.data[2]),e.commit("loadComments",a.data[3]),e.commit("loadedData"),t()})).catch((function(e){a(e)}))}))},loadLocks:function(e){if(!e.state.alreadyLoaded)return new Promise((function(t,a){f["firestore"]().collection("contentLocks").get().then((function(a){a.forEach((function(t){e.commit("updatePageLocks",t.data())})),e.dispatch("loadStore"),t()})).catch((function(e){a(e)}))}))},fetchUser:function(e,t){var a=e.commit;a("setUserState",t||!1)}}}),W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HomePage",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},z=[],K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"home-container"},[a("v-col",{staticClass:"col-container"},[a("v-row",[a("h1",{staticClass:"heading1"},[e._v("A new way")]),a("h1",{staticClass:"heading1"},[e._v("to view UTSC courses")]),a("h1",{staticClass:"heading1"},[e._v("without all the tabs!")])]),a("v-row",{staticClass:"spacer"}),a("v-row",[a("h1",{staticClass:"heading2"},[e._v(" Designed by students, for students. ")])])],1)],1)},R=[],G={components:{},data:function(){return{whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},Y=G,J=(a("3b02"),a("62ad")),Q=a("0fd9"),X=Object(l["a"])(Y,K,R,!1,null,"ce159010",null),Z=X.exports;w()(X,{VCol:J["a"],VContainer:C["a"],VRow:Q["a"]});var ee={name:"home",components:{HomePage:Z}},te=ee,ae=Object(l["a"])(te,W,z,!1,null,null,null),ne=ae.exports;n["a"].use(D["a"]);var se=new D["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ne,meta:{title:"Home | UTSC CourseTree",access:0}},{path:"/courses",name:"courses",component:function(){return Promise.all([a.e("chunk-772c3e6e"),a.e("chunk-dc452eb6")]).then(a.bind(null,"1a2f"))},meta:{title:"Directory | UTSC CourseTree",access:0}},{path:"/treeview",name:"treeview",component:function(){return a.e("chunk-1a9cc836").then(a.bind(null,"a232"))},meta:{title:"TreeView | UTSC CourseTree",access:0}},{path:"/information",name:"information",component:function(){return a.e("chunk-086636d4").then(a.bind(null,"5798"))},meta:{title:"Links & Info | UTSC CourseTree",access:0}},{path:"/admin",name:"admin",component:function(){return Promise.all([a.e("chunk-772c3e6e"),a.e("chunk-48045110"),a.e("chunk-15638d84")]).then(a.bind(null,"3530"))},meta:{title:"ADMIN | UTSC CourseTree",access:3}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([a.e("chunk-772c3e6e"),a.e("chunk-48045110"),a.e("chunk-42469eac")]).then(a.bind(null,"7277"))},meta:{title:"Dashboard | UTSC CourseTree",access:1}},{path:"/about",name:"about",component:function(){return a.e("chunk-076cdb85").then(a.bind(null,"2664"))},meta:{title:"About Us | UTSC CourseTree",access:0}},{path:"/feedback",name:"feedback",component:function(){return a.e("chunk-5a3d9ef4").then(a.bind(null,"6e7a"))},meta:{title:"Feedback & Updates | UTSC CourseTree",access:0}},{path:"*",redirect:"/"}]});se.beforeEach((function(e,t,a){H.dispatch("loadLocks").then((function(){e.meta.access<=H.state.user.access?("/courses"!==e.fullPath||H.state.coursePage)&&("/treeview"!==e.fullPath||H.state.treeViewPage)&&("/information"!==e.fullPath||H.state.infoPage)?a():a("/"):alert("Unauthorized!")}))})),se.afterEach((function(e,t){document.title=e.meta.title}));var re=se,oe=a("f309");n["a"].use(oe["a"]);var ie=new oe["a"]({icons:{iconfont:"mdi"}}),ce=(a("41e9"),a("ecee")),ue=a("f2d1"),le=a("c074"),de=a("ad3d"),pe=a("755e"),he=a("1881"),me=a.n(he),fe=a("cb43"),ve=a("a584");ce["c"].add(ue["d"],ue["a"],ue["b"],ue["c"],le["a"],le["b"],le["e"],le["d"],le["c"]),n["a"].component("font-awesome-icon",de["a"]),n["a"].config.productionTip=!1,n["a"].use(me.a),n["a"].use(fe["default"]),n["a"].use(pe,{load:{key:"*** GOOGLE API KEY ***",libraries:"places"}});var ge={apiKey:"AIzaSyDP0qFNhx1eI1fVNTcMYwgXQnKxxbxNaFs",authDomain:"utsc-coursetree.firebaseapp.com",databaseURL:"https://utsc-coursetree.firebaseio.com",projectId:"utsc-coursetree"};f["initializeApp"](ge),f["auth"]().onAuthStateChanged((function(e){H.dispatch("fetchUser",e)})),f["firestore"]().collection("contentLocks").onSnapshot((function(e){e.docs.forEach((function(e){H.commit("updatePageLocks",e.data())}))})),n["a"].use(ve["a"],{config:{id:"UA-155158396-1"}},re),new n["a"]({router:re,vuetify:ie,store:H,render:function(e){return e(M)}}).$mount("#app")},7872:function(e,t,a){},e5d6:function(e,t,a){},ede2:function(e,t,a){"use strict";var n=a("7872"),s=a.n(n);s.a},fdcc:function(e,t,a){"use strict";var n=a("3759"),s=a.n(n);s.a}});
//# sourceMappingURL=app.310bb274.js.map