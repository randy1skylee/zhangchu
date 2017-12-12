<template>
	<div id="hongbaoguize">
		<div class="ch-mfood hongbao">
	    	<div class="ch-mfood0 hongbao0">
	    		<div class="ch-mfood1 hongbao1">
	    			<router-link to="/hongbao">
	    				<i></i>
	    			</router-link>
	    		</div>
	    		<div class="ch-mfood2 hongbao2">
	    			<ul>
	    				<li class="ch-lizero"><a href="#">新春百万红包使用规则</a></li>
	    			</ul>
	    		</div>
	    	</div>
	    </div>
	    	<div class="ch-redimg1">
	    		<img src="../assets/img/myredbag/1.png">
	    	</div>
	    	<div class="ch-redimg2">
	    		<img src="../assets/img/myredbag/bg.png">
	    	</div>
	    <div class="ch-redbagrules1">
	    	<div class="ch-redone">
	    		<span class="ch-redonespan">有红包的宝箱在哪里？</span>
	    		<div class="ch-reddiv">
	    			<p>1、活动期间进入掌厨任意页面均有机会获得宝箱。</p>
	    			<p>2、点击宝箱开启，领取新春好运红包，红包金额随机，看您运气咯！</p>
	    			<p>3、每天不限次数开宝箱，多开宝箱，分分钟中奖，多拿红包！</p>
	    		</div>
	    	</div>

	    	<div class="ch-redone">
	    		<span class="ch-redonespan">红包怎么用？</span>
	    		<div class="ch-reddiv">
	    			<p>1、红包全部自动存入“我的”→“我的红包”中，点击“红包兑换”即可兑换自己心仪的礼品；</p>
	    			<p>2、奖品与红包等值交换，红包不足不予兑换，剩余红包存储在“我的红包”账户中；</p>
	    			<p>3、单个红包不可拆分使用，不设找零。</p>
	    		</div>
	    	</div>

	    	<div class="ch-redone">
	    		<span class="ch-redonespan">活动时间</span>
	    		<div class="ch-reddiv">
	    			<p>2016-1-29至2016-2-22；</p>
	    			<p>兑换奖品由掌厨及合作伙伴提供，与苹果官方无关；</p>
	    			<p>本活动最终解释权归掌厨所有。</p>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>

<script>
	export default {
		
	}
</script>
<style scoped>

.ch-mfood{
	background-color:#fff;
    height: 2.2rem;
    line-height: 2.2rem;
    position: fixed;
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
	width:8.6rem;
	margin:0 auto;
}
.ch-mfood2 ul li{
	float: left;
	width:8.6rem;
	height:2.15rem;
	margin:0 0.3rem;
	line-height: 2.15rem;
	text-align: center;
}
.ch-mfood2 ul li a{
	color:#333;
	font-size: 0.8rem;
}
body {
    background-color: #e35043;
    height: 100%;
}
.ch-redbagrules1{
	width:100%;
	margin-top: 3rem;
	position: relative;
	z-index: 4;
}
.ch-redonespan{
	color: #cd3b34;
    display: inline-block;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.7rem;
    background-color: #f8c02b;
    text-align: center;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
}
.ch-reddiv p{
	font-size: 0.65rem;
    line-height: 1.2rem;
    color: #fff;
}
.ch-reddiv{
	padding:0 1.5rem;
}
.ch-redone{
	margin-bottom: 0.5rem;
}
.ch-redimg1 img{
   width:100%;
   height:100%;
}
.ch-redimg1{
	position: fixed;
	left: 0;
	top:0;
	width:100%;
	z-index: 2;
}
.ch-redimg2{
	background-color:#e35043;
	width:100%;
	position: fixed;
	left: 0;
	bottom:0;
	z-index: 2;
}
.ch-redimg2 img{
   width:100%;
   height:100%;
}
</style>