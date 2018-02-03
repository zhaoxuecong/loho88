<template>
	<div class="goodMy">
	<!---头部---->		
		<header>
			<div class="left" @click="$router.back(-1)">
				<i class="iconfont">&#xe610;</i>
			</div>
			<div class="middle">
				<span id="loadTitle">登录</span>
			</div>
			<div class="right">
				<i class="iconfont">&#xe600;</i>
				<i class="iconfont" @click="creatDiv()">&#xe785;</i>
				
				<div class="mesgList" :class="{mesgLists:flag}">
					<div class="mesgListA">
						<i class="iconfont">&#xe66e;</i>
						<span>会员中心</span>
					</div>
					<div class="mesgListB">
						<router-link to="/">
							<i class="iconfont">&#xe611;</i>
							<span>首页</span>
						</router-link>	
					</div>
				</div>
			</div>
		</header>
	
		
	<!---登录页面---->		
		<section class="loadSection">
			<div class="my-img">
				<img src="./img/myimg.png">
			</div>
			
			<ul class="my-ul">
				<li class="loads" @click="loadsNew()">
					<div class="divp">
						<span>账号密码登录</span>
					</div>
				</li>
				<li class="regists" @click="registsNew()">
					<span>用户账号注册</span>
				</li>
			</ul>
			
			<ol class="my-ol">
				<li>
					<div class="my-load">
						<img src="./img/name.jpg">
						<input type="text" placeholder="请输入账号" class="loadName">					
					</div>
				</li>
				<li>
					<div class="my-load">
						<img src="./img/psw.jpg">
						<input type="text" placeholder="请输入密码" class="loadPsw">					
					</div>
				</li>
				<li>
					<div class="my-load" id="my-load-yzm">
						<img src="./img/yzm.jpg">
						<input type="text" placeholder="请输入验证码" class="loadPsw">	
						<img src="./img/imgyzm.jpg" id="imgyzm">
					</div>
				</li>
			</ol>
			<div class="xxdiv">
				<span>
					忘记密码？
				</span>
			</div>
		
			
		<!---注册页面---->		
			<div class="registSection">
			
				<div id="regName" class="reg">
					<div class="regLeft">
						<span>账号</span>
					</div>
					<div class="regRight">
						<input type="text" placeholder="请输入账号" v-model="username">
					</div>									
				</div>
		
				<div id="regPsw" class="reg">
					<div class="regLeft">
						<span>密码</span>
					</div>
					<div class="regRight">
						<input type="password" placeholder="请输入密码" v-model="psw">	
					</div>				
				</div>
			
				<div id="regPsws" class="reg">
					<div class="regLeft">
						<span>确认密码</span>
					</div>
					<div class="regRight">
						<input type="text" placeholder="请再次确认密码" class="registPsws">	
					</div>
				</div>
			
		</div>
			
		</section>
	
	
	
		
	<!---底部---->	
		<footer>
			<ul>
				<li class="loadBtn" @click="loading()">
					<span>
						登录
					</span>
				</li>
				<li class="registBtn" @click="registing()">
					<span>
						注册
					</span>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
import axios from 'axios';		
export default{
	name:'goodMy',
	data (){
		return {
			flag:true,
			username:"",
			psw:""
		}
	},
	mounted:function(){
		axios.get('/index')
		.then((response) => {
			console.log(response);		
						
		})
	},
	methods:{
		loading:function(){
			$(".registBtn").css("display","none");
			$(".loadBtn").css("width","100%");											
		},
		registing:function(){
			console.log(this.username)
			axios.post('/api/goodMy',{
				username : this.username,
				psw : this.psw
			})
			.then(function(response){
				console.log(response);
			})
			.catch(function(error){
				console.log(error);
			})
						
		},
		
		creatDiv:function(){
				this.flag = !this.flag
		},
		registsNew:function(){
			$(".my-ol").css("display","none");
			$(".xxdiv").css("display","none");			
			$(".loads").css("border","none");
			$(".registSection").css("display","block");
			$(".divp").children("span").css("color","#000");
			$(".regists").css("border-bottom","2px solid #f00");											
			$(".regists").children("span").css("color","red");
			$(".loadBtn").css("display","none");
			$(".registBtn").css("display","block");
			$("#loadTitle").html("注册");
		},
		loadsNew:function(){
			$(".my-ol").css("display","block");
			$(".xxdiv").css("display","block");			
			$(".registSection").css("display","none");
			$(".divp").children("span").css("color","red");
			$(".loads").css("border-bottom","2px solid #f00");
			$(".regists").css("border","none");					
			$(".regists").children("span").css("color","#000");
			$(".loadBtn").css("display","block");
			$(".registBtn").css("display","none");
			$("#loadTitle").html("登录");
		}
	}
}	
</script>

<style lang="scss" src="./sass/goodMy.scss" scoped>
	
</style>