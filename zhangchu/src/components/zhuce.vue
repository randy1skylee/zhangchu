<template>
	<div id="zhuce">
		<div>
        <div class="ch-zhuce">
        	<div class="ch-zhuce1">
        		<router-link to="/denglu">
        		<span>
        			<img src="http://pub.szzhangchu.com/web/v4.2/images/ico/ico-back-white.png">
        		</span>
        		</router-link>
        		<div>注册</div>
        	</div>

        	<form class="ch-zhuform">
        		<div class="ch-zhuform1">
        		    <span>
        		    	<img src="http://pub.szzhangchu.com/web/v4.2/images/ico/loginHeadImage.png">
        		    </span>
        		    <input type="text" name="username" placeholder="请输入手机号" class="ch-zhuinput" v-model = "telphone">
        		    <div class="ch-zhudiv1">
        		    	<input type="text" name="" class="ch-zhuinput1">
        		    	<label class="ch-labelone">
        		    		<img src="http://h5.izhangchu.com/index/verify.html?sessid={24702871-b539-e5ba-bf7d-c14cc74f2b65}">
        		    	</label>
        		    	<label class="ch-labeltwo">换一张</label>
        		    </div>
        		    <div class="ch-zhudiv2">
        		    	<input type="password" name="" placeholder="请输入密码" class="ch-zhuinput2" v-model = "password">
        		    	<!-- <div class="ch-zhudiv3">
        		    		<i>获取验证码</i>
        		    	</div> -->
        		    </div>
        		</div>
        		<div class="ch-zhuend">
        			<router-link to = "/index">
        			<input type="button" name="" value="确定" @click="zhuce()">
        			</router-link>
        		</div>
        	</form>

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
		data() {
			return {
				telphone:'',
				password:''
			}
		},
		methods:{
			zhuce(){
				/*var exdate = new Date();
           		exdate.setDate(exdate.getDate() + 7);
           		document.cookie = 'tel' + '=' + this.telphone + this.password + ((7 == null) ? "": ";expires=" + exdate.toGMTString());*/
           		sessionStorage.favour = true
			}
		}
	}
</script>
<style scoped>
	/*----------------------ch-zhuce----------------------*/
input{
	outline: none;
}

#zhuce{
	height: 100vh;
	background-color: #e8c9b5;
}
.ch-zhuce{
    padding:1rem;
    position: relative;
}
.ch-zhuce1{
    position: relative;
    text-align: center;
    color:#fff;
}
.ch-zhuce1 span{
    display: inline-block;
    position:absolute;
    top:0;
    left:0;
}
.ch-zhuce1 span img{
    width:1.4rem;
    height:1.4rem;
}
.ch-zhuform1{
    position: relative;
    margin-top: 2rem;
}
.ch-zhuform1 span{
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: -0.1rem;
    left: 0;
    padding-top: 0.2rem;
    padding-left: 0.3rem;
}
.ch-zhuform1 span img{
    width:1rem;
    height:1.2rem;
}
.ch-zhuinput{
    width: 100%;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #fff;
    padding-left:1.8rem;
    margin-bottom: 0.8rem;
}
input::-webkit-input-placeholder{
    color: #fff;
}
.ch-zhudiv1{
   font-size: 0.6rem;
   margin-top: 1rem;
}
.ch-zhuinput1{
    width:40%;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #fff;
    margin-bottom: 0.8rem;
}
.ch-labelone img{
  width:2.75rem;
  height:1.2rem;
  vertical-align: top;
}
.ch-labeltwo{
    font-size: 0.6rem;
    color:#fff;
}
.ch-zhuinput2{
    width: 100%;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #fff;
    margin-top: 1rem;
}
.ch-zhudiv2{
    position: relative;
}
.ch-zhudiv3{
    font-size: 0.65rem;
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    border: 1px solid #ff8f5c;
    border-radius: 0.2rem;
    padding: 0.1rem 0.5rem;
    color: #fff;
    background: #ff8f5c;
}
.ch-zhuend{
  margin-top: 2rem;
}
.ch-zhuend input{
    width: 100%;
    height: 2rem;
    color: #fff;
    background: #ff8f5c;
    border: 1px solid #ff8f5c;
    -webkit-border-radius: 0.1rem;
    border-radius: 0.1rem;
    font-size: 100%;
    -webkit-appearance: none;
}
/*--------------------ch-endall----------------*/
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