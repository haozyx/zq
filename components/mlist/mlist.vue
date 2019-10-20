<template name="mlist">
	<view class="uni-list">
	    <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listdata" :key="key"
	        @click="goDetail(value)">
	        <view class="uni-media-list">
	            <image class="uni-media-list-logo" :src="value.articleThumbnail"></image>
	            <view class="uni-media-list-body">
	                <view class="uni-media-list-text-top">{{value.articleTitle}}</view>
	                <view class="uni-media-list-text-bottom">
	                    <text>寻财猎宝</text>
	                    <text>{{value.articleNewstime}}</text>
	                </view>
	            </view>
	        </view>
	    </view>
	</view>
</template>

<script>
	var dateUtils = require('../../common/util.js').dateUtils;
	export default {
		name:'mlist',
		props: {
			listdata: {}
		},
		data() {
			return {
				 
			};
		},
		created() {
			 
		},
		methods:{
			 
			goDetail: function(e) {
			    // 				if (!/前|刚刚/.test(e.published_at)) {
			    // 					e.published_at = dateUtils.format(e.published_at);
			    // 				}
			    let detail = {
			        author_name: e.author_name,
			        cover: e.cover,
			        id: e.id,
			        post_id: e.post_id,
			        published_at: e.published_at,
			        title: e.title
			    }
			    uni.navigateTo({
			        url: "/pages/list2detail-detail/list2detail-detail?detailDate=" + encodeURIComponent(JSON.stringify(
			            detail))
			    })
			} 
		}
	}
</script>

<style>
@import url("mlist.css");
</style>
