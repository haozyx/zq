<template>
	<view >
		<view class="activewrap">
			
			<input type="text" v-model="code" class="text" placeholder="请填写激活码" placeholder-class="ptext"/>
				
			<view class="button" @tap="activeuser">激活</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userid:0,
				code:''
			}
		},
		onLoad() {
			var me = this;
			var user = me.getGlobalUser();
			if(user){
				me.userid = user.id;
			}
		},
		methods: {
			activeuser(){
				var me = this;
				
				if(me.userid==0 || me.userid=='' || me.userid ==undefined){
					uni.showToast({
						title: '未登录不可进行激活操作',
						icon:'none',
						mask:true
					});
					return;
				}
				
				if(me.code==''){
					uni.showToast({
						title: '激活码不能为空',
						icon:'none',
						mask:true
					});
					return;
				}
				uni.showLoading({
					mask:true,
					title:'正在激活请稍候...'
				})
				uni.request({
					url: me.webUrl + 'activeuser',
					method: 'GET',
					data: {id:me.userid,activecode:me.code},
					success: res => {
						//console.log(res);
						if(res.data.code==200){
							uni.showToast({
								title:'激活成功',
								icon:'none',
								mask:true
							});
							setTimeout(()=>{
								uni.hideLoading();
								uni.reLaunch({
									url:'../me/me'
								});
							},3000);
						}else{
							uni.hideLoading();
							uni.showToast({
								title:res.data.msg,
								icon:'none',
								mask:true
							});
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
@import url("activecode.css");
</style>
