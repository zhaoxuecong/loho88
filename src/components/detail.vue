<template>
	<div class="detail">
		<div class="top">		
			<div class="back-left" @click="$router.back(-1)">
				<a href="javascript:;">
					<i class="iconfont icon-fanhui"></i>
				</a>			
			</div>
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
		<div class="section">
			<div class="Lunbo">
				<div class="swiper-container">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="item in lunboImg">
				    	<img :src="item">
				    </div>
				  </div>
				  <div class="swiper-pagination"></div>
				</div>
			</div>
			<div class="goodsinfo" v-if="detail">
				<div class="detail-title">
					<div class="small-9 column">
						<p>{{detail.goodsName}}</p>
					</div>
					<div class="small-3 column">
						<a>
							<i class="iconfont icon-fenxiang2"></i>
							<p>分享</p>
						</a>
					</div>
				</div>
				<ul class="detail-info">
					<li class="price">￥{{detail.shopPrice}}</li>
					<li>快递 ： 免运费</li>
					<li>{{detail.salesNum}}人已买</li>
				</ul>
				<ul class="detail-promiseTag">
					<li v-for="item1 in promiseTag">
						<i class="iconfont icon-dui"></i>
						<span>{{item1}}</span>
					</li>
				</ul>
				<div class="detail-color">
					<p>颜色选择</p>
					<ul>
						<li v-for="(item2,index) in color" @click="changeflag(index)" :class="{'bright':ind===index}">{{item2.color}}</li>
					</ul>
				</div>
				<div class="recommend" v-if="unioned">
					<div class="goods-img">
						<img :src="goodsimg" />
					</div>
					<div class="add"><span>+</span></div>
					<div class="goods-img">
						<img :src="goodsimg2" />
					</div>
					<div class="mes">
						<div class="mes-title">
							<p>{{unioned.tname}}</p>
						</div>
						<div class="mes-price">
							<span class="discounts">￥{{unioned.price}}</span>
							<span class="prime">￥1098</span>
						</div>
					</div>
					<div class="add"><span class="next">></span></div>
				</div>
			</div>
			<div class="address">
				<div class="shop-name">
					<p>海淀圣熙8号店</p>
				</div>
				<div class="shop-add">
					<p class="distance"><i></i>25.82km<span>免费预约直营店验光</span></p>
					<div class="shop-add-ress">
						<p>地址：北京市海淀区学清路甲8号圣熙8号购物中心一层A015</p>
					</div>
					
				</div>
				<div class="shop-num">
					<a>查看北京17家门店（全国<em>268</em>家）</a>
					<span>></span>
				</div>
			</div>
			<div class="production-detail-tab">
				<ul>
					<li class="cli">
						<a>图文详情</a>
					</li>
					<li>
						<a>商品评价</a>
					</li>
					<li>
						<a>商品参数</a>
					</li>
				</ul>
				<div class="goods-img-list" v-html="arrimgs">
					{{arrimgs}}
				</div>
			</div>
			<backtop　:scrollmyself = 'true'></backtop>
		</div>
		<div class="footer">
			<div class="foot-left">
				<a href="javascript:;">
					<i class="iconfont icon-liaotian"></i>
					<span>客服</span>
				</a>
				<a href="javascript:;">
					<i class="iconfont icon-shoucang"></i>
					<span>收藏</span>
				</a>
			</div>
			<div class="shopcar" @click="addtoCart(detail)">				
				<span>加入购物车</span>							
			</div>
			<div class="nearby">
				<span>预约附近验光点</span>
			</div>
		</div>
	</div>
</template>

<script>
import backtop from './backtop';
import Swiper from 'swiper';
import axios from 'axios';
export default {
	name: "detail",
	
	data() {
		return {
			ind:''||0,
			detail: null,
			color:[],
			lunboImg:[],
			promiseTag:[],
			unioned:null,
			goodsimg:null,
			goodsimg2:null,
			arrimgs:"",
			flag:false
		}
	},
	components:{
		backtop
	},
	methods:{
		changeflag: function(index){
			this.ind = index;
		},
		gotoCart(){
			this.$router.history.push({name:'goodCart'})
		},
		addtoCart(detail){
			// 启动action
			this.$store.dispatch("addToCartA", detail);			
			this.$router.history.push({name:'goodCart'});
		},
		gohome:function(){
			this.flag=!this.flag;
		}
	},
	mounted() {
		//console.log(this);
		console.log(this.$route.params.fid);
		var id = this.$route.params.fid;
		axios.get(`/goods/${id}`)
		.then((res)=>{
			console.log(res);
			this.listimg = res.data.result.txtcontent;
			//console.log(this.listimg);
			var arrimg = this.listimg.split('src="/images/blank.gif" vip-src="/').join('src="http://image.loho88.com/');
			this.arrimgs = arrimg.split('src="/images/blank.gif" data-src="/').join('src="http://image.loho88.com/');
			//console.log(this.arrimgs)
			this.detail = res.data.result.info;
			this.color = res.data.result.models;
			this.promiseTag = this.detail.promiseTag;
			if(res.data.result.unioned[0]){
				this.unioned = res.data.result.unioned[0];
				//console.log(this.unioned)
				var Image1 = "http://image.loho88.com/" + this.unioned.goods[0].goodsThumbMin;
				var Image2 = "http://image.loho88.com/" + this.unioned.goods[1].goodsThumbMin;
				this.goodsimg = Image1;
				this.goodsimg2 = Image2;
			}
			
			//console.log(this.goodsimg)
			this.lunboImg = this.detail.pics;
			var lengths = this.lunboImg.length;
				for(var i = 0;i < lengths;i ++){
					this.lunboImg[i] = "http://image.loho88.com/" + this.lunboImg[i];
				}
			//console.log(this.lunboImg);
			this.$nextTick(function(){
				var sp = new Swiper(".swiper-container", {
					autoplay: true,
					loop:true,
					pagination: {
				      el: '.swiper-pagination',
				    },
				})
				$(".goods-img-list p img").css("width","100%");				
			})
		})
		
	}
}
</script>

<style scoped lang="scss" src="./sass/detail.scss">
	
</style>