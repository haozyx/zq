<template>
	<view class="page-fill">
		 <!-- 网站横幅 start -->
		 <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
		 	<swiper-item v-for="(bimg,index) in bannerimgarry" :key="index">
		 		<image :src="bimg" class="carousel"></image>
		 	</swiper-item>
		 </swiper>
		 <!-- 网站横幅 end -->
		 
		 <!-- 分类导航  start-->
		 <view class="classify">
			 <block v-for="(clz,index) in classifyarry" :key="index">
				 <view class="clzwraper" @tap="gotoclassify">
					<image :src="clz.img" class="clzimg"></image>
					<view class="clztext">{{clz.name}}</view>
				 </view>
			  </block>
		 </view>
		<!-- 分类导航  end-->
		
		<!-- 显示推荐或者置顶的信息 start-->
			<mlist :listdata='clist'></mlist>
		<!-- 显示推荐或者置顶的信息 end-->
		
	</view>
</template>

<script>
	import mlist from '../../components/mlist/mlist.vue'

	export default {
		data() {
			return {
				isLogin:false,
				userObj:{},
				page:1,
				pagesize:10,
				totalpage:0,
				clist:[],
				classifyarry:[
					{'id':1,'name':'每日任务','img':'../../static/img/meiri.png'},
					{'id':2,'name':'进阶培训','img':'../../static/img/peixun.png'},
					{'id':3,'name':'虚拟赚钱','img':'../../static/img/xuni.png'},
					{'id':4,'name':'新手推荐','img':'../../static/img/tuijian.png'},
					{'id':5,'name':'网赚思路','img':'../../static/img/silu.png'},
					{'id':6,'name':'VIP项目','img':'../../static/img/vip.png'},
					{'id':7,'name':'新手指南','img':'../../static/img/zhinan.png'}],
				bannerimgarry:['../../static/img/banner.jpg','../../static/img/banner.jpg'],
			}
		},
		components:{
			mlist
		},
		onLoad() {
			this.getme();
			this.getlist();
		},
		methods: {
			getlist(){
				var me = this;
				
				uni.request({
					url:  me.webUrl +'list',
					method: 'GET',
					data: {page:me.page,pagesize:me.pagesize,category:'3'},
					success: res => {
						console.log(res);
						if(res.data.code ==200){
							me.totalpage = res.data.totalpage;
							me.clist = res.data.list;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			gotoclassify(){
				uni.navigateTo({
					url: '/pages/classify/classify'
				});
			}, 
			getme(){
				var me = this;
				var user = me.getGlobalUser();
				//uni.clearStorage();
				console.info(user);
				if(user){
					me.isLogin = true;
					me.userobj = user;
					me.getme();  //是会员的话再去校验
					
				}else{
					me.isLogin = false;
					me.userobj={};
				}
			},
			validate(){
				var me = this;
				uni.request({
					url: me.webUrl + 'getuserstatus',
					method: 'GET',
					data: {id:me.userobj.id},
					success: res => {
						if(res.data.code == 200){
							var user = res.data.user;
							me.userobj =user;
							uni.setStorageSync("globalUser",user);
							console.log(user);
						}
					},
					fail: () => {},
					complete: () => {}
				});
				
			}
		}
	}
</script>

<style>
@import url("index.css");
</style>
