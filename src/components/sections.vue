<template>	
<!----轮播--->	
	<section ref="sections">	
		<div class="Lunbo">
			<div class="swiper-container">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="item in lunboImg">
			    	<img :src="item.pic">
			    </div>
			  </div>
			</div>
		</div>	
<!----导航--->		
		<div class="nav">
			<ul>    <!--'list'+'/'+item.cid+'/'+item.tid+'/'+item.tag-->
				<li v-for="item in lookImg"  v-if="loading">
					<router-link :to="{name:'goodList', params:{fid: item.cid,fad:item.tid, fbd:item.tag}}" class="aa">
						<div><img :src="item.pic"></div>
						<span>{{item.tag}}</span>
					</router-link>					
				</li>			
			</ul>
		</div>
<!----图片--->			
		<div class="publish">
			<router-link to="/goodList">
				<img :src=publishImg>
			</router-link>
		</div>

<!----人气推荐--->	
		<div class="presonGoods">							
			<div class="listsA-div">
				<h2>						
					<span>{{listsApreson}}</span>
					<router-link to="/goodList">{{listsAmore}}</router-link>
				</h2>
			</div>
			<router-link to="/goodList" class="presonImg">
				<img :src=presonImg>
			</router-link>			
			<ol>
				<li v-for="item in listsAimg"  v-if="loading">
					<router-link :to="{name:'detail', params:{fid: item.gid}}">
						<p>{{item.tag}}</p>
						<p>{{item.tag_en}}</p>
						<p><img :src="item.pic"></p>
					</router-link>
				</li>
			</ol>							
		</div>
	
		
	<!----新品上市等--->		
		<div class="newGoods" v-for="item in newGoodsImg" v-if="loading">
			<div class="newGoodsdiv">
				<h2>						
					<span>{{item.title.word}}</span>
					<router-link to="/goodList">{{item.more.word}}</router-link>
				</h2>
			</div>
			<router-link to="/goodList" class="newGoodsImg">
				<img :src="item.img.pic">
			</router-link>
			<dl>
				<dt>
					<router-link :to="{name:'detail', params:{fid:item.show[0].gid}}">
						<p>{{item.show[0].tag}}</p>
						<p>{{item.show[0].tag_en}}</p>
						<p><img :src="item.show[0].pic"></p>
					</router-link>					
				</dt>
				<dd>
					<div class="newTop">
						<router-link :to="{name:'detail', params:{fid:item.show[1].gid}}">
						<p>{{item.show[1].tag}}</p>
						<p>{{item.show[1].tag_en}}</p>
						<p><img :src="item.show[2].pic"></p>
					</router-link>			
					</div>
					<div class="newBut">
						<router-link :to="{name:'detail', params:{fid:item.show[2].gid}}">
						<p>{{item.show[2].tag}}</p>
						<p>{{item.show[2].tag_en}}</p>
						<p><img :src="item.show[2].pic"></p>
					</router-link>			
					</div>
				</dd>				
			</dl>
		</div>
	
		
	<!----你可能喜欢--->
		<div class="youLike" @click="flag = !flag">
			<span>你可能喜欢 ∨</span>
		</div>
			
	<!----隐藏部分--->
		<div class="hidGoods" :class="{hidGood:flag}">												
			<ol>
				<li v-for="item in hidGoodsImg">
					<router-link to="/" >
						<p>NEW</p>						
						<p><img :src="item.img"></p>
						<p>{{item.title}}</p>
						<p>￥{{item.price}}</p>
					</router-link>
				</li>				
			</ol>							
		</div>
	
	<!----加载更多--->
		<div class="loadMore" @click="loadMore()">
			<span v-model="mesg">{{mesg}}</span>
		</div>
		
	<!----底部--->	
		<div class="footA">
			<ul>
				<li class="footAleft">
					<p>
						<i class="iconfont">&#xe615;</i>
					    <span>欢迎到体验店试戴</span>
					</p>					
				</li>
				<li class="footAright">
					<p><i class="iconfont">&#xe646;</i></p>
					<p>预约热线：400-887-1920</p>
					<p>(服务时间：9:00 - 23:00)</p>
				</li>
			</ul>
			<div class="logos"></div>
		</div>	
	
	
	<!----回到顶部按钮--->		
		
		<!--<div class="toTop">
			<i class="iconfont">&#xe66b;</i>
		</div>-->
		
		<backtop　:scrollmyself = 'true'></backtop>
	
	</section>	

</template>



<script>
	import Swiper from 'swiper';
	import backtop from './backtop';
	import axios from 'axios';
export default{
	name:'sections',
	data (){
		return {
			loading:true,
			lunboImg:[],
			lookImg:[],
			publishImg:"",
			presonImg:"",
			listsApreson:"",
			listsAmore:"",
			listsAimg:[],
			newGoodsImg:[],
			hidGoodsImg : [],
			//hidGoodsImgs:[],
			flag : true,
			mesg: "点击加载更多...",
			mesgs:"已经到底部了"

		}
	},
	components:{
		backtop
	},
	
	mounted:function(){		
			axios.get('/index')
		.then((response) => {
			console.log(response);
			this.lunboImg = response.data.result.focus;
			this.lookImg = response.data.result.cates;
			this.publishImg = response.data.result.ad[0].pic;
			this.presonImg = response.data.result.popular.img.pic;
			this.listsApreson = response.data.result.popular.title.word;
			this.listsAmore = response.data.result.popular.more.word;
			this.listsAimg = response.data.result.popular.show;
			this.newGoodsImg = response.data.result.classify;
				
			console.log();	
			//console.log(this.publishImg);	
			this.$nextTick(function(){
				var sp = new Swiper(".swiper-container", {
					autoplay: true,
					loop:true
				})
			})
		})

		axios.get('/search/?sort=o6&e=249&page=2')
		.then((response) => {
			console.log(response);		
			this.hidGoodsImg = response.data.result.data;
			
			var len = this.hidGoodsImg.length;
			for(var i=0; i<len; i++){
				this.hidGoodsImg[i].img = "http://image.loho88.com/" + this.hidGoodsImg[i].img;
			}
			
		})	
		
	},
	methods:{
		loadMore:function(){
			this.mesg = this.mesgs;
			this.flag = !this.flag;
		}

		
	}
}	
</script>


<style lang="scss" src="./sass/sections.scss">
	
		
</style>