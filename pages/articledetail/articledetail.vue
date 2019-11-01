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
			<!-- <rich-text :nodes="htmlString"></rich-text> -->
			<uParse :content="htmlString" @preview="preview" @navigate="navigate" />
		</view>
		<view class="articlebottom" v-if="article.isPublic == '0'">
			<view class="wangpan">网盘地址: {{article.downloadUrl}}</view>
			<view class="mima">分享密码: {{article.articlePassword}}</view>
		</view>
	</view>
</template>

<script>
	import uParse from '../../components/uParse/src/wxParse.vue'
	
	export default {
		components:{
			uParse
		},
		data() {
			return {
				title: 'list-triplex-row',
				author_name: '赚点钱花',
				article: {},
				htmlString: "正在加载数据...."
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
				
				uni.showLoading({
					mask:true
				});
				
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
					complete: () => {
						uni.hideLoading();
					}
				});
			},
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				//console.log("href: " + href);
				/* uni.navigateTo({
					url:'../weburlview/weburlview?weburl='+href
				}); */
				plus.runtime.openURL(href);
			}
		}
	}
</script>

<style>
@import url("articledetail.css");
@import url("../../components/uParse/src/wxParse.css");
</style>
