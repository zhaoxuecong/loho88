<template>
  <div id="app">
    	

    <router-view /> 
  </div>
</template>

<script>
	
	
export default {
  name: 'App',
  components: {
		
  }
}
</script>

<style>
	@import '../src/assets/css/swiper.min.css'; 
@import './assets/iconfont/iconfont.css';
	*{margin:0;padding:0;}
	a{text-decoration: none;}
	li{list-style:none;}
	html{font-size:31.25vw;}
	html,body{
		height: 100%;
	}
body{font-size:16px;}
	#app{height:100%;}
	.swiper-slide>img{width:100%;display:block;}


</style>
