(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"51a2":function(t,e,a){"use strict";a.r(e);var i=a("94f7"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},"66e2":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"86f0":function(t,e,a){"use strict";a.r(e);var i=a("66e2"),n=a("51a2");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("a7f8");var c=a("2877"),o=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},8955:function(t,e,a){"use strict";(function(t){a("8c53"),a("921b");i(a("66fd"));var e=i(a("86f0"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"94f7":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return Promise.all([a.e("common/vendor"),a.e("components/mlist/mlist")]).then(a.bind(null,"e11f"))},n={data:function(){return{isLogin:!1,userObj:{},page:1,pagesize:10,totalpage:0,clist:[],hasData:!1,classifyarry:[{id:1,name:"每日任务",img:"../../static/img/meiri.png"},{id:2,name:"进阶培训",img:"../../static/img/peixun.png"},{id:3,name:"虚拟赚钱",img:"../../static/img/xuni.png"},{id:4,name:"新手推荐",img:"../../static/img/tuijian.png"},{id:5,name:"网赚思路",img:"../../static/img/silu.png"},{id:6,name:"VIP项目",img:"../../static/img/vip.png"},{id:7,name:"新手指南",img:"../../static/img/zhinan.png"}],bannerimgarry:["../../static/img/banner.png","../../static/img/banner.png"]}},components:{mlist:i},onLoad:function(){this.getme(),this.getlist()},methods:{getlist:function(){var e=this;t.request({url:e.webUrl+"list",method:"GET",data:{page:e.page,pagesize:e.pagesize,category:"3"},success:function(t){200==t.data.code&&(e.totalpage=t.data.totalpage,""==t.data.list?e.hasData=!0:(e.hasData=!1,e.clist=e.clist.concat(t.data.list)))},fail:function(){},complete:function(){}})},gotoclassify:function(e){var a=e.currentTarget.dataset.id;t.navigateTo({url:"/pages/classify/classify?category="+a})},getme:function(){var t=this,e=t.getGlobalUser();e?(t.isLogin=!0,t.userobj=e,t.validate()):(t.isLogin=!1,t.userobj={})},validate:function(){var e=this;t.request({url:e.webUrl+"getuserstatus",method:"GET",data:{id:e.userobj.id},success:function(a){if(200==a.data.code){var i=a.data.user;e.userobj=i,t.setStorageSync("globalUser",i)}},fail:function(){},complete:function(){}})}}};e.default=n}).call(this,a("6e42")["default"])},a7f8:function(t,e,a){"use strict";var i=a("ce7e"),n=a.n(i);n.a},ce7e:function(t,e,a){}},[["8955","common/runtime","common/vendor"]]]);