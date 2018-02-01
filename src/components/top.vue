<template>
	<header>
		<div class="left">
			<a href="">北京</a>
			<i class="iconfont">&#xe615;</i>
		</div>
		<div class="logo"></div>
		<div class="right">
			<ul>
				<li  @click="gotoCart()">
					<i class="iconfont">&#xe600;</i>
				</li>
				<li>
					<i class="iconfont">&#xe66e;</i>
				</li>
			</ul>			
		</div>		
	</header>		
	
</template>

<script>

export default{
	name:'top',
	data (){
		return {
			
		}
	},
	methods:{
		gotoCart(){
			this.$router.history.push({name:'goodCart'})
		}
	}
	
}	
</script>

<style lang="scss" src="./sass/top.scss" scoped>
	
</style>