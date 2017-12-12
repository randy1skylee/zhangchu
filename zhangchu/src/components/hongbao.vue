<template>
	<div id="hongbao">
		<div class="ch-mfood hongbao">
	    	<div class="ch-mfood0 hongbao0">
	    		<div class="ch-mfood1 hongbao1">
	    			<router-link to="/myself">
	    				<i></i>
	    			</router-link>
	    		</div>
	    		<div class="ch-mfood2 hongbao2">
	    			<ul>
	    				<li class="ch-lizero"><a href="#">我的红包</a></li>
	    			</ul>
	    		</div>
	    		<div class="ch-mfood4 hongbao4">
	                <router-link to="/hongbaoguize">
	                    <i></i>
	                </router-link>      
	            </div>
	    	</div>
	    </div>
	    <div class="ch-redbagbig">
	        <div class="ch-redbag">
	    	    <p class="ch-redbagp1">0个</p>
	    	    <p class="ch-redbagp2">可用红包</p>
	    	    <a href="#" class="ch-lasta">
	    		    <span>红包兑换</span>
	    	    </a>
	        </div>
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
</template>

<script>
	export default {
		
	}
</script>
<style scoped>
#hongbao{
	min-height:100vh;
	background-color:#fcebcd;
}
.ch-mfood{
	background-color:#fff;
    height: 2.2rem;
    line-height: 2.2rem;
    position: relative;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10000;
    border-bottom: 1px solid #f2f2f2;
}
.ch-mfood0{
	width:100%;
	height:2.2rem;
	position: relative;
}
.ch-mfood1{
	width:1.4rem;
	float: left;
}
.ch-mfood1 a{
   display: inline-block;
   width:1.4rem;
   height:2.2rem;
   text-align: center;
   line-height: 2.2rem;
}
.ch-mfood1 a i{
	display: inline-block;
	width:1.4rem;
	height:1.2rem;
	background:url(../assets/img/mfood/0.png) no-repeat;
	background-size: cover;
	margin:0.45rem 0.1rem 0 0;
}
.ch-mfood2{
	display:block;
	height:2.2rem;
	width:3.7rem;
	margin:0 auto;
}
.ch-mfood2 ul li{
	float: left;
	width:3.7rem;
	height:2.15rem;
	margin:0 0.3rem;
	line-height: 2.15rem;
	text-align: center;
}
.ch-mfood2 ul li a{
	color:#333;
	font-size: 0.8rem;
}
.ch-litwo{
	border-bottom:0.1rem solid #ff8f5c;
}
.ch-lione{
	border-bottom:0.1rem solid #ff8f5c;
}
.ch-lithree{
	border-bottom:0.1rem solid #ff8f5c;
}
.ch-mfood4 a{
	display: inline-block;

}
.ch-mfood4 a i{
	display: inline-block;
	width:2rem;
	height:2.2rem;
	background:url(../assets/img/myredbag/0.png) no-repeat;
	background-size: cover;
}
.ch-mfood4{
	position: absolute;
	top:0;
	right:0;
}
.ch-redbag{
	/*margin-top: 2.2rem;*/
	width:100%;
	height:8.35rem;
	background: url(../assets/img/myredbag/0.jpg) no-repeat;
	background-size: cover;
	background-position: 50% 50%;
	text-align: center;
}
.ch-redbagp1{
   font-size: 1.35rem;
   color:#ffe31e;
   line-height: 2.5rem;

}
.ch-redbagp2{
	color:#b51f11;
	font-size: 0.7rem;
}
.ch-lasta{
	width:6.5rem;
	display: inline-block;

}
.ch-lasta span{
	border: 0.05rem solid #c03c30;
    color: #fcebcd;
    display: inline-block;
    margin-top: 0.6rem;
    height: 1.41rem;
    line-height: 1.3rem;
    font-size: 0.7rem;
    background-color: #e45044;
    text-align: center;
    border-radius: 5px;
    width:6.5rem;
}
body{
	height:100%;
	background-color: #fcebcd;
	overflow: hidden;
}

.ch-endup{
	width:100%;
	height:2.5rem;
	background-color:#eee; 
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