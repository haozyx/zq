(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/registerLogin/registerLogin"],{2027:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{username:"",password:"",qq:""}},methods:{formSubmit:function(t){var n=this;if(n.username&&n.password)if(n.qq){var a={username:n.username,password:n.password,qq:n.qq};e.showLoading({mask:!0}),e.request({url:n.webUrl+"saveuser",method:"POST",data:a,success:function(t){if(200==t.data.code){var n=t.data.user;e.setStorageSync("globalUser",n),setTimeout(function(){e.hideLoading(),e.switchTab({url:"../me/me"})},2e3)}},fail:function(){},complete:function(){}})}else e.showToast({title:"QQ或微信必须输一个.",icon:"none",mask:!0});else e.showToast({title:"请输入用户名或密码",icon:"none",mask:!0})}}};t.default=n}).call(this,n("6e42")["default"])},"4dd1":function(e,t,n){"use strict";n.r(t);var a=n("2027"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=u.a},"60b4":function(e,t,n){},"646e":function(e,t,n){"use strict";(function(e){n("8c53"),n("921b");a(n("66fd"));var t=a(n("ffcc"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"71bb":function(e,t,n){"use strict";var a=n("60b4"),u=n.n(a);u.a},b715:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},ffcc:function(e,t,n){"use strict";n.r(t);var a=n("b715"),u=n("4dd1");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("71bb");var r=n("2877"),s=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports}},[["646e","common/runtime","common/vendor"]]]);