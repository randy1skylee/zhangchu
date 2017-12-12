<template>
	<div id="shouhuodz">
		<!-- 头部 -->
		<div class="shB_header">
			<router-link to="/myself" class="shB_headA1"><span></span></router-link>
			<p class="sh_ell">收货地址</p>
		</div>
		<div class="shA_heaDown"></div>
		<router-link to="/addadress">
		<div class="shA_bottom">
			<input type="button" name="" value="添加新地址">
		</div>
		</router-link>
	</div>
</template>

<script>
	
</script>
<style scoped>
/*.....头部......*/
#shA_box{
	width:100%;
}
.shB_header{
	width:100%;
	height:2.2rem;
	line-height:2.2rem;
	position:fixed;
	top:0;
	left:0;
	right:0;
	margin:0 auto;
	border-bottom:1px solid #f2f2f2;
	z-index:2;
	background:#fff;
	font-size:.8rem;
	color:#333;
	text-align:center;
	min-width:320px;
	max-width:640px;
}
.shB_headA1,.shB_headA2{
	display:block;
	width:1.6rem;
	height:2.2rem;
	line-height:2.1rem;
	text-align:center;
}
.shB_headA1{
	position:absolute;
	top:0;
	left:0;
}
.shB_headA1 span{
	display:inline-block;
	width:1.4rem;
	height:1.4rem;
	background:url("../assets/img/B_arr.png") no-repeat;
	background-size:cover;
	margin:.45rem .09rem 0 0;
}
.shB_headA2{
	position:absolute;
	right:0;
	top:0;
}
.shB_headA2 i{
	display:inline-block;
	width:1.4rem;
	height:1.4rem;
	background:url("../assets/img/menu.png") no-repeat;
	background-size:cover;
	margin-top:.45rem;
}
.shB_header p{
	width:75%;
	margin:0 auto;
}
/*......底部....*/
.shA_bottom{
	height:3.2rem;
	line-height:3.2rem;
	position:fixed;
	bottom:0;
	left:0;
	border-top:1px solid #ececec;
	width:100%;
	background:#fff;
	text-align:center;
	padding:0 2rem;
}
.shA_bottom input{
	width:100%;
	font-size:.7rem;
	font-family:"microsoft YaHei", sans-serif;
	color:#ff8f5c;
	border:1px solid #ff8f5c;
	height:1.6rem;
	line-height:1.5rem;
	background:transparent;
	border-radius:.2rem;
}
</style>