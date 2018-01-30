<template>
	<div class="foot">
		
				<router-link to="/" class="footA">
					<p>
						<img src="./img/home.jpg">					
					</p>
					<span>首页</span>
				</router-link>	
			

				<router-link to="/goodBuying" class="footA">

					<p>
						<img src="./img/groupBuy.png">					
					</p>
					<span>团购</span>
				</router-link>
			
				<router-link to="/" class="footA">
					<p>
						<img src="./img/serve.jpg">					
					</p>
					<span>客服</span>
				</router-link>
			

				<router-link to="/goodTesting" class="footA">

					<p>
						<img src="./img/location.jpg">					
					</p>
					<span>附近体验店</span>
				</router-link>
			
				<router-link to="/" class="footA">
					<p>
						<img src="./img/my.jpg">					
					</p>
					<span>我的</span>
				</router-link>
		
	</div>	
</template>

<script>
	import axios from 'axios';
export default{
	name:'foot',
	data (){
		return {
			
		}
	}
	
}	
</script>

<style lang="scss" src="./sass/foot.scss">
	
</style>