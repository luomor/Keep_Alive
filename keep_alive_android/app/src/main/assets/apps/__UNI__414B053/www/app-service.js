if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){const e=this.constructor;return this.then((r=>e.resolve(t()).then((()=>r))),(r=>e.resolve(t()).then((()=>{throw r}))))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){const t=uni.requireGlobal();ArrayBuffer=t.ArrayBuffer,Int8Array=t.Int8Array,Uint8Array=t.Uint8Array,Uint8ClampedArray=t.Uint8ClampedArray,Int16Array=t.Int16Array,Uint16Array=t.Uint16Array,Int32Array=t.Int32Array,Uint32Array=t.Uint32Array,Float32Array=t.Float32Array,Float64Array=t.Float64Array,BigInt64Array=t.BigInt64Array,BigUint64Array=t.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(Vue,weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),function(t){"use strict";function e(t){return weex.requireModule(t)}function r(t,e,...r){uni.__log__?uni.__log__(t,e,...r):console[t].apply(console,[...r,e])}__definePage("pages/module/module",{__name:"module",setup(n){const i=t.ref(""),o=t.ref(""),a=()=>{e("Luomor-Keep-Alive").start({title:"烙馍网App",text:"正在后台运行","onePxEnabled:":!0},(function(t){r("log","at pages/module/module.vue:29",t),1==t.code&&uni.showToast({title:"启动成功",icon:"none"})}))},s=()=>{e("Luomor-Keep-Alive").destroy((function(t){0===t.code&&uni.showToast({title:"停止服务",icon:"none"})}))};return(e,r)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[t.createElementVNode("view",{style:{"font-size":"20px",color:"#bfa"}},t.toDisplayString(i.value)+" "+t.toDisplayString(o.value),1),t.createElementVNode("button",{onClick:a},"开始服务"),t.createElementVNode("button",{onClick:s},"结束服务")],64))}});const n={onLaunch:function(){uni.getStorageSync("user")||uni.getStorageSync("isLogin")||uni.redirectTo({url:"/pages/login/login"}),r("log","at App.vue:9","App Launch")},onShow:function(){r("log","at App.vue:12","App Show")},onHide:function(){r("log","at App.vue:15","App Hide")}},i={data:()=>({}),onLoad(){this.$u.getRect=this.$uGetRect},methods:{$uGetRect(t,e){return new Promise((r=>{uni.createSelectorQuery().in(this)[e?"selectAll":"select"](t).boundingClientRect((t=>{e&&Array.isArray(t)&&t.length&&r(t),!e&&t&&r(t)})).exec()}))},getParentData(t=""){this.parent||(this.parent=!1),this.parent=this.$u.$parent.call(this,t),this.parent&&(Object.keys(this.parentData).map((t=>{this.parentData[t]=this.parent[t]})),this.parentData.value=this.parent.modelValue)},preventEvent(t){t&&t.stopPropagation&&t.stopPropagation()}},onReachBottom(){uni.$emit("uOnReachBottom")},beforeUnmount(){if(this.parent&&uni.$u.test.array(this.parent.children)){const t=this.parent.children;t.map(((e,r)=>{e===this&&t.splice(r,1)}))}}};function o(t){if([null,void 0,NaN,!1].includes(t))return t;if("object"!=typeof t&&"function"!=typeof t)return t;var e,r=(e=t,"[object Array]"===Object.prototype.toString.call(e)?[]:{});for(let n in t)t.hasOwnProperty(n)&&(r[n]="object"==typeof t[n]?o(t[n]):t[n]);return r}function a(t={},e={}){if("object"!=typeof(t=o(t))||"object"!=typeof e)return!1;for(var r in e)e.hasOwnProperty(r)&&(r in t?"object"!=typeof t[r]||"object"!=typeof e[r]?t[r]=e[r]:t[r].concat&&e[r].concat?t[r]=t[r].concat(e[r]):t[r]=a(t[r],e[r]):t[r]=e[r]);return t}function s(t){switch(typeof t){case"undefined":return!0;case"string":if(0==t.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g,"").length)return!0;break;case"boolean":if(!t)return!0;break;case"number":if(0===t||isNaN(t))return!0;break;case"object":if(null===t||0===t.length)return!0;for(var e in t)return!1;return!0}return!1}const u={email:function(t){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)},mobile:function(t){return/^1[23456789]\d{9}$/.test(t)},url:function(t){return/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(t)},date:function(t){return!/Invalid|NaN/.test(new Date(t).toString())},dateISO:function(t){return/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t){return/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t){return/^\d+$/.test(t)},idCard:function(t){return/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(t)},carNo:function(t){const e=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,r=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;return 7===t.length?r.test(t):8===t.length&&e.test(t)},amount:function(t){return/^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(t)},chinese:function(t){return/^[\u4e00-\u9fa5]+$/gi.test(t)},letter:function(t){return/^[a-zA-Z]*$/.test(t)},enOrNum:function(t){return/^[0-9a-zA-Z]*$/g.test(t)},contains:function(t,e){return t.indexOf(e)>=0},range:function(t,e){return t>=e[0]&&t<=e[1]},rangeLength:function(t,e){return t.length>=e[0]&&t.length<=e[1]},empty:s,isEmpty:s,jsonString:function(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!=typeof e||!e)}catch(r){return!1}return!1},landline:function(t){return/^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(t)},object:function(t){return"[object Object]"===Object.prototype.toString.call(t)},array:function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},code:function(t,e=6){return new RegExp(`^\\d{${e}}$`).test(t)}};const c=new class{setConfig(t){this.config=a(this.config,t)}request(t={}){if(this.interceptor.request&&"function"==typeof this.interceptor.request){let e=this.interceptor.request(t);if(!1===e)return new Promise((()=>{}));this.options=e}return t.dataType=t.dataType||this.config.dataType,t.responseType=t.responseType||this.config.responseType,t.url=t.url||"",t.params=t.params||{},t.header=Object.assign({},this.config.header,t.header),t.method=t.method||this.config.method,new Promise(((e,r)=>{t.complete=t=>{if(uni.hideLoading(),clearTimeout(this.config.timer),this.config.timer=null,this.config.originalData)if(this.interceptor.response&&"function"==typeof this.interceptor.response){let n=this.interceptor.response(t);!1!==n?e(n):r(t)}else e(t);else if(200==t.statusCode)if(this.interceptor.response&&"function"==typeof this.interceptor.response){let n=this.interceptor.response(t.data);!1!==n?e(n):r(t.data)}else e(t.data);else r(t)},t.url=u.url(t.url)?t.url:this.config.baseUrl+(0==t.url.indexOf("/")?t.url:"/"+t.url),this.config.showLoading&&!this.config.timer&&(this.config.timer=setTimeout((()=>{uni.showLoading({title:this.config.loadingText,mask:this.config.loadingMask}),this.config.timer=null}),this.config.loadingTime)),uni.request(t)}))}constructor(){this.config={baseUrl:"",header:{},method:"POST",dataType:"json",responseType:"text",showLoading:!0,loadingText:"请求中...",loadingTime:800,timer:null,originalData:!1,loadingMask:!0},this.interceptor={request:null,response:null},this.get=(t,e={},r={})=>this.request({method:"GET",url:t,header:r,data:e}),this.post=(t,e={},r={})=>this.request({url:t,method:"POST",header:r,data:e}),this.put=(t,e={},r={})=>this.request({url:t,method:"PUT",header:r,data:e}),this.delete=(t,e={},r={})=>this.request({url:t,method:"DELETE",header:r,data:e})}};const l=(new class{constructor(){this.config={type:"navigateTo",url:"",delta:1,params:{},animationType:"pop-in",animationDuration:300,intercept:!1},this.route=this.route.bind(this)}addRootPath(t){return"/"===t[0]?t:`/${t}`}mixinParam(t,e){t=t&&this.addRootPath(t);let r="";return/.*\/.*\?.*=.*/.test(t)?(r=uni.$u.queryParams(e,!1),t+"&"+r):(r=uni.$u.queryParams(e),t+r)}async route(t={},e={}){let r={};if("string"==typeof t?(r.url=this.mixinParam(t,e),r.type="navigateTo"):(r=uni.$u.deepClone(t,this.config),r.url=this.mixinParam(t.url,t.params)),e.intercept&&(this.config.intercept=e.intercept),r.params=e,r=uni.$u.deepMerge(this.config,r),"function"==typeof uni.$u.routeIntercept){await new Promise(((t,e)=>{uni.$u.routeIntercept(r,t)}))&&this.openPage(r)}else this.openPage(r)}openPage(t){const{url:e,type:r,delta:n,animationType:i,animationDuration:o}=t;"navigateTo"!=t.type&&"to"!=t.type||uni.navigateTo({url:e,animationType:i,animationDuration:o}),"redirectTo"!=t.type&&"redirect"!=t.type||uni.redirectTo({url:e}),"switchTab"!=t.type&&"tab"!=t.type||uni.switchTab({url:e}),"reLaunch"!=t.type&&"launch"!=t.type||uni.reLaunch({url:e}),"navigateBack"!=t.type&&"back"!=t.type||uni.navigateBack({delta:n})}}).route;function f(t=null,e="yyyy-mm-dd"){t||(t=Number(new Date)),10==t.toString().length&&(t*=1e3);let r,n=new Date(t),i={"y+":n.getFullYear().toString(),"m+":(n.getMonth()+1).toString(),"d+":n.getDate().toString(),"h+":n.getHours().toString(),"M+":n.getMinutes().toString(),"s+":n.getSeconds().toString()};for(let o in i)r=new RegExp("("+o+")").exec(e),r&&(e=e.replace(r[1],1==r[1].length?i[o]:i[o].padStart(r[1].length,"0")));return e}function p(t,e=!0){if((t=t.toLowerCase())&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){let e="#";for(let r=1;r<4;r+=1)e+=t.slice(r,r+1).concat(t.slice(r,r+1));t=e}let r=[];for(let e=1;e<7;e+=2)r.push(parseInt("0x"+t.slice(e,e+2)));return e?`rgb(${r[0]},${r[1]},${r[2]})`:r}if(/^(rgb|RGB)/.test(t)){return t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",").map((t=>Number(t)))}return t}function g(t){let e=t;if(/^(rgb|RGB)/.test(e)){let t=e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),r="#";for(let e=0;e<t.length;e++){let n=Number(t[e]).toString(16);n=1==String(n).length?"0"+n:n,"0"===n&&(n+=n),r+=n}return 7!==r.length&&(r=e),r}if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e))return e;{let t=e.replace(/#/,"").split("");if(6===t.length)return e;if(3===t.length){let e="#";for(let r=0;r<t.length;r+=1)e+=t[r]+t[r];return e}}}String.prototype.padStart||(String.prototype.padStart=function(t,e=" "){if("[object String]"!==Object.prototype.toString.call(e))throw new TypeError("fillString must be String");let r=this;if(r.length>=t)return String(r);let n=t-r.length,i=Math.ceil(n/e.length);for(;i>>=1;)e+=e,1===i&&(e+=e);return e.slice(0,n)+r});const h={colorGradient:function(t="rgb(0, 0, 0)",e="rgb(255, 255, 255)",r=10){let n=p(t,!1),i=n[0],o=n[1],a=n[2],s=p(e,!1),u=(s[0]-i)/r,c=(s[1]-o)/r,l=(s[2]-a)/r,f=[];for(let p=0;p<r;p++){let t=g("rgb("+Math.round(u*p+i)+","+Math.round(c*p+o)+","+Math.round(l*p+a)+")");f.push(t)}return f},hexToRgb:p,rgbToHex:g,colorToRgba:function(t,e=.3){let r=(t=g(t)).toLowerCase();if(r&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(r)){if(4===r.length){var n="#";for(let t=1;t<4;t+=1)n+=r.slice(t,t+1).concat(r.slice(t,t+1));r=n}var i=[];for(let t=1;t<7;t+=2)i.push(parseInt("0x"+r.slice(t,t+2)));return"rgba("+i.join(",")+","+e+")"}return r}};let d=null;let y=[],m=[];let b="1.10.1";const A={v:b,version:b,type:["primary","success","info","error","warning"]};const w={queryParams:function(t={},e=!0,r="brackets"){let n=e?"?":"",i=[];-1==["indices","brackets","repeat","comma"].indexOf(r)&&(r="brackets");for(let o in t){let e=t[o];if(!(["",void 0,null].indexOf(e)>=0))if(e.constructor===Array)switch(r){case"indices":for(let r=0;r<e.length;r++)i.push(o+"["+r+"]="+e[r]);break;case"brackets":default:e.forEach((t=>{i.push(o+"[]="+t)}));break;case"repeat":e.forEach((t=>{i.push(o+"="+t)}));break;case"comma":let t="";e.forEach((e=>{t+=(t?",":"")+e})),i.push(o+"="+t)}else i.push(o+"="+e)}return i.length?n+i.join("&"):""},route:l,timeFormat:f,date:f,timeFrom:function(t=null,e="yyyy-mm-dd"){t||(t=Number(new Date)),10==t.toString().length&&(t*=1e3);let r=+new Date(Number(t)),n=(Number(new Date)-r)/1e3,i="";switch(!0){case n<300:i="刚刚";break;case n>=300&&n<3600:i=parseInt(n/60)+"分钟前";break;case n>=3600&&n<86400:i=parseInt(n/3600)+"小时前";break;case n>=86400&&n<2592e3:i=parseInt(n/86400)+"天前";break;default:i=!1===e?n>=2592e3&&n<31536e3?parseInt(n/2592e3)+"个月前":parseInt(n/31536e3)+"年前":f(r,e)}return i},colorGradient:h.colorGradient,colorToRgba:h.colorToRgba,guid:function(t=32,e=!0,r=null){let n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),i=[];if(r=r||n.length,t)for(let o=0;o<t;o++)i[o]=n[0|Math.random()*r];else{let t;i[8]=i[13]=i[18]=i[23]="-",i[14]="4";for(let e=0;e<36;e++)i[e]||(t=0|16*Math.random(),i[e]=n[19==e?3&t|8:t])}return e?(i.shift(),"u"+i.join("")):i.join("")},color:{primary:"#2979ff",primaryDark:"#2b85e4",primaryDisabled:"#a0cfff",primaryLight:"#ecf5ff",bgColor:"#f3f4f6",info:"#909399",infoDark:"#82848a",infoDisabled:"#c8c9cc",infoLight:"#f4f4f5",warning:"#ff9900",warningDark:"#f29100",warningDisabled:"#fcbd71",warningLight:"#fdf6ec",error:"#fa3534",errorDark:"#dd6161",errorDisabled:"#fab6b6",errorLight:"#fef0f0",success:"#19be6b",successDark:"#18b566",successDisabled:"#71d5a1",successLight:"#dbf1e1",mainColor:"#303133",contentColor:"#606266",tipsColor:"#909399",lightColor:"#c0c4cc",borderColor:"#e4e7ed"},sys:function(){return uni.getSystemInfoSync()},os:function(){return uni.getSystemInfoSync().platform},type2icon:function(t="success",e=!1){-1==["primary","info","error","warning","success"].indexOf(t)&&(t="success");let r="";switch(t){case"primary":case"info":r="info-circle";break;case"error":r="close-circle";break;case"warning":r="error-circle";break;default:r="checkmark-circle"}return e&&(r+="-fill"),r},randomArray:function(t=[]){return t.sort((()=>Math.random()-.5))},wranning:function(t){},get:c.get,post:c.post,put:c.put,delete:c.delete,hexToRgb:h.hexToRgb,rgbToHex:h.rgbToHex,test:u,random:function(t,e){if(t>=0&&e>0&&e>=t){let r=e-t+1;return Math.floor(Math.random()*r+t)}return 0},deepClone:o,deepMerge:a,getParent:function(t,e){let r=this.$parent;for(;r;){if(r.$options.name===t){let t={};if(Array.isArray(e))e.map((e=>{t[e]=r[e]?r[e]:""}));else for(let n in e)Array.isArray(e[n])?e[n].length?t[n]=e[n]:t[n]=r[n]:e[n].constructor===Object?Object.keys(e[n]).length?t[n]=e[n]:t[n]=r[n]:t[n]=e[n]||!1===e[n]?e[n]:r[n];return t}r=r.$parent}return{}},$parent:function(t){let e=this.$parent;for(;e;){if(!e.$options||e.$options.name===t)return e;e=e.$parent}return!1},addUnit:function(t="auto",e="rpx"){return t=String(t),u.number(t)?`${t}${e}`:t},trim:function(t,e="both"){return"both"==e?t.replace(/^\s+|\s+$/g,""):"left"==e?t.replace(/^\s*/,""):"right"==e?t.replace(/(\s*$)/g,""):"all"==e?t.replace(/\s+/g,""):t},type:["primary","success","error","warning","info"],http:c,toast:function(t,e=1500){uni.showToast({title:t,icon:"none",duration:e})},config:A,zIndex:{toast:10090,noNetwork:10080,popup:10075,mask:10070,navbar:980,topTips:975,sticky:970,indexListSticky:965},debounce:function(t,e=500,r=!1){if(null!==d&&clearTimeout(d),r){var n=!d;d=setTimeout((function(){d=null}),e),n&&"function"==typeof t&&t()}else d=setTimeout((function(){"function"==typeof t&&t()}),e)},throttle:function(t,e=500,r=!0,n="default"){y[n]||(y[n]=null),r?m[n]||(m[n]=!0,"function"==typeof t&&t(),y[n]=setTimeout((()=>{m[n]=!1}),e)):m[n]||(m[n]=!0,y[n]=setTimeout((()=>{m[n]=!1,"function"==typeof t&&t()}),e))}};uni.$u=w;const T={install:t=>{t.mixin(i),t.config.globalProperties.$u=w}};const{app:$,Vuex:S,Pinia:k}=function(){const e=t.createVueApp(n);return e.use(T),{app:e}}();uni.Vuex=S,uni.Pinia=k,$.provide("__globalStyles",__uniConfig.styles),$._component.mpType="app",$._component.render=()=>{},$.mount("#app")}(Vue);
