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
					<image src="../../static/img/meiri.png" class="clzimg"></image>
					<view class="clztext">{{clz}}</view>
				 </view>
			  </block>
		 </view>
		<!-- 分类导航  end-->
		
		<!-- 显示推荐或者置顶的信息 start-->
			<view class="uni-list">
			    <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key"
			        @click="goDetail(value)">
			        <view class="uni-media-list">
			            <image class="uni-media-list-logo" :src="value.cover"></image>
			            <view class="uni-media-list-body">
			                <view class="uni-media-list-text-top">{{value.title}}</view>
			                <view class="uni-media-list-text-bottom">
			                    <text>{{value.author_name}}</text>
			                    <text>{{value.published_at}}</text>
			                </view>
			            </view>
			        </view>
			    </view>
			</view>
		
		<!-- 显示推荐或者置顶的信息 end-->
		
		<mlist></mlist>
	</view>
</template>

<script>
	import mlist from '../../components/mlist/mlist.vue'

	export default {
		data() {
			return {
				title: 'Hello',
				classifyarry:['每日任务','进阶培训','虚拟赚钱','新手推荐','网赚思路','VIP项目'],
				bannerimgarry:['https://haozy.yohaoyun.com/yohaoyun/banner/banner1.jpg','https://haozy.yohaoyun.com/yohaoyun/banner/banner1.jpg'],
			}
		},
		components:{
			mlist
		},
		onLoad() {
			this.test();
		},
		methods: {
			gotoclassify(){
				uni.redirectTo({
					url: '../classify/classify'
				});
			}, 
			test(){
				var me = this;
				this.$http.request({
				  url:  me.webUrl + 'getcode',
				  method: 'get'
				}).then(res=>{
				  // do something...
				  console.log(res);
				}).catch(err=>{
				  // do something...
				}) 
			}
		}
	}
</script>

<style>
@import url("index.css");
</style>
