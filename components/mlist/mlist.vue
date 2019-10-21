<template name="mlist">
	<view class="uni-list">
	    <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listdata" :key="key"
	        @click="goDetail(value.id)">
	        <view class="uni-media-list" >
	            <image class="uni-media-list-logo" :src="value.articleThumbnail"></image>
	            <view class="uni-media-list-body">
	                <view class="uni-media-list-text-top">{{value.articleTitle}}</view>
	                <view class="uni-media-list-text-bottom">
	                    <text>赚点钱花</text>
	                    <text>{{value.articleNewstime}}</text>
	                </view>
	            </view>
	        </view>
	    </view>
		
		<view class="zerolist" v-if="hasData">
			<view class="nodatac">该分类下暂时没有文章</view>
		</view>
		
	</view>
</template>

<script>
	var dateUtils = require('../../common/util.js').dateUtils;
	export default {
		name:'mlist',
		props: {
			listdata: {
				type:Array,
				default:()=>{
					return new Array();
				}
			},
			hasData:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				nodata:true 
			};
		},
		created() { },
		methods:{
			 
			goDetail: function(e) {
			    var me = this;
				
				var user = me.getGlobalUser();
				//console.log(user);
				if(user==''){
					uni.showModal({
						title: '您需要注册并成为会员才能查看该内容',
						showCancel: false,
						confirmText: '前往注册',
						confirmColor:'#e05772',
						success: res => {
							if(res.confirm){
								uni.navigateTo({
									url:'/pages/registerLogin/registerLogin'
								});
							}
						},
						fail: () => {},
						complete: () => {}
					});
					return ;
				}else if(user.status =='' || user.status == '0'){
					uni.showModal({
						title: '只有会员才能查看该内容',
						showCancel: false,
						content:'了解如何成为会员',
						confirmText: '前往查看',
						confirmColor:'#e05772',
						success: res => {
							if(res.confirm){
								uni.navigateTo({
									url:'/pages/vipnote/vipnote'
								});
							}
						},
						fail: () => {},
						complete: () => {}
					});
					return ;
				}
				
			    uni.navigateTo({
			        url: "/pages/articledetail/articledetail?aid="+e
			    })
			} 
		}
	}
</script>

<style>
@import url("mlist.css");
</style>
