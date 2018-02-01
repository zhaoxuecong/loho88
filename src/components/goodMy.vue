<template>
	<div class="goodMy">
	<!---头部---->		
		<header>
			<div class="left" @click="loadLeft()">
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
				<li>
					<div class="divp">
						<span>账号密码登录</span>
					</div>
				</li>
				<li>
					<span>手机号码快速登录</span>
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
		</section>
	
	
	<!---注册页面---->	
		<div class="registSection">
			
			<div id="regName" class="reg">
				<div class="regLeft">
					<span>账号</span>
				</div>
				<div class="regRight">
					<input type="text" placeholder="请输入账号" class="registName">
				</div>									
			</div>
	
			<div id="regPsw" class="reg">
				<div class="regLeft">
					<span>密码</span>
				</div>
				<div class="regRight">
					<input type="text" placeholder="请输入密码" class="registPsw">	
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
			$(".loadBtn").css("display","none");
			$(".registBtn").css({
					"width":"100%",
					"background":"#ccc",
					"color":"#808080"
				});
			$("#loadTitle").html("账号快速注册");
			$(".loadSection").css("display","none");
			$(".registSection").css("display","block");
		},
		loadLeft:function(){
			if($(".loadSection").css("display")=="block"){
				$(".loadSection").css("display","none");
				$(".registSection").css("display","block");
			}
			if($(".loadSection").css("display")=="none"){
				$(".loadSection").css("display","block");
				$(".registSection").css("display","none");
				$(".registBtn").css({
					"width":"50%",
					"background":"#fff",
					"color":"#000"
				});
				$(".loadBtn").css({
					"display":"block",
					"width":"50%",
					"background":"#ccc",
					"color":"#808080"
				});
			}
		},
		creatDiv:function(){
				this.flag = !this.flag
		}
	}
}	
</script>

<style lang="scss" src="./sass/goodMy.scss" scoped>
	
</style>