<template>
<div class="goodList">
	<div class="top">
		
		<div class="back-left" @click="$router.back(-1)">
			<a href="javascript:;">
				<i class="iconfont icon-fanhui"></i>
			</a>
			
		</div>
		<div class="title">{{fid}}</div>
		<div class="menu-right">
			<ul>
				<li @click="gotoCart()">
					<i class="iconfont icon-xiazai1"></i>
					<span>{{$store.state.cart.length}}</span>
				</li>
				<li @click="gohome()"><i class="iconfont icon-liebiao"></i></li>				
			</ul>
		</div>		
	</div>
	<ul class="skip" v-show="flag">
		<li>
			<router-link :to="'/goodMy'">
				<i class="iconfont icon-wode"></i>会员中心
			</router-link>						
		</li>
		<li>
			<router-link :to="'/'">
				<i class="iconfont icon-shouye1"></i>首页
			</router-link>						
		</li>
	</ul>
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
  infinite-scroll-distance="10">
				<li v-for="item in list">
					<router-link :to="{name:'detail', params:{fid: item.goodsId}}">
					<p class="pic"><img :src="item.img" /></p>
					<p class="intro">{{item.title}}</p>
					<p class="shop">
						<span class="price">￥{{item.price}}</span>
						<span class="num">{{item.salesNum}}人已买</span>
					</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="text-center">
			<span>{{di}}</span>
		</div>
		<backtop　:scrollmyself = 'true'></backtop>
	</div>
</div>
</template>

<script>
import backtop from './backtop';
import axios from 'axios';
import { InfiniteScroll } from 'mint-ui';
export default{
	name:'goodList',
	data (){
		return {
			list:[],
			str:[],
			page:0,
			loading:false,
			di:"正在加载",
			fid:"",
			flag:false
		}
	},
	components:{
		backtop
	},
	methods:{
		gotoCart(){
			this.$router.history.push({name:'goodCart'})
		},
		loadMore() {
			
		  this.loading = true;
		  setTimeout(() => {
		    
			this.getData();
		    this.loading = false;
		  }, 2500);
		},
		
		getData(){
			if(this.list.length<31){
				
			console.log(this.$route.params.fid,this.$route.params.fad,this.$route.params.fbd);
			this.fid = this.$route.params.fbd;
			var id = this.$route.params.fad;
			axios.get(`/search/?e=${id}&page=${this.page+1}`)
			.then((res)=>{
				console.log(res.data.result.data);
				this.list = this.list.concat(res.data.result.data);
				var lengths = this.list.length;
				for(var i = this.page*20;i < lengths;i ++){
					this.list[i].img = "http://image.loho88.com/" + this.list[i].img;
				}
				console.log(this.list);
				this.page++;
				this.di = "已经到底部了";
			})
			}
		},
		gohome:function(){
			this.flag=!this.flag;
		}
	},
	mounted(){
		//this.getData();
		
	}
}	
</script>

<style scoped lang="scss" src="./sass/goodList.scss">
	
	
	
</style>