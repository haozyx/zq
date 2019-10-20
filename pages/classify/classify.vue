<template>
	<view class="page">
		<view class="navspace"></view>
		<scroll-view scroll-x="true" class="gundong">
			<block v-for="(item,index) in tabarry" :key="index">
				<view class="tab-item" :data-index="index" @tap="getcurlist" :class="currindex==index ?'active':''">
					<text>{{item}}</text>
				</view>
			</block>
		</scroll-view>
		
		<!-- 空白区域 -->
		<view class="whitespace"></view>
		
		
		<!-- 分类信息 -->
		<mlist></mlist>
	</view>
</template>

<script>
	import mlist from '../../components/mlist/mlist.vue'
	export default {
		data() {
			return {
				currindex: 0,
				tabarry: ['每日任务', '进阶培训', '虚拟赚钱', '新手推荐', '网赚思路', 'VIP项目']
			}
		},
		components:{
			mlist
		},
		methods: {
			getcurlist(e){
				var index = e.currentTarget.dataset.index;
				var me = this;
				me.currindex = index;
			}
		}
	}
</script>

<style>
	@import url("classify.css");
</style>
