<template>
	<div class="goodBuying">
		<header>
			<router-link to="/" class="abuy">
				<i class="iconfont">&#xe610;</i>
			</router-link>
			<div class="buyA">
				<span>团购分类</span>
			</div>
			<div class="buyB" @click="flag = !flag">
				<i class="iconfont">&#xe623;</i>				
			</div>
		<!---隐藏的导航--->	
			<div class="buyNav" :class="{buyNavs:flag}">
				<router-link to="/" class="abuy">
					<p>
						<i class="iconfont">&#xe605;</i>
					</p>
					<p>
						<span>首页</span>
					</p>
				</router-link>
				<router-link to="/" class="abuy">
					<p>
						<i class="iconfont">&#xe641;</i>
					</p>
					<p>
						<span>会员中心</span>
					</p>
				</router-link>
				<router-link to="/goodCart" class="abuy">
					<p>
						<i class="iconfont">&#xe600;</i>
					</p>
					<p>
						<span>购物车</span>
					</p>
				</router-link>
				<router-link to="/" class="abuy">
					<p>
						<i class="iconfont">&#xe6a4;</i>
					</p>
					<p>
						<span>在线咨询</span>
					</p>
				</router-link>
			</div>
		</header>
		
		<div class="buyList">
			<ul>
				<li>					
						<div class="buyListA">
							
							<img src="./img/1.jpg">
						</div>
						<div class="buyListB">						
							价值980元 1.552依视路超薄A3眼镜套餐代金...						
						</div>
						<div class="buyListC">
							<p class="p1">
								<span>优惠价:￥</span>
								<i>598</i>
							</p>
							<p class="p2">
								<span>￥980</span>
							</p>					
						</div>
						<div class="buyListD">
							<router-link to="/goodList">
								<input type="button" value="点击下单购买">
							</router-link>	
						</div>
					
				</li>
				
				<li>
					<div class="buyListA">
						
						<img src="./img/2.jpg">
					</div>
					<div class="buyListB">						
						价值980元 1.552依视路超薄A3眼镜套餐代金...						
					</div>
					<div class="buyListC">
						<p class="p1">
							<span>优惠价:￥</span>
							<i>598</i>
						</p>
						<p class="p2">
							<span>￥980</span>
						</p>					
					</div>
					<div class="buyListD">
						<input type="button" value="点击下单购买">
					</div>
				</li>
				<li>
					<div class="buyListA">
						
						<img src="./img/3.jpg">
					</div>
					<div class="buyListB">						
						价值980元 1.552依视路超薄A3眼镜套餐代金...						
					</div>
					<div class="buyListC">
						<p class="p1">
							<span>优惠价:￥</span>
							<i>598</i>
						</p>
						<p class="p2">
							<span>￥980</span>
						</p>					
					</div>
					<div class="buyListD">
						<input type="button" value="点击下单购买">
					</div>
				</li>
				<li>
					<div class="buyListA">
						
						<img src="./img/4.jpg">
					</div>
					<div class="buyListB">						
						价值980元 1.552依视路超薄A3眼镜套餐代金...						
					</div>
					<div class="buyListC">
						<p class="p1">
							<span>优惠价:￥</span>
							<i>598</i>
						</p>
						<p class="p2">
							<span>￥980</span>
						</p>					
					</div>
					<div class="buyListD">
						<input type="button" value="点击下单购买">
					</div>
				</li>
				<li>
					<div class="buyListA">
						
						<img src="./img/5.jpg">
					</div>
					<div class="buyListB">						
						价值980元 1.552依视路超薄A3眼镜套餐代金...						
					</div>
					<div class="buyListC">
						<p class="p1">
							<span>优惠价:￥</span>
							<i>598</i>
						</p>
						<p class="p2">
							<span>￥980</span>
						</p>					
					</div>
					<div class="buyListD">
						<input type="button" value="点击下单购买">
					</div>
				</li>
				<li>
					<div class="buyListA">
						
						<img src="./img/6.jpg">
					</div>
					<div class="buyListB">						
						价值980元 1.552依视路超薄A3眼镜套餐代金...						
					</div>
					<div class="buyListC">
						<p class="p1">
							<span>优惠价:￥</span>
							<i>598</i>
						</p>
						<p class="p2">
							<span>￥980</span>
						</p>					
					</div>
					<div class="buyListD">
						<input type="button" value="点击下单购买">
					</div>
				</li>
				<li>
					<div class="buyListA">
						
						<img src="./img/8.jpg">
					</div>
					<div class="buyListB">						
						价值980元 1.552依视路超薄A3眼镜套餐代金...						
					</div>
					<div class="buyListC">
						<p class="p1">
							<span>优惠价:￥</span>
							<i>598</i>
						</p>
						<p class="p2">
							<span>￥980</span>
						</p>					
					</div>
					<div class="buyListD">
						<input type="button" value="点击下单购买">
					</div>
				</li>
				<li>
					<div class="buyListA">
						
						<img src="./img/3.jpg">
					</div>
					<div class="buyListB">						
						价值980元 1.552依视路超薄A3眼镜套餐代金...						
					</div>
					<div class="buyListC">
						<p class="p1">
							<span>优惠价:￥</span>
							<i>598</i>
						</p>
						<p class="p2">
							<span>￥980</span>
						</p>					
					</div>
					<div class="buyListD">
						<input type="button" value="点击下单购买">
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';	
export default{
	name:'goodBuying',
	data (){
		return {
			flag : true
		}
	},
	mounted:function(){
		axios.get('/index')
		.then((response) => {
			console.log(response);		
						
		})	
		
	},
	methods:{
		
	}
}





</script> 

<style lang="scss" src="./sass/goodBuying.scss">
	
</style>