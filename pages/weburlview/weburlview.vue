<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="weburl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				weburl:''
			}
		},
		onLoad(e) {
			var me = this;
			me.weburl = e.weburl;
		},
		methods: {

		}
	}
</script>

<style>

</style>
