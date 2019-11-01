<template>
	<view class="page page-fill">
		
		<view class="header">
			<!-- 用户的头像这里定死 -->
			<image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face"></image>
			
			<view class="info-wapper" v-if="isLogin">
				<view class="nickname">
					{{userobj.status==0?'普通用户':'会员用户'}}
				</view>
				<view class="nav-info">ID：XCLB00{{userobj.id}}</view>
			</view>
			<view v-else>
				<navigator url="../registerLogin/registerLogin">
					<view class="nickname regist-login">
						注册/登录
					</view>
				</navigator>
			</view>
			 
		</view>
		
		
		<view class="textwrap" @tap="vipnote">
			<view class="leftwrap">
				<image class="leftimg" src="../../static/img/phone.png"></image>
				<view class="lefttext">成为会员</view>
			</view>
			<view class="rightwrap">
				<view class="righttext">点击查看</view>
				<image src="../../static/img/you.png" class="you"></image>
			</view>
			
		</view>
		<view class="line-wrap"> <view class="line"></view> </view>
		
		<view class="textwrap" @tap="gotoactive">
			<view class="leftwrap">
				<image class="leftimg" src="../../static/img/zhucema.png"></image>
				<view class="lefttext">激活码</view>
			</view>
			<view class="rightwrap">
				<view class="righttext">{{userobj.activeCode ? '已激活':'填写激活码'}}</view>
				<image src="../../static/img/you.png" class="you"></image>
			</view>
			
		</view>
		<view class="line-wrap"> <view class="line"></view> </view>
		
		<block v-if="userobj.status=='1'">
			<view class="textwrap" > 
				<view class="leftwrap">
					<image class="leftimg" src="../../static/img/time.png"></image>
					<view class="lefttext">到期时间</view>
				</view>
				<view class="rightwrap">
					<view class="righttext">{{userobj.outdate}}</view>
					<image src="../../static/img/you.png" class="you"></image>
				</view>
			
			</view>
			<view class="line-wrap"> <view class="line"></view> </view>
		</block>
		<view class="textwrap" @tap="checkbanben">
			<view class="leftwrap">
				<image class="leftimg" src="../../static/img/gantan.png"></image>
				<view class="lefttext">检查更新</view>
			</view>
			<view class="rightwrap">
				<view class="righttext">v1.0</view>
				<image src="../../static/img/you.png" class="you"></image>
			</view>
			
		</view>
		<view class="line-wrap"> <view class="line"></view> </view>
		
		<view class="textwrap" @tap="logout">
			<view class="leftwrap">
				<image class="leftimg" src="../../static/img/tuichu.png"></image>
				<view class="lefttext">退出登录</view>
			</view>
			<view class="rightwrap">
				<view class="righttext"></view>
				<image src="../../static/img/you.png" class="you"></image>
			</view>
			
		</view>
		<view class="line-wrap"> <view class="line"></view> </view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin:false,
				userobj:{}
			}
		},
		onLoad() {
			var me = this;
			// var user = me.getGlobalUser();
			// 这里不能调用全局方法,会比直接取的慢一点
			var user = uni.getStorageSync('zqglobalUser');
			//uni.clearStorage();
			 
			if(user=='' || user == null){
				me.isLogin = false;
				me.userobj={};
			}else{
				me.isLogin = true;
				me.userobj = user;
				me.getme();  //是会员的话再去校验
				
			}
		},
		methods: {
			getme(){
				var me = this;
				uni.request({
					url: me.webUrl + 'getuserstatus',
					method: 'GET',
					data: {id:me.userobj.id},
					success: res => {
						if(res.data.code == 200){
							var user = res.data.user;
							me.userobj =user;
							uni.setStorageSync("zqglobalUser",user);
							//console.log(user);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			gotoactive(){
				var me = this;
				if(me.userobj.status == '1') return;
				uni.navigateTo({
					url:'../activecode/activecode'
				});
			},
			vipnote(){
				uni.navigateTo({
					url:'../vipnote/vipnote'
				});
			},
			
			checkbanben(){
				uni.showToast({
					title: '已是最新版本',
					mask:true
				});
			},
			
			logout(){
				uni.clearStorageSync();
				uni.reLaunch({
					url: '../registerLogin/registerLogin'
				});
			}
		}
	}
</script>

<style>
@import url("me.css");
</style>
