<template>
	<view class="page1"> 
		<view class="textwrap">
			<view class="t-title">会员说明</view>
			<view class="tablewrap">
				<view class="lefttext"> 时间 </view>
				<view class="righttext"> 价钱 </view>
			</view>
			<view class="table-item">
				<view class="lefttext1"> 180天 </view>
				<view class="righttext1"> ￥249 </view>
			</view>
			<view class="table-item">
				<view class="lefttext1"> 365天 </view>
				<view class="righttext1"> ￥499 </view>
			</view>
			
			<view class="content">
				<view class="cc">本站采取<view class="span">VIP</view>制度</view>
				<view class="cc">只有<view class="span">购买激活码</view>充值的用户</view>
				<view class="cc">才可以开启全部分类以及查看VIP专属教程。</view>
				<view class="cc">资源信息全部人工审核验证</view>
				<view class="cc">勿用担心上当受骗</view>
				<view class="cc">因信息的可复制性，</view>
				<view class="cc">激活码一经售出则<view class="span">不接受</view>退款</view>
				<view class="cc">请小伙伴酌情考虑。</view>
			</view>	
			<view class="t-title">购买方式</view>
			<view class="cc-wx">添加微信(w826060882或者a15162086243)购买激活码</view>
			<view class="button" @tap="buyvip">直接购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			buyvip(){
				plus.runtime.openURL('http://www.admin444.com/P-fcf7ffd8');
			}
		}
	}
</script>

<style>
@import url("vipnote.css");
</style>
