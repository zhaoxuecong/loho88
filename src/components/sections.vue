<template>	
	<section>	
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
		
		<ul class="lists">
			<li class="listsA">
				<div class="listsA-div">
					<h2>						
						<span>{{listsApreson}}</span>
						<router-link to="/">{{listsAmore}}</router-link>
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
			</li>
		</ul>
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
			listsAimg:[]
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
		console.log(this.listsAimg);	
		//console.log(this.publishImg);	
		this.$nextTick(function(){
			var sp = new Swiper(".swiper-container", {
				autoplay: true,
				loop:true
			})
		})
	})

		
		
	}
}	
</script>


<style lang="scss" src="./sass/sections.scss">
	
		
</style>