<template>
	<view class="body">
		<form  >
			<view class="face-wapper">
				<image src="../../static/img/default-face.png" class="face"></image>
			</view>
			
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input name="username" type="text" v-model="username" class="input" placeholder="请输入用户名" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name="password" type="text" value="" v-model="password" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">QQ</label>
				<input name="qq" type="text" value="" v-model="qq" class="input" placeholder="请输入QQ号或者微信号" placeholder-class="graywords"/>
			</view>
		<!-- 	<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">微信</label>
				<input name="weixin" type="text" value="" class="input" placeholder="请输入微信号" placeholder-class="graywords"/>
			</view> -->
			<view class="regbutton" @tap="formSubmit">注册/登录</view>
		</form>
	 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:'',
				qq:''
			}
		},
		methods: {
			formSubmit(e){
				var me = this;
				
				
				if(me.username && me.password){
					if(!me.qq){
						uni.showToast({
							title: 'QQ或微信必须输一个.',
							icon:'none',
							mask:true
						});
						return ;
					}
					 
					var user = {
						username: me.username,
						password: me.password,
						qq:me.qq
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
							uni.hideLoading();
							if(res.data.code == 200){
								
								var user = res.data.user;
								uni.setStorageSync("zqglobalUser",user);
								uni.reLaunch({
									url:'../me/me'
								});
								//如果直接跳转会反生读取不到缓存的问题
								/* setTimeout(()=>{
									
									
								},2000); */
								
							}else{
								uni.showToast({
									title: '账号或密码错误.',
									icon:'none',
									mask:true
								});
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
