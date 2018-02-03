<template>
	<div class="goodCart">
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
			<div class="shop-tip" v-if="nogoodflag">
				<div class="icon-cart">
					<i class="iconfont icon-gouwuche"></i>
				</div>
				<p>您的购物车尚未添加商品</p>
				<p>去<router-link :to="'/'">Loho88眼镜生活</router-link>购买商品！</p>
			</div>
			<div v-if="showflag">
				<ul class="addshop">					
					<li v-for="(item,index) in $store.state.cart">
						<div class="head">
							<label>
								<input type="checkbox" checked /><b>单品</b>
							</label>
							<span>￥{{priceTotal}}</span>
						</div>
						<div class="cartshop">
							<a><img :src="item.pics[0]" /></a>
							<div class="goods-detail">
								<p class="goods-title">{{item.goodsName}}</p>
								<p class="goods-color">颜色：黑色</p>
								<div class="goods-price"><span class="pri">￥{{item.shopPrice}}</span><span>x1</span></div>
							</div>
						</div>
						<div class="goodsfoot">
							<div class="del">
								<a @click="removegoods(index)">删除</a>
								<a>促销优惠</a>
							</div>					
							<div class="goods-num">
								<span class="jian" @click="shopsjian(index)">-</span>
								<input id="num" type="text" v-model.number="item.isBookIng" />
								<span class="jia" @click="shopsAdd(index)">+</span>
							</div>
						</div>
					</li>					
				</ul>
				<div class="del-goods">
					<div class="dian">
						<label class="">
							<input type="checkbox" checked />
						</label>
						<a class="cart-del">删除选中</a>
					</div>
					
					<a class="cart-cle">清空购物车</a>
				</div>
				<div class="footer">
					<div class="total-price">
						合计（不含运费）：<span>￥799</span>
					</div>
					<button class="btn">结算（{{$store.state.cart.length}}）</button>
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
			flag:false,
			showflag:false,
			nogoodflag:true,
			isBookIng:1
						
		}
	},
	computed:{
		priceTotal:function(index){
			var price = 0;
						
			for(var i=0;i<this.$store.state.cart.length;i++){
				console.log(parseInt(this.$store.state.cart[i].shopPrice))
				price+=parseInt(this.$store.state.cart[i].shopPrice)*parseInt(this.$store.state.cart[i].isBookIng);
			}
			return price;
		}
	},
	methods:{
		changeflag:function(){
			this.flag=!this.flag;
		},
		shopsAdd:function(index){
			var buy_nums=this.$store.state.cart[index].isBookIng;
			this.$store.state.cart[index].isBookIng++;
		},
		shopsjian:function(index){
			var buy_nums=this.$store.state.cart[index].isBookIng;
			if(buy_nums<2){
				return false;
			}
			this.$store.state.cart[index].isBookIng--;
		},
		removegoods:function(index){
			this.$store.state.cart.splice(index,1);
		}
	},
	mounted(){
		if(localStorage.getItem("data")) {
			this.nogoodflag = false;
			this.showflag = true;
		}else{
			this.nogoodflag = true;
			this.showflag = false;
		}
	}
}	
</script>

<style scoped lang="scss" src="./sass/goodCart.scss">
	
</style>