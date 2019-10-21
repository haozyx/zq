<template>
	<view class="page">
		<view class="navspace"></view>
		<scroll-view scroll-x="true" class="gundong" :scroll-into-view="scrollid" >
			<block v-for="(item,index) in tabarry" :key="index">
				<view class="tab-item" :data-index="index" :data-id="item.id" :id="'scrol_'+item.id" @tap="getcurlist" :class="currindex==index ?'active':''">
					<text>{{item.name}}</text>
				</view>
			</block>
		</scroll-view>

		<!-- 空白区域 -->
		<view class="whitespace"></view>


		<!-- 分类信息 -->
		<mlist :listdata="clist" :hasData="hasData"></mlist>
	</view>
</template>

<script>
	import mlist from '../../components/mlist/mlist.vue'
	export default {
		data() {
			return {
				scrollid:'scrol_1',
				curclick:undefined,
				currindex: 0,
				page: 1,
				pagesize: 10,
				totalpage: 0,
				category: 3,
				hasData: false,
				clist: [],
				tabarry: [
					{'id':1,'name':'每日任务'},
					{'id':2,'name':'进阶培训'},
					{'id':3,'name':'虚拟赚钱'},
					{'id':4,'name':'新手推荐'},
					{'id':5,'name':'网赚思路'},
					{'id':6,'name':'VIP项目'},
					{'id':7,'name':'新手指南'}]
			}
		},
		components: {
			mlist
		},
		onLoad(e) {
			var me = this;
			var category = e.category;
			
			me.scrollid = "scrol_"+category;
			me.curclick = category;
			me.category = category;
			me.currindex = category -1 ;
			me.getlist(me.page, me.pagesize, me.category);
		},
		onReachBottom() {
			var me = this;
			//上滑加载更多
			var page = me.page;
			var total = me.totalpage;
			//console.log(page);
			//console.log(page > total);
			if (page > total) { //要分页的页数大于总页数不进行分页
				return;
			}
			me.getlist(page,me.pagesize,me.category);

		},
		methods: {
			getcurlist(e) {
				var index = e.currentTarget.dataset.index;
				var category = e.currentTarget.dataset.id;
				var me = this;
				
				if(!me.curclick){
					me.curclick = category;
				}else if(me.curclick == category){
					return;
				}
				me.curclick = category;
				
				
				me.currindex = index;
				me.page =1;
				me.category = category;
				
				me.clist =[];
				//console.log(me.category);
				me.getlist(me.page,me.pagesize,me.category);
				
			},
			getlist(page, pagesize, category) {
				var me = this;
				uni.showLoading({
					mask: true,
					title: 'loading...'
				});
				uni.request({
					url: me.webUrl + 'list',
					method: 'GET',
					data: {
						page,
						pagesize,
						category
					},
					success: res => {
						//console.log(res.data.list);
						uni.hideLoading();
						if (res.data.code == 200) {
							me.page = page + 1;
							me.totalpage = res.data.totalpage;
							if(res.data.list == ''){
								me.hasData= true;
							}else{
								me.hasData = false;
								me.clist = me.clist.concat(res.data.list);
							}
							
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
	@import url("classify.css");
</style>
