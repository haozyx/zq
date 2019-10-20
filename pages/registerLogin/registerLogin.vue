<template>
	<view class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image src="../../static/img/default-face.png" class="face"></image>
			</view>
			
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name="password" type="text" value="" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">QQ</label>
				<input name="qq" type="text" value="" class="input" placeholder="请输入QQ号" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">微信</label>
				<input name="weixin" type="text" value="" class="input" placeholder="请输入微信号" placeholder-class="graywords"/>
			</view>
			
			<button type="primary" form-type="submit" style="margin-top: 60upx;width: 90%;">注册/登录</button>
		</form>
	 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			formSubmit(e){
				 var me = this;
				var username = e.detail.value.username;
				var password = e.detail.value.password;
				var qq = e.detail.value.qq;
				var weixin =e.detail.value.weixin;
				
				if(username && password){
					if(!qq&&!weixin){
						uni.showToast({
							title: 'QQ或微信必须输一个.',
							icon:'none',
							mask:true
						});
						return ;
					}
					 
					var user = {
						username: username,
						password:password,
						qq:qq,
						weixin:weixin
					};
					uni.showLoading({
						mask:true
					});
					uni.request({
						url: me.webUrl + 'saveuser',
						method: 'POST',
						data: user,
						success: res => {
							// console.log(res);
							if(res.data.code == 200){
								var user = res.data.user;
								uni.setStorageSync("globalUser",user);
								//如果直接跳转会反生读取不到缓存的问题
								setTimeout(()=>{
									uni.hideLoading();
									uni.switchTab({
										url:'../me/me'
									});
								},2000);
								
							}
						},
						fail: () => {},
						complete: () => {}
					});
					/* uni.setStorageSync("globalUser",user);
					uni.switchTab({
						url:'../me/me'
					}); */
					
				}else{
					uni.showToast({
						title: '请输入用户名或密码',
						icon:'none',
						mask:true
					});
					return ;
				}
			}
		}
	}
</script>

<style>
@import url("registerLogin.css");
</style>
