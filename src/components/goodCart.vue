<template>
	<div class="goodCart">
		<div class="section">
			<div class="cart-top">
				<div class="back-left" @click="$router.back(-1)">
					<a href="javascript:;">
						<i class="iconfont icon-fanhui"></i>
					</a>					
				</div>
				<div class="title"><i class="iconfont icon-gouwuche"></i>购物车</div>
				<div class="menu-right" @click="changeflag()">
					<i class="iconfont icon-ai238"></i>
				</div>
				<ul class="nav" v-show="flag">
					<li>
						<router-link :to="'/'">
							<i class="iconfont icon-shouye"></i>
							<span>首页</span>
						</router-link>						
					</li>
					<li>
						<i class="iconfont icon-huiyuan21"></i>
						<span>会员中心</span>
					</li>
					<li>
						<i class="iconfont icon-icon-test"></i>
						<span>我的订单</span>
					</li>
					<li>
						<i class="iconfont icon-zaixianzixun"></i>
						<span>在线咨询</span>
					</li>
				</ul>
			</div>
		
			<div class="login-info">
				<p class="info-left">登录后可同步电脑与手机购物车中的商品</p>
				<div class="info-right"><button>登录</button></div>
			</div>
			<div class="cart-body">
				<div class="shop-tip">
					<div class="icon-cart">
						<i class="iconfont icon-gouwuche"></i>
					</div>
					<p>您的购物车尚未添加商品</p>
					<p>去<router-link :to="'/'">Loho88眼镜生活</router-link>购买商品！</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
export default{
	name:'goodCart',
	data (){
		return {
			flag:false
		}
	},
	methods:{
		changeflag:function(){
			this.flag=!this.flag;
		}
	}
}	
</script>

<style scoped lang="scss" src="./sass/goodCart.scss">
	
</style>