<template>
	<div class="goodTesting">
		<header>
			<div class="left" @click="$router.back(-1)">
				<i class="iconfont">&#xe610;</i>
			</div>
			<div class="middle">
				<span>查找体验店</span>
			</div>
			<div class="right">
				<i class="iconfont">&#xe600;</i>
				<i class="iconfont">&#xe785;</i>
			</div>
		</header>
		<!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">-->
		<section>
			<nav>
				<div class="list">
					<div class="bor">
						<span>列表</span>
					</div>					
				</div>
				<div class="maps">
					<span>地图</span>
				</div>
			</nav>
			
			<div class="odiv">	
				<div class="odivLeft">
					<p>
						北京共17家体验店(全国
						<span>268</span>
						家)
					</p>
				</div>
				<div class="odivRight">
					<span>
						北京 >
					</span>
				</div>
			</div>
			
			<div class="shopList" v-for="(item,index) in shopAimg" v-if="loading">
				<ul>
					<li>
						<ol class="shopListOl" @click="hideShopA(index)">
							<li>
								<span>{{item.catName}}</span>
							</li>
							<li class="lis">
								<div class="updownImg" id="updown"></div>
							</li>
						</ol>
						
						<div class="shopA">
							<div class="divo">
								<i class="iconfont">&#xe615;</i>
								<span>25.82km</span>
							</div>
							
							<div class="shopListImg">
								<img :src="item.store_image">
							</div>
							
							<div class="weizhi">
								<span>{{item.chineseAddress}}</span>																	
							</div>
							
							<div class="yuyue">
								<div class="yuyueLeft">
									<input type="button" value="免费预约直营店验光">
								</div>
								<div class="yuyueRight">
									<i class="iconfont">&#xe66f;</i>
								</div>									
							</div>
						</div>	
					</li>
				</ul>
			</div>			
		</section>
		 <!--</mt-loadmore>-->
	</div>
</template>

<script>
	//import { Toast } from 'mint-ui';
import axios from 'axios';	
export default{
	name:'goodTesting',
	data (){
		return {
			loading:true,
			flag:true,
			shopAimg:[]
		}
	},
	mounted:function(){		
			axios.get('/store/302')
		.then((response) => {
			//console.log(response);		
			this.shopAimg = response.data.result.stores;
			var len = this.shopAimg.length;
			for(var i=0;i<len; i++){
				this.shopAimg[i].store_image = "http://image.loho88.com/" + this.shopAimg[i].store_image;
				
			}
			
		})
		
	},
	methods:{
		hideShopA : function(index){			
			if($(".shopA").eq(index).css("display")=="block"){
				$(".shopA").eq(index).css("display","none");
				$(".shopListOl>.lis>div").eq(index).removeClass().addClass("updownImgs");
			}else{
				$(".shopA").eq(index).css("display","block");
				$(".shopListOl>.lis>div").eq(index).removeClass().addClass("updownImg");
			}			
		},
		/*loadTop() {
	      console.log("loadTop");
	      setTimeout(() => {
	        Toast('数据重新加载完成');
	        this.$refs.loadmore.onTopLoaded();
	      }, 3000)
	    },*/
	}
}	
</script>

<style lang="scss" src="./sass/goodTesting.scss" scoped>
	
</style>