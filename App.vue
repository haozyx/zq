<script>
	export default {
		onLaunch: function() {
			//console.log('App Launch')
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		}
	}
</script>

<style>
 
	/*每个页面公共css */
	.page {
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		/* 	position: absolute; */
	}
	.page-fill {
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		position: absolute;
	}
	/* 线条 */
	.line-wrap {
		padding: 0upx 35upx;
	}
	.line {
		height: 1px;
		background-color: #e3e3e3;
	}
	/* 这是隐藏滚动条的，在单个页面设置不管用 */
	::-webkit-scrollbar {
		display: none;
	}
	/* 导航栏占据高度 */
	.navheight{
		/* height: var(--status-bar-height); */
		height: 30px;
		width: 100%;
		background: #FFFFFF;
		z-index: 100;
	}
	.appimg{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.appimg img{
		width: 95%;
	}
</style>
