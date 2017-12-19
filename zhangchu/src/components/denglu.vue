<template>
	<div id="denglu">
		<div id="dl">
			<div class="ch-log">
				<div class="ch-log1">
					<div class="ch-log2">
					    <span class="ch-logspan">
					    	<router-link to="/index">
					    	<img src="http://pub.szzhangchu.com/web/v4.2/images/ico/ico-back-white.png">
					    	</router-link>
					    </span>
					    <span class="ch-logspan1">登录</span>
					    <router-link to="/zhuce">
					    <span class="ch-logspan2">注册</span>
					    </router-link>
				    </div>
				    <form>
					    <div class="ch-form1">
					    	<span><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/loginHeadImage.png"></span>
					    	<input type="text" name="username" placeholder="请输入手机号码" class="ch-input1 ch-input0" v-model = "username">
					    	<input type="password"  placeholder="请输入您的密码" class="ch-input1" v-model = "password">
					    	<div class="ch-forget">
					    		<label>忘记密码？</label>
					    	</div>
					    </div>
					    <div class="ch-form2">
					    	<input type="button" value="确定" @click = "dengLu()">
					    </div>
				    </form>
				</div>

				<div class="ch-endall">
		            <div class="ch-endlogo">
		                <img src="http://pub.szzhangchu.com/web/v4.2/images/logo.png">
		                <div class="ch-endtext">
		                    <h6>掌厨</h6>
		                    <p>用些心做好饭</p>
		                </div>
		                <div class="ch-download">
		                    下载app

		                </div>
		                <span class="ch-endspan"></span>
		            </div>
		        </div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			dengLu() {
				this.$http.get("./static/youhu.json").then((res)=>{

					if(this.username == res.data.username && this.password == res.data.password){
						// console.log(123);
						sessionStorage.favour = true;
						location.href = "/index"
					}
				})
			}
		}
	}
</script>
<style scoped>

/*----------------------ch-log------------------------*/
#dl{
	height: 100vh;
	background-color: #e8c9b5;
}
input{
	outline: none;
}


.ch-logspan{
    display: inline-block;
    position: absolute;
    top:0;
    left:0;
}
.ch-logspan img{
    width:1.4rem;
    height:1.4rem;
}
.ch-logspan2{
    position: absolute;
    top:0.2rem;
    right:0;
    font-size: 0.65rem;
    color:#ff8f5c;
}
.ch-log2{
    position: relative;
    text-align: center;
}
.ch-log{
    width:100%;
    color:#fff;
    padding:1rem;
}
.ch-form1 span{
    display: inline-block;
    width:1.5rem;
    height:1.5rem;
    position: absolute;
    top:-0.1rem;
    left:0;
    padding:0.2rem 0 0 0.3rem;
}
.ch-form1 span img{
    width:1rem;
    height:1.2rem;
}
.ch-form1{
    position: relative;
    margin-top: 2rem;
}
.ch-input1{
    width: 100%;
    border: 0;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #fff;
    padding-left:1.8rem;
    font-family: "Microsoft YaHei", Tahoma, Helvetica, Arial, sans-serif;
    -webkit-appearance: none;
}
.ch-input1::-webkit-input-placeholder{
    color:#fff;
}
.ch-input0{
    margin-bottom: 1rem;
}
.ch-forget{
    text-align: right;
    color: #ff8f5c;
    font-size: 0.7rem;
    padding-top: 0.5rem;
}
.ch-form2{
    margin-top: 2rem;
}
.ch-form2 input{
    width:100%;
    height:2rem;
    background-color: #ff8f5c;
    border:1px solid #ff8f5c;
    color:#fff;
    border-radius: 0.1rem;
    font-size: 100%;
}

/*---------------------ch-endall--------------*/
.ch-log{
   position: relative;
}
.ch-endall{
    position: fixed;
    left: 0;
    bottom: 0;
    width:100%;
    height:2.5rem;
    background-color: rgba(0,0,0,0.4);
}
.ch-endlogo{
    margin:0.25rem 0;
}
.ch-endlogo img{
    width:1.7rem;
    height:1.7rem;
    margin:0.2rem 0.3rem 0 0.5rem;
    display: inline-block;
    position: relative;

}
.ch-endtext{
    display: inline-block;
    margin-bottom: 1rem;
}
.ch-endtext p{
    font-size: 0.45rem;
    height:0.8rem;
    line-height: 0.8rem;
    color:#eee;
}
.ch-endtext h6{
    font-size: 0.7rem;
    color:#fff;
}
.ch-download{
    display: inline-block;
    float: right;
    margin: 0.4rem 2rem 0 0;
    color:#fff;
    font-size: 0.7rem;
    padding:0.2rem;
    background-color: rgb(255, 143, 92);
}
.ch-endspan{
    width:0.55rem;
    height:0.55rem;
    display: inline-block;
    background:url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-delete.png) no-repeat;
    background-size: cover;
    position: absolute;
    right:3%;
    top:45%;
}
</style>