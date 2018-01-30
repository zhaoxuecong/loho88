<template>
	<div class="goodTesting">
		<header>
			<div class="left">
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
			
			<div class="shopList">
				<ul>
					<li>
						<ol>
							<li>
								<span>海淀圣熙8号店</span>
							</li>
							<li>
								<span>></span>
							</li>
						</ol>
						
						<div class="shopA">
							<div class="divo">
								<i class="iconfont">&#xe615;</i>
								<span>25.82km</span>
							</div>
							
							<div class="shopListImg">
								<img src="">
							</div>
							
							<div class="weizhi">
								<span>
									地址:北京市海淀区学清路甲8号圣熙8号购物中心一层A015
								</span>
							</div>
							
							<div class="yuyue">
								<div class="yuyueLeft">
									<input type="button" value="免费预约直营店验光">
								</div>
								<div class="yuyueRight">
									<i class="iconfont">&#xe615;</i>
								</div>									
							</div>
						</div>	
					</li>
				</ul>
			</div>
			
		</section>
	</div>
</template>

<script>
import axios from 'axios';	
export default{
	name:'goodTesting',
	data (){
		return {
			shopAimg:[]
		}
	},
	mounted:function(){		
			axios.get('/store/302')
		.then((response) => {
			console.log(response);		
			this.shopAimg = response.data.result.stores;
			console.log(this.shopAimg[0].store_image);	
		})
		
	},
}	
</script>

<style lang="scss" src="./sass/goodTesting.scss">
	
</style>