(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d6f5974"],{"057f":function(t,e,n){var r=n("fc6a"),a=n("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?s(t):a(r(t))}},"569f":function(t,e,n){"use strict";n("a2e3")},"68b8":function(t,e,n){t.exports=n.p+"img/background-1.b6db7fa3.svg"},"746f":function(t,e,n){var r=n("428f"),a=n("5135"),o=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||i(e,t,{value:o.f(t)})}},a2e3:function(t,e,n){},a4d3:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("d066"),i=n("c430"),s=n("83ab"),c=n("4930"),l=n("fdbf"),f=n("d039"),u=n("5135"),p=n("e8b5"),d=n("861d"),v=n("825a"),b=n("7b0b"),m=n("fc6a"),y=n("c04e"),g=n("5c6c"),h=n("7c73"),w=n("df75"),S=n("241c"),x=n("057f"),_=n("7418"),O=n("06cf"),j=n("9bf2"),k=n("d1e7"),C=n("9112"),P=n("6eeb"),N=n("5692"),$=n("f772"),E=n("d012"),D=n("90e3"),F=n("b622"),I=n("e538"),J=n("746f"),q=n("d44e"),z=n("69f3"),B=n("b727").forEach,T=$("hidden"),A="Symbol",Q="prototype",W=F("toPrimitive"),G=z.set,H=z.getterFor(A),K=Object[Q],L=a.Symbol,M=o("JSON","stringify"),R=O.f,U=j.f,V=x.f,X=k.f,Y=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),nt=N("wks"),rt=a.QObject,at=!rt||!rt[Q]||!rt[Q].findChild,ot=s&&f((function(){return 7!=h(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=R(K,e);r&&delete K[e],U(t,e,n),r&&t!==K&&U(K,e,r)}:U,it=function(t,e){var n=Y[t]=h(L[Q]);return G(n,{type:A,tag:t,description:e}),s||(n.description=e),n},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof L},ct=function(t,e,n){t===K&&ct(Z,e,n),v(t);var r=y(e,!0);return v(n),u(Y,r)?(n.enumerable?(u(t,T)&&t[T][r]&&(t[T][r]=!1),n=h(n,{enumerable:g(0,!1)})):(u(t,T)||U(t,T,g(1,{})),t[T][r]=!0),ot(t,r,n)):U(t,r,n)},lt=function(t,e){v(t);var n=m(e),r=w(n).concat(vt(n));return B(r,(function(e){s&&!ut.call(n,e)||ct(t,e,n[e])})),t},ft=function(t,e){return void 0===e?h(t):lt(h(t),e)},ut=function(t){var e=y(t,!0),n=X.call(this,e);return!(this===K&&u(Y,e)&&!u(Z,e))&&(!(n||!u(this,e)||!u(Y,e)||u(this,T)&&this[T][e])||n)},pt=function(t,e){var n=m(t),r=y(e,!0);if(n!==K||!u(Y,r)||u(Z,r)){var a=R(n,r);return!a||!u(Y,r)||u(n,T)&&n[T][r]||(a.enumerable=!0),a}},dt=function(t){var e=V(m(t)),n=[];return B(e,(function(t){u(Y,t)||u(E,t)||n.push(t)})),n},vt=function(t){var e=t===K,n=V(e?Z:m(t)),r=[];return B(n,(function(t){!u(Y,t)||e&&!u(K,t)||r.push(Y[t])})),r};if(c||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),n=function(t){this===K&&n.call(Z,t),u(this,T)&&u(this[T],e)&&(this[T][e]=!1),ot(this,e,g(1,t))};return s&&at&&ot(K,e,{configurable:!0,set:n}),it(e,t)},P(L[Q],"toString",(function(){return H(this).tag})),P(L,"withoutSetter",(function(t){return it(D(t),t)})),k.f=ut,j.f=ct,O.f=pt,S.f=x.f=dt,_.f=vt,I.f=function(t){return it(F(t),t)},s&&(U(L[Q],"description",{configurable:!0,get:function(){return H(this).description}}),i||P(K,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:L}),B(w(nt),(function(t){J(t)})),r({target:A,stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var n=L(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(b(t))}}),M){var bt=!c||f((function(){var t=L();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var r,a=[t],o=1;while(arguments.length>o)a.push(arguments[o++]);if(r=e,(d(e)||void 0!==t)&&!st(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),a[1]=e,M.apply(null,a)}})}L[Q][W]||C(L[Q],W,L[Q].valueOf),q(L,A),E[T]=!0},c84b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"background-img",attrs:{src:n("68b8"),alt:""}}),r("div",{staticStyle:{position:"sticky",top:"0px","z-index":"9999"}},[r("van-row",{staticClass:"title-bar",attrs:{type:"flex",justify:"space-between"}},[r("van-col",{staticClass:"title-item",attrs:{span:"3"}},[r("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.Back_page()}}})],1),r("van-col",{staticClass:"title-item",staticStyle:{"text-align":"center"},attrs:{span:"18"}},[t._v("商品詳情")]),r("van-col",{attrs:{span:"3"}})],1)],1),r("div",[r("van-row",{attrs:{type:"flex",justify:"center"}},[r("div",{staticStyle:{position:"absolute",top:"50px"}},[r("van-image",{staticStyle:{"z-index":"10"},attrs:{round:"",width:"90px",height:"90px",src:t.flowerImage}})],1),r("van-col",{attrs:{span:"22"}},[r("van-card",{staticClass:"product-card-title",scopedSlots:t._u([{key:"desc",fn:function(){return[r("div",{staticClass:"product-card-text"},[r("p",{staticClass:"product-card-name"},[t._v(" "+t._s(t.labelname)+" - "+t._s(t.flowername)+" ")])]),r("van-row",{staticClass:"product-card-detail",attrs:{type:"flex",justify:"space-between"}},[r("van-col",{attrs:{span:"7"}},[r("p",[t._v(t._s(t.flowerprice))]),r("p",[t._v("平均成交價格")])]),r("van-col",{attrs:{span:"7"}},[r("p",[t._v("1~3日")]),r("p",[t._v("平均保存期限")])]),r("van-col",{attrs:{span:"7"}},[r("p",[t._v("203")]),r("p",[t._v("今日成交數量")])])],1)]},proxy:!0}])})],1)],1),r("br"),r("br"),r("van-row",{attrs:{type:"flex",justify:"center"}},[r("van-col",{staticClass:"product-body",attrs:{span:"22"}},[r("van-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("van-tab",{attrs:{title:"花語介紹",name:"a"}},[r("div",{staticStyle:{padding:"10px 0px 10px 0px"}},[r("van-card",{staticClass:"product-detail",scopedSlots:t._u([{key:"desc",fn:function(){return t._l(t.description,(function(e){return r("div",{key:e.name},[r("p",{staticClass:"product-title"},[t._v(" "+t._s(t.labelname)+" - "+t._s(e.name)+": ")]),r("p",{staticClass:"product-text"},[t._v(t._s(e.text))])])}))},proxy:!0}])})],1)])],1)],1)],1)],1)])},a=[],o=(n("ac1f"),n("1276"),n("a4d3"),n("e01a"),n("b0c0"),{name:"Detail",data:function(){return{activeName:"a",description:[],labelname:null,flowername:null,flowerprice:null,flowerImage:null}},created:function(){var t=this.$route.query.label.split("-");this.flowername=t[1];var e=this.$route.query.flowerlabel;this.labelname=e},mounted:function(){var t=this,e=new FormData;console.log(this.flowername),console.log(this.labelname),e.append("label",this.labelname),e.append("color",this.flowername),this.axios.post("/flowermeaning",e).then((function(e){console.log(e.data);for(var n=0;n<e.data.length;n++)t.description.push({name:e.data[n].name,text:e.data[n].description}),t.flowerImage=e.data[n].image;console.log(t.description)}));var n=new FormData,r=this.$route.query.label;n.append("species",r),this.axios.post("/flowerArgPrice",n).then((function(e){console.log(e.data),t.flowerprice=e.data}))},methods:{Back_page:function(){this.$router.go(-1)}}}),i=o,s=(n("569f"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"2680994a",null);e["default"]=c.exports},e01a:function(t,e,n){"use strict";var r=n("23e7"),a=n("83ab"),o=n("da84"),i=n("5135"),s=n("861d"),c=n("9bf2").f,l=n("e893"),f=o.Symbol;if(a&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var u={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(u[e]=!0),e};l(p,f);var d=p.prototype=f.prototype;d.constructor=p;var v=d.toString,b="Symbol(test)"==String(f("test")),m=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=v.call(t);if(i(u,t))return"";var n=b?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,n){var r=n("b622");e.f=r}}]);