<template>	

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
		
		<div class="nav">
			<ul>
				<li v-for="item in lookImg">
					<router-link to="/goodList" class="aa">
						<div><img :src="item.pic"></div>
						<span>{{item.tag}}</span>
					</router-link>					
				</li>			
			</ul>
		</div>
		
		<div class="publish">
			<router-link to="/">
				<img :src=publishImg>
			</router-link>
		</div>

		
	<!----人气推荐--->	
		<div class="presonGoods">							
			<div class="listsA-div">
				<h2>						
					<span>{{listsApreson}}</span>
					<router-link to="/">{{listsApreson}}</router-link>
				</h2>
			</div>
			<router-link to="/" class="presonImg">
				<img :src=presonImg>
			</router-link>			
			<ol>
				<li v-for="item in listsAimg">
					<router-link to="/">
						<p>{{item.tag}}</p>
						<p>{{item.tag_en}}</p>
						<p><img :src="item.pic"></p>
					</router-link>
				</li>
			</ol>							
		</div>
	<!----新品上市--->		
		<div class="newGoods">
			<div class="newGoodsdiv">
				<h2>						
					<span>{{newGoodsImg[0].title.word}}</span>
					<router-link to="/">{{newGoodsImg[0].more.word}}</router-link>
				</h2>
			</div>
			<router-link to="/" class="newGoodsImg">
				<img :src="newGoodsImg[0].img.pic">
			</router-link>
			<dl>
				<dt>
					<router-link to="/">
						<p>{{newGoodsImg[0].show[0].tag}}</p>
						<p>{{newGoodsImg[0].show[0].tag_en}}</p>
						<p><img :src="newGoodsImg[0].show[0].pic"></p>
					</router-link>					
				</dt>
				<dd>
					<div class="newTop">
						<router-link to="/">
						<p>{{newGoodsImg[0].show[1].tag}}</p>
						<p>{{newGoodsImg[0].show[1].tag_en}}</p>
						<p><img :src="newGoodsImg[0].show[2].pic"></p>
					</router-link>			
					</div>
					<div class="newBut">
						<router-link to="/">
						<p>{{newGoodsImg[0].show[2].tag}}</p>
						<p>{{newGoodsImg[0].show[2].tag_en}}</p>
						<p><img :src="newGoodsImg[0].show[2].pic"></p>
					</router-link>			
					</div>
				</dd>				
			</dl>
		</div>
	<!----太阳镜--->
		<div class="newGoods">
			<div class="newGoodsdiv">
				<h2>						
					<span>{{newGoodsImg[1].title.word}}</span>
					<router-link to="/">{{newGoodsImg[1].more.word}}</router-link>
				</h2>
			</div>
			<router-link to="/" class="newGoodsImg">
				<img :src="newGoodsImg[1].img.pic">
			</router-link>
			<dl>
				<dt>
					<router-link to="/">
						<p>{{newGoodsImg[1].show[0].tag}}</p>
						<p>{{newGoodsImg[1].show[0].tag_en}}</p>
						<p><img :src="newGoodsImg[1].show[0].pic"></p>
					</router-link>					
				</dt>
				<dd>
					<div class="newTop">
						<router-link to="/">
						<p>{{newGoodsImg[1].show[1].tag}}</p>
						<p>{{newGoodsImg[1].show[1].tag_en}}</p>
						<p><img :src="newGoodsImg[1].show[1].pic"></p>
					</router-link>			
					</div>
					<div class="newBut">
						<router-link to="/">
						<p>{{newGoodsImg[1].show[2].tag}}</p>
						<p>{{newGoodsImg[1].show[2].tag_en}}</p>
						<p><img :src="newGoodsImg[1].show[2].pic"></p>
					</router-link>			
					</div>
				</dd>				
			</dl>
		</div>
	<!----炭纤维眼镜--->
		<div class="newGoods">
			<div class="newGoodsdiv">
				<h2>						
					<span>{{newGoodsImg[2].title.word}}</span>
					<router-link to="/">{{newGoodsImg[2].more.word}}</router-link>
				</h2>
			</div>
			<router-link to="/" class="newGoodsImg">
				<img :src="newGoodsImg[1].img.pic">
			</router-link>
			<dl>
				<dt>
					<router-link to="/">
						<p>{{newGoodsImg[2].show[0].tag}}</p>
						<p>{{newGoodsImg[2].show[0].tag_en}}</p>
						<p><img :src="newGoodsImg[2].show[0].pic"></p>
					</router-link>					
				</dt>
				<dd>
					<div class="newTop">
						<router-link to="/">
						<p>{{newGoodsImg[2].show[1].tag}}</p>
						<p>{{newGoodsImg[2].show[1].tag_en}}</p>
						<p><img :src="newGoodsImg[2].show[1].pic"></p>
					</router-link>			
					</div>
					<div class="newBut">
						<router-link to="/">
						<p>{{newGoodsImg[2].show[2].tag}}</p>
						<p>{{newGoodsImg[2].show[2].tag_en}}</p>
						<p><img :src="newGoodsImg[2].show[2].pic"></p>
					</router-link>			
					</div>
				</dd>				
			</dl>
		</div>
	<!----板材眼镜--->
		<div class="newGoods">
			<div class="newGoodsdiv">
				<h2>						
					<span>{{newGoodsImg[3].title.word}}</span>
					<router-link to="/">{{newGoodsImg[3].more.word}}</router-link>
				</h2>
			</div>
			<router-link to="/" class="newGoodsImg">
				<img :src="newGoodsImg[3].img.pic">
			</router-link>
			<dl>
				<dt>
					<router-link to="/">
						<p>{{newGoodsImg[3].show[0].tag}}</p>
						<p>{{newGoodsImg[3].show[0].tag_en}}</p>
						<p><img :src="newGoodsImg[3].show[0].pic"></p>
					</router-link>					
				</dt>
				<dd>
					<div class="newTop">
						<router-link to="/">
						<p>{{newGoodsImg[3].show[1].tag}}</p>
						<p>{{newGoodsImg[3].show[1].tag_en}}</p>
						<p><img :src="newGoodsImg[3].show[1].pic"></p>
					</router-link>			
					</div>
					<div class="newBut">
						<router-link to="/">
						<p>{{newGoodsImg[3].show[2].tag}}</p>
						<p>{{newGoodsImg[3].show[2].tag_en}}</p>
						<p><img :src="newGoodsImg[3].show[2].pic"></p>
					</router-link>			
					</div>
				</dd>				
			</dl>
		</div>
	<!----钛线眼镜--->
		<div class="newGoods">
			<div class="newGoodsdiv">
				<h2>						
					<span>{{newGoodsImg[4].title.word}}</span>
					<router-link to="/">{{newGoodsImg[4].more.word}}</router-link>
				</h2>
			</div>
			<router-link to="/" class="newGoodsImg">
				<img :src="newGoodsImg[1].img.pic">
			</router-link>
			<dl>
				<dt>
					<router-link to="/">
						<p>{{newGoodsImg[4].show[0].tag}}</p>
						<p>{{newGoodsImg[4].show[0].tag_en}}</p>
						<p><img :src="newGoodsImg[4].show[0].pic"></p>
					</router-link>					
				</dt>
				<dd>
					<div class="newTop">
						<router-link to="/">
						<p>{{newGoodsImg[4].show[1].tag}}</p>
						<p>{{newGoodsImg[4].show[1].tag_en}}</p>
						<p><img :src="newGoodsImg[4].show[1].pic"></p>
					</router-link>			
					</div>
					<div class="newBut">
						<router-link to="/">
						<p>{{newGoodsImg[4].show[2].tag}}</p>
						<p>{{newGoodsImg[4].show[2].tag_en}}</p>
						<p><img :src="newGoodsImg[4].show[2].pic"></p>
					</router-link>			
					</div>
				</dd>				
			</dl>
		</div>
		<!----隐形美瞳--->
		<div class="newGoods">
			<div class="newGoodsdiv">
				<h2>						
					<span>{{newGoodsImg[5].title.word}}</span>
					<router-link to="/">{{newGoodsImg[5].more.word}}</router-link>
				</h2>
			</div>
			<router-link to="/" class="newGoodsImg">
				<img :src="newGoodsImg[5].img.pic">
			</router-link>
			<dl>
				<dt>
					<router-link to="/" id="aTop">
						<p>{{newGoodsImg[5].show[0].tag}}</p>
						<p>{{newGoodsImg[5].show[0].tag_en}}</p>
						<p><img :src="newGoodsImg[5].show[0].pic"></p>
					</router-link>				
				</dt>
				<dd>
					<div class="newTop">
						<router-link to="/">
						<p>{{newGoodsImg[5].show[1].tag}}</p>
						<p>{{newGoodsImg[5].show[1].tag_en}}</p>
						<p><img :src="newGoodsImg[5].show[1].pic"></p>
					</router-link>			
					</div>
					<div class="newBut">
						<router-link to="/">
						<p>{{newGoodsImg[5].show[2].tag}}</p>
						<p>{{newGoodsImg[5].show[2].tag_en}}</p>
						<p><img :src="newGoodsImg[5].show[2].pic"></p>
					</router-link>			
					</div>
				</dd>				
			</dl>
		</div>
		<!----功能眼镜--->
		<div class="newGoods">
			<div class="newGoodsdiv">
				<h2>						
					<span>{{newGoodsImg[6].title.word}}</span>
					<router-link to="/">{{newGoodsImg[6].more.word}}</router-link>
				</h2>
			</div>
			<router-link to="/" class="newGoodsImg">
				<img :src="newGoodsImg[6].img.pic">
			</router-link>
			<dl>
				<dt>
					<router-link to="/">
						<p>{{newGoodsImg[6].show[0].tag}}</p>
						<p>{{newGoodsImg[6].show[0].tag_en}}</p>
						<p><img :src="newGoodsImg[6].show[0].pic"></p>
					</router-link>					
				</dt>
				<dd>
					<div class="newTop">
						<router-link to="/">
						<p>{{newGoodsImg[6].show[1].tag}}</p>
						<p>{{newGoodsImg[6].show[1].tag_en}}</p>
						<p><img :src="newGoodsImg[6].show[1].pic"></p>
					</router-link>			
					</div>
					<div class="newBut">
						<router-link to="/">
						<p>{{newGoodsImg[6].show[2].tag}}</p>
						<p>{{newGoodsImg[6].show[2].tag_en}}</p>
						<p><img :src="newGoodsImg[6].show[2].pic"></p>
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
				<li>
					<router-link to="/">
						<p>NEW</p>						
						<p><img :src="newGoodsImg[4].show[2].pic"></p>
						<p>{{hidGoodsImg[0].title}}</p>
						<p>￥{{hidGoodsImg[0].price}}</p>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<p>NEW</p>						
						<p><img :src="newGoodsImg[3].show[1].pic"></p>
						<p>{{hidGoodsImg[1].title}}</p>
						<p>￥{{hidGoodsImg[1].price}}</p>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<p>NEW</p>						
						<p><img :src="newGoodsImg[3].show[0].pic"></p>
						<p>{{hidGoodsImg[2].title}}</p>
						<p>￥{{hidGoodsImg[2].price}}</p>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<p>NEW</p>						
						<p><img :src="newGoodsImg[1].show[2].pic"></p>
						<p>{{hidGoodsImg[3].title}}</p>
						<p>￥{{hidGoodsImg[3].price}}</p>
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
		
		<div class="toTop">
			<i class="iconfont">&#xe66b;</i>
		</div>
		
	</section>	

</template>



<script>
	import Swiper from 'swiper';
	
	import axios from 'axios';
export default{
	name:'sections',
	data (){
		return {
			lunboImg:[],
			lookImg:[],
			publishImg:"",
			presonImg:"",
			listsApreson:"",
			listsAmore:"",
			listsAimg:[],
			newGoodsImg:[],
			hidGoodsImg : [],
			hidGoodsImgs:[],
			flag : true,
			mesg: "点击加载更多...",
			mesgs:"已经到底部了"

		}
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
	
			
			console.log(this.newGoodsImg[0]);	
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
			
			var hidGoodsImgs = [];
			this.hidGoodsImg.forEach(function(val,index){
				var url = "http://img.loho88.com/" + val.img;
				hidGoodsImgs.push(url);				
			})
			console.log(hidGoodsImgs);
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