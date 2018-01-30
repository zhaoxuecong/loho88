<template>
	<div id="box">
		<top></top>
		<sections></sections>
		<foot></foot>	
	</div>	
</template>




<script>
		
import top from './top';
import sections from './sections';	
import foot from './foot';	

export default{
	name:'shouye',
	data (){
		return {
			
		}
	},
	components: {
		top,
		sections,
		foot
  }
	
}	
</script>

<style>
	#box{height:100%;display:flex;flex-direction: column;}
</style>


