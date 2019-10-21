<template>
	<view>
		<view class="banner">
			<image class="banner-img" :src="article.articleThumbnail"></image>
			<view class="banner-title">{{article.articleTitle}}</view>
		</view>
		<view class="article-meta">
			<text class="article-author">{{author_name}}</text>
			<text class="article-text">发表于</text>
			<text class="article-time">{{article.articleNewstime}}</text>
		</view>
		<view class="article-content">
			<rich-text :nodes="htmlString"></rich-text>
		</view>
		<view class="articlebottom" v-if="article.isPublic == '0'">
			<view class="wangpan">网盘地址: {{article.downloadUrl}}</view>
			<view class="mima">分享密码: {{article.articlePassword}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'list-triplex-row',
				author_name: '赚点钱花',
				article: {},
				htmlString: ""
			}
		},
		onShareAppMessage() {
			return {
				title: this.banner.articleTitle,
				path: '/pages/template/list2detail-detail/list2detail-detail?detailDate=' + JSON.stringify(this.banner)
			}
		},
		onLoad(e) {
			var me = this;
			var aid = e.aid;
			
			me.getdetail(aid);

			
		},
		methods: {
			getdetail(aid){
				var me = this;
				uni.request({
					url: me.webUrl + 'getdetail',
					method: 'GET',
					data: {id:aid},
					success: res => {
						//console.log(res);
						if(res.data.code == 200){
							me.article = res.data.article;
							me.htmlString = me.article.articleContent;
							//console.info(me.htmlString);
							uni.setNavigationBarTitle({
								title: me.article.articleTitle
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
@import url("articledetail.css");
</style>
