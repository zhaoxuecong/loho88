<template>
<div class="goodList">
	<div class="top">
		
		<div class="back-left">
			<a href="javascript:;">
				<i class="iconfont icon-fanhui"></i>
			</a>
			
		</div>
		<div class="title">新品上市</div>
		<div class="menu-right">
			<ul>
				<li><i class="iconfont icon-xiazai1"></i></li>
				<li><i class="iconfont icon-liebiao"></i></li>
			</ul>
		</div>
		
	</div>
	<div class="content">		
		<ul class="nav">
			<li class="hit">综合</li>
			<li>销量</li>
			<li>价格</li>
			<li>筛选</li>
		</ul>
		<div class="goods">
			<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0">
				<li v-for="item in list">
					<p class="pic"><img :src="item.img" /></p>
					<p class="intro">{{item.title}}</p>
					<p class="shop">
						<span class="price">￥{{item.price}}</span>
						<span class="num">{{item.salesNum}}人已买</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import { InfiniteScroll } from 'mint-ui';
export default{
	name:'goodList',
	data (){
		return {
			list:[],
			str:[],
			page:0,
			loading:false
		}
	},
	methods:{
		loadMore() {
			
		  this.loading = true;
		  setTimeout(() => {
		    
			this.getData();
		    this.loading = false;
		  }, 2500);
		},
		
		getData(){
			if(this.list.length<31){
				
			
			axios.get(`/search/?e=222&page=${this.page+1}`)
			.then((res)=>{
				console.log(res);
				this.list = this.list.concat(res.data.result.data);
				var lengths = this.list.length;
				for(var i = this.page*20;i < lengths;i ++){
					this.list[i].img = "http://image.loho88.com/" + this.list[i].img;
				}
				console.log(this.list);
				this.page++;
				
			})
			}
		}
	},
	mounted(){
		//this.getData();
		
	}
}	
</script>

<style scoped lang="scss" src="./sass/goodList.scss">
	
	
	
</style>